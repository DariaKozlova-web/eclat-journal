import ReactDOM from "react-dom";

export const ModalWindow = ({ children, isOpen, onClose }) => {
   // If the modal is not open → render nothing
  if (!isOpen) return null;

    /*
    PORTAL:
    The modal is rendered into a separate DOM node (#modal)
    so it visually appears above everything else.
  */
  return ReactDOM.createPortal(
    <div
      className="
        fixed inset-0 bg-black/40
        flex items-center justify-center
        z-50
        backdrop-blur-sm
        animate-fadeIn
      "
       // Clicking the backdrop closes the modal
      onClick={onClose}
    >
      <div
        className="
          bg-base-100
          rounded-2xl
          shadow-xl
          w-[90vw]
          max-w-xl
          max-h-[90vh]
          p-8
          overflow-y-auto
          relative
          animate-scaleIn
        "
         /*
          Prevent closing when clicking inside the modal content.
          Stops the click event from bubbling to the backdrop.
        */
        onClick={(e) => e.stopPropagation()}
      >
         {/* Modal inner content (form, card details, etc.) */}
        {children}

 {/* CLOSE BUTTON (top-right corner) */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost text-primary hover:bg-primary/20 absolute right-3 top-3"
        >
          ✕
        </button>
      </div>
    </div>,
    // The portal target — <div id="modal"></div> in index.html
    document.getElementById("modal")
  );
};
