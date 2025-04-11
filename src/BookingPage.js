//import './App.css';

import React from 'react';

import { useState } from 'react';

import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  TextArea,
  TextInput,
  DateInput,
  Select,
  RadioButtonGroup,
  Tip,
  Text
} from 'grommet';

const occasions = [
  {label: 'Birthday', value: 'Birthday' },
  {label: 'Anniversary', value: 'Anniversary'}
];

export const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState({value: "", isTouched: false});
  const [comments, setComments] = useState('');
  const [date, setDate] = useState({ value: '' });
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState("");

  const options = [
    { label: '17:00', value: 1 },
    { label: '18:00', value: 2 },
    { label: '19:00', value: 3 },
    { label: '20:00', value: 4 },
    { label: '21:00', value: 5 },
    { label: '22:00', value: 6 },
    { label: '23:00', value: 7 }
  ];



  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const getIsFormValid = () => {
   return (
     name &&
     validateEmail(email.value) != null &&
     date &&
     time &&
     occasion
   );
 };

  return (
    <Box align="center" justify="center" pad="large">
      <Box width="medium">
        <Form
          onReset={() => {
            setName('');
            setEmail({value: "", isTouched: false});
            setComments('');
            setGuests('');
            setOccasion("");
            setDate({ value: '' });
            setTime('');
          }}
          onSubmit={(event) => {
            console.log('Submit', event.value);
            setName('');
            setEmail({value: "", isTouched: false});
            setComments('');
            setGuests('');
            setOccasion("");
            setDate({ value: '' });
            setTime('')}
          }
        >
          <FormField label="Name" htmlFor="name" name="name">
            <TextInput
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onSubmit={(event) => console.log('Submit', event.value, event.touched)}
            />
          </FormField>
          <FormField label="Email" htmlFor="email" name="email" required
          error={validateEmail(email.value) == null && email.isTouched ? "Please enter a valid email address" : null}>

            <MaskedInput
              aria-required
              id="email"
              name="email"
              placeholder="example@email.com"
              value={email.value}
              onChange={(event) => setEmail({...email, value: event.target.value})}
              onBlur={() => setEmail({...email, isTouched: true})} />

          </FormField>

          <FormField name="date" label="Date" required>
           <DateInput value={date.value} name="date" format="mm/dd/yyyy" 
            onChange={(newDate) => setDate(newDate)} />
          </FormField>

          <FormField label="Time" name="select">
          <Select
            value={time}
            onChange={(newTime) => setTime(newTime.value)} 
            name="select"
            placeholder="Choose time"
            options={options}
            labelKey="label"
            valueKey="value"
          />
        </FormField>

        <Box align="center" pad="medium" >
          <RadioButtonGroup
            justify="space-between"
            gap="large"
            direction='row'
            name="occasion"
            options={occasions}
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
          />
      </Box>

          <FormField label="Comments" htmlFor="comments" name="comments">
            <TextArea
              id="comments"
              name="comments"
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" href="/" />
            <Button type="reset" label="Reset" />
            <Button disabled={!getIsFormValid()} type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>

  );
};

export default BookingPage;



