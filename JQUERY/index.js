let listItem = 0

$(document).ready(function () {
    $(function () {
        $("#sortable").sortable();
    });

    $("#Createbtn").click(function () {
        const vacationDescription = $("#vacationDescription").val()
        const imgUrl = $("#imgUrl").val()
        if ($("#vacationDescription").val() === "" || $("#imgUrl").val() === "") {
            alert("enter description")
        } else {
            $("ul").append("<li id='liItem" + listItem + "'></li>")
            $("#sortable").css("width", "100%")
            $("#liItem" + listItem).addClass("ui-state-default")
            $("#liItem" + listItem).append("<span id='itemSpan" + listItem + "'></span>" + vacationDescription + "<img id='itemImg" + listItem + "' src = '' width= '50px'>")
            $("#liItem" + listItem).css({
                "height": "fit-content",
                "display": "flex",
                "justify-content": "space-between",
                "margin-top": "10px",
            })
            $("#itemSpan" + listItem).addClass("ui-icon")
            $("#itemSpan" + listItem).addClass("ui-icon-arrowthick-2-n-s")
            $("#itemImg" + listItem).attr("src", imgUrl)
            listItem = listItem + 1
            $("#vacationDescription").val("")
            $("#imgUrl").val("")
        }


    })
})

