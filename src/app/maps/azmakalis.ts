const walkable = true,
  encounter = true,
  miniboss = true,
  boss = true,
  starting = true;

export const azmakalisMap = {
  startingStamina: 70,
  map: [
    [{ walkable }, {}, {}, {}, { walkable, starting }],
    [{ walkable }, { walkable, encounter }, { walkable }, { walkable }, { walkable }],
    [{ walkable }, {}, {}, { walkable }, {}],
    [{ walkable }, {}, {}, { walkable, encounter, miniboss }, {}],
    [{ walkable, encounter, boss }, { walkable }, { walkable }, { walkable }, {}]
  ]
};
