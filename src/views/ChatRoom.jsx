import React from "react";
import ChatTyping from "../components/chatroom/ChatTyping";
import Footer from "../components/common/Footer";
import ChatroomHero from "../components/chatroom/ChatroomHero";
const ChatRoom = () => {
  return (
    <div>
      <ChatroomHero />
      <ChatTyping />
      <Footer />
    </div>
  );
};

export default ChatRoom;
