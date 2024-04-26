"use client"

import { ReactNode, createContext, useContext } from "react";

const ChatbotContext = createContext<any>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
    const value = { hello: "world" };
    return (
        <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
    );
}

export const useChatbotContext = () => {
    return useContext(ChatbotContext);
};
