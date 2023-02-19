//comment form handler
const commentFormHandler = async (event) => {
  // prevent default
  event.preventDefault();
  // get comment text
  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  // check if comment text exists
  if (body) {
    // post to api/comments
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ postId, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // reload page
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
