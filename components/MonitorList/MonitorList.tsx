import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { selectMonitors } from "../../redux/features/monitor/monitorSlice";
import AddMonitor from "../Monitor/AddMonitor";
import Monitor from "../Monitor/Monitor";

type Props = {};

function MonitorList({}: Props) {
  const monitors = useAppSelector(selectMonitors);
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-4 p-2 gap-2 items-center justify-center bg-gray-900 max-w-max">
        {monitors.map((monitor) => {
          return <Monitor monitor={monitor}></Monitor>;
        })}
        <AddMonitor></AddMonitor>
      </div>
    </div>
  );
}

export default MonitorList;