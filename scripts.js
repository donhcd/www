$(document).ready(function() {
  var $h1 = $('h1'),
      $about = $('#about'),
      $portfolio = $('#portfolio'),
      $resume = $('#resume'),
      $aboutPage = $('#about-page'),
      $portfolioPage = $('#portfolio-page'),
      $resumePage = $('#resume-page'),
      clicked = false,
      $currentPage = $('#home-page'),
      changeHeader = function(completionListener) {
        $h1.animate({
          'font-size': 0
        }, 750, function() {
          $h1.html('Donald Huang');
          $h1.animate({
            'font-size': 24
          }, 750, completionListener);
        });
      },
      changeText = function($newPage, completionListener) {
        $currentPage.fadeOut(250, function() {
          $currentPage = $newPage;
          $newPage.fadeIn(250, completionListener);
        });
      },
      getCurrentPageButtonSelector = function() {
        return $('#'+$currentPage.data('buttonId'));
      },
      getOnClickListener = function($newPage) {
        return function onClickListener() {
          var completionListener = function() {
            getCurrentPageButtonSelector().addClass('selected');
          };
          getCurrentPageButtonSelector().removeClass('selected');
          if (clicked) {
            changeText($newPage, completionListener);
          } else {
            changeHeader(function() {
              changeText($newPage, completionListener);
            });
            clicked = true;
          }
        };
      };
  $about.on('click', getOnClickListener($aboutPage));
  $portfolio.on('click', getOnClickListener($portfolioPage));
  $resume.on('click', getOnClickListener($resumePage));
});
