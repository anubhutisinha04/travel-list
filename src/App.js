import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItem] = useState([]);

  function handleItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function onClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to clear out the whole list ?"
    );
    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onPackedItem={handleToggle}
        onClearAll={onClearAll}
      />
      <Stats items={items} />
    </div>
  );
}
