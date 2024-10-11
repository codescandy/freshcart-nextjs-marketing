// Quill editor

var editorElement = document.querySelector('#editor');
if (editorElement) {
	// Create a new Quill instance
	var quill = new Quill(editorElement, {
		modules: {
			toolbar: [
				[{ header: [1, 2, false] }],
				[{ font: [] }],
				['bold', 'italic', 'underline', 'strike'],
				[{ size: ['small', false, 'large', 'huge'] }],
				[{ list: 'ordered' }, { list: 'bullet' }],
				[{ color: [] }, { background: [] }, { align: [] }],
				['link', 'image', 'code-block', 'video'],
			],
		},
		theme: 'snow',
	});
}
