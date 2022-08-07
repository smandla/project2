const { urlencoded } = require("express");

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.getElementById('plant-text').value;
    const post_content = document.getElementById('advice-text').value;
  
    const response = await fetch(`/api/plants/addPlant`, {
      method: 'POST',
      body: JSON.stringify({
        title:title,
        problem:post_content,
        plant_img:image-url,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/plants');
    } else {
      alert(response.statusText);
    }
  }
  
  document.getElementById('advice-submit').addEventListener('submit', newFormHandler);