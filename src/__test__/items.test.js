import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from "axios";
import "@testing-library/jest-dom"

afterEach(cleanup);


// ///////////////////////////////////////////////////////////////////////////////
// Unit test for get all items
test('Test Get All Items', async () => {
    // Get all items
    let res = await axiosMock.get('https://online-ordering-system-323618.as.r.appspot.com/items');
    let data = res.data;
    console.log("Item data length: " + data.length)
    // Test if item length is > 1
    expect(data.length).toBeGreaterThan(1)
})



// ///////////////////////////////////////////////////////////////////////////////
// Unit test for add item
test("Test add item", async () => {
    // Login to get access token
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "admin@admin.com");
    urlencoded.append("password", "password");

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
            localStorage.setItem("accessToken", result.accessToken)
            localStorage.setItem("username", result.username)
        });
    // Implement the access token to header
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
    myHeaders.append("Content-Type", "application/json");
    // Create a data set for an item    
    var raw = JSON.stringify({
        "title": "test-add",
        "price": 15.00,
        "inStock": 0,
        "description": "test-product",
        "genre": "test-gerne",
        "soldQty": 0,
        "img": "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover.jpg?v=3"
    });
    // Add item with method POST through rest API
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("https://online-ordering-system-323618.as.r.appspot.com/items/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // GET item by name through rest API
    let res = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/items/title=" + "test-add")
    let itemdata = JSON.stringify(res.data)
    itemdata = JSON.parse(itemdata)
    console.log("item title: " + itemdata[0].title)
    // Test if the name from the url data is equal to the added name
    expect(itemdata[0].title).toEqual("test-add")
})




// ///////////////////////////////////////////////////////////////////////////////
// Unit test for update item
test("test update item", async () => {
    // Login to get the access token
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "admin@admin.com");
    urlencoded.append("password", "password");

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
            localStorage.setItem("accessToken", result.accessToken)
            localStorage.setItem("username", result.username)
        });

    // Implement the access token to the headers 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "title": "test-update-item",
        "price": 15.00,
        "inStock": 0,
        "description": "test-update-item",
        "genre": "RGP",
        "soldQty": 1,
        "img": "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover.jpg?v=3"
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let res = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/items/title=" + "test-add")
    let itemdata = JSON.stringify(res.data)
    itemdata = JSON.parse(itemdata)
    console.log("item id: " + itemdata[0].id)

    await fetch("https://online-ordering-system-323618.as.r.appspot.com/items/" + itemdata[0].id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    let res1 = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/items/title=" + "test-update-item")
    let updateItemData = JSON.stringify(res1.data)
    updateItemData = JSON.parse(updateItemData)
    expect(updateItemData[0].title).toEqual("test-update-item")

})



// ///////////////////////////////////////////////////////////////////////////////
// Unit test for delete item
test("test delete item", async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "admin@admin.com");
    urlencoded.append("password", "password");

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
            localStorage.setItem("accessToken", result.accessToken)
            localStorage.setItem("username", result.username)
        });
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    let res = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/items/title=" + "test-update-item")
    let itemdata = JSON.stringify(res.data)
    itemdata = JSON.parse(itemdata)
    console.log("item title: " + itemdata[0].id)

    await fetch("https://online-ordering-system-323618.as.r.appspot.com/items/" + itemdata[0].id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    let res1 = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/items/title=" + "test-update-item")
    let updateItemData = JSON.stringify(res1.data)
    updateItemData = JSON.parse(updateItemData)
    expect(updateItemData.length).toEqual(0)

})







