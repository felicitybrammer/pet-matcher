import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_QUIZ } from "../../utils/mutations";

const Quiz = () => {

    const newQuiz = useMutation(ADD_QUIZ);

    // const handleNextButton //save answers in an array, push each question, default answer
    // const handleFormSubmit

    // const questions = { id, text}

    return (
        <div>
            <h2>Find your perfect new best friend!</h2>
            <form>
                <p>Would you prefer a pet of a particular sex?</p>
                    <input type="checkbox" />
                    <label for="sex">Female</label>
                    <input type="checkbox" />
                    <label for="sex">Male</label>
                    {/* <input type="checkbox" />
                    <label for="sex">Don't Mind</label> */}
                    <button type="submit">Submit and go to next question</button>
            </form>
            <form>
                
                <p>Would you prefer pet of a particular age?</p>
                <input type="checkbox" />
                    <label for="age">Baby</label>
                    <input type="checkbox" />
                    <label for="age">Young Adult</label>
                    <input type="checkbox" />
                    <label for="age">Adult</label>
                    <input type="checkbox" />
                    <label for="age">Senior</label>
                    <button type="submit">Submit and go to next question</button>
            </form>
            <form>
                
                <p>Would you prefer a particular type of animal?</p>
            </form>
            <form>
                
                <p>How active would you prefer to be with your pet?</p>
            </form>
            <form>
                
                <p>Would you consider a pet with special needs?</p>
            </form>
            <form>
                
                <p>Do any of the following live in your household?</p>
            </form>
            <form>
                
                <p>Do any other pets live with you?</p>
            </form>

            <button className="form-submit btn" type="submit"></button>
        </div>

    );
};

export default Quiz;
