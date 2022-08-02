import React from "react";
import {
  deleteMonitor,
  IMonitor,
  selectMonitors,
} from "../../redux/features/monitor/monitorSlice";
import { BiX } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import { localStorageRemoveMonitor } from "../../storage/monitorStorage";

type Props = {
  monitor: IMonitor;
};

function Monitor({ monitor }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-gray-800">
      <iframe
        className=""
        src={monitor.url}
        allowFullScreen
        allow="autoplay"
      ></iframe>
      <div className="text-gray-400 w-full text-center flex justify-between items-center relative">
        <span className="p-1">{monitor.label}</span>
        <div className="absolute right-1 top-1">
          <ConfirmButton
            confirmMessage="Remover monitor?"
            confirmValue="Sim"
            cancelValue="Não"
            onClick={() => {
              dispatch(deleteMonitor(monitor.id));
              localStorageRemoveMonitor(monitor.id, localStorage);
            }}
          >
            <div className="bg-gray-700 rounded-full">
              <BiX size={20}></BiX>
            </div>
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
