import './App.css';

import { useReducer, useEffect } from 'react';

import {
    Box,
    Button,
    Form,
    FormField,
    MaskedInput,
    TextArea,
    DateInput,
    Select,
    RadioButtonGroup
} from 'grommet';




const seededGenerator = (date, hour) => {
    const m = 9;
    const d = new Date(date).getDate();
    const result = ((d + hour) % m) / 10;
    return result;
}


const fetchAPI = (date) => {
    let result = ["--- Select a Time ---"];

    if (date) {
        for (let hour = 15; hour <= 23; hour++) {
            if (seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
            if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
        }
    }

    return result;
};


 const validateEmail = (value) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value);
  };


const ACTION = {
    UPDATE_DATE: "UPDATE_DATE",
    UPDATE_EMAIL: "UPDATE_EMAIL",
    UPDATE_TIME: "UPDATE_TIME",
    UPDATE_GUEST: "UPDATE_GUEST",
    UPDATE_OCCASION: "UPDATE_OCCASION",
    UPDATE_COMMENTS: "UPDATE_COMMENTS",
    RESET_FORM:"RESET_FORM",
    SUBMIT_FORM: "SUBMIT_FORM"
}

const initialState = {
    date: { value: "", isTouched: false },
    time: { value: "", isTouched: false },
    email: { value: "", isTouched: false, isValid: false },
    guests: {
        list: ['1', '2', '3', '4', '5', '6'],
        value: "",
        isTouched: false},
    occasions: {list: [{label: 'Birthday', value: 'Birthday' },
    {label: 'Anniversary', value: 'Anniversary'}], value: "", isTouched: false},
    availableTimes: [],
    comments: {value: ""} ,
};

const reducer = (state, action) => {
    switch (action.type) {

        case ACTION.UPDATE_DATE:
            return {
                ...state,
                [action.fieldName]: { ...state[action.fieldName], value: action.payload, isTouched: true },
                availableTimes: fetchAPI(action.payload)
            };

            case ACTION.UPDATE_COMMENTS:
                return {
                    ...state,
                    [action.fieldName]: {...state[action.fieldName], value: action.payload},
                };

            case ACTION.UPDATE_TIME:
                return {
                    ...state,
                    [action.fieldName]: { ...state[action.fieldName], value: action.payload, isTouched: true },
                };

            case ACTION.UPDATE_GUEST:

                return {
                        ...state,
                        [action.fieldName]: { ...state[action.fieldName], value: action.payload.value, isTouched: true },
                    }


            case ACTION.UPDATE_OCCASION:

                return {
                        ...state,
                        [action.fieldName]: { ...state[action.fieldName], value: action.payload.value, isTouched: true },
                        }

            case ACTION.UPDATE_EMAIL:

                if (action.payload.type === "change") {

                return {

                    ...state,
                    [action.fieldName]: { ...state[action.fieldName], value: action.payload.value, isTouched: true, isValid: validateEmail(action.payload.value) },
                }
            }

            else if (action.payload.type === "blur") {


                return {

                    ...state,
                    [action.fieldName]: { ...state[action.fieldName], isTouched: true},
                }

            }

            case ACTION.RESET_FORM:

                return initialState;

            case ACTION.SUBMIT_FORM:

              console.log(action.payload);
              return initialState;

        default:
            return state;
    }
};


function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getIsFormValid = () => {
        return (
          state &&
          state.name &&
          state.name.value &&
          state.email &&
          state.email.isValid &&
          state.date &&
          state.date.value &&
          state.time &&
          state.time.value &&
          state.occasion &&
          state.occasion.value
        );
      };

      useEffect(() => {
        console.log(state, "validity :", getIsFormValid())
      }, [state]);

    const handleUpdateGuests = (event) => {
        console.log("Guest event:", event.type);
        dispatch({ type: ACTION.UPDATE_GUEST, fieldName: event.target.name, payload: {value: event.target.value, type: event.type} });

    };

    const handleUpdateComments = (event) => {
        console.log("Comment event:", event);
        dispatch({ type: ACTION.UPDATE_COMMENTS, fieldName: event.target.name, payload: event.target.value });

    };

    const handleUpdateOccasions = (event) => {
        console.log("Occasion event:", event);
        dispatch({ type: ACTION.UPDATE_OCCASION, fieldName: event.target.name, payload: {value: event.value, type: event.type} });

    };

    const handleUpdateEmail = (event) => {
        console.log("Email event:", event.type);
        dispatch({ type: ACTION.UPDATE_EMAIL, fieldName: event.target.name, payload: {value: event.target.value, type: event.type} });
    };

    const handleUpdateDate = (event) => {
        console.log("Date event:", event.type);
        dispatch({ type: ACTION.UPDATE_DATE, fieldName: 'date', payload: event.value });
    };

    const handleTimeChange = (event) => {
        console.log("Time event:", event.type);
        dispatch({ type: ACTION.UPDATE_TIME, fieldName: event.target.name, payload: event.value });
    };

    const handleResetForm = () => {
        console.log("Reset");
        dispatch({ type: ACTION.RESET_FORM });
    };

    const handleSubmitForm = (event) => {
      dispatch({ type: ACTION.SUBMIT_FORM, payload: event });
  };


    return (

    <Box align="center" justify="center" pad="large" >
      <Box width="medium" >

      <Form
          onReset={handleResetForm}
          onSubmit={handleSubmitForm}
        >
            <FormField name="date" label="Date" required error={state.date.isTouched && !state.date.value ? "Please select a date" : null}>
                <DateInput
                    onChange={handleUpdateDate}
                    value={state.date.value}
                    name="date"
                    format="mm/dd/yyyy"
                />
            </FormField>

            <FormField
                label="Time"
                name="time"
                required
                error={state.time.isTouched && !state.time.value ? "Please select a time" : null}
            >
                <Select
                    disabled={!state.date.value}
                    onChange={handleTimeChange}
                    name="time"
                    placeholder={!state.date.value ? "Please choose a date first" : "Please choose a time"}
                    options={state.availableTimes}
                    value={state.time.value}
                />
            </FormField>

            <FormField
              label="Email"
              htmlFor="email"
              name="email"
              required
              error={state.email.isTouched && !state.email.isValid ? "Please enter a valid email address" : null}>

            <MaskedInput
              aria-required
              id="email"
              name="email"
              placeholder="example@email.com"
              value={state.email.value}
              onChange={handleUpdateEmail}
              onBlur={handleUpdateEmail} />
            </FormField>


          <FormField label="Guests" name="guestSelect" required error={!state.guests.value && state.guests.isTouched ? "Please select guests" : null}>
          <Select
            value={state.guests.value}
            onChange={handleUpdateGuests}
            onBlur={handleUpdateGuests}
            name="guests"
            placeholder="Select amount of guests"
            options={state.guests.list}
            labelKey="label"
            valueKey="value"
          />
          </FormField>

        <Box align="center" pad="medium" >
          <RadioButtonGroup
            justify="space-between"
            gap="large"
            direction='row'
            name="occasions"
            options={state.occasions.list}
            value={state.occasions.value}
            onChange={handleUpdateOccasions}
          />
      </Box>

      <FormField label="Comments" htmlFor="comments" name="comments">
            <TextArea
              id="comments"
              name="comments"
              value={state.comments.value}
              onChange={handleUpdateComments}
            />
          </FormField>

          <Box direction="row" justify="between" margin={{ top: 'medium' }} >
            <Button label="Cancel" href="/" />
            <Button type="reset" label="Reset"  />
            <Button disabled={!getIsFormValid()} type="submit" label="Update" />
          </Box>

        </Form>
        </Box>
        </Box>
      );
}

export default App;