import { useEffect } from "react";

export default function DiscordPage() {
  useEffect(() => {
    window.location.href = "https://discord.com/";
  }, []);

  return null;
}
