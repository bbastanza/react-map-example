import "./App.css";
import PersonRow from "./PersonRow";

function App() {
    // const people = ["Brian", "Eric", "Paul", "Jake"];
    // const numbers = [2, 5, 7, 3, 8];

    // add two properties to each person
    const people = [
        { firstName: "Paul", lastName: "Jones", age: 32 },
        { firstName: "John", lastName: "Connel", age: 22 },
        { firstName: "Jake", lastName: "Baggins", age: 45 },
        { firstName: "Nick", lastName: "Smith", age: 41 },
        { firstName: "Eric", lastName: "Gonzalez", age: 56 },
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {/* add the new th rows */}
                        <th>first name</th>
                        <th>last name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => (
                        <PersonRow somethingWeird={person} key={person.firstName} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
