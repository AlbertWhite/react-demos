### A working Demo for comparing redux-form vs formik, with/without material-UI

![](https://raw.githubusercontent.com/AlbertWhite/react-demos/master/demo39-formic-materialUI-vs-reduxform/screenshot.png)

In this demo, I create form control component (Input, Radio button, Button...) [with material-UI](https://github.com/AlbertWhite/react-demos/tree/master/demo39-formic-materialUI-vs-reduxform/src/formComponent/material-ui) and [without material-UI](https://github.com/AlbertWhite/react-demos/tree/master/demo39-formic-materialUI-vs-reduxform/src/formComponent/native).

### Form Control Component

The form control component are a wrapper for input, button, radio button... They should be able to:

- Render the form control component correctly (radio button, dropdown...)
- Show error message if the field is touched. Hide the error message if the field is modified.
- Pass necessary attributes (type, name, disabled...) to the DOM element.

### Form library

I also test the fundamental features of [redux-form](https://redux-form.com/8.1.0/) and [formik](https://jaredpalmer.com/formik/) as the library for form. These features include:

- Form validation before / after submission
- Form submission
- Initial values
- Disable double submit
- Pass the form/field status(touched, submitting, error) to the form control component

The async is managed with redux-saga.

The mock api: https://www.mockapi.io/projects/5a7ae1d9fb057400128504a6
