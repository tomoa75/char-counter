export default function Textarea({ value, onChange, option2 }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="textarea"
      placeholder="Type your text here..."
      autoFocus
      rows={7}
      maxLength={option2 ? 300 : undefined}
    />
  );
}
