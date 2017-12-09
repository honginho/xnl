/* function */
$(document).ready(function() {
  var count = 1;
  
  $("#play").click(function() {
    switch (count%5) {
      case 0:
        console.log("000")
        count++
        break
      case 1:
        showpptStart()
        count++
        break
      case 2:
        showpptGoods()
        count++
        break
      case 3:
        showpptTarget()
        count++
        break
      case 4:
        showpptProintro()
        count++
        break
      case 5:
        count++
        break
      default:
        count++
        break
    }
  })
})

function showpptStart() {
  clearppt()
  $(".tablec").hide()
  $("#start").show()
  $("#start").css({top: "5%", left: "5%"})
  hidela("#phone")
  $(".pptContent #ppt4Start").append(ppt.ppt4Start)
  setTimeout(function() {
    $("#ppt4Start").show()
    showla(".pptContent")
  }, 1000)
}

function showpptGoods() {
  clearppt()
  $(".tablec").hide()
  $("#goods").show()
  $("#goods").css({top: "5%", left: "5%"})
  hidela("#phone")
  $(".pptContent #ppt4Goods").append(ppt.ppt4Goods)
  setTimeout(function() {
    $("#ppt4Goods").show()
    showla(".pptContent")
  }, 1000)
}

function showpptTarget() {
  clearppt()
  $(".tablec").hide()
  $("#target").show()
  $("#target").css({top: "5%", left: "5%"})
  hidela("#phone")
  $(".pptContent #ppt4Target").append(ppt.ppt4Target)
  setTimeout(function() {
    $("#ppt4Target").show()
    showla(".pptContent")
  }, 1000)
}

function showpptProintro() {
  clearppt()
  $(".tablec").hide()
  $("#prointro").show()
  $("#prointro").css({top: "5%", left: "5%"})
  showla("#phone")
  $("#phone").css({
    "position": "relative",
    "left": "-32%",
    "padding-top": "130px"
  })
}

function clearppt() {
  $(".pptContent #ppt4Start").hide().empty()
  $(".pptContent #ppt4Goods").hide().empty()
  $(".pptContent #ppt4Target").hide().empty()
  $(".pptContent #ppt4Prointro").hide().empty()
  $(".pptContent #ppt4Future").hide().empty()
  hidela(".pptContent")
}

function showla(toshow) {
  $(toshow).show().css("opacity", 1)
}

function hidela(tohide) {
  $(tohide).css("opacity", 0).hide()
}
