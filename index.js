//problem set 1
function spy() {
    console.log("chai")
}

function receivesAFunction(spy) {
    return spy()
}
receivesAFunction()

//problem set 2
function returnsANamedFunction() {
    return function name() {}
}

//problem set 3
function returnsAnAnonymousFunction() {
    return function (){}
}