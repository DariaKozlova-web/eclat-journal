import { useState, useEffect } from "react";
import { mockDataCards } from "../assets/mockData";

// Custom hook that manages all journal entries:
// loading, adding, editing and removing entries.
export const useEntries = () => {
  // Stores all entry objects
  const [entryItems, setEntryItems] = useState(null);

  /**
   * updateData(cards)
   * -------------------
   * A helper function that:
   * 1) Sorts all entries by date (newest → oldest)
   * 2) Saves the sorted list into localStorage
   * 3) Updates the component state (entryItems)
   *
   * This is a single centralized function used by:
   * - adding a new entry
   * - editing an entry
   * - removing an entry
   *
   * Thanks to this helper, all operations keep entries sorted
   * and always sync with localStorage in the same consistent way.
   */
  const updateData = (cards) => {
     // Create a sorted copy of cards by descending date order
    const newCards = cards.sort((a, b) => {
      const bItemMilliseconds = new Date(b.date).getTime();
      const aItemMilliseconds = new Date(a.date).getTime();
      return bItemMilliseconds - aItemMilliseconds;
    });
     // Save sorted entries to localStorage so they persist between page reloads
    localStorage.setItem("entries", JSON.stringify(newCards));
     // Update the React state to re-render components using these entries
    setEntryItems(newCards);
  };
  // Load entries from localStorage on initial render
  useEffect(() => {
    const entries = localStorage.getItem("entries");
    if (entries) {
      // If stored entries exist, parse them
      const entriesData = JSON.parse(entries);
      // Sort them immediately to ensure consistent ordering
      const newCards = entriesData.sort((a, b) => new Date(b.date).getTime()- new Date(a.date).getTime());
      console.log(newCards);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEntryItems(newCards);
    } else {
       // If this is the first time user opens the app,
      // initialize the storage with mock data
      updateData(mockDataCards);
      // Otherwise, initialize app with mock data
      // localStorage.setItem("entries", JSON.stringify(mockDataCards));
      // setEntryItems(mockDataCards);
    }
  }, []);

  // Remove an entry by ID
  const handelRemoveEntry = (id) => {
    const filteredEntries = entryItems.filter((item) => item.id !== id);
    // Update state + localStorage in one unified way
    updateData(filteredEntries);
    // setEntryItems(filteredEntries);
    // localStorage.setItem("entries", JSON.stringify(filteredEntries));
  };

  // Edit an existing entry using an updated object
  const handelEditEntry = (editableCardData) => {
    const newItems = [...entryItems];
    // Find the index of the entry that should be updated
    const currentItemIdx = newItems.findIndex(
      (item) => item.id === editableCardData.id
    );
    if (currentItemIdx < 0) {
      console.log("Card is not exist");
      return;
    }
    // Replace the old entry with the updated one
    newItems.splice(currentItemIdx, 1, editableCardData);
    // Save and apply updated list
    updateData(newItems);
    // setEntryItems(newItems);
    // localStorage.setItem("entries", JSON.stringify(newItems));
  };

  // Add a new entry to the list
  const handelAddEntry = (newItem) => {
    const newCards = [...entryItems, newItem];
    // Save and apply updated list
    updateData(newCards);
    // setEntryItems(newCards);
    // localStorage.setItem("entries", JSON.stringify(newCards));
  };

  // Expose all handlers and the entries list
  return {
    handelAddEntry,
    handelEditEntry,
    handelRemoveEntry,
    entryItems,
  };
};
