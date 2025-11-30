import { Header } from "./components/Header";
import { CardList } from "./components/CardList";
import { EmptyState } from "./components/EmptyState";
import { useEntries } from "./hooks/useEntries";
import { Footer } from "./components/Footer";

const App = () => {
  const {handelAddEntry, handelEditEntry, handelRemoveEntry, entryItems} = useEntries();
  // const [entryItems, setEntryItems] = useState(null);
  // useEffect(() => {
  //   console.log("инициализирующий юзэффект сработал");
  //   const entries = localStorage.getItem("entries");
  //   if (entries) {
  //     const entriesData = JSON.parse(entries);
  //     // eslint-disable-next-line react-hooks/set-state-in-effect
  //     setEntryItems(entriesData);
  //   } else {
  //     localStorage.setItem("entries", JSON.stringify(mockDataCards));
  //     setEntryItems(mockDataCards);
  //   }
  // }, []);

  // const handelRemoveEntry = (id) => {
  //   const filteredEntries = entryItems.filter((item) => item.id !== id);
  //   setEntryItems(filteredEntries);
  //   localStorage.setItem("entries", JSON.stringify(filteredEntries));
  // };

  // const handelEditEntry = (editableCardData) => {
  //   const newItems = [...entryItems];
  //   const currentItemIdx = newItems.findIndex(
  //     (item) => item.id === editableCardData.id
  //   );
  //   if (currentItemIdx < 0) {
  //     console.log("Card is not exist");
  //     return;
  //   }
  //   newItems.splice(currentItemIdx, 1, editableCardData);
  //   setEntryItems(newItems);
  //   localStorage.setItem("entries", JSON.stringify(newItems));
  // };

  //  const handelAddEntry = (newItem) => {
  //   const newCards = [...entryItems, newItem];
  //   setEntryItems(newCards);
  //   localStorage.setItem("entries", JSON.stringify(newCards));
  // };

  // return (
  //   <>
  //     <Header></Header>
  //     {entryItems && <CardList listData={entryItems} onRemoveBtnClick={handelRemoveEntry}><EmptyState></EmptyState></CardList>}
  //   </>
  // );

  return (
    <>
      <Header onAddEntry={handelAddEntry} />

      {entryItems === null ? (
        // Show loading or nothing while useEffect fetches data
        <div className="p-10 text-center text-neutral/60">Loading…</div>
      ) : entryItems.length === 0 ? (
        // Showing a beautiful empty state
        <EmptyState onAddEntry={handelAddEntry}/>
      ) : (
        // Showing a list of cards
        <CardList
          listData={entryItems}
          onRemoveBtnClick={handelRemoveEntry}
          onEditEntry={handelEditEntry}
        />
      )}
      <Footer/>
    </>
  );
};

export default App;
