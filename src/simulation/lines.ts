import P5 from 'p5'
import { sign } from "../utils/utils";
import BaseSimulation from './basesimulation';
export default class LinesSimulation implements BaseSimulation {
    private rotation: number;
    private angle: number;
    private lineSegments: P5.Vector[];

    constructor(
        private r: number,
        private n: number,
        origin: P5.Vector,
        private p5: P5) {
        this.angle = 0;
        this.rotation = 2 * Math.PI / n;
        this.lineSegments = [];
        this.lineSegments.push(origin);
    }

    public draw(): void {
        for (let index = 1; index < this.lineSegments.length; index++) {
            const origin = this.lineSegments[index - 1];
            const end = this.lineSegments[index];
            this.p5.push();
            this.p5.stroke("white")
            this.p5.line(origin.x, origin.y, end.x, end.y);
            this.p5.pop();
        }
    }

    public step(): void {
        this.angle = this.angle + sign() * this.rotation
        const newVec: P5.Vector = this.p5.createVector(
            this.lineSegments[this.lineSegments.length - 1].x + this.r * Math.cos(this.angle),
            this.lineSegments[this.lineSegments.length - 1].y + this.r * Math.sin(this.angle)
        )
        this.lineSegments.push(newVec)
        if (this.lineSegments.length > 150) {
            this.lineSegments.splice(0, 1)
        }
    }
}