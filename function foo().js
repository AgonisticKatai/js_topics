function foo (a) {
  return function (b) {
    return function (c) {
      return function () {
        return a + b + c
      }
    }
  }
}
var a = foo (4)
a(5)(6)()
