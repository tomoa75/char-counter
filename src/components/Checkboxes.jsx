export default function Checkboxes({
  option1,
  setOption1,
  option2,
  setOption2,
}) {
  return (
    <div className="checkboxes">
      <label>
        <input
          type="checkbox"
          checked={option1}
          onChange={() => setOption1((prev) => !prev)}
        />
        Exclude Spaces
      </label>

      <label>
        <input
          type="checkbox"
          checked={option2}
          onChange={() => setOption2((prev) => !prev)}
        />
        Set Character Limit
      </label>
    </div>
  );
}
