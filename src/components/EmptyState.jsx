import { useState } from "react";
import { AddEntry } from "./AddEntry";
import { ModalWindow } from "./ModalWindow";

export const EmptyState = ({ onAddEntry }) => {
  // Controls whether the "Add Entry" modal is open
  const [isBtnPressed, setIsBtnPressed] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        {/* Logo with a fade-in animation shown when there are no entries */}
        <img src="/logo.png" alt="Éclat Logo" className="logo-fade w-50 mb-6" />
        {/* Main message encouraging the user to create their first journal entry */}
        <h3 className="font-serif text-2xl text-neutral font-semibold">
          Your journal is waiting
        </h3>
        <p className="text-neutral/70 mt-1">Start writing your story…</p>
        {/* Button that opens the “Add Entry” modal */}
        <button
          onClick={() => setIsBtnPressed(true)}
          className="
          btn mt-6 btn-sm px-6 rounded-full
          bg-primary text-base-100 border-none
          hover:brightness-110
        "
        >
          Add Entry
        </button>
        {/* Modal containing the AddEntry form.
            When the form submits, the new entry is passed
            to the parent component via onAddEntry. */}
        <ModalWindow
          isOpen={isBtnPressed}
          onClose={() => setIsBtnPressed(false)}
        >
          <AddEntry
            onSubmitAdd={(newFormData) => {
              // Send newly created entry to parent
              onAddEntry(newFormData);
              // Close the modal
              setIsBtnPressed(false);
            }}
          />
        </ModalWindow>
      </div>
    </>
  );
};
