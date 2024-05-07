"use client";

import {
  useEffect,
  useState,
} from 'react';

import { socket } from '@/lib/socket';

export default function Home() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [transport, setTransport] = useState<string>("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.current?.off("connect", onConnect);
      socket.current?.off("disconnect", onDisconnect);
    };
  }, []);
  async function SendMessage() {
    try {
      const message = "Hehe!"; // Replace with your actual message
      await socket.emit("message", { from: "user01", message, to: "user02" }); // Event name 'message'
      console.log("Sent message:", message);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  }

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>Transport: {transport}</p>
      <button onClick={SendMessage}>Send some message?</button>
    </div>
  );
}
