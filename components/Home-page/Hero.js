// components/Home-page/hero.js
import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Ibrohim.jpg"
          alt="An image showing the richest man in the world"
          width={300}
          height={300}
        />
      </div>
      <h1 className={classes.heroTitle}>Hi I'm Ibrohim</h1>
      <p className={classes.heroDescription}>
        Well well well, I don't know what to write, but excited about the future.
      </p>
    </section>
  );
}

export default Hero;
