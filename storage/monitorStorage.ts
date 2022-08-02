import { IMonitor } from "../redux/features/monitor/monitorSlice";

export const localStorageSaveNewMonitor = (
  monitor: IMonitor,
  localStorage: Storage
) => {
  const monitors: IMonitor[] = JSON.parse(
    localStorage.getItem("streamMonitorMonitors") || "[]"
  );
  monitors.push(monitor);
  localStorage.setItem("streamMonitorMonitors", JSON.stringify(monitors));
};

export const localStorageRemoveMonitor = (
  id: number,
  localStorage: Storage
) => {
  const monitors: IMonitor[] = JSON.parse(
    localStorage.getItem("streamMonitorMonitors") || "[]"
  );
  const newMonitors = monitors.filter((monitor) => monitor.id != id);
  localStorage.setItem("streamMonitorMonitors", JSON.stringify(newMonitors));
};
