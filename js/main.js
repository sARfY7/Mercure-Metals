$(function() {
  $(".pager-item").hover(
    function() {
      // over
      let index = $(this).index();
      console.log($(".slide-item").eq(index));
      $(".slide-item")
        .eq(index)
        .addClass("show");
    },
    function() {
      // out
      let index = $(this).index();
      $(".slide-item")
        .eq(index)
        .removeClass("show");
    }
  );

  $(".nav-link").click(function() {
    $(".nav-link")
      .not(this)
      .children(".line")
      .removeClass("selected-line");
    $(".nav-link")
      .not(this)
      .siblings()
      .removeClass("expanded");
    $(this)
      .children(".line")
      .toggleClass("selected-line");
    $(this)
      .siblings()
      .toggleClass("expanded");
  });
});
