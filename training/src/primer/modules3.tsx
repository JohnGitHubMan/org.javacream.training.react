export let greeting = "Hello"
export default function saySomething(text:string){
    console.log(text, String)
}
export class Person{
    sayHello(){
        return greeting + " " + saySomething("from a person")
    }
}

