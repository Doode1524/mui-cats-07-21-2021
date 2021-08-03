import React, {useEffect} from 'react'

const People = () => {

    class Person {
        static all = []
        constructor(name, height) {
            this.name = name
            this.height = height
            Person.all.push(this)
        }
    }

    const fetchPeople = async () => {
        await fetch("https://swapi.dev/api/people/")
        .then(resp => resp.json())
        .then(data => {
            data.results.forEach(person => {
                createPerson(person)   
            })
        })
    }

    const createPerson = (person) => {
        new Person(person.name, person.height)
    }
    
    useEffect(async () => {
        await fetchPeople()
    }, [])
    
    return (
        <div>
            <h1>People:</h1>
        </div>
    )
}

export default People
