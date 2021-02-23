import P5 from "p5";
import "p5/lib/addons/p5.dom";
import 'bulma/css/bulma.css';
import { simulation } from "./utils/simluationController";



// This is the main function
let x: P5 = null;
document.getElementById("runSimulationButton").addEventListener("click", runSimulation);
export function runSimulation() {
	const r: HTMLInputElement = <HTMLInputElement>document.getElementById('r-input');
	const n: HTMLInputElement = <HTMLInputElement>document.getElementById('n-input');
	const maxWidth: number = (<HTMLDivElement>document.getElementById('simulation-section')).offsetWidth
	const maxHeight: number = (<HTMLDivElement>document.getElementById('simulation-hero')).offsetHeight
	if (x) {
		x.remove();
	}

	x = new P5(simulation(parseFloat(r.value), parseFloat(n.value), maxWidth, maxHeight));
}
window.addEventListener("resize", () => {
	if (x) {
		const maxWidth: number = (<HTMLDivElement>document.getElementById('simulation-section')).offsetWidth
		const maxHeight: number = (<HTMLDivElement>document.getElementById('simulation-hero')).offsetHeight
		x.resizeCanvas(maxWidth, maxHeight, true);
	}
})