import React, { useState }  from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from "axios";
import "@testing-library/jest-dom"

afterEach(cleanup);

////////////////////////////////////////////    USER UNIT TEST   ///////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////
// Unit test for get all users
test('Test Get All Users', async () => {
    let res = await axiosMock.get('https://online-ordering-system-323618.as.r.appspot.com/users');
    let data = res.data;
    expect(data.length).toBeGreaterThan(1)
})

// ///////////////////////////////////////////////////////////////////////////////
// Unit test login
test('Test user login', async () => {
    // Set the default name to compare when login success
    const username = "user_admin"
    // Create a headers to store the access token and username
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    // Set the username and password of the admin
    urlencoded.append("email", "admin@admin.com");
    urlencoded.append("password", "password");

    // Using method POST to login
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    await fetch("https://online-ordering-system-323618.as.r.appspot.com/auth/login", requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw Error(response.status)
                })
                .then(result => {
                    // Save the access token and username from the heades to the local storage
                    localStorage.setItem("accessToken", result.accessToken)
                    localStorage.setItem("username", result.username)
                });
        // Test if the return username from the localstorage is equal to the default name
        expect(localStorage.getItem('username')).toEqual(username)
})
