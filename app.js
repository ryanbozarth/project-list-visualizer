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
                $('.project-status').append("<p class='line-item'>" + data[i].status + "</p>")
                $('.project-name').append("<p class='line-item'>" + data[i].projectname + "</p>")
                $('.project-launch').append("<p class='line-item'>" + data[i].launch + "</p>")
                $('.project-team').append("<p class='line-item'>" + data[i].team + "</p>")
                $('.project-remarks').append("<p class='line-item'>" + data[i].notes + "</p>")
             }
         }



        init();


}) // end doc ready
