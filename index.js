let pageTemplate = _.template(document.getElementById("page-element").innerHTML)
let postTemplate = _.template(document.getElementById("post-element").innerHTML)
let commentsTemplate = _.template(document.getElementById("comments-element").innerHTML)


let postTitle = document.getElementById("postTitle").value;
let postAuthor = document.getElementById("postAuthor").value;
let post = document.getElementById("postBody").value;

document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

let blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
let commentsSection = commentsTemplate();
let postElement = document.getElementById("post");

postElement.innerHTML = blogSection;
postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
