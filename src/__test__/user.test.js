import React, { useState }  from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from "axios";
import "@testing-library/jest-dom"

afterEach(cleanup);

const userEmail = "email@email.com"
const userPassword = "password"
const baseUrl = "https://online-ordering-system-323618.as.r.appspot.com/items"


test('Test Get All Users', async () => {
    let res = await axiosMock.get('https://online-ordering-system-323618.as.r.appspot.com/users');
    let data = res.data;
    expect(data.length).toBeGreaterThan(1)
})