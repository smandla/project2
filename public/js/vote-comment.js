const voteBtnEl = document.getElementById("vote");
const voteHandler = async (e) => {
  e.preventDefault();
  const comment_id = document.querySelector(".comment").id;
  const response = await fetch(`/api/comments/${comment_id}/votes/addVote`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });
  const jsonResponse = await response.json();
  if (jsonResponse) {
    location.reload();
  }
};
voteBtnEl.addEventListener("click", voteHandler);
