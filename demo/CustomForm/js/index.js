var currentCategory = 0;
$("#app_category").click(function(event) {
    $(".form-category-dropbox").css("display", "block");
    $(".detail_category").css("display", "none");
    $(".detail_category").eq(currentCategory).css("display", "block");
    event.stopPropagation();
});

$(".tab-category-item").click(function(event) {
    $(".tab-category-item").removeClass("active");
    $(this).addClass("active");
    $(".detail_category").css("display", "none");
    $(".detail_category").eq($(this).index()).css("display", "block");
    currentCategory = $(this).index();
    event.stopPropagation();
});

$(".list li").click(function() {
    $(".list li").removeClass("active");
    $(this).addClass("active");
    var name1 = $(".form-category-dropbox .active").text();
    var name2 = $(this).parent().prev().text();
    name2 = name2.substring(0, name2.length - 1);
    var app_category_value = name1 + "-" + name2 + "-" + $(this).text();
    $("#app_category").val(app_category_value);
});

$("#app_os").click(function(event) {
    $(".form-os-dropbox").css("display", "block");
    event.stopPropagation();
});

$(".form-os-dropbox li").click(function() {
    $(".form-os-dropbox li").removeClass("active");
    $("#app_os").val($(this).text());
    $(this).addClass("active");
});

$("body").click(function() {
    $(".form-category-dropbox").css("display", "none");
    $(".form-os-dropbox").css("display", "none");
});

var isAccept = true;
$(".checkbg").click(function() {
    if(isAccept) {
        $(this).removeClass("checkedbg");
        $("input[type='checkbox']").attr("checked", false);
        isAccept = false;
    } else {
        $(this).addClass("checkedbg");
        $("input[type='checkbox']").attr("checked", true);
        isAccept = true;
    }
});

$(".btn-cancle").click(function() {
    console.log($("input[type='checkbox']").is(":checked"));
});