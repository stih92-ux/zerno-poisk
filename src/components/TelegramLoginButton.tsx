"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";

interface Props {
  botName: string;
  size?: "large" | "medium" | "small";
  cornerRadius?: number;
  requestAccess?: "write";
  usePic?: boolean;
}

export default function TelegramLoginButton({
  botName,
  size = "large",
  cornerRadius = 8,
  requestAccess = "write",
  usePic = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { login } = useAuth();

  useEffect(() => {
    // Define the global callback
    (window as any).onTelegramAuth = async (user: Record<string, unknown>) => {
      const ok = await login(user);
      if (ok) {
        // Redirect to home or reload
        window.location.href = "/";
      }
    };

    // Create and insert the Telegram script
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", size);
    script.setAttribute("data-radius", String(cornerRadius));
    script.setAttribute("data-request-access", requestAccess);
    script.setAttribute("data-userpic", String(usePic));
    script.setAttribute("data-onauth", "onTelegramAuth(user)");

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    return () => {
      delete (window as any).onTelegramAuth;
    };
  }, [botName, size, cornerRadius, requestAccess, usePic, login]);

  return <div ref={containerRef} className="flex justify-center" />;
}
