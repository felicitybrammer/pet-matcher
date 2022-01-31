import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUIZ } from '../../utils/mutations';


const Quiz = () => {



    const [addQuiz, { error }] = useMutation(ADD_QUIZ);
    const [quizAnswers, setQuizAnswers] = useState(
        {
            sex: {
                female: false,
                male: false
            }
        }
       );

    const handleChange = event => {
        console.log(event.target.value);

        switch (event.target.value) {
            case "female":
                setQuizAnswers((prevState) => ({ ...prevState, sex: { ...prevState.sex, female: !prevState.sex.female } }))
                break;
            case "male":
                setQuizAnswers((prevState) => ({ ...prevState, sex: { ...prevState.sex, male: !prevState.sex.male } }))
            default:
                break;
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            //add quiz to database
            await addQuiz({
                //variables: { sex, age, category, activity, needs, household, otherPets }
            });
            //clear form?
            setQuizAnswers({});

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div>
            <form onSubmit={handleFormSubmit}>

                <p>Would you prefer a pet of a particular sex?</p>
                <input type="checkbox"  value="female" onChange={handleChange} />
                <label for="sex">Female</label>
                <input type="checkbox" value="male" onChange={handleChange} />
                <label for="sex">Male</label>

                <p>Would you prefer pet of a particular age?</p>
                <input type="checkbox" value="Baby" onChange={handleChange} />
                <label for="age">Baby</label>
                <input type="checkbox" value="Young Adult" onChange={handleChange} />
                <label for="age">Young Adult</label>
                <input type="checkbox" value="Adult" onChange={handleChange} />
                <label for="age">Adult</label>
                <input type="checkbox" value="Senior" onChange={handleChange} />
                <label for="age">Senior</label>

                <p>Would you prefer a particular type of animal?</p>
                <input type="checkbox" value="Dog" onChange={handleChange} />
                <label for="category">Dog</label>
                <input type="checkbox" value="Cat" onChange={handleChange} />
                <label for="category">Cat</label>
                <input type="checkbox" value="Bird" onChange={handleChange} />
                <label for="category">Bird</label>
                <input type="checkbox" value="Reptile" onChange={handleChange} />
                <label for="category">Reptile</label>

                <p>How active would you prefer to be with your pet?</p>
                <input type="checkbox" value="low" onChange={handleChange} />
                <label for="activity">I like pets who don't need much activity</label>
                <input type="checkbox" value="moderate" onChange={handleChange} />
                <label for="activity">I like a pet who needs a bit of activity but not too much.</label>
                <input type="checkbox" value="high" onChange={handleChange} />
                <label for="activity">I love to be really active with my pet</label>

                <p>Would you consider a pet with special needs?</p>
                <input type="radio" name="need" value="needs.true" onChange={handleChange} />
                <label for="needs">Yes</label>
                <input type="radio" name="need" value="needs.false" onChange={handleChange} />
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
                <input type="radio" name="pets" value="other.true" onChange={handleChange} />
                <label for="otherPets">Yes</label>
                <input type="radio" name="pets" value="other.false" onChange={handleChange} />
                <label for="otherPets">No</label>
            </form>
            <button className="form-submit btn" type="submit">Submit</button>

        </div >

    )
}

export default Quiz;