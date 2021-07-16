import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import "./style.css";

const BookNav = (props) => {
    const { className, name } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <h1>{name}</h1>
            <Navbar color="light" light expand="md">
                <Navbar.Brand href="/">PlaceHolder Event</Navbar.Brand>
                <Navbar.Brand className="mr-auto" navbar>
                    <Navbar.Text>LoremDay/LoremMonth</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Text><Button block onClick={toggle}>Book</Button></Navbar.Text>
            </Navbar>
        </div>
    )
}

export default BookNav;