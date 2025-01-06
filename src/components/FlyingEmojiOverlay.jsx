import React, { useEffect, useRef, useCallback } from "react";
import { usePubSub } from "@videosdk.live/react-sdk"; // Ensure this is the correct import for your pub/sub system

const EMOJI_MAP = {
  confetti: "🎉",
  clap: "👏",
};

const FlyingEmojisOverlay = () => {
  const overlayRef = useRef();
  const pubsubData = usePubSub("REACTION", {
    onMessageReceived: ({ message }) => {
      handleReceiveFlyingEmoji(message);
    },
  });
  
  const pubsubDataRef = useRef(pubsubData);

  // Update the ref whenever pubsubData changes
  useEffect(() => {
    pubsubDataRef.current = pubsubData;
  }, [pubsubData]);

  // Handler to display the emoji and start its animations
  const handleDisplayFlyingEmoji = useCallback((emoji) => {
    if (!overlayRef.current) return;

    const node = document.createElement("div");
    node.appendChild(document.createTextNode(EMOJI_MAP[emoji]));
    // Randomly choosing the animations of wiggle, rotation, and position
    node.className = Math.random() > 0.5 ? "emoji wiggle-1" : "emoji wiggle-2";
    node.style.transform = `rotate(${-30 + Math.random() * 60}deg)`;
    node.style.left = `${Math.random() * 100}%`;
    overlayRef.current.appendChild(node);

    node.addEventListener("animationend", () => {
      handleRemoveFlyingEmoji(node);
    });
  }, []);

  // Handler to remove the flying emoji once animation is completed
  const handleRemoveFlyingEmoji = useCallback((node) => {
    if (!overlayRef.current) return;
    overlayRef.current.removeChild(node);
  }, []);

  // Listen to window events to show local user emojis and send the emoji to all participants on the call
  useEffect(() => {
    function handleSendFlyingEmoji(e) {
      const { emoji } = e.detail;
      if (emoji) {
        pubsubDataRef.current.publish(emoji);
      }
    }

    window.addEventListener("reaction_added", handleSendFlyingEmoji);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("reaction_added", handleSendFlyingEmoji);
      overlayRef.current?.childNodes.forEach((n) =>
        n.removeEventListener("animationend", handleRemoveFlyingEmoji)
      );
    };
  }, [handleRemoveFlyingEmoji]);

  // Showing other participants' reactions
  const handleReceiveFlyingEmoji = useCallback((message) => {
    if (!overlayRef.current) return;
    handleDisplayFlyingEmoji(message);
  }, [handleDisplayFlyingEmoji]);

  return <div className="flying-emojis" ref={overlayRef}></div>;
};

export default FlyingEmojisOverlay;
