'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const contractRef = useRef(null);

  const copyContract = () => {
    if (contractRef.current) {
      contractRef.current.select();
      contractRef.current.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(contractRef.current.value);
      alert('Contract address copied!');
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.navLogo}>
            <Image
              src="/assets/IMG-20260113-WA0007.jpg"
              alt="$LMFAO Logo"
              width={40}
              height={40}
              className={styles.logoImg}
            />
            $LMFAO
          </div>
          <div className={styles.navLinks}>
            <a href="PASTE_TWITTER_LINK_HERE" target="_blank" rel="noopener noreferrer">
              Twitter/X
            </a>
            <a href="PASTE_DEXSCREENER_LINK_HERE" target="_blank" rel="noopener noreferrer">
              Dexscreener
            </a>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles.heroSection}>
          <Image
            src="/assets/IMG-20260113-WA0013.jpg"
            alt="$LMFAO Logo"
            width={400}
            height={400}
            className={styles.heroLogo}
            priority
          />
          <h1 className={styles.h1}>
            <span className={styles.h1Span}>LAUGHING MY FUCKING ASS OFF <br /> $LMFAO </span>
          </h1>
          <p className={styles.lead}>
            With all the bad news surrounding the world, all we can do is laugh our fucking asses off.
            Here we don&apos;t make promises, or false hope. We meme and LAUGH OUR FUCKING ASSES OFF together!
          </p>

          <div className={styles.ctaButtons}>
            <a href="PASTE_DEXSCREENER_LINK_HERE" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Buy $LMFAO Now
            </a>
            <a href="PASTE_TWITTER_LINK_HERE" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Join Community
            </a>
          </div>
        </div>

        <div className={styles.heroBox}>
          <h2>What is $LMFAO?</h2>
          <p>
            $LMFAO isn&apos;t here to fix the world. It&apos;s here to mock it.
            Born from humanity&apos;s ability to laugh in the face of the absolute stupidity and corruption of our financial and political world.
          </p>
          <p>
            We believe in the power of humor to unite people. While traditional finance crumbles, we&apos;re building a community 
            that laughs together, wins together, and makes money while having the time of our lives.
          </p>

          <h3>Get In On The Joke</h3>
          <div className={styles.contractBox}>
            <input
              ref={contractRef}
              type="text"
              defaultValue="PASTE_CONTRACT_ADDRESS_HERE"
              readOnly
            />
            <button onClick={copyContract} className={styles.copyBtn}>Copy Contract</button>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h2>Why Choose $LMFAO?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>🎭 Pure Meme Energy</h3>
              <p>No corporate BS, no fake promises. Just pure, unfiltered meme chaos and comedy.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>💎 Community Driven</h3>
              <p>Built by the people, for the people. Your voice matters in the $LMFAO ecosystem.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>🚀 Transparent Tokenomics</h3>
              <p>97% locked in liquidity. We&apos;re in this for the long laugh, not a quick exit.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>🤝 Real Utility</h3>
              <p>Stake, earn rewards, and be part of something bigger than finance.</p>
            </div>
          </div>
        </div>

        <div className={styles.tokenomics}>
          <h2>Supply Breakdown</h2>
          <p className={styles.tokenomicsDesc}>
            Transparency is the foundation of trust. Here&apos;s exactly where every coin goes.
          </p>
          <div className={styles.bar}>
            <div className={styles.liquidity}>97% Liquidity</div>
            <div className={styles.team}>3% Team</div>
          </div>
          <div className={styles.labels}>
            <span>Locked in Liquidity Pool</span>
            <span>Team & Development</span>
          </div>
        </div>

        <div className={styles.roadmapSection}>
          <h2>Our Journey</h2>
          <div className={styles.roadmapGrid}>
            <div className={styles.milestone}>
              <div className={styles.milestoneNumber}>Phase 1</div>
              <h4>Launch & Meme</h4>
              <p>Drop the funniest token on the chain. Get people laughing.</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneNumber}>Phase 2</div>
              <h4>Community Growth</h4>
              <p>Build our army of LMFAO holders across all platforms.</p>
            </div>
            <div className={styles.milestone}>
              <div className={styles.milestoneNumber}>Phase 3</div>
              <h4>Expand The Joke</h4>
              <p>Partnerships, exchanges, and endless meme potential.</p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p>© 2026 LMFAO Coin — Laugh your fucking ass off while you make money!</p>
          <p className={styles.disclaimer}>
            Always DYOR. Crypto is risky. We&apos;re just here for the laughs.
          </p>
        </div>
      </div>
    </>
  );
}
