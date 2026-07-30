import React from "react";

export default function MePage() {
  return (
    <div className="px-2">
      <h1>About Me</h1>
      <div className="border-default p-4 text-justify bg-purple-400/40 dark:bg-red-700/40">
        I'm Addi, a creative occultist based in Upstate New York.<br/>I've always been drawn to highly expressive, academic, social, and witchy pursuits. Working a 9-5 as a software engineer for six years, I desperately craved meaningful, creative work. Then it hit me:
        <p className="text-center italic py-4">no literally, a truck hit me and nearly killed me.</p>
        I decided to be serious about aligning my career with how I actually function: multiple fields; sprint and project based; interest-based.
      </div>

      <h3>Features to Implement</h3>
      <div className="italic text-center">
        Note: everything here is purely for my own expression.
      </div>
      <div className="p-2 m-2 rounded-3xl bg-white/40">
        <b>poetry collections</b> that are written and illustrated by yours truly.
      </div>
      <div className="p-2 m-2 rounded-3xl bg-white/40">
        <b>music</b> I've written and produced to various degrees.
      </div>
      <div className="p-2 m-2 rounded-3xl bg-white/40">
        <b>anything else I want</b>, such as photo collections, digital art I make, etc. Because it's my website and I can do what I want. (;
      </div>

    </div>
  )
};