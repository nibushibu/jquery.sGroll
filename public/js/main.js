jQuery.easing.quart = function(x, t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};

$(function() {
  var func1;
  $("a[href*=#]").click(function() {
    var $target, targetOffset;
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
      $target = $(this.hash);
      $target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        targetOffset = $target.offset().top;
        $("html,body").animate({
          scrollTop: targetOffset
        }, 200, "quart");
        return false;
      }
    }
  });
  func1 = function() {
    return console.log("callback");
  };
  return $("[data-sgroll]").sgroll();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBZCxHQUFzQixTQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEdBQUE7U0FDcEIsQ0FBQSxDQUFBLEdBQUssQ0FBQyxDQUFDLENBQUEsR0FBSSxDQUFBLEdBQUksQ0FBSixHQUFRLENBQWIsQ0FBQSxHQUFrQixDQUFsQixHQUFzQixDQUF0QixHQUEwQixDQUExQixHQUE4QixDQUEvQixDQUFMLEdBQXlDLEVBRHJCO0FBQUEsQ0FBdEIsQ0FBQTs7QUFBQSxDQUdBLENBQUUsU0FBQSxHQUFBO0FBR0EsTUFBQSxLQUFBO0FBQUEsRUFBQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsS0FBaEIsQ0FBc0IsU0FBQSxHQUFBO0FBQ3BCLFFBQUEscUJBQUE7QUFBQSxJQUFBLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFsQixDQUEwQixLQUExQixFQUFpQyxFQUFqQyxDQUFBLEtBQXdDLElBQUMsQ0FBQSxRQUFRLENBQUMsT0FBVixDQUFrQixLQUFsQixFQUF5QixFQUF6QixDQUF4QyxJQUNBLFFBQVEsQ0FBQyxRQUFULEtBQXFCLElBQUMsQ0FBQSxRQUR6QjtBQUVFLE1BQUEsT0FBQSxHQUFVLENBQUEsQ0FBRSxJQUFDLENBQUEsSUFBSCxDQUFWLENBQUE7QUFBQSxNQUNBLE9BQUEsR0FBVSxPQUFPLENBQUMsTUFBUixJQUFtQixPQUFuQixJQUE4QixDQUFBLENBQUUsUUFBQSxHQUFXLElBQUMsQ0FBQSxJQUFJLENBQUMsS0FBTixDQUFZLENBQVosQ0FBWCxHQUE0QixHQUE5QixDQUR4QyxDQUFBO0FBRUEsTUFBQSxJQUFHLE9BQU8sQ0FBQyxNQUFYO0FBQ0UsUUFBQSxZQUFBLEdBQWUsT0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLEdBQWhDLENBQUE7QUFBQSxRQUNBLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxPQUFmLENBQ0U7QUFBQSxVQUFBLFNBQUEsRUFBVyxZQUFYO1NBREYsRUFFRSxHQUZGLEVBR0UsT0FIRixDQURBLENBQUE7ZUFLQSxNQU5GO09BSkY7S0FEb0I7RUFBQSxDQUF0QixDQUFBLENBQUE7QUFBQSxFQWFBLEtBQUEsR0FBUSxTQUFBLEdBQUE7V0FDTixPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFETTtFQUFBLENBYlIsQ0FBQTtTQWdCQSxDQUFBLENBQUUsZUFBRixDQUNBLENBQUMsTUFERCxDQUFBLEVBbkJBO0FBQUEsQ0FBRixDQUhBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgRWFzaW5n44Gu6L+95YqgXG5qUXVlcnkuZWFzaW5nLnF1YXJ0ID0gKHgsIHQsIGIsIGMsIGQpIC0+XG4gIC1jICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAtIDEpICsgYlxuXG4kIC0+XG5cbiAgIyDjgqLjg7Pjgqvjg7zjgrnjgq/jg63jg7zjg6tcbiAgJChcImFbaHJlZio9I11cIikuY2xpY2sgLT5cbiAgICBpZiBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgaXMgQHBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSBhbmRcbiAgICAgICBsb2NhdGlvbi5ob3N0bmFtZSBpcyBAaG9zdG5hbWVcbiAgICAgICR0YXJnZXQgPSAkKEBoYXNoKVxuICAgICAgJHRhcmdldCA9ICR0YXJnZXQubGVuZ3RoIGFuZCAkdGFyZ2V0IG9yICQoXCJbbmFtZT1cIiArIEBoYXNoLnNsaWNlKDEpICsgXCJdXCIpXG4gICAgICBpZiAkdGFyZ2V0Lmxlbmd0aFxuICAgICAgICB0YXJnZXRPZmZzZXQgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGVcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldE9mZnNldFxuICAgICAgICAgIDIwMFxuICAgICAgICAgIFwicXVhcnRcIlxuICAgICAgICBmYWxzZVxuICAgICAgICBcbiAgZnVuYzEgPSAtPlxuICAgIGNvbnNvbGUubG9nIFwiY2FsbGJhY2tcIlxuXG4gICQgXCJbZGF0YS1zZ3JvbGxdXCJcbiAgLnNncm9sbCgpXG4iXX0=