import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';

function App() {
    const [name, setName] = useState("Bob")

    const onCardClicked = () => {
        console.log("Hello 2");
    }

    useEffect(() => {
        const names = ["Carl", "Steven", "Phill"];
        var iterator = 0
        setInterval(() => {
            if (iterator < 10) {
                const randomIndex = Math.floor(Math.random() * names.length);
                const randomName = names[randomIndex]

                setName(randomName)
                iterator++

                console.log({iterator});
            }
        }, 5000);
    }, [])

    return (
        <div className="App">
            <h1>React concept</h1>

            <div>
                <Card
                    name={name}
                    age="23"
                    onClicked={onCardClicked}
                ></Card>
            </div>
        </div>
    );
}

export default App;
