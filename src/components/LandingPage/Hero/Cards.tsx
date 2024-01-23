import Link from "@docusaurus/Link";
import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const CardWithImage: React.FC<{
  children?: React.ReactNode;
  image: string;
  href: string;
}> = ({ children, image, href }) => {
  return (
    <MotionLink
      variants={transitions.item}
      to={href}
      className="bg-black/60 hover:bg-black/20 backdrop-blur-2xl rounded-xl pl-6 pr-20 md:pl-16 md:pr-40 text-white hover:no-underline transition-all hover:text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-center gap-2 group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="group-hover:-translate-y-2 transition-transform">
        {children}
      </div>
    </MotionLink>
  );
};

export const CardsSection = () => {
  return (
    <AnimateSpawn
      className="container-10 grid grid-cols-1 md:grid-cols-2 gap-2"
      variants={transitions.container}
    >
      {/* <CardWithImage href="/docs/current/samples/hello" image="/img/home/hello-world.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">Dev Wizard</div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">
          Build a ‘Hello World’ in 5min
        </h2>
      </CardWithImage> */}

      <CardWithImage href="/multichain" image="/img/home/btc-eth.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">
          Native Multi-chain
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">
          Trustless multi-chain on ICP
        </h2>
      </CardWithImage>

      <CardWithImage
        href="https://deck.internetcomputer.org"
        image="/img/home/deck-astronaut.webp"
      >
        <div className="tw-heading-7 md:tw-heading-6 mb-2">
          Online Deck [ ICP hosted ]
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">
          Cypherspace
          <br />
          as cloud 3.0
        </h2>
      </CardWithImage>
      <CardWithImage href="/ecosystem" image="/img/home/ecosystem-card.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">Ecosystem</div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Ecosystem links</h2>
      </CardWithImage>
      <CardWithImage
        href="https://dashboard.internetcomputer.org"
        image="/img/home/dashboard.webp"
      >
        <div className="tw-heading-7 md:tw-heading-6 mb-2 whitespace-nowrap">
          dashboard.internetcomputer.org
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Live stats</h2>
      </CardWithImage>

      <CardWithImage href="/docs/current/home" image="/img/home/dev-card.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">Developer Docs</div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Start coding</h2>
      </CardWithImage>

      <CardWithImage href="/community" image="/img/home/events-card.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">ICP.Hubs</div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">
          ICP Community around the world
        </h2>
      </CardWithImage>

      {/* <CardWithImage href="/bitcoin-integration" image="/img/home/btc-icp.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">
          Native Multi-chain
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Bitcoin &lt;&gt; ICP </h2>
      </CardWithImage> */}

      {/* <CardWithImage href="/ethereum-integration" image="/img/home/eth-icp.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">
          Native Multi-chain
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Ethereum &lt;&gt; ICP </h2>
      </CardWithImage> */}
    </AnimateSpawn>
  );
};