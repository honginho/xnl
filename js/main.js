/* main */
var page = [
  'pSetting',
  'pHealth',
  'pNews',
  'pGps',
  'pGames',
  'pEmergency'
];

$(document).ready(function(){
  $(document).on("click", "#pSetting", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pSetting);
  });
  $(document).on("click", "#pHealth", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pHealth);
  });
  $(document).on("click", "#pNews", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pNews);
  });
  $(document).on("click", "#pGps", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pGps);
  });
  $(document).on("click", "#pGames", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pGames);
  });
  $(document).on("click", "#pEmergency", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pEmergency);
  });

  $(document).on("click", ".footer", function () {
    $("#mainPage").empty();
    $("#mainPage").append(content.main.pIndex);
  });
  $(document).on("click", "#pill", function () {
    $("#p4Pill").append(content.sub.p4Pill);
    $("#p4Pill").show();
  });
  $(document).on("click", "#scope", function () {
    $("#p4Scope").append(content.sub.p4Scope);
    $("#p4Scope").show();
  });
  $(document).on("click", "#heartbeat", function () {
    $("#p4Heart").append(content.sub.p4Heart);
    $("#p4Heart").show();
  });
  $(document).on("click", ".backHealth", function () {
    $("#p4Pill").hide();
    $("#p4Pill").empty();
    $("#p4Scope").hide();
    $("#p4Scope").empty();
    $("#p4Heart").hide();
    $("#p4Heart").empty();
  });
/*
  $("body").keydown(function () {
    $(".aaa")[0].click();
  });
*/
});
