$(document).ready(function () {
  $("body").on("submit", "#checkout_form", function (e) {
    //alert("test");
    e.preventDefault();
    var amount = $("#checkout_amount").val();
    var send = "tel:*712*616340023*" + amount + "#";
    //alert(send);
    window.location.href = send;
  });
});
