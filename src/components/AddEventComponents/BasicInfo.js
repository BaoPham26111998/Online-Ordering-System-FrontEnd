import React from 'react'
import { Form, Input, FormText, Label, Button, ButtonGroup } from 'reactstrap';
import { useState } from 'react'

const BasicInfo = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [organizers, setOrganizers] = useState('')
    const [category, setCategory] = useState('Category')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('Earth')
    const [timeType, setTimeType] = useState('')
    const [locType, setLocType] = useState('Venue')
    

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Empty Name Field')
            return
        }

        onAdd({ name, organizers, category, time, address })

        setName('')
        setOrganizers('')
        setCategory('')
        setTime('')
        setAddress('')
    }

    return (
        <div>
            <h1>Basic Info</h1>
            <Form onSubmit={onSubmit}>

                <Input placeholder="Name" type="text" name="name" id="name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <FormText>Something Catchy!</FormText>

                <Input placeholder="Organizers" type="text" name="organizers" id="organizers" value={organizers} onChange={(e) => {
                    setOrganizers(e.target.value)
                }} />


                <Input type="select" value={category} onChange={(e) => {
                    setCategory(e.target.value);
                }}>
                    <option>Event Category</option>
                    <option>Music</option>
                    <option>Placeholder</option>
                    <option>Placeholder</option>
                </Input>

            </Form>

            <Form>
                <Label for="venue" ><h4>Date & Time</h4></Label>
                <br></br>
                <p><strong>Type: </strong></p>
                <ButtonGroup color="gray" id="venue" >
                    <Button value={timeType} onClick={() => {
                        setTimeType('Recurrent')
                    }}>Recurrent</Button>
                    <Button value={timeType} onClick={() => {
                        setTimeType('Once')}}>Once</Button>
                </ButtonGroup>
                <Input placeholder="Time" type="text" name="time" id="time" value={time} onChange={(e) => {
                    setTime(e.target.value);
                }}/>
                <br></br>
            </Form>

            <Form>
                <Label for= "venue" ><h4>Location</h4></Label>
                <br></br>
                <p><strong>Type: </strong></p>
                <ButtonGroup color = "gray" id = "venue">
                    <Button value = {locType} onclick = {() => {
                        setLocType('Venue')
                    }}>Venue</Button>
                    <Button value = {locType} onclick = {() => {
                        setLocType('Virtual')
                    }}>Virtual</Button>
                </ButtonGroup>
                <Input placeholder="Address" type="text" name="address" id="location" value={address} onChange={(e) => {
                    setAddress(e.target.value);
                }}/>
            </Form>

            <Button type = "submit" value = "submit">Continue</Button>

        </div>
    )
}

export default BasicInfo
