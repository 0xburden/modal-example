import React from "react";
import { PortalWithState } from "react-portal";

type Props = {
  trigger?: React.ReactNode;
  triggerText?: string;
  onClose?: () => void;
  onOpen?: () => void;
  children: React.ReactNode;
};

export default function Modal({
  children,
  trigger,
  triggerText,
  onClose,
  onOpen,
}: Props) {
  return (
    <PortalWithState
      node={document.querySelector("body")}
      closeOnEsc
    >
      {({ openPortal, closePortal, portal }) => (
        <>
          {trigger ? (
            React.cloneElement(trigger as React.ReactElement, {
              onClick: openPortal,
            })
          ) : (
            <button type="button" onClick={openPortal}>
              {triggerText}
            </button>
          )}
          {portal(
            <div
              role="dialog"
              aria-modal={true}
              className="fixed inset-0 backdrop-blur flex justify-center"
              id="modal-container"
              onClick={(e) =>
                (e.target as Element).id === "modal-container"
                  ? closePortal()
                  : () => {}
              }
            >
              <div className="flex flex-col justify-between mt-12 p-4 bg-white rounded-xl shadow-xl border w-full max-w-2xl min-h-[200px] max-h-[500px] overflow-y-auto">
                <div className="h-full">{children}</div>
                <div className="flex items-center justify-center mt-8">
                  <button
                    type="button"
                    onClick={closePortal}
                    className="border w-full bg-blue-500 text-white font-bold text-center px-4 py-2 rounded-xl"
                  >
                    close modal
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </PortalWithState>
  );
}
