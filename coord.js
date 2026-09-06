// coord.js — IN/OUT Koordinatenmodul für dein Reich

window.COORD = {

  // Achsen (b = Breite, h = Höhe, t = Tiefe)
  axes: {
    b: "Breite",
    h: "Höhe",
    t: "Tiefe"
  },

  // Stages / Etagen / Module
  stages: {},

  // ────────────────────────────────
  // IN: Stage registrieren
  // ────────────────────────────────
  register(id, x, y, z) {
    this.stages[id] = { x, y, z };
  },

  // ────────────────────────────────
  // OUT: Stage-Koordinaten abrufen
  // ────────────────────────────────
  get(id) {
    return this.stages[id] || null;
  }
};
