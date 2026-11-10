import { GraduationCap, BookOpen, School } from "lucide-react";

export default function Education() {
  return (
    <section aria-labelledby="education-title">
      <div className="page-heading">
        <span className="page-eyebrow">ONE STEP AT A TIME</span>
        <h1 id="education-title">Education</h1>
        <p>Building a foundation today and making room for tomorrow.</p>
      </div>
      <div className="education-list">
        <article className="card education-card">
          <div className="education-heading">
            <div className="card-title"><span className="icon-tile"><GraduationCap size={22} /></span><div><h2>Information Technology</h2><p>NCF · Higher education</p></div></div>
            <span className="status-badge"><span className="status-dot" />Currently studying</span>
          </div>
          <p>Exploring programming, web development, and database management.</p>
          <div className="education-highlights">
            <h3><BookOpen size={15} />Areas of Interest</h3>
            <ul><li>Programming and problem solving</li><li>Building websites and digital experiences</li><li>Organizing and managing data</li></ul>
          </div>
        </article>
        <article className="card education-card">
          <div className="education-heading">
            <div className="card-title"><span className="icon-tile"><School size={21} /></span><div><h2>Secondary Education</h2><p>Medroso Mendoza National High School</p></div></div>
            <span className="date-label">BSIT-2A</span>
          </div>
          <p>My love for computers grew during highschool days when i first discovered the world of technology.</p>
        </article>
      </div>
      <p className="page-note"><BookOpen size={17} />The learning doesn’t stop at the classroom.</p>
    </section>
  );
}
