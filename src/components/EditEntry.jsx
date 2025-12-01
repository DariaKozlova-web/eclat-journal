import { useState } from "react";

export const EditEntry = ({ initialData, onSubmitEdit }) => {
  // Local form state, initialized with the data of the entry being edited.
  // Every form field is controlled through this state object.
  const [formData, setFormData] = useState(initialData);
  console.log(initialData);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif mb-4">Edit Entry</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Load all existing entries from localStorage.
          // This returns an array of previously saved entries.
          const entries = JSON.parse(localStorage.getItem("entries"));
          // Check if another entry already exists with the same date.
          // We compare the date of the entry currently being edited with all stored entries.
          const isDateExist = entries.find(
            (item) => item.date === formData.date
          );

          // If a different entry (i.e., with a different ID) already uses this date,
          // we prevent saving and show a warning message.
          // This ensures that two entries cannot share the same date.
          if (isDateExist && isDateExist.id !== initialData.id) {
            window.alert(
              "Entry for this date already exists. Choose another date."
            );
          } else {
            // If no duplicate date is found (or if it is the same entry being edited),
            // we proceed and return the updated data to the parent component.
            onSubmitEdit(formData);
          }
        }}
        className="space-y-6"
      >
        {/* === TITLE FIELD === */}
        <div className="form-control">
          <label className="label pb-1">
            <span className="label-text font-medium">Title</span>
          </label>
          {/* Controlled input bound to formData.title */}
          <input
            value={formData.title}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevState) => {
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
            value={formData.date}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevState) => {
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
            value={formData.imageUrl}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevState) => {
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
            value={formData.content}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevState) => {
                return { ...prevState, content: value };
              });
            }}
            name="content"
            required
            className="textarea textarea-bordered w-full h-32 rounded-xl"
            placeholder="Write your story..."
          ></textarea>
        </div>
        {/* === SAVE BUTTON === */}
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
