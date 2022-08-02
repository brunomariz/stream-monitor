import React from "react";
import MonitorList from "../MonitorList/MonitorList";

type Props = {};

function StreamMonitor({}: Props) {
  return (
    <div className="bg-gray-800 h-screen w-full">
      <h1 className="text-xl text-gray-500 p-2">Stream Monitor</h1>
      <MonitorList></MonitorList>
    </div>
  );
}

export default StreamMonitor;
