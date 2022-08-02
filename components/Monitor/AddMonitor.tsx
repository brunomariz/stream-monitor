import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
  newMonitor,
  selectMonitors,
} from "../../redux/features/monitor/monitorSlice";

type Props = {};

function AddMonitor({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useAppDispatch();
  // const monitors = useAppSelector(selectMonitors);
  const handleSubmit = () => {
    dispatch(newMonitor({ label, url }));
    setLabel("");
    setUrl("");
    setClicked(false);
  };
  return (
    <div className="bg-gray-800 h-full w-full flex items-center justify-center">
      {!clicked ? (
        <button
          className={`h-full w-full hover:scale-110 flex items-center justify-center`}
          onClick={() => setClicked(true)}
        >
          <FaPlus size={40}></FaPlus>
        </button>
      ) : (
        <div className="text-gray-50">
          <h1 className="text-lg">Novo Monitor</h1>
          <div className="flex flex-col  flex-wrap">
            <label htmlFor="label">Label</label>
            <input
              className="bg-gray-600"
              type="text"
              name="label"
              id="label"
              onChange={(e) => setLabel(e.target.value)}
            />
            <label htmlFor="url">URL</label>
            <input
              className="bg-gray-600"
              type="text"
              name="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Criar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMonitor;
