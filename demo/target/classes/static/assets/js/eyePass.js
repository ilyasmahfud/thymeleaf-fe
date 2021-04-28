// REGISTRATION TOGGLE EYE

// INPUT PASSWORD
$(function () {
    $("#toggle_pwd1").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye");
        var type = $(this).hasClass("fa-eye") ? "text" : "password";
        $("#txtPassword").attr("type", type);
    });
});