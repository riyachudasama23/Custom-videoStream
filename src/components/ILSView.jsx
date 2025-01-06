import { usePubSub } from "@videosdk.live/react-sdk";
import FlyingEmojisOverlay from "./FlyingEmojiOverlay";

function ILSView() {
  const { publish } = usePubSub("REACTION");
  function sendEmoji(emoji) {
    // Dispatch custom event here so the local user can see their own emoji
    window.dispatchEvent(
      new CustomEvent("reaction_added", { detail: { emoji } })
    );
  }
  return (
    <>
    <FlyingEmojisOverlay/>
      <button
        onClick={() => {
          sendEmoji("confetti");
          publish("confetti");
        }}
      >
        Send 🎉 Reaction
      </button>

      <button
        onClick={() => {
          sendEmoji("clap");
          publish("clap");
        }}
      >
        Send 👏 Reaction
      </button>
    </>
  );
}

export default ILSView