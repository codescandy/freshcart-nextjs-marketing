// Initialize Dropzone programmatically

Dropzone.autoDiscover = false;

const myDropzone = new Dropzone("#my-dropzone", {
    url: "https://httpbin.org/post",
    maxFilesize: 5,
    acceptedFiles: "image/*",
    addRemoveLinks: true,
    autoProcessQueue: true,
});

// Add event listeners
myDropzone.on("addedfile", function (file) {
    console.log("File added: " + file.name);
});

myDropzone.on("removedfile", function (file) {
    console.log("File removed: " + file.name);
});

myDropzone.on("success", function (file, response) {
    console.log("File uploaded successfully:", response);
});
