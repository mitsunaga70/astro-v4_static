import $ from 'jquery';
// Nav Toggle
export const accordionFunc = () => {
  $('[data-accordion]').each(function () {
    var $parent = $(this),
      $trigger = $parent.find('[data-accordion-trigger]'),
      $content = $parent.find('[data-accordion-content]');

    $content.hide();
    $trigger.on('click', function () {
      $content.stop().slideToggle('easeInOutQuad');
      $parent.stop().toggleClass('is-active');
      return false;
    });

    $(function () {
      if ($parent.hasClass('is-active')) {
        $content.show();
      }
    });
  });
}
