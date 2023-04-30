const sessionMessage = "Session has been expired. please login again";
const activateLoadGif = () => { document.getElementById("spinner").hidden = false; }
const stopLoadGif = () => { document.getElementById("spinner").hidden = true; }
let userDate = "";

/** Upon loading the page, we bind handlers to the form,
 * the window and the buttons.*/
document.addEventListener("DOMContentLoaded", function () {

    const apiServer = apiServerHandler();

    document.getElementById('datePicker').valueAsDate = new Date();
    apiServer.getTasks();
    document.getElementById("datePicker").addEventListener("change", apiServer.getTasks)
});

//-----------------------------------------------------------------------

const apiServerHandler = (function () {

    const USER_NAME = document.getElementById("currUserName").innerText;
    const EMAIL = document.getElementById("currEmail").innerText;

    const getTasks = () => {
        document.getElementById('curr-date').innerText = document.getElementById('datePicker').value;


    }
    return{
        getTasks
    }
})



