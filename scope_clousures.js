function foo (x) {
  console.log(b) //undefined
  if (x == 10) {
    var b = (x * 1)++
  }
  console.log(b) //10
  if (b == 11) {
    console.log('bar!!')
  } else {
    console.log('zed!!')//zed!!
  }
}
foo('10')

function foo (x) {
  console.log(b) //undefined
  if (x == 10) {
    var b = ++(x * 1)
  }
  console.log(b) //10
  if (b == 11) {
    console.log('bar!!')
  } else {
    console.log('zed!!')
  }
}
foo('10')
