import { BookOpen, Code2, Heart, UserRound } from "lucide-react";

const interests = ["Programming", "Web Development", "Database Management", "Information Technology"];
const values = ["Quality", "Excellence", "Service", "Truth"];

export default function About() {
  return (
    <section aria-labelledby="about-title">
      <div className="page-heading">
        <span className="page-eyebrow">A LITTLE INTRODUCTION</span>
        <h1 id="about-title">About Me</h1>
        <p>A bit about my background, passion, and the things that matter to me.</p>
      </div>
      <article className="card story-card">
        <div className="card-title"><span className="icon-tile"><UserRound size={20} /></span><h2>My Story</h2></div>
        <div className="story-copy">
          <p>I’m <strong>Rachel Fernandez</strong>, an Information Technology student at <strong>NCF</strong>. I am interested in programming, web development, and database management.</p>
          <p>I also value quality, excellence, service, and truth, which I try to apply in my studies and everyday life.</p>
        </div>
        <div className="values-row"><span><Heart size={15} />What guides me</span><div className="badges">{values.map(value => <span key={value}>{value}</span>)}</div></div>
      </article>
      <article className="card skills-card">
        <div className="card-title"><span className="icon-tile"><Code2 size={20} /></span><div><h2>Learning & Interests</h2><p>The areas I’m exploring as an IT student.</p></div></div>
        <div className="badges interest-badges">{interests.map(interest => <span key={interest}>{interest}</span>)}</div>
      </article>
      <p className="page-note"><BookOpen size={17} />Rooted in curiosity. Open to new possibilities.</p>
    </section>
  );
}
