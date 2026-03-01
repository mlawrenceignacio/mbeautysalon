import { useEffect, useRef, useState } from "react";
import socket from "../utils/socket.js";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

import { formatTime, formatDateLabel } from "../utils/chatFormats.js";

function ChatBox({ userId, isLoggedIn }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  const textareaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !userId) return;

    const handleConnect = () => {
      socket.emit("joinRoom", userId.toString());
    };

    socket.on("connect", handleConnect);
    socket.connect();

    const onMessage = (msg) => {
      if (msg.userId.toString() !== userId) return;

      setMessages((prev) => {
        const exists = prev.find((m) => m._id === msg._id);

        if (exists) return prev;

        return [...prev.filter((m) => !m._id.startsWith("temp-")), msg];
      });
    };

    socket.on("newMessage", onMessage);

    socket.on("messagesSeen", ({ userId: seenUserId }) => {
      if (seenUserId !== userId) return;

      setMessages((prev) =>
        prev.map((m) =>
          m.sender === "user" ? { ...m, seenByAdmin: true } : m,
        ),
      );
    });

    axios.get(`/chat/${userId}`).then((res) => {
      setMessages(res.data.chats);
    });

    return () => {
      socket.off("connect", handleConnect);
      socket.off("newMessage", onMessage);
    };
  }, [userId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto", block: "nearest" });
  }, [messages]);

  const sendMessage = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!text.trim()) return;

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    const tempId = `temp-${Date.now()}`;

    const temp = {
      _id: tempId,
      sender: "user",
      userId,
      message: text,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, temp]);
    setText("");

    try {
      await axios.post("/chat", { message: text, userId });
    } catch (err) {
      console.error("Failed to send message", err);

      setMessages((prev) => prev.filter((m) => m._id !== tempId));
    }
  };

  return (
    <div
      className="
  flex flex-col lg:flex-1 w-[80%]
  max-w-xl 
  h-[420px] sm:h-[450px] md:h-[450px] 
  border border-pink-200 rounded-2xl 
  bg-white shadow-xl overflow-hidden
"
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b bg-pink-100">
        <div className="w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
          MQ
        </div>
        <div>
          <p className="text-red-950 font-semibold leading-tight">
            MBeautyQueen_Salon
          </p>
          <p className="text-xs text-gray-500">
            Typically replies within a few minutes
          </p>
        </div>
      </div>

      {isLoggedIn ? (
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2 bg-gradient-to-b from-white to-pink-50">
          <div className="min-h-full flex flex-col justify-end gap-2">
            {messages.map((m, i) => {
              const showDate =
                i === 0 ||
                formatDateLabel(messages[i - 1].createdAt) !==
                  formatDateLabel(m.createdAt);

              return (
                <div key={m._id} className="flex flex-col">
                  {showDate && (
                    <div className="text-center text-xs text-gray-500 my-2">
                      {formatDateLabel(m.createdAt)}
                    </div>
                  )}
                  <div
                    className={`flex flex-col max-w-[75%] ${
                      m.sender === "admin" ? "self-start" : "self-end ml-auto"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-2xl shadow text-sm ${
                        m.sender === "admin"
                          ? "bg-pink-200 text-red-950 rounded-bl-none"
                          : "bg-red-900 text-white rounded-br-none"
                      }`}
                    >
                      {m.message}
                    </div>

                    <div
                      className={`text-[10px] mt-1 ${
                        m.sender === "admin"
                          ? "text-gray-500"
                          : "text-right text-gray-300"
                      }`}
                    >
                      {formatTime(m.createdAt)}
                    </div>
                  </div>
                </div>
              );
            })}

            <div ref={bottomRef}></div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center p-10 h-full">
          <p className="text-center">Sign in to start a conversation.</p>
        </div>
      )}

      <div className="flex items-end gap-2 p-3 border-t bg-white">
        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          onChange={(e) => {
            setText(e.target.value);

            const el = textareaRef.current;
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
          }}
          placeholder="Type your message..."
          className="flex-1 resize-none border border-pink-300 rounded-2xl px-4 py-2 
           max-h-28 overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-900"
        />

        <button
          onClick={sendMessage}
          className={`bg-red-900 hover:bg-red-800 text-white px-5 py-2 rounded-full font-medium shadow ${!isLoggedIn && "bg-green-700 hover:bg-green-600"}`}
        >
          {isLoggedIn ? "Send" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
