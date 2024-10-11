// Modal Popup

window.addEventListener('load', function () {
	setTimeout(function () {
		var myModal = new bootstrap.Modal(document.getElementById('modal-subscribe'));
		myModal.show();
	}, 3000); // adjust the delay time (in milliseconds) as needed
});
