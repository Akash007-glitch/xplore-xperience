export default function PackagesSearch({ value, onChange, onSearch }) {
  return (
    <div className="packages-search">
      <input
        type="text"
        placeholder="Search destination or region"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
