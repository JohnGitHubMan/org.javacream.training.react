import { stringify } from "querystring"

let greeting = "Hello"
let text = "Text"
function saySomething(text:string){
    console.log(text,String)
}
class Person{
    sayHello(){
        return greeting + " " + saySomething("from a person")
    }
}

export {saySomething, greeting, Person}