const postId = document.querySelector('input[name="post-id"]').value;
// edit form handler
const editFormHandler = async (event) => {
  // prevent default
  event.preventDefault();
  // get comment text
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
  // check if comment text exists
  if (body) {
    // post to api/comments
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // reload page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  //delete post
  const deletePost = async (event) => {
    const response = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  };
};
document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
document.querySelector("#delete-post").addEventListener("click", deletePost);
