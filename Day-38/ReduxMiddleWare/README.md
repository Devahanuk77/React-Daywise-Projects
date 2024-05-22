### function currying

function sum(a,b,c){
return a+b+c;
} a=1,b=2,c=3 -->6

function sum (a){
return function(b){
return function (c){
return a+b+c;
}
}
}
// closures.--->

let functionC= sum(1)(2)

functionC(4)//1+2+4-->7

### middle ware

client- middleware--server
