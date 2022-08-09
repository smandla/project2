async function newCommentHandler(event){
    event.preventDefault();

    const comment = document.getElementById('comment-sub-text').value
    if (comment){
        const response = await fetch(`/api/comments/:id/addComment`,
        {
            method: "POST",
            body: JSON.stringify({
                comment_text: comment
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok){
            document.location.reload("/plants/:id")
        }else{
            alert(response.statusText)
        }
    }
}

let comSubmitBtn = document.getElementById("comment-submit")
comSubmitBtn.addEventListener("click", newCommentHandler)