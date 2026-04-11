import PatternOne from "../assets/pattern-character-count.svg";
import PatternTwo from "../assets/pattern-sentence-count.svg";
import PatternThree from "../assets/pattern-word-count.svg";
export default function Cards({ option1, option2, text }) {
  const numOfWords = text.match(/\b[\p{L}\p{N}']+\b/gu)?.length || 0;
  const numOfSentences = text
    .split(/[.!?]+/)
    .filter((r) => r.trim() !== "").length;
  return (
    <>
      <div className="cards">
        <div className="card1">
          <img src={PatternOne} alt="Character Count" />
          <p>
            {option1 ? text.replace(/\s/g, "").length : text.length} characters
          </p>
        </div>
        <div className="card2">
          <img src={PatternTwo} alt="Sentence Count" />
          <p>{numOfWords} words</p>
        </div>
        <div className="card3">
          <img src={PatternThree} alt="Word Count" />
          <p>{numOfSentences} sentences</p>
        </div>
      </div>
      {option2 && text.length >= 300 && (
        <p className="warning">You have reached the character limit.</p>
      )}
    </>
  );
}
