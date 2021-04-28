import React from 'react'
import Person from './Person'
function NameList() {
    const people = [
        {
            id: 1,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },
        {
            id: 2,
            name: 'Bruce',
            age: 28,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Pesho',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = people.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}
export default NameList