let users = [];

$().ready( () => {
        console.log("JQuery is ready!");
        let url = "http://localhost:11743/api/users"

        $.getJSON(url)
            .then(
                (res) => {
                    console.debug(res);
                    users = res;
                    display(users); // must display here b/c you know you got data back
                 }
            )
            .fail (
                 (err) => {console.error(err); }
            );
    } );

    const display = (users) => {
        var tbody = $("#users");
        tbody.empty();
        for(let user of users) {
            let tr = $("<tr></tr>"); // <tr></td>
            let tdId = $(`<td>${user.id}</td>`); // <td>1</td>
            tr.append(tdId); //<tr><td>1</td></tr>
            let tdName = $(`<td>${user.firstname} ${user.lastname}</td>`); // <td>Jeff Workman</td>
            tr.append(tdName);
            let tdUsername = $(`<td>${user.username}</td>`);
            tr.append(tdUsername);
            let tdPhone = $(`<td>${user.phone}</td>`);
            tr.append(tdPhone);
            let tdEmail = $(`<td>${user.email}</td>`);
            tr.append(tdEmail);
            let tdReviewer = $(`<td>${(user.isReview ? "Yes" : "No")}</td>`);
            tr.append(tdReviewer); //<tr><td>1</td></tr>
            let tdAdmin = $(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`);
            tr.append(tdAdmin); //<tr><td>1</td></tr>
            let tdAction = $(`<td><a href="detail.html?id=${user.id}">Detail</a> | <a href="change.html?id=${user.id}">Edit</a></td>`);
            tr.append(tdAction);
            tbody.append(tr); //puts row into the body
            
        }
    }

