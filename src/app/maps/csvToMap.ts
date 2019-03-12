export function csvToMap(csv: string) {
  return csv.split("\n").map((row, y) =>
    row.split(",").map((cell, x) => {
      var final = { visited: false, x, y };
      if (parseInt(cell)) {
        final["walkable"] = true;
      }
      if (cell > "1") {
        final["encounter"] = true;
      }
      if (cell === "8") {
        final["miniboss"] = true;
      }
      if (cell === "9") {
        final["boss"] = true;
      }
      return final;
    })
  );
}
