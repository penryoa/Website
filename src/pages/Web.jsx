import React from "react";

export default function WebPage() {
  return (
    <div className="px-4">
      <h1>Website Development</h1>
      <h2>My Motivations</h2>
      <p>This is what I got my degree in! I really like front-end work, making a website with personality and functionality at the forefront. As a detail-oriented person, I really scrutinize my work until it is to my liking, and every project I take on gets my full attention.</p><br />
      <p>My ultimate goal here is for an individual or business to have an online presence that suits them, that they feel represents them well. I don't want ownership over anything; I want a project to work on that I fully hand off once complete. All I ask is to reference it on my portfolio, which gives you more traffic anyway!</p>

      <h3>Features to Implement</h3>
      <div className="p-2 m-2 rounded-3xl bg-white/40">
        <b>website portfolio</b> showing different websites I've made, different styles I can create.
      </div>
      <div className="p-2 m-2 rounded-3xl bg-white/40">
        offerings for <b>website development</b>. 
        <ul>
          <li>It's easy to make something on Wix and call it a day, as there's no real code involved and there's robust add-ons. If someone wanted lots of features in a shorter timeframe, that's something I'd offer.</li>
          <li>... But if someone just wants something simple and affordable to build an online presence, I could make a React website, get them a Cloudflare domain (with email rerouting included) and their site could be hosted there for a much smaller cost.</li>
        </ul>
      </div>
      <div className="p-2 m-2 rounded-3xl bg-white/40">
        <b>video/photo packages</b> that involve me making their website, taking photos for said website, shooting and editing reels for social media - lots of offshoots here, but the idea is to bundle things for some savings. This gives maximum customization for the client.
      </div>
    </div>
  )
};