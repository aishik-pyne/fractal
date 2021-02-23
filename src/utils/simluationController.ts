import P5 from "p5";
import LinesSimulation from "../simulation/lines";

export function simulation(r: number, n: number, maxWidth: number, maxHeight: number) {
    return (p5: P5) => {
        const linesSimulation: LinesSimulation = new LinesSimulation(r, n, p5.createVector(maxWidth / 2, maxHeight / 2), p5);

        // The sketch setup method 
        p5.setup = () => {
            // Creating and positioning the canvas
            const canvas = p5.createCanvas(maxWidth, maxHeight);
            p5.angleMode(p5.DEGREES);
            canvas.parent("app");
            p5.background("#1a1a2e")

            // setInterval(() => {
            //     linesSimulation.draw();
            //     linesSimulation.step();
            // }, 20);
        };

        // The sketch draw method
        p5.draw = () => {
            p5.background("#1a1a2e")
            linesSimulation.draw();
            linesSimulation.step();

        };
    };
}