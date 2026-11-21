import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section aria-labelledby="home-hero-title" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Pensel &amp; Pixel · Independent creative studio
          </p>

          <h1 id="home-hero-title" className={styles.title}>
            Websites for small businesses &amp; <span className={styles.highlight}>creative people.</span>
          </h1>

          <p className={styles.description}>
            I design and build responsive websites, combining frontend development, illustration and a personal approach.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="rf-button rf-button--primary">
              Discuss your website
            </Link>
            <Link href="#selected-work" className="rf-button rf-button--secondary">
              View selected work
            </Link>
          </div>

          <p className={styles.note}>Working remotely with clients and teams. From first idea to handover.</p>
        </div>

        <div className={styles.artwork}>
          <div className={styles.arch} aria-hidden="true" />
          <div className={styles.sun} aria-hidden="true" />
          <div className={styles.corner} aria-hidden="true" />
          <div className={styles.orbit} aria-hidden="true" />
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
