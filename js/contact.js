$(document).ready(function() {
    $('#inputExampleEmail').focusout(function() { updateMailtoLink(); });
    $('#inputExampleSubject').change(function() { updateMailtoLink(); });
    $('#textExampleMessage').focusout(function() { updateMailtoLink(); });
    $('#cbSendYourselfCopy').change(function() { updateMailtoLink(); });
    updateMailtoLink()
});
function updateMailtoLink() {
    var target = $("#inputExampleSubject option:selected").val();
    var subject = $("#inputExampleSubject option:selected").text();
    var body = $('#textExampleMessage').val();
    var sendCopy = $('#cbSendYourselfCopy').prop('checked');
    link = target + '@locriti.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    if (sendCopy) {
        var copyEmail = $('#inputExampleEmail').val();
        link += '&cc=' + copyEmail;
    }
    $('#btnSubmit').attr('href', 'mailto:' + link);
}