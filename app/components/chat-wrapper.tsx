"use client"

import { useState } from "react";
import ChatFloat from "./chat-float";

export default function ChatWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>

        <ChatFloat onClick={() => setIsChatOpen((prev) => !prev)} />

      {isChatOpen && (
        <iframe
          src="http://localhost:3000"
          title="chatbot test"
          className="w-[374px] h-[572px] p-0 my-2.5 mx-5 fixed bottom-0 right-0 overflow-visible opacity-100 border-none z-[999998] rounded-xl"
        />
      )}
    </>
  );
}
