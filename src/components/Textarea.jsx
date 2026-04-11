export default function Textarea({ value, onChange, option2 }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="textarea"
      placeholder="Type your text here..."
      autoFocus
      cols={40}
      rows={10}
      maxLength={option2 ? 300 : undefined}
    />
  );
}
