"use client";

import { Twitter, Facebook, Linkedin } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`
    );
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
    );
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={shareToTwitter}
        className="hover:text-webskeet-blue transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </button>
      <button
        onClick={shareToFacebook}
        className="hover:text-text-webskeet-blue transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </button>
      <button
        onClick={shareToLinkedIn}
        className="hover:text-text-webskeet-blue transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </button>
    </div>
  );
}
