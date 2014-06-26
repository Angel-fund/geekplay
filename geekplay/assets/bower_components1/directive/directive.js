define(function (require, exports, module) {

    module.exports = function(app){
      console.log(app);
    // angular.module('jsGen.directives', ['angularFileUpload']).
      app.register.directive('myCurrentTime', function($timeout, dateFilter) {

        function link(scope, element, attrs) {
          var format,
              timeoutId;

          function updateTime() {
            element.text(dateFilter(new Date(), format));
          }

          scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
          });

          function scheduleUpdate() {
            // save the timeoutId for canceling
            timeoutId = $timeout(function() {
              updateTime(); // update DOM
              scheduleUpdate(); // schedule the next update
            }, 1000);
          }

          element.on('$destroy', function() {
            $timeout.cancel(timeoutId);
          });

          // start the UI update process.
          scheduleUpdate();
        }

        return {
          link: link
        };
      })
    }
})