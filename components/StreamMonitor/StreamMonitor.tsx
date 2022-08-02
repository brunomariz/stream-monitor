import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/app/hooks";
import { defineMonitors } from "../../redux/features/monitor/monitorSlice";
import MonitorList from "../MonitorList/MonitorList";

type Props = {};

function StreamMonitor({}: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localMonitors = JSON.parse(
      localStorage.getItem("streamMonitorMonitors") || "[]"
    );
    dispatch(defineMonitors(localMonitors));
  }, []);
  return (
    <div className="bg-gray-800 h-screen w-full">
      <h1 className="text-xl text-gray-500 p-2">Stream Monitor</h1>
      <MonitorList></MonitorList>
    </div>
  );
}

export default StreamMonitor;
