import React, { useEffect, useRef } from 'react';

function InstagramEmbed() {
  const ref = useRef();

  useEffect(() => {
    // Load Instagram script if not already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="instagram-embed"
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/DADW4DCPjvS/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style="background:#FFF; border:0; border-radius:3px; 
          box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); 
          margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
        </blockquote>`
      }}
    />
  );
}

export default InstagramEmbed;
