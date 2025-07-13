"use client"; // This component needs to run on the client side

import { useEffect } from "react";

const scriptPaths = [
  "/components/jquery-ui-1.11.2.custom/jquery-ui.min.js",
  "/components/bootstrap-3.2.0-dist/js/bootstrap.min.js",
  "/js/editor.js",
];

export default function LegacyScriptLoader() {
  useEffect(() => {
    const loadScript = (src: string, callback: () => void) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        // If script already exists, just call the callback
        callback();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = false; // Ensure scripts load in order
      script.onload = () => {
        console.log(`Script loaded: ${src}`);
        callback();
      };
      script.onerror = (error) => {
        console.error(`Error loading script: ${src}`, error);
      };
      document.body.appendChild(script);
    };

    let loadedCount = 0;
    const loadNextScript = () => {
      if (loadedCount < scriptPaths.length) {
        loadScript(scriptPaths[loadedCount], () => {
          loadedCount++;
          loadNextScript();
        });
      }
    };

    loadNextScript();

    // Cleanup function to remove scripts if the component unmounts
    return () => {
      scriptPaths.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
}
