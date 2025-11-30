import { useState, useEffect } from "react";
import { mockDataCards } from "../assets/mockData";

// Custom hook that manages all journal entries:
// loading, adding, editing and removing entries.
export const useEntries = () => {
  // Stores all entry objects
  const [entryItems, setEntryItems] = useState(null);
  // Load entries from localStorage on first render
  useEffect(() => {
    const entries = localStorage.getItem("entries");
    if (entries) {
      // If localStorage already has data, load it
      const entriesData = JSON.parse(entries);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEntryItems(entriesData);
    } else {
      // Otherwise, initialize app with mock data
      localStorage.setItem("entries", JSON.stringify(mockDataCards));
      setEntryItems(mockDataCards);
    }
  }, []);

  // Remove an entry by ID
  const handelRemoveEntry = (id) => {
    const filteredEntries = entryItems.filter((item) => item.id !== id);
    // Update state and localStorage
    setEntryItems(filteredEntries);
    localStorage.setItem("entries", JSON.stringify(filteredEntries));
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
    setEntryItems(newItems);
    localStorage.setItem("entries", JSON.stringify(newItems));
  };

  // Add a new entry to the list
  const handelAddEntry = (newItem) => {
    const newCards = [...entryItems, newItem];
    // Update state and localStorage
    setEntryItems(newCards);
    localStorage.setItem("entries", JSON.stringify(newCards));
  };

  // Expose all handlers and the entries list
  return {
    handelAddEntry,
    handelEditEntry,
    handelRemoveEntry,
    entryItems,
  };
};
