import { Component } from "@angular/core";

// Component is a decorator here..
@Component({
    selector: 'first-app',
    //Inline template
    template: `<h2>First Component</h2>
    <p> This is my first component </p>`,
    //Inline Css
    styles:[`h2{color:red}
    p{color:navy; font-weight:bold;}`]

})

// Every Component is exposed By a class:
export class FirstComponent {

}