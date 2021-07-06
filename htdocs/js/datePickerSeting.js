var dateObj = new Date();
var month = dateObj.getUTCMonth(); //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear() - 18;

$('#txtDate').datepicker({
    format: "dd.mm.yyyy",
    startDate: "01.01.1900",
    language: "uk",
    endDate: `${day}.${month}.${year}`
});