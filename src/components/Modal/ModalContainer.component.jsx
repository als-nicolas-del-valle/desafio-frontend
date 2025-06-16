import React from "react";
import { DefaultButton } from "../Buttons";

function ModalContainer({
  isOpen = false,
  closeText = "Cerrar",
  onClose,
  actionText,
  onAction,
  children,
  closeDisabled = false,
  actionDisabled = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30  backdrop-blur-lg  flex items-center justify-center w-full h-full z-50">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
        <div>{children}</div>

        <div className=" flex flex-row justify-between gap-4">
          {onClose && (
            <DefaultButton
              color="secondary"
              text={closeText}
              onClick={onClose}
              disabled={closeDisabled}
            />
          )}
          {onAction && (
            <DefaultButton
              color="primary"
              text={actionText}
              onClick={onAction}
              disabled={actionDisabled}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
