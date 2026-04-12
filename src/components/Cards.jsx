import PatternOne from "../assets/pattern-character-count.svg";
import PatternThree from "../assets/pattern-sentence-count.svg";
import PatternTwo from "../assets/pattern-word-count.svg";
export default function Cards({ option1, option2, text }) {
  const numOfWords = text.match(/\b[\p{L}\p{N}']+\b/gu)?.length || 0;
  const numOfSentences = text
    .split(/[.!?]+/)
    .filter((r) => r.trim() !== "").length;
  return (
    <>
      <div className="cards">
        <div className="card1">
          <div className="datas">
            <h1>{option1 ? text.replace(/\s/g, "").length : text.length}</h1>{" "}
            <p>Total Characters</p>
          </div>
          <img className="card-img" src={PatternOne} alt="Character Count" />
        </div>
        <div className="card2">
          <div className="datas">
            <h1>{numOfWords}</h1>
            <p>Word Count</p>
          </div>
          <img className="card-img" src={PatternTwo} alt="Word Count" />
        </div>
        <div className="card3">
          <div className="datas">
            <h1>{numOfSentences}</h1>
            <p>Sentence Count</p>
          </div>
          <img className="card-img" src={PatternThree} alt="Sentence Count" />
        </div>
      </div>
      {option2 && text.length >= 300 && (
        <p className="warning">You have reached the character limit.</p>
      )}
    </>
  );
}
