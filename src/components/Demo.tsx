import React from "react";
import { H2 } from "./Text/Heading";

function Demo() {
  return (
    <section id="demo">
      <H2>CTT Demo Video</H2>
      <div className="video-container flex justify-center">
        <iframe
          width="460"
          height="615"
          src="https://www.youtube.com/embed/Q6qixIRf5lY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Demo;
