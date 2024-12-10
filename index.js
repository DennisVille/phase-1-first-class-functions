function receivesAFunction(fn=()=>console.log("Hello!")){
    fn();
}
function returnsANamedFunction(){
    function namedFn(){
        console.log("Hi");
    }
    return namedFn;
}
function returnsAnAnonymousFunction(){
    return function(){console.log("Hello again!")};
}
