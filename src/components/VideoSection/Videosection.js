"use client"
import React, { useRef, useEffect } from "react";
import Button from "../UI/Button";

const VideoSection = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5 // Load when 50% of the iframe is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = "https://www.youtube.com/embed/oSsfGcgzX0o";
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(iframeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="container pt-16">
        <iframe
          ref={iframeRef}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>

        <div className="flex items-center justify-center flex-col mt-10 lg:mt-14">
          <Button />
          <p className="mt-2 text-sm font-medium mb-9 text-center">
            No CC Required
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
