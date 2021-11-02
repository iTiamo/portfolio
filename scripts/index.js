function toggleDropdown() {
	var x = document.getElementById('dropdown')

	if (!x.classList.contains('hidden')) {
		x.classList.add('hidden')
	} else {
		x.classList.remove('hidden')
	}
}
