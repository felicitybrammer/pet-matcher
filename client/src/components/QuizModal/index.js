import React from 'react';

const Quiz = () => {

    return (

        <div>
            <form>
                <p>Would you prefer a pet of a particular sex?</p>
                <input type="checkbox" />
                <label for="sex">Female</label>
            <input type="checkbox" />
            <label for="sex">Male</label>
                    {/* <input type=“checkbox” />
                    <label for=“sex”>Don’t Mind</label> */}
            </form >
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
            </form >
            <form>
                <p>Would you prefer a particular type of animal?</p>
                    <input type="checkbox" />
                    <label for="category">Dog</label>
                    <input type="checkbox" />
                    <label for="category">Cat</label>
                    <input type="checkbox" />
                    <label for="category">Bird</label>
                    <input type="checkbox" />
                    <label for="category">Reptile</label>
            </form>
            <form>
                <p>How active would you prefer to be with your pet?</p>
                    <input type="checkbox" />
                    <label for="activity">Low</label>
                    <input type="checkbox" />
                    <label for="activity">Moderate</label>
                    <input type="checkbox" />
                    <label for="activity">High</label>
            </form>
            <form>
                <p>Would you consider a pet with special needs?</p>
                    <input type="radio" name="need" value="yes" />
                    <label for="needs">Yes</label>
                    <input type="radio" name="need" value="no" />
                    <label for="needs">No</label>
            </form>
            <form>
                <p>Do any of the following live in your household?</p>
                    <input type="checkbox" />
                    <label for="household">Baby</label>
                    <input type="checkbox" />
                    <label for="household">Adult</label>
                    <input type="checkbox" />
                    <label for="household">Senior</label>
                    <input type="checkbox" />
                    <label for="household">Person with special needs</label>
            </form>
            <form>
                <p>Do any other pets live with you?</p>
                    <input type="radio" name="pets" value="yes"/>
                    <label for="otherPets">Yes</label>
                    <input type="radio" name="pets" value="no" />
                    <label for="otherPets">No</label>
            </form>
            <button className="form-submit btn" type="submit">Submit</button>

        </div >

    )
}

export default Quiz;