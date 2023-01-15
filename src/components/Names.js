import React, { useState } from 'react';
import PersonCard from './PersonCard';

function Names() {

    const [displayType, setDisplayType] = useState(0);

    const [namesList, setNamesList] = useState([]);

    const fetchAddNewLine = async () => {
        const response = await fetch("https://randomuser.me/api");
        const result = await response.json();
        setNamesList(namesList.concat([result.results[0]]));
    } 

    const removePerson = (index) => {
        const newList = [...namesList];
        newList.splice(index, 1);
        setNamesList(newList);
    } 

    const exportCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,";
        const dataString = namesList.map(person => `${person.name.first}; ${person.name.last}; ${person.email}`).join("\n");
        const encodedUri = encodeURI(csvContent + dataString);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "persons.csv");
        document.body.appendChild(link); 
        link.click();
    }
    
    const changeDisplayType = () => {
        setDisplayType((displayType === 1) ? 0 : 1);
    }

    return <>
        <div>
            <p>display type: {displayType}</p>
            <button onClick={changeDisplayType}>
                Changer de display
            </button>
            <h1>
                Générateur de noms
            </h1>
            <button onClick={fetchAddNewLine}>
                Nouvelle ligne
            </button>
            <button onClick={exportCSV}>
                Exporter au format csv
            </button>
            <div>
             { 
             (displayType) ? null : 
                <div className='nameCards'>
                    {namesList.map((person, index) => (
                        <PersonCard key={index} person={person} remove={() => removePerson(index)} />
                    ))}
                </div>
            }
            </div>
            {(displayType) ? 
                <table style={{display: (displayType) ? 'block' : 'none'}}>
                    <thead>
                        <th>Prenom</th>
                        <th>Nom</th>
                    </thead>
                    <tbody>
                        {namesList.map((person, index) => (
                            <tr key={index}>
                                <td>{person.name.first}</td>
                                <td>{person.name.last}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            : null}
            
        </div>
    </>;
}

export default Names;