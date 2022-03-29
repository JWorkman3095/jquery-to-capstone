let user;

let parms;

$().ready(() => {
    console.debug("Ready!")

    parms = getUrlParms();
    console.debug("Parms", parms);
    display(parms.id);

    $("#save").on("click", () => {
        save();
    })
}); 

const display = (id) => {   
    $.getJSON("http://localhost:11743/api/users/" + id)
        .then((res) => {
            user = res;
            console.debug(res); // displays errors
            $("#iId").val(user.id);
            $("#iUsername").val(user.username);
            $("#iFirstname").val(user.firstname);
            $("#iLastname").val(user.lastname);
            $("#iPhone").val(user.phone);
            $("#iEmail").val(user.email);
            $("#iReviewer").prop("checked", user.isReview);
            $("#iAdmin").prop("checked", user.isAdmin);
        })
        .fail((err) => { console.error(err); });
}

const save = () => {
     let user = {
         id: +$("#iId").val(), // the "+" makes sure it returns a number 
         username: $("#iUsername").val(),
         password: "Train@MAX",
         firstname: $("#iFirstname").val(),
         lastname: $("#iLastname").val(),
         phone: $("#iPhone").val(),
         email: $("#iEmail").val(),
         isReview: $("#iReviewer").prop("checked"),
         isAdmin: $("#iAdmin").prop("checked"),
     } 
     console.debug(user); 
     $.ajax({
         url: "http://localhost:11743/api/users/" + user.id,
         method: "PUT",
         data: JSON.stringify(user),
         contentType: "application/json"
     }) 
        .then((res) => {console.log(res);
            document.location.href = "index.html";
        })   
        .fail((err) => {console.error(err); });
}