'use client';

import { useState } from 'react';

export default function ShareButtons({ url, text }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const xShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      alert('Could not copy the link.');
    }
  }

  async function handleNativeShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'More Time Has Passed',
          text,
          url
        });
      } else {
        await handleCopy();
      }
    } catch {
      // user canceled or browser blocked it
    }
  }

  return (
    <div className="share-block">
      <div className="share-title">Share this fact</div>
      <div className="button-row">
        <button type="button" className="button" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy link'}
        </button>

        <button type="button" className="button" onClick={handleNativeShare}>
          Share
        </button>

        <a
          className="button"
          href={xShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on X
        </a>

        <a
          className="button"
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Facebook
        </a>
      </div>
    </div>
  );
}