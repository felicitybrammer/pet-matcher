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
            },
            age: {
                baby: false,
                youngAdult: false,
                adult: false,
                senior: false
            },
            category: {
                dog: false,
                cat: false,
                bird: false,
                reptile: false
            },
            activity: {
                low: false,
                moderate: false,
                high: false
            },
            needs: {
                needsTrue: false,
                needsFalse: false,
            },
            household: {
                babyHouse: false,
                adultHouse: false,
                seniorHouse: false,
                specialHouse: false
            },
            otherPets: {
                otherTrue: false,
                otherFalse: false
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
                break;
            case "baby":
                setQuizAnswers((prevState) => ({ ...prevState, age: { ...prevState.age, baby: !prevState.age.baby } }))
                break;
            case "youngAdult":
                setQuizAnswers((prevState) => ({ ...prevState, age: { ...prevState.age, youngAdult: !prevState.age.youngAdult } }))
                break;
            case "adult":
                setQuizAnswers((prevState) => ({ ...prevState, age: { ...prevState.age, adult: !prevState.age.adult } }))
                break;
            case "senior":
                setQuizAnswers((prevState) => ({ ...prevState, age: { ...prevState.age, senior: !prevState.age.senior } }))
                break;
            case "dog":
                setQuizAnswers((prevState) => ({ ...prevState, category: { ...prevState.category, dog: !prevState.category.dog } }))
                break;
            case "cat":
                setQuizAnswers((prevState) => ({ ...prevState, category: { ...prevState.category, cat: !prevState.category.cat } }))
                break;
            case "bird":
                setQuizAnswers((prevState) => ({ ...prevState, category: { ...prevState.category, bird: !prevState.category.bird } }))
                break;
            case "reptile":
                setQuizAnswers((prevState) => ({ ...prevState, category: { ...prevState.category, reptile: !prevState.category.reptile } }))
                break;
            case "low":
                setQuizAnswers((prevState) => ({ ...prevState, activity: { ...prevState.activity, low: !prevState.activity.low } }))
                break;
            case "moderate":
                setQuizAnswers((prevState) => ({ ...prevState, activity: { ...prevState.activity, moderate: !prevState.activity.moderate } }))
                break;
            case "high":
                setQuizAnswers((prevState) => ({ ...prevState, activity: { ...prevState.activity, high: !prevState.activity.high } }))
                break;
            case "needsTrue":
                setQuizAnswers((prevState) => ({ ...prevState, need: { ...prevState.need, needsTrue: !prevState.need.needsTrue } }))
                break;
            case "needsFalse":
                setQuizAnswers((prevState) => ({ ...prevState, need: { ...prevState.need, needsFalse: !prevState.need.needsFalse } }))
                break;
            case "babyHouse":
                setQuizAnswers((prevState) => ({ ...prevState, household: { ...prevState.household, babyHouse: !prevState.household.babyHouse } }))
                break;
            case "adultHouse":
                setQuizAnswers((prevState) => ({ ...prevState, household: { ...prevState.household, adultHouse: !prevState.household.adultHouse } }))
                break;
            case "seniorHouse":
                setQuizAnswers((prevState) => ({ ...prevState, household: { ...prevState.household, seniorHouse: !prevState.household.seniorHouse } }))
                break;
            case "specialHouse":
                setQuizAnswers((prevState) => ({ ...prevState, household: { ...prevState.household, specialHouse: !prevState.household.specialHouse } }))
                break;
            case "otherTrue":
                setQuizAnswers((prevState) => ({ ...prevState, otherPets: { ...prevState.otherPets, otherTrue: !prevState.otherPets.otherTrue } }))
                break;
            case "otherFalse":
                setQuizAnswers((prevState) => ({ ...prevState, otherPets: { ...prevState.otherPets, otherFalse: !prevState.otherPets.otherFalse } }))
                break;
            default:
                break;
        }
        console.log(quizAnswers)//THIS WORKS!!!! logs an object of object
        return quizAnswers; 
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log('click')

        Object.getOwnPropertyNames(quizAnswers.activity).forEach(function(val, idx, array){
            if([val].value==true){
                console.log(quizAnswers.activity[val])
            }
        }
            
        )
        

        try {
            //add quiz to database
            await addQuiz({
                //splice out the things that are true
                quizAnswers
                // put quizAnswers in here somewhere
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
                <input type="checkbox" value="female" onChange={handleChange} />
                <label for="sex">Female</label>
                <input type="checkbox" value="male" onChange={handleChange} />
                <label for="sex">Male</label>

                <p>Would you prefer pet of a particular age?</p>
                <input type="checkbox" value="baby" onChange={handleChange} />
                <label for="age">Baby</label>
                <input type="checkbox" value="youngAdult" onChange={handleChange} />
                <label for="age">Young Adult</label>
                <input type="checkbox" value="adult" onChange={handleChange} />
                <label for="age">Adult</label>
                <input type="checkbox" value="senior" onChange={handleChange} />
                <label for="age">Senior</label>

                <p>Would you prefer a particular type of animal?</p>
                <input type="checkbox" value="dog" onChange={handleChange} />
                <label for="category">Dog</label>
                <input type="checkbox" value="cat" onChange={handleChange} />
                <label for="category">Cat</label>
                <input type="checkbox" value="bird" onChange={handleChange} />
                <label for="category">Bird</label>
                <input type="checkbox" value="reptile" onChange={handleChange} />
                <label for="category">Reptile</label>

                <p>How active would you prefer to be with your pet?</p>
                <input type="checkbox" value="low" onChange={handleChange} />
                <label for="activity">I like pets who don't need much activity</label>
                <input type="checkbox" value="moderate" onChange={handleChange} />
                <label for="activity">I like a pet who needs a bit of activity but not too much.</label>
                <input type="checkbox" value="high" onChange={handleChange} />
                <label for="activity">I love to be really active with my pet</label>

                <p>Would you consider a pet with special needs?</p>
                <input type="radio" name="needs" value="needsTrue" onChange={handleChange} />
                <label for="needs">Yes</label>
                <input type="radio" name="needs" value="needsFalse" onChange={handleChange} />
                <label for="needs">No</label>

                <p>Do any of the following live in your household?</p>
                <input type="checkbox" value="babyHouse" onChange={handleChange} />
                <label for="household">Baby</label>
                <input type="checkbox" value="adultHouse" onChange={handleChange} />
                <label for="household">Adult</label>
                <input type="checkbox" value="seniorHouse" onChange={handleChange} />
                <label for="household">Senior</label>
                <input type="checkbox" value="specialHouse" onChange={handleChange} />
                <label for="household">Person with special needs</label>

                <p>Do any other pets live with you?</p>
                <input type="radio" name="otherPets" value="otherTrue" onChange={handleChange} />
                <label for="otherPets">Yes</label>
                <input type="radio" name="otherPets" value="otherFalse" onChange={handleChange} />
                <label for="otherPets">No</label>
            </form>
            <button className="form-submit btn" type="submit" onClick={handleFormSubmit}>Submit</button>

        </div >

    )
}

export default Quiz;