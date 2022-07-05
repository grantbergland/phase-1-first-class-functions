function receivesAFunction(spy){
    spy()
}
receivesAFunction()

function returnsANamedFunction(){
    return function grant(){
    }
}
function returnsAnAnonymousFunction(){
    return function(){
    }
}