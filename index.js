class MyTest {
  doIt(x) {
    this.x = x
  }
}

export function doIt(x) {
  const test  = new MyTest()
  test.doIt(x)
}