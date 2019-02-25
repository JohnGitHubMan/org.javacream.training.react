import React from 'react';
import {PersonClass, Person, samplePerson} from './model/People';
import {PersonComponent} from './PersonComponent';
export class PersonSampleDataComponent extends React.Component{
    attributePerson1 = new PersonClass(9, "Musterfrau", "Hanna");
    attributePerson2: Person = {personId: 19, lastname: "Muster", firstname: "Han"}

    render(){
        return (
            <div>
                <PersonComponent person={samplePerson} />
                <PersonComponent person={this.attributePerson1}/>
                <PersonComponent person={this.attributePerson2} />
            </div>

        );
    }

}