async function commentFormHandler(event) {

  event.preventDefault();

  const comment_text = document.getElementById("comment-sub-text").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  if (comment_text) {
    const response = await fetch(`/api/comments/${post_id}/addComment`, {
      method: "POST",
      body: JSON.stringify({
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("comment-submit")
  .addEventListener("click", commentFormHandler);
