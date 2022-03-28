$().ready( () => {

    $("refresh").on("click", () => {
        refresh();
    });

    refresh();

});

const refresh = () => {    
    $.getJSON("http://localhost:11743/api/users/1")
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