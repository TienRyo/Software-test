function v() {
    var t = new [1,2,3];
    for (var i = 0 ; i < t.length; i++) {
        console.log(t[i]);
    }
}

var day = "Saturday";
switch (day) {
    case "Friday":
        console.log("Thanks God it's Friday");
        break;
    case "Saturday":
        console.log("Thứ 7 máu chảy về tim");
        break;
    case "Sunday":
        console.log("Ngủ thôi!");
        break;
}
x = 5;
if (x < 0) {
    console.log("x là số âm");
} else if (x > 0) {
    console.log("x là số dương");
} else {
    console.log("x bằng không");
}
function foo ()
{
    console.log("foo");
}

function bar ( )
{
    console.log("bar");
    foo();
}

function baz ()
{
    console.log("baz");
}
bar();
baz();
setTimeout(function () {
    console.log("Test setTimeout");
}, 1000);

for (var i = 0; i < 10000; i++) {
    console.log("Test For",i);
}
function createPassword(callback) {
    return callback('freetuts.net');
}

var password = createPassword(function (secret_key) {
    return secret_key;
});
console.log(password);

var domainInfo = {
    name : 'freetuts.net',
    setName : function(name){
        this.name = name;
    }
};


function test(callback, callbackObject){
    var name = "Nguyễn Văn Cường";
    callback.apply(callbackObject, [name]);
}


test(domainInfo.setName, domainInfo);


//console.log(domainInfo.name);
var newOne = () => {
    console.log("Hello World..!");
}
newOne();