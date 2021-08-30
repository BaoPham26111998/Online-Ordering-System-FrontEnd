import React, { useState }  from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from "axios";
import "@testing-library/jest-dom"

afterEach(cleanup);

const userEmail = "email@email.com"
const userPassword = "password"
const baseUrl = "https://online-ordering-system-323618.as.r.appspot.com/items"

test('Test Get All Items', async () => {
    // This function is to test if the client can get all the items information 
    let res = await axiosMock.get('https://online-ordering-system-323618.as.r.appspot.com/items');
    let data = res.data;
    expect(data.length).toBeGreaterThan(1)
})

test('Test Add item', async () => {
    const test_item_name = "test_item"
    const test_item = {
        title: test_item_name,
        price: 15.99,
        inStock: 1,
        description: "test_item",
        genre: "RGP",
        soldQty: 15,
        img: "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover.jpg?v=3"
    }
    await axiosMock.post('https://online-ordering-system-323618.as.r.appspot.com/items',test_item);
    let res2 = await axiosMock.get('https://online-ordering-system-323618.as.r.appspot.com/items/'+test_item_name);
    let data = res2.data;
    console.log(data)
})

test('Update item', async () => {

})


