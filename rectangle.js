module.exports = (x,y,callback) => {
    if(x<=0 || y<=0){
        //An error object is returned with the following message and nothing is returned to the module invoking this callback function
        setTimeout(() =>
        callback(new Error("Rectangle dimensions should be greater than zero"),null),
        2000);
    }else{
        //null error but the js object is returned which has two functions as it's members
        setTimeout(() =>
        callback(null,{
            perimeter: () => (2*(x+y)),
            area: () => (x*y)
        }),
        2000);
    }
}
