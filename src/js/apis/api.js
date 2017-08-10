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
    return new Promise(function (resolve, reject) {
        axios.put('http://localhost:3000/items/' + id, updatedObject)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

export const getVisibleTechies = (techies, param) => techies.filter((techie, index) => (techie.name.toLowerCase().includes(param) || techie.id.includes(param)))
