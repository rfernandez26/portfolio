import { Headphones, Heart, Mic, PersonStanding } from "lucide-react";

const hobbies = [
  { icon: Mic, title: "Singing", text: "Singing is one of the ways I express my feelings and emotions through music." },
  { icon: Headphones, title: "Music", text: "Discovering new artists, building playlists, and finding the perfect soundtrack for the day." },
  { icon: PersonStanding, title: "Dancing", text: "Dancing is a way of expressing myself through body movements and music." },
];

export default function Hobbies() {
  return (
    <section aria-labelledby="hobbies-title">
      <div className="page-heading">
        <span className="page-eyebrow">BEYOND THE CLASSROOM</span>
        <h1 id="hobbies-title">Hobbies & Interests</h1>
        <p>A few favorite ways to express myself, recharge, and find inspiration.</p>
      </div>
      <div className="hobby-grid">
        {hobbies.map(({ icon: Icon, title, text }, index) => (
          <article className="card hobby-card" key={title}>
            <div className="hobby-card-top"><span className="icon-tile"><Icon size={23} strokeWidth={1.7} /></span><span className="hobby-number">0{index + 1}</span></div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="page-note"><Heart size={17} />A little creativity makes every day more meaningful.</p>
    </section>
  );
}
