(function (a) {
  var d = a(window);
  d.on("scroll", function () {
    var p = d.scrollTop();
    if (p < 300) {
      a(".sticky").removeClass("is-sticky");
    } else {
      a(".sticky").addClass("is-sticky");
    }
  });
  a('[data-toggle="tooltip"]').tooltip();
  var h = a(".bg-img");
  h.each(function (s, q) {
    var r = a(q),
      p = r.data("bg");
    r.css("background-image", "url(" + p + ")");
  });
  a(".mobile-menu-btn").on("click", function () {
    a("body").addClass("fix");
    a(".off-canvas-wrapper").addClass("open");
  });
  a(".btn-close-off-canvas,.off-canvas-overlay").on("click", function () {
    a("body").removeClass("fix");
    a(".off-canvas-wrapper").removeClass("open");
  });
  var b = a(".mobile-menu"),
    c = b.find(".dropdown");
  c.parent().prepend('<span class="menu-expand"><i></i></span>');
  c.slideUp();
  b.on("click", "li a, li .menu-expand", function (q) {
    var p = a(this);
    if (
      p
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      (p.attr("href") === "#" || p.hasClass("menu-expand"))
    ) {
      q.preventDefault();
      if (p.siblings("ul:visible").length) {
        p.parent("li").removeClass("active");
        p.siblings("ul").slideUp();
      } else {
        p.parent("li").addClass("active");
        p.closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        p.closest("li").siblings("li").find("ul:visible").slideUp();
        p.siblings("ul").slideDown();
      }
    }
  });
  a(".hero-slider-active").slick({
    fade: true,
    speed: 1000,
    dots: false,
    autoplay: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [{ breakpoint: 992, settings: { arrows: false, dots: true } }],
  });
  a(".product-carousel-4").slick({
    speed: 1000,
    slidesToShow: 4,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  });
  a(".product-carousel-4_2").slick({
    speed: 1000,
    slidesToShow: 4,
    rows: 2,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, arrows: false, rows: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, arrows: false, rows: 1 },
      },
    ],
  });
  a(".product-banner-carousel").slick({
    autoplay: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  a(".group-list-carousel").each(function () {
    var q = a(this);
    var p = a(this)
      .parent()
      .siblings(".section-title-append")
      .find(".slick-append");
    q.slick({
      infinite: true,
      rows: 4,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
      appendArrows: p,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    });
  });
  a(".group-list-carousel--3").slick({
    autoplay: true,
    speed: 1000,
    rows: 3,
    slidesToShow: 3,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
    ],
  });
  a(".blog-carousel-2").slick({ speed: 1000, dots: true, arrows: false });
  a(".testimonial-content-carousel").slick({
    arrows: false,
    asNavFor: ".testimonial-thumb-carousel",
  });
  a(".testimonial-thumb-carousel").slick({
    slidesToShow: 3,
    asNavFor: ".testimonial-content-carousel",
    centerMode: true,
    arrows: false,
    centerPadding: 0,
    focusOnSelect: true,
  });
  a(".blog-carousel-active").slick({
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
    ],
  });
  a(".deals-carousel-active").slick({
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    ],
  });
  a(".brand-logo-carousel").slick({
    speed: 1000,
    slidesToShow: 5,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  });
  a(".product-large-slider").slick({
    fade: true,
    arrows: false,
    asNavFor: ".pro-nav",
  });
  a(".pro-nav").slick({
    slidesToShow: 4,
    asNavFor: ".product-large-slider",
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="lnr lnr-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right"></i></button>',
    responsive: [{ breakpoint: 576, settings: { slidesToShow: 3 } }],
  });
  a("select").niceSelect();
  a(".img-zoom").zoom();
  a(".minicart-btn").on("click", function () {
    a("body").addClass("fix");
    a(".minicart-inner").addClass("show");
  });
  a(".offcanvas-close, .minicart-close,.offcanvas-overlay").on(
    "click",
    function () {
      a("body").removeClass("fix");
      a(".minicart-inner").removeClass("show");
    }
  );
  a("[data-countdown]").each(function () {
    var p = a(this),
      q = a(this).data("countdown");
    p.countdown(q, function (r) {
      p.html(
        r.strftime(
          '<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'
        )
      );
    });
  });
  a(".pro-qty").prepend('<span class="dec qtybtn">-</span>');
  a(".pro-qty").append('<span class="inc qtybtn">+</span>');
  a(".qtybtn").on("click", function () {
    var p = a(this);
    var r = p.parent().find("input").val();
    if (p.hasClass("inc")) {
      var q = parseFloat(r) + 1;
    } else {
      if (r > 0) {
        var q = parseFloat(r) - 1;
      } else {
        q = 0;
      }
    }
    p.parent().find("input").val(q);
  });
  a(".product-view-mode a").on("click", function (p) {
    p.preventDefault();
    var q = a(".shop-product-wrap");
    var r = a(this).data("target");
    a(".product-view-mode a").removeClass("active");
    a(this).addClass("active");
    q.removeClass("grid-view list-view").addClass(r);
  });
  var m = a(".price-range"),
    g = a("#amount"),
    k = m.data("min"),
    j = m.data("max");
  m.slider({
    range: true,
    min: k,
    max: j,
    values: [k, j],
    slide: function (p, q) {
      g.val("$" + q.values[0] + " - $" + q.values[1]);
    },
  });
  g.val(" $" + m.slider("values", 0) + " - $" + m.slider("values", 1));
  a("#create_pwd").on("change", function () {
    a(".account-create").slideToggle("100");
  });
  a("#ship_to_different").on("change", function () {
    a(".ship-to-different").slideToggle("100");
  });
  a('input[name="paymentmethod"]').on("click", function () {
    var p = a(this).attr("value");
    a(".payment-method-details").slideUp();
    a('[data-method="' + p + '"]').slideDown();
  });
  a(window).on("scroll", function () {
    if (a(this).scrollTop() > 600) {
      a(".scroll-top").removeClass("not-visible");
    } else {
      a(".scroll-top").addClass("not-visible");
    }
  });
  a(".scroll-top").on("click", function (p) {
    a("html,body").animate({ scrollTop: 0 }, 1000);
  });
  a(".search-trigger").on("click", function () {
    a(".header-search-box").toggleClass("search-box-open");
  });
  a("#mc-form").ajaxChimp({
    language: "en",
    callback: i,
    url: "https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef",
  });
  function i(p) {
    if (p.result === "success") {
      a(".mailchimp-success")
        .html("" + p.msg)
        .fadeIn(900);
      a(".mailchimp-error").fadeOut(400);
    } else {
      if (p.result === "error") {
        a(".mailchimp-error")
          .html("" + p.msg)
          .fadeIn(900);
      }
    }
  }
  var f = a("#instafeed"),
    l =
      '<div class="instagram-item"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a><div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>{{likes}}</span><span class="totalcomments"><i class="fa fa-comments"></i>{{comments}}</span></div></div>';
  if (f.length) {
    var o = f.attr("data-userid"),
      e = f.attr("data-accesstoken"),
      n = new Instafeed({
        get: "user",
        userId: o,
        accessToken: e,
        resolution: "standard_resolution",
        template: l,
        sortBy: "least-recent",
        limit: 15,
        links: false,
      });
    n.run();
  }
  a(window).on("load", function () {
    var p = a(".instagram-carousel");
    p.imagesLoaded(function () {
      p.slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        responsive: [
          { breakpoint: 480, settings: { slidesToShow: 2 } },
          { breakpoint: 767, settings: { slidesToShow: 3 } },
          { breakpoint: 991, settings: { slidesToShow: 4 } },
        ],
      });
    });
  });
})(jQuery);
