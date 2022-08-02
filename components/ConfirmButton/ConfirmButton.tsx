import React, { ReactNode, useState } from "react";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: ReactNode | ReactNode[];
  confirmMessage: string;
  confirmValue: string;
  cancelValue: string;
};

function ConfirmButton({
  onClick,
  children,
  confirmMessage,
  confirmValue,
  cancelValue,
}: Props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked ? (
        <button
          onClick={(e) => {
            setClicked(true);
          }}
        >
          {children}
        </button>
      ) : (
        <div className="bg-gray-900 px-2 py-1 rounded-lg text-sm">
          <span className="pr-2">{confirmMessage}</span>
          <button
            onClick={(e) => onClick(e)}
            className=" border-2 border-gray-600 bg-gray-600 rounded-md px-2 text-gray-900"
          >
            {confirmValue}
          </button>
          <button
            className="border-2 border-gray-700 rounded-md px-2"
            onClick={() => setClicked(false)}
          >
            {cancelValue}
          </button>
        </div>
      )}
    </>
  );
}

export default ConfirmButton;
