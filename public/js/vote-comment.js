const voteBtnEl = document.getElementById("vote");
const voteHandler = async (e) => {
  e.preventDefault();
  console.log("in vote");
  const comment_id = document.querySelector(".comment").id;
  console.log(comment_id);
  const response = await fetch(`/api/comments/${comment_id}/votes/addVote`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  if (jsonResponse) {
    location.reload();
  }
};
voteBtnEl.addEventListener("click", voteHandler);
