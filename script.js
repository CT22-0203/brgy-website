const form = document.querySelector(".form-index");

const nameInput = document.getElementById("f-name");
nameInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZñÑ\s]/g, "");
});

["chairs", "tables", "tents"].forEach(function(id) {
    const input = document.getElementById(id);

    input.addEventListener("keydown", function(event) {
        const blockedKeys = ["e", "E", "+", "-", "."];
        if (blockedKeys.includes(event.key)) {
            event.preventDefault();
        }
    });


    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "");
    });
});


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("f-name").value;
    const address = document.getElementById("address").value;

    const dateBorrowed = document.getElementById("dateBorrowed").value;
    const dateReturned = document.getElementById("dateReturned").value;

    const chairs = document.getElementById("chairs").value;
    const tables = document.getElementById("tables").value;
    const tents = document.getElementById("tents").value;

    const validIDFiles = document.getElementById("validID").files;
    const validID = validIDFiles.length;

    if (Number(chairs) === 0 && Number(tables) === 0 && Number(tents) === 0) {
        alert("Please select at least one item to borrow.");
        return;
    }

    if (new Date(dateReturned) <= new Date(dateBorrowed)) {
        alert("The return date must be later than the borrowed date.");
        return;
    }

    if (validID === 0) {
        alert("Please upload a valid ID with signature.");
        return;
    }

    const confirmSubmit = confirm(
        "Are you sure you want to submit your borrower slip?"
    );

    if (confirmSubmit) {
        window.location.href = "home.html";
    }

});
