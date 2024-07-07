document.addEventListener("DOMContentLoaded", function() {
	const featured = document.getElementById("featured");
	const thumbnails = document.getElementById("thumbnails").getElementsByTagName("img");

	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", function() {
			const newSrc = this.src.replace("-small", "-large");
			featured.src = newSrc;
			featured.alt = this.alt;
		});
	}
});