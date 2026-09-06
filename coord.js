// coord.js — zentrale Koordinatenmatrix für dein Reich

window.COORD = {

  // ───────────────────────────────────────────────
  // 1. Achsen (b = Breite, h = Höhe, t = Tiefe)
  // ───────────────────────────────────────────────
  axes: {
    b: "Breite (X‑Achse)",
    h: "Höhe (Y‑Achse)",
    t: "Tiefe (Z‑Achse)"
  },

  // ───────────────────────────────────────────────
  // 2. Stages / Etagen / Module mit Koordinaten
  // ───────────────────────────────────────────────
  stages: {

    // ROOT
    "root": { x: 0, y: 0, z: 0 },

    // Stage‑Ebene
    "stage": { x: 1, y: 0, z: 0 },
    "ui":    { x: 2, y: 0, z: 0 },

    // Orbit‑Viewer (Etage 8)
    "etage-8-orbit-viewer": { x: 3, y: 8, z: 1 },

    // NC‑Module
    "NC_figur": { x: 4, y: 4, z: 1 },
    "NC_kraft": { x: 4, y: 4, z: 2 },
    "NC_space": { x: 4, y: 4, z: 3 },
    "NC_time":  { x: 4, y: 4, z: 4 },

    // VEC‑Module
    "vec3": { x: 3, y: 3, z: 0 },
    "vec9": { x: 9, y: 9, z: 0 },

    // HDF‑Achsen
    "b": { x: 1, y: 0, z: 0 },
    "h": { x: 0, y: 1, z: 0 },
    "t": { x: 0, y: 0, z: 1 }
  }
};
