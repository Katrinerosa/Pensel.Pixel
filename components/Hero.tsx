import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="home-hero-title" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" /> Independent creative studio
          </p>

          <h1 id="home-hero-title" className={styles.title}>
            <span>Pensel</span>
            <span><span className={styles.ampersand}>&amp;</span> Pixel<span className={styles.period}>.</span></span>
          </h1>

          <p className={styles.description}>
            Websites and digital experiences shaped by code, illustration and storytelling.
          </p>

          <div className={styles.actions}>
            <Link href="#selected-work" className="rf-button rf-button--primary">
              Explore my work <Arrow />
            </Link>
            <Link href="/contact" className="rf-button rf-button--secondary">
              Let&apos;s talk <Arrow diagonal />
            </Link>
          </div>

          <p className={styles.note}>A curious mind. A colourful approach.</p>
        </div>

        <div className={styles.artwork}>
          <div className={styles.arch} aria-hidden="true" />
          <div className={styles.sun} aria-hidden="true" />
          <div className={styles.corner} aria-hidden="true" />
          <div className={styles.orbit} aria-hidden="true" />
          <svg className={styles.spark} viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" stroke="currentColor" strokeWidth="14" />
          </svg>
          <span className={styles.artLabel}>A little imagination goes a long way.</span>
          <Image
            src="/Wulfriclunaread.png"
            alt="Luna reading a book, nestled beside the wolf Wulfric"
            width={2974}
            height={2131}
            preload
            sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1440px) 55vw, 760px"
            className={styles.illustration}
          />
          <Link href="/readflow" className={styles.project}>
            <span className={styles.projectIcon} aria-hidden="true">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                <path d="M12 6c-2.5-2-6-2-9-1v14c3-1 6.5-1 9 1m0-14c2.5-2 6-2 9-1v14c-3-1-6.5-1-9 1V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <span className={styles.projectText}>
              <span className={styles.projectEyebrow}>Meet ReadFlow</span>
              <span className={styles.projectTitle}>Where stories come to life.</span>
            </span>
            <span className={styles.projectArrow}><Arrow diagonal /></span>
          </Link>
        </div>
      </div>

      <div className={styles.disciplines}>
        <span>Web development</span>
        <span>Creative development</span>
        <span>Illustration &amp; storytelling</span>
      </div>
    </section>
  );
}
