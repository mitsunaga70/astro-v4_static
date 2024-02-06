import $ from 'jquery';
// Nav Toggle
export const accordionFunc = () => {
  function initAccordion($element: JQuery) {
    var $trigger = $element.find("[data-accordion-trigger]").first(),
      $content = $element.find("[data-accordion-content]").first();

    if (!$element.hasClass("is-active")) {
      $content.hide();
    }

    $trigger.on("click", function (event) {
      event.stopPropagation();
      $content.stop().slideToggle("easeInOutQuad");
      $element.toggleClass("is-active");
    });
  }

  $("[data-accordion]").each(function () {
    initAccordion($(this));
  });
}
