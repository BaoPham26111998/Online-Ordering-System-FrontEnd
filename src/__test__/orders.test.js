import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from "axios";
import "@testing-library/jest-dom"

afterEach(cleanup);

//////////////////////////////////    ITEM UNIT TEST   ///////////////////////////////////////////////////////




// ///////////////////////////////////////////////////////////////////////////////
// Unit test for get all orders
test('Test Get All Orders', async () => {
    // Get all items
    let res = await axiosMock.get('https://online-ordering-system-323618.as.r.appspot.com/orders');
    let data = res.data;
    console.log("Order data length: " + data.length)
    // Test if order length is > 1
    expect(data.length).toBeGreaterThan(1)
})




// ///////////////////////////////////////////////////////////////////////////////
// Unit test for add orders
test('Test Add Orders', async () => {
    // Login to get access token
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "testcart@testcart.com");
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
        'quantity': 1,
        'status': "Outstanding",
        'item': {
        'id': 8,
      },
      'user': {
        'id': 852
      }
    });
    // Add item with method POST through rest API
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("https://online-ordering-system-323618.as.r.appspot.com/order", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    // GET item by user id through rest API
    let res = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/orders/user=852")
    let itemdata = JSON.stringify(res.data)
    itemdata = JSON.parse(itemdata)
    // console.log("test add order id: "+itemdata[0].item.id)
    expect(itemdata[0].item.id).toEqual(8)
    
})


// ///////////////////////////////////////////////////////////////////////////////
// Unit test for update item
test("test update order", async () => {
    // Login to get the access token
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "testcart@testcart.com");
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
    // Set the data to update
    var raw = JSON.stringify({
        'quantity': 1,
        'status': 'Paid',
        'item': {
        'id': 8,
      },
      'user': {
        'id': 852
      }
    });
    // Update the data with method PUT through rest API
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // Get ID from the test-add item
    let res = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/orders/user=852")
    let itemdata = JSON.stringify(res.data)
    itemdata = JSON.parse(itemdata)
    console.log(itemdata[0].id)

    // Update the order using the est-add titem id
    await fetch("https://online-ordering-system-323618.as.r.appspot.com/order/"+itemdata[0].id ,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    let res1 = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/orders/user=852")
    let updateItemData = JSON.stringify(res1.data)
    updateItemData = JSON.parse(updateItemData)

    // Check if the title change from test-add ---> test-update-item
    expect(updateItemData[0].status).toEqual("Paid")

})




// ///////////////////////////////////////////////////////////////////////////////
// Unit test for delete order
test('Test Delete Orders', async () => {
    // Login to get access token
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "testcart@testcart.com");
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
    
    // Delete an order with method DELETE through rest API
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    let res = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/orders/user=852")
    let itemdata = JSON.stringify(res.data)
    itemdata = JSON.parse(itemdata)


    await fetch("https://online-ordering-system-323618.as.r.appspot.com/order/"+itemdata[0].id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    let res1 = await axiosMock.get("https://online-ordering-system-323618.as.r.appspot.com/orders/user=852")
    let updateItemData = JSON.stringify(res1.data)
    updateItemData = JSON.parse(updateItemData)
    // Test if the test-update-item 
    expect(updateItemData.length).toEqual(0)
})



