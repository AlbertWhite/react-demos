import React from "react";
import { Field, reduxForm } from "redux-form";

const handle = values => {
  debugger;
  console.log(values);
};

let App = props => {
  return (
    <form onSubmit={() => handle()}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      {/* <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={React.DOM.input}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={React.DOM.input}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component={React.DOM.input}
              type="radio"
              value="male"
            />{" "}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component={React.DOM.input}
              type="radio"
              value="female"
            />{" "}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component={React.DOM.select}>
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component={React.DOM.input}
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component={React.DOM.textarea} />
        </div>
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
};

const AppForm = reduxForm({ form: "people" })(App);

export default AppForm;
