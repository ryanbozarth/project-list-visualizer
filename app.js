$(function() {

    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/198drNvdXsVTAQ1QLTyRy8xlBmVhlrRpDaOAC2ZALzyI/pubhtml';

    function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    var projectPhase = data.
    console.log(data);
  }

  init();


}) // end doc ready
