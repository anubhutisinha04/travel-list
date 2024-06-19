export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  if (!numItems) {
    return (
      <em className="stats">
        Start adding items to your list to get packing! 📋
      </em>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You are all set to fly ✈️"
          : `You have ${numItems} items on your list and have already packed
        ${numPacked} (${percent} %)`}
      </em>
    </footer>
  );
}
