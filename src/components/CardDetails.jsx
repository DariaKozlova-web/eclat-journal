export const CardDetails = ({ data, onEditBtnClick }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {/*
        === IMAGE SECTION ===
        Displays the selected entry’s image inside a rounded container.
        The image uses object-cover to maintain proper cropping.
      */}
      <div className="w-full h-56 rounded-xl overflow-hidden shadow-sm">
        <img
          className="h-full w-full object-cover"
          src={data.imageUrl}
          alt={data.title}
        />
      </div>

       {/*
        === TEXT CONTENT ===
        Contains date, title, and full entry text.
        'whitespace-pre-line' preserves line breaks in the content.
      */}
      <div className="mt-6 space-y-3 px-1">
        <p className="text-sm opacity-70">{data.date}</p>

        <h2 className="text-2xl font-serif font-semibold">{data.title}</h2>

        <p className="leading-relaxed text-base opacity-90 whitespace-pre-line">
          {data.content}
        </p>
      </div>

      {/*
        === EDIT BUTTON ===
        Clicking this triggers the parent handler, which:
        1. Closes the "View" modal
        2. Opens the "Edit Entry" modal with the same data
      */}
      <div className="mt-6">
        <button
          onClick={() => {
            onEditBtnClick();
          }}
          className="
            btn btn-sm px-6 rounded-full
            bg-primary text-base-100 border-none
            transition-all duration-300
            opacity-100 hover:opacity-90
            shadow-[0_2px_6px_var(--color-primary)]
            hover:shadow-[0_3px_10px_var(--color-primary)]
          "
        >
          Edit Entry
        </button>
      </div>
    </div>
  );
};
