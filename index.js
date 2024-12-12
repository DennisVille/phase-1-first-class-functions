function receivesAFunction(fn){
    fn();
}
function returnsANamedFunction(){
    function namedFn(){
        console.log("Hi");
    }
    return receivesAFunction;
}
function returnsAnAnonymousFunction(){
    return function(){console.log("Hello again!")};
}
