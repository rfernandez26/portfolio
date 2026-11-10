import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Heart, Mail, UserRound } from "lucide-react";

const exploreLinks = [
  { href: "/about", icon: UserRound, title: "A little about me", text: "My story, interests, and the values I live by." },
  { href: "/education", icon: GraduationCap, title: "My learning journey", text: "What I’m studying and where I’m headed." },
  { href: "/hobbies", icon: Heart, title: "Outside the classroom", text: "The things that keep me inspired." },
];

export default function Home() {
  return (
    <>
      <section className="home-grid" aria-labelledby="home-title">
        <div className="home-copy">
          <span className="intro-label"><span className="status-dot" />Information Technology student</span>
          <h1 className="home-title" id="home-title">Hi, I’m Rachel<br />Fernandez<span>.</span></h1>
          <p className="home-description">
            A curious mind. A creative spirit. I’m an Information Technology
            student at NCF, exploring programming, web development, and database
            management.
          </p>
          <div className="home-actions">
            <Link className="primary-button" href="/about">About me <ArrowRight size={16} /></Link>
            <Link className="secondary-button" href="/contact"><Mail size={16} />Get in touch</Link>
          </div>
          <p className="home-note">Learning with purpose. Growing a little every day.</p>
        </div>
        <figure className="portrait-card">
          <Image
            className="profile-photo"
            src="/profile.jpg"
            alt="Rachel Fernandez smiling outdoors"
            width={1500}
            height={2000}
            sizes="(max-width: 640px) 85vw, 320px"
            preload
          />
          <figcaption><span>Rachel Fernandez</span><span>Student & lifelong learner</span></figcaption>
        </figure>
      </section>
      <section className="home-explore" aria-labelledby="explore-title">
        <div className="section-intro"><h2 id="explore-title">Welcome to my little corner.</h2><p>Get to know the person behind the screen.</p></div>
        <div className="explore-grid">
          {exploreLinks.map(({ href, icon: Icon, title, text }) => (
            <Link className="card explore-card" href={href} key={href}>
              <div className="explore-card-top"><span className="icon-tile"><Icon size={19} /></span><ArrowRight className="card-arrow" size={16} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
