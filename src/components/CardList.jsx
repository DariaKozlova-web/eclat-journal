import { useState } from "react";
import { ModalWindow } from "./ModalWindow";
import { CardDetails } from "./CardDetails";
import { EditEntry } from "./EditEntry";

export const CardList = ({ listData, onRemoveBtnClick, onEditEntry }) => {
  // Holds data for the card currently opened in the "view" modal
  const [currentCardData, setCurrentCardData] = useState(null);
  // Holds data for the card opened in the "edit" modal
  const [currentEditableCardData, setCurrentEditableCardData] = useState(null);

  return (
    <>
      {/*
        === VIEW MODAL ===
        Displays card details.
        When Edit is clicked → closes this modal and opens the edit modal.
      */}
      <ModalWindow
        isOpen={currentCardData}
        onClose={() => setCurrentCardData(null)}
      >
        <CardDetails
          data={currentCardData}
          onEditBtnClick={() => {
            // Move currently viewed card into the "edit" modal
            setCurrentCardData((prevState) => {
              setCurrentEditableCardData(prevState);
              return null; // Close the "view" modal
            });
          }}
        />
      </ModalWindow>

      {/*
        === EDIT MODAL ===
        Shows the form for editing an entry.
      */}
      <ModalWindow
        isOpen={currentEditableCardData}
        onClose={() => setCurrentEditableCardData(null)}
      >
        <EditEntry
          initialData={currentEditableCardData}
          onSubmitEdit={(formData) => {
            setCurrentEditableCardData(null); // Close modal after saving
            onEditEntry(formData); // Send updated entry upward
          }}
        />
      </ModalWindow>

      {/*
        === CARD GRID ===
        Responsive layout:
        - 1 column mobile
        - 2 columns tablet
        - 3 columns desktop
      */}
      <ul
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          px-2 sm:px-6
          py-10
        "
      >
        {listData.map((card) => (
          <li key={card.id}>
            {/* Single Card */}
            <div
              className="
                card
                bg-base-100
                rounded-2xl
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                overflow-hidden
                border border-base-300
              "
            >
              {/* Card Image */}
              <figure className="h-56 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>

              {/* Card Content */}
              <div className="card-body px-6 py-5">
                <p className="text-sm opacity-60">{card.date}</p>
                <h2 className="card-title text-lg font-serif mb-3">
                  {card.title}
                </h2>

                {/* Buttons */}
                <div className="flex gap-3 justify-end mt-4">
                  {/* Open modal with card details */}
                  <button
                    onClick={() => setCurrentCardData(card)}
                    className= "btn btn-outline btn-sm rounded-lg text-primary border-primary/40" //"btn btn-outline btn-sm rounded-lg"
                  >
                    View
                  </button>

                  {/* Delete entry */}
                  <button
                    onClick={() => {
                      onRemoveBtnClick(card.id);
                    }}
                    className= "btn btn-sm btn-ghost text-error" //"btn btn-outline btn-sm rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
