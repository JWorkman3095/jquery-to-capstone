$().ready( () => {

    $.getJSON("http://localhost:11743/api/users/1")
        .then(
            (res) => {console.debug(res); } //displays in log file
        )
        .fail(
            (err) => { console.error(err); }
        )
});