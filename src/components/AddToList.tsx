import React, { useState } from 'react'
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>

}

//Använd people och setPeople från IProps i AddToList
const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""

    })

    //För att få changeHandler att fungera definera event, return void = ingenting.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        // Skriv över tidigare värde i state till onChange value från inputs
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

    }

    const handleClick = (): void => {
        //Om något att fälten är tomma return.
        if(
            !input.name || !input.age || !input.img
        ) {
            return
        }
        //Eftersom nummer från input fälten blir string, parseInt för att konvertera till number
        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }

        ]);
        //Rensa inputfälten
        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        });

    }




    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" value={input.name} onChange={(handleChange)} name="name" />
            <input type="number" placeholder="Age" className="AddToList-input" value={input.age} onChange={(handleChange)} name="age"/>
            <input type="text" placeholder="Image Url" className="AddToList-input" value={input.img} onChange={(handleChange)} name="img"/>
            <textarea placeholder="Notes" className="AddToList-input" value={input.note} onChange={(handleChange)} name="note"/>
            <button className="AddToList-btn" onClick={handleClick}>Add to list</button>
        </div>
    )
}

export default AddToList;
