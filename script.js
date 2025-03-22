

function showContact(event) {
    event.preventDefault(); // Prevent the default link behavior
    Swal.fire({
        title: "Contact me ",
        text: "+91 9847535194",
        
        confirmButtonText: "OK"
    });
}