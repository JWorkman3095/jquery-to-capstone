let parms;

$().ready( () => {

    parms = getUrlParms();
    console.debug("Parms:", parms);

    $("refresh").on("click", () => {
        refresh();
    });

    $("#delete").on("click", () => {
        remove();
    });

    refresh();

});

const remove = () => {
    let id = parms.id;
    $.ajax({
        
        method: "DELETE",
        url: `http://localhost:11743/api/users/${id}`,
        contentType: "application/json"
    })
    .then((res) => {
        console.debug("Delete response:", res);
        document.location.href = "index.html"; //navagates to index page
    })
    .fail((err) => {
        console.error("ERROR:", err);
    });
}

const refresh = () => {  
    let id = parms.id;  
    $.getJSON(`http://localhost:11743/api/users/${id}`)
        .then((res) => {
            console.debug(res);  //displays in log file
            display(res);
        })
        .fail(
            (err) => { console.error(err); });
}

const display = (user) => {
    $("#dId").text(user.id);
    $("#dName").text(`${user.firstname} ${user.lastname}`);
    $("#dUsername").text(user.username);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(user.isReview ? "Yes" : "No");
    $("#dAdmin").text(user.isAdmin ? "Yes" : "No");
}