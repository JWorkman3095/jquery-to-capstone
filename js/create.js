$().ready(() =>{

    $("#save").on("click", () => {
        create();
    })
});

const create = (user) => {
    let user1 = {
        id: 0,
        username: $("#iUsername").val(),
        password: "train@MAX",
        firstname: $("#iFirstname").val(),
        lastname: $("#iLastname").val(),
        phone: $("#iPhone").val(),
        email: $("#iEmail").val(),
        isReview: $("#iReviewer").prop("checked"),
        isAdmin: $("#iAdmin").prop("checked")
    }
    console.debug(user1);
    $.ajax({
        url: "http://localhost:11743/api/users",
        method: "POST",
        data: JSON.stringify(user1),
        contentType: "application/json"
    })
        .then((res) => {
            console.debug(res);
        })
        .fail((err) => {
            console.error(err);
        });
}