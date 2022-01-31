import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUIZ } from '../../utils/mutations';

const Quiz = () => {
    const [addQuiz, {error}] = useMutation(ADD_QUIZ);

    const handleFormSubmit = async event => {
        event.preventDefault();

        const userValue = event.target.value;
        console.log(userValue)

        // if (event.target.value = "female") {
        //     console.log("female checked")
        // }
    }

    return (

        <div>
            <form onSubmit= { handleFormSubmit }>

                <p>Would you prefer a pet of a particular sex?</p>
                <input type="checkbox" value="female"/>
                <label for="sex">Female</label>
                <input type="checkbox" value="male" />
                <label for="sex">Male</label>
            
                <p>Would you prefer pet of a particular age?</p>
                    <input type="checkbox" />
                    <label for="age">Baby</label>
                    <input type="checkbox" />
                    <label for="age">Young Adult</label>
                    <input type="checkbox" />
                    <label for="age">Adult</label>
                    <input type="checkbox" />
                    <label for="age">Senior</label>
           
                <p>Would you prefer a particular type of animal?</p>
                    <input type="checkbox" />
                    <label for="category">Dog</label>
                    <input type="checkbox" />
                    <label for="category">Cat</label>
                    <input type="checkbox" />
                    <label for="category">Bird</label>
                    <input type="checkbox" />
                    <label for="category">Reptile</label>
           
                <p>How active would you prefer to be with your pet?</p>
                    <input type="checkbox" />
                    <label for="activity">Low</label>
                    <input type="checkbox" />
                    <label for="activity">Moderate</label>
                    <input type="checkbox" />
                    <label for="activity">High</label>

                <p>Would you consider a pet with special needs?</p>
                    <input type="radio" name="need" value="true" />
                    <label for="needs">Yes</label>
                    <input type="radio" name="need" value="false" />
                    <label for="needs">No</label>
            
                <p>Do any of the following live in your household?</p>
                    <input type="checkbox" />
                    <label for="household">Baby</label>
                    <input type="checkbox" />
                    <label for="household">Adult</label>
                    <input type="checkbox" />
                    <label for="household">Senior</label>
                    <input type="checkbox" />
                    <label for="household">Person with special needs</label>
            
                <p>Do any other pets live with you?</p>
                    <input type="radio" name="pets" value="true"/>
                    <label for="otherPets">Yes</label>
                    <input type="radio" name="pets" value="false" />
                    <label for="otherPets">No</label>
            </form>
            <button className="form-submit btn" type="submit">Submit</button>

        </div >

    )
}

export default Quiz;