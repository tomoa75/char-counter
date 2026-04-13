import { useState } from "react";
export default function Counter({ text }) {
  const [limit, setLimit] = useState(true);

  const counter = {};
  for (const char of text.toUpperCase()) {
    if (
      char === " " ||
      char === "\n" ||
      char === "\t" ||
      char === "," ||
      char === "." ||
      char === "!" ||
      char === "?"
    )
      continue; // Preskacemo razmake, nove linije, tabove i interpunkcijske znakove
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }
  const totalChars = Object.values(counter).reduce(
    (sum, count) => sum + count,
    0,
  ); //metoda za zbrajanje svih ponavljanja kako bismo mogli izračunati postotak
  const sortedCounter = Object.entries(counter).sort((a, b) => b[1] - a[1]); // Pretvaramo u niz parova i sortiramo po broju ponavljanja (od najčešćih do najrjeđih)
  const percentage = (count) => ((count / totalChars) * 100).toFixed(2); // Funkcija za izračunavanje postotka i formatiranje na 2 decimalna mjesta
  const itemstoshow = limit ? sortedCounter.slice(0, 5) : sortedCounter; // Ovisno o stanju "limit", prikazujemo samo prvih 5 ili sve stavke
  return (
    <div className="counter">
      <h2>Letter Density</h2>
      <ul className="chart">
        {itemstoshow.map(([char, count]) => (
          <li key={char}>
            <div className="char">{char}</div>

            <div className="chartbar">
              <div
                className="fill-bar"
                style={{ "--percentage": `${percentage(count)}%` }}
              ></div>
            </div>
            <div className="percentage">
              {count} ({percentage(count)}%)
            </div>
          </li>
        ))}
      </ul>
      <button className="see-more" onClick={() => setLimit(!limit)}>
        {limit ? "See more ▽" : "See less △"}
      </button>
    </div>
  );
}
