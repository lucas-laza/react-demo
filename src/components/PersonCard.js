import React from 'react';

function PersonCard(props) {
    const {person, remove} = props;
    return (
        <div className={(person.gender === 'female') ? 'personCard fem' : 'personCard'}>
            <div className='close' onClick={remove}>x</div>
            <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`}/>
            <div>
                <p>{`${person.name.first} ${person.name.last}`}</p>
                <a href={'mailto:' + person.email}>Contacter</a>
            </div>
        </div>
    )
}

export default PersonCard;
