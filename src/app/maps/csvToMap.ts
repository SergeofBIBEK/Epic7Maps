export function csvToMap(csv: string) {
  return csv.split("\n").map(row =>
    row.split(",").map(cell => {
      var final = { visited: false };
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
