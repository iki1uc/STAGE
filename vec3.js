// ------------------------------------------------------------
// vec3.js · STAGE · Durchlassachse
// 3D‑Vektor für Pipeline 3 / 6 / 9
// ------------------------------------------------------------

export class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // Grundtiefe (Pipeline 3)
    depth() {
        return (this.x + this.y + this.z) / 3;
    }

    // Fluss (Pipeline 6)
    flow() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    // Build (Pipeline 9)
    build() {
        return {
            x: this.x * 2,
            y: this.y * 2,
            z: this.z * 2
        };
    }

    // Addition
    add(v) {
        return new Vec3(
            this.x + v.x,
            this.y + v.y,
            this.z + v.z
        );
    }

    // Subtraktion
    sub(v) {
        return new Vec3(
            this.x - v.x,
            this.y - v.y,
            this.z - v.z
        );
    }

    // Skalierung
    scale(f) {
        return new Vec3(
            this.x * f,
            this.y * f,
            this.z * f
        );
    }

    // Distanz
    distance(v) {
        const dx = v.x - this.x;
        const dy = v.y - this.y;
        const dz = v.z - this.z;
        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    }

    // Klonen
    clone() {
        return new Vec3(this.x, this.y, this.z);
    }

    // Ausgabe
    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}
