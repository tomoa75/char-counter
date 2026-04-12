export default function Counter({ text }) {
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

  return (
    <div className="counter">
      <h2>Letter Density</h2>
      <ul className="chart">
        {sortedCounter.slice(0, 5).map(([char, count]) => (
          <li key={char}>
            {char}
            <div
              className="chartbar"
              style={{ width: `${percentage(count)}%` }}
            ></div>
            {count} {percentage(count)}%
          </li>
        ))}
      </ul>
      <button>See more ▽</button>
    </div>
  );
}
