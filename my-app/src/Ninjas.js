import React, {Component} from 'react';
let Ninjas = (props)=>{
        const {ninjas, deleteNinja} = props;
        const ninjasList = ninjas.map(ninja=>{
            return ninja.age>25 ?
                    (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                        <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
                    </div>
                    ): null;
        });
        return (
            <div className="ninja-list">
                { ninjasList }
            </div>
        );
    
}

export default Ninjas;