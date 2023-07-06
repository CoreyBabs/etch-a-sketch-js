function createGrid(dim) {
	let container = document.querySelector("#container");

	let [vw, vh] = getViewportSize();
	let sw = Math.floor(vw / dim);
	let sh = Math.floor(vh / dim);
	console.log(vh);
	console.log(sh);
	for (let i = 0; i < dim * dim; i++) {
		let div = document.createElement("div");
		div.classList.add("square");
		div.style.width = `${sw}px`;
		div.style.height = `${sh}px`;
		div.textContent = i;
		container.appendChild(div);
	}
}

function sizeContainer() {
	let [vw, vh] = getViewportSize();

	let container = document.getElementById("container");
	container.style.width = `${vw}px`;
	container.style.height = `${vh}px`;
}

function resetGrid() {
	let container = document.querySelector("#container");

	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
}

function getViewportSize() {
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	return [vw, vh];
}
sizeContainer();
createGrid(16);
