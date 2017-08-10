import React from 'react'
import axios from 'axios'
axios.defaults.headers.common['Content-type'] = "application/json";
export const getData = () => {
     return new Promise(function (resolve, reject) {
        fetch("http://localhost:3000/items").then(response => response.json()).then(res => {
            console.log(res)
                let techies = res.techies
                resolve(techies);
            })
            .catch(error => {
                reject(error);
            });
       
    });
}

export const updateData = (id, updatedObject) => {
    console.log("id in update data", id, "object", updatedObject)
    console.log("ID LENGTH " + id.length);
    return new Promise(function (resolve, reject) {
        axios.put('http://localhost:3000/items/' + id, updatedObject)
            .then(function (response) {
                console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
}

export const getVisibleTechies = (techies, param) => techies.filter((techie, index) => (techie.name.toLowerCase().includes(param) || techie.id.includes(param)))



