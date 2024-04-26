"use client";

import { ReactNode } from "react";
import { ChatbotProvider } from "@/context/ChatBoxContent"

export function Providers({ children }: { children: ReactNode }) {
    return <ChatbotProvider>{children}</ChatbotProvider>;
}