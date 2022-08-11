async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("plant-text").value;
  const post_content = document.getElementById("advice-text").value;
  const image_url = document.getElementById("img-url").value;

  if (title && post_content && image_url) {
    
    const response = await fetch(`/api/plants/addPlant`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        problem: post_content,
        plant_img: image_url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}
let adviceSubmitBtn = document.getElementById("advice-submit");
adviceSubmitBtn.addEventListener("click", newFormHandler);
