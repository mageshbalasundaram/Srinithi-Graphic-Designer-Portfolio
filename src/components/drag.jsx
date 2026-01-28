import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const DEFAULT_WORDS = [
  "Designers",
  "Reliable",
  "Thinkers",
  "Visionaries",
  "Innovators",
  "Creators",
];


const PhysicsWords = ({ newWord }) => {
  const scene = useRef(null);
  const engine = useRef(Matter.Engine.create());
  const runner = useRef(Matter.Runner.create());
  const renderRef = useRef(null);
  const wordBodies = useRef([]);
  

  const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 85%)`; // soft pastel
};

  // Create pill body
  const createWordBody = (word, index = 0) => {
    return Matter.Bodies.rectangle(
      Math.random() * 200 + 100,
      350,
      Math.max(word.length * 14, 70),
      40,
      {
        chamfer: { radius: 20 },
        restitution: 0.6,
        render: {
          fillStyle: getRandomColor(),
        },
        label: word,
      }
    );
  };

  // Add new word dynamically
  useEffect(() => {
    if (!newWord) return;

    const clean = newWord.split("-")[0].trim();
    if (!clean) return;

    const saved = JSON.parse(localStorage.getItem("physicsWords") || "[]");

    if (saved.includes(clean)) return;

    saved.push(clean);
    localStorage.setItem("physicsWords", JSON.stringify(saved));

    const body = createWordBody(clean, saved.length);

    Matter.World.add(engine.current.world, body);
    wordBodies.current.push(body);
  }, [newWord]);

  // Initial setup
  useEffect(() => {
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;

    const render = Matter.Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    renderRef.current = render;

    // Walls
    const walls = [
      Matter.Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Matter.Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Matter.Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
      Matter.Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
    ];

    Matter.World.add(engine.current.world, walls);

    // Load words from storage
    const stored =
      JSON.parse(localStorage.getItem("physicsWords")) || DEFAULT_WORDS;

    localStorage.setItem("physicsWords", JSON.stringify(stored));

    const bodies = stored.map((w, i) => createWordBody(w, i));

    wordBodies.current = bodies;

    Matter.World.add(engine.current.world, bodies);

    // Mouse drag
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine.current, {
      mouse,
      constraint: { stiffness: 0.2 },
    });

    Matter.World.add(engine.current.world, mouseConstraint);

    // Scroll bounce
    const handleScroll = (e) => {
      engine.current.world.bodies.forEach((body) => {
        Matter.Body.applyForce(body, body.position, {
          x: 0,
          y: e.deltaY * -0.0002,
        });
      });
    };

    window.addEventListener("wheel", handleScroll);

    // Draw text
    Matter.Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";

      wordBodies.current.forEach((body) => {
        ctx.fillText(body.label, body.position.x, body.position.y);
      });
    });

    Matter.Runner.run(runner.current, engine.current);
    Matter.Render.run(render);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner.current);
      Matter.World.clear(engine.current.world);
      Matter.Engine.clear(engine.current);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        ref={scene}
        className="absolute inset-0 w-full h-full overflow-hidden"
      />
    </div>
  );
};

export default PhysicsWords;
