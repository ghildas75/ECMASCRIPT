//var people=['jennifer','marie','josee','stephanie'];
var { firstname, langue } = {
    firstname: "samir",
    lastname: "ghilas",
    langue: ['francais', 'anglais']
};
var person = {
    firstname: "samir",
    lastname: "ghilas",
    langue: ['francais', 'anglais']
};
console.log(firstname);
function afficher({ name, langue }) {
    console.log(name, lang);
}
afficher(person);
/*var [one,two]=['jennifer','marie','josee','stephanie'];
console.log(one);
console.log(two);
var [one,,,three]=['jennifer','marie','josee','stephanie'];

console.log(three);*/

/*var person={
    firstname:"samir",
    lastname:"ghilas",
    langue:['francais','anglais'],
    printl() {
        this.langue.forEach(value=>console.log(this.fullname() + "speak  " + value));


    },
   /!* printLanguages(){
       // var that=this;
        this.langue.forEach(function (value) {
console.log(this.fullname()+"parle  "+ value);
        }.bind(this));
    },*!/
    fullname(){
        return "bonsoir "+this.firstname +" "+this.lastname;
    }
    /!*fullname:function () {
      console.log(this.firstname +" "+this.lastname);
    }*!/
}
person.printl();*/

/*var listAnimaux= function (animaux) {
    console.log(...animaux);
}
var listAnimaux2=anim=>console.log(...anim);
var listAnimaux3=(anim2,toto)=>
{console.log(...anim2 , toto);

};*/
/*listAnimaux2(['aristo','chateux','cat']);
listAnimaux3(['aristo','chateux','cat'],'chat');*/
/*function listAnimaux(animaux){
    console.log(animaux);
}*/
/*function sayhello(nom) {
  console.log('bonjour ${1 + 2}. ');
}
sayhello("marie")
var list=document.getElementById("list");
for (var i=0; i<5;i++){
    var item=document.createElement("li");
    item.appendChild(document.createTextNode("element"+i));
    let j=i;
    item.onclick=function (ev) {
     console.log("click sur element"+j);
    };
list.appendChild(item);
}

function varTest() {
    var x = 31;
    if (true) {
        var x = 71;  // c'est la même variable !
        console.log(x);  // 71
    }
    console.log(x);  // 71
}

function letTest() {
    let x = 32;
    if (true) {
        let x = 71;  // c'est une variable différente
        console.log(x);  // 71
    }
    console.log(x);  // 31
}
varTest();
letTest();*/
