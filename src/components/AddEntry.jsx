import { useState } from "react";

export const AddEntry = ({ onSubmitAdd }) => {
  const initialForm = {
    // Generate a simple unique ID for the new entry
    // eslint-disable-next-line react-hooks/purity
    id: `${Math.random()}`,
    title: "",
    date: "",
    imageUrl: "",
    content: "",
  };
  // Local component state: manages all form fields (controlled inputs)
  const [newFormData, setNewFormData] = useState(initialForm);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif mb-4">Add New Entry</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Load existing entries from localStorage
          const entries = JSON.parse(localStorage.getItem("entries"));
          // Prevent adding more than one entry for the same date
          const isDateExist = entries.find(
            (item) => item.date === newFormData.date
          );
          if (isDateExist) {
            window.alert(
              "Entry for this date already exists. Choose another date."
            );
          } else {
            // Pass completed form data up to the parent component
            onSubmitAdd(newFormData);
          }
        }}
        className="space-y-6"
      >
        {/* === TITLE FIELD (controlled input) === */}
        <div className="form-control">
          <label className="label pb-1">
            <span className="label-text font-medium">Title</span>
          </label>
          {/* Controlled input: value taken from component state */}
          <input
            value={newFormData.title}
            onChange={(e) => {
              const value = e.target.value;
              setNewFormData((prevState) => {
                return { ...prevState, title: value };
              });
            }}
            type="text"
            name="title"
            required
            placeholder="Enter a title..."
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* === DATE FIELD === */}
        <div className="form-control">
          <label className="label pb-1">
            <span className="label-text font-medium">Select date</span>
          </label>
          <input
            value={newFormData.date}
            onChange={(e) => {
              const value = e.target.value;
              setNewFormData((prevState) => {
                return { ...prevState, date: value };
              });
            }}
            type="date"
            name="date"
            required
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* === IMAGE URL FIELD === */}
        <div className="form-control">
          <label className="label pb-1">
            <span className="label-text font-medium">Image URL</span>
          </label>
          <input
            value={newFormData.imageUrl}
            onChange={(e) => {
              const value = e.target.value;
              setNewFormData((prevState) => {
                return { ...prevState, imageUrl: value };
              });
            }}
            type="url"
            name="imageUrl"
            required
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* === CONTENT TEXTAREA === */}
        <div className="form-control">
          <label className="label pb-1">
            <span className="label-text font-medium">Entry content</span>
          </label>
          <textarea
            value={newFormData.content}
            onChange={(e) => {
              const value = e.target.value;
              setNewFormData((prevState) => {
                return { ...prevState, content: value };
              });
            }}
            name="content"
            required
            className="textarea textarea-bordered w-full h-32 rounded-xl"
            placeholder="Write your story..."
          ></textarea>
        </div>
        {/* === SUBMIT BUTTON === */}
        <button
          type="submit"
          className="btn btn-accent w-full rounded-xl text-base shadow-sm"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};
