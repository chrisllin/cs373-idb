$(document).ready(function(){
    var host = "http://" + window.location.host;
    var path = window.location.pathname;

    function redirect_to_search () {
        var query = $('#navbar-inputdata').val();
        window.location.href = host + "/search/" + query;
    }

    $('#navbar-inputdata').keydown (function (event) {
        if (event.keyCode == 13) {
            redirect_to_search();
            return false;
        }
        return true;
    });

    $('#icon-search-for').on('click', function () {
        redirect_to_search();
    });
});
