$(function() {


    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/198drNvdXsVTAQ1QLTyRy8xlBmVhlrRpDaOAC2ZALzyI/pubhtml';

    function init() {
        Tabletop.init({
            key: public_spreadsheet_url,
            callback: showInfo,
            simpleSheet: true
        })
    }

    function showInfo(data, tabletop) {
        for (var i = 0; i < data.length; i++) {
            $('.project-status').after("<p class='line-item left status-color'>" + data[i].status + "</p>")
            $('.project-team').after("<p class='line-item left'>" + data[i].team + "</p>")
            $('.project-name').after("<p class='line-item left'>" + data[i].projectname + "</p>")
            $('.project-launch').after("<p class='line-item center'>" + data[i].launch + "</p>")
            $('.project-remarks').after("<p class='line-item left'>" + data[i].notes + "</p>")
            console.log(data[i].status);
        if (data[i].status == "Red") {
            $('.status-color').css("background-color", "red");
        } else if (data[i].status == "Yellow") {
            $('.status-color').css("background-color", "yellow");
        } else {
            $('.status-color').css("background-color", "green");
        }

        }
    };

    setTimeout(function() {
        location.reload();
    }, 3000000);



    init();


}); // end doc ready
