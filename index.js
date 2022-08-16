const receivesAFunction = cb => cb()

const returnsANamedFunction = () => {
  let fn = function () {};
  return fn;
}

const returnsAnAnonymousFunction = () => {
  return function () {

  }
}
