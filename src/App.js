import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Dynamic Title");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Dynamic Description");
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute("content", "https://example.com/dynamic-image.jpg");
  }, []); // Empty dependency array to run the effect only once

  // Function to share on LinkedIn
  const handleLinkedInShare = () => {
    const sharedUrl = "https://share-functionality.vercel.app/";
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      sharedUrl
    )}`;
    console.log("LinkedIn Share URL:", linkedInShareUrl);
    window.open(linkedInShareUrl, "_blank");
  };

  // Function to share on WhatsApp
  const handleWhatsAppShare = () => {
    const websiteUrl = "https://s5tqkf.csb.app/"; // Replace with your actual website URL
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(websiteUrl)}`;
    console.log(shareUrl);
    window.open(shareUrl, "_blank");
  };

  return (
    <div>
      <h1>Dynamic Title</h1>
      {/* Other content */}
      <button onClick={handleLinkedInShare}>Share via LinkedIn</button>
      <button onClick={handleWhatsAppShare}>Share via WhatsApp</button>
    </div>
  );
}
