// Helpful variables
var addNewPost = $(".new-post-title");
var cancelNewPost = $(".new-post-cancel");
var newPostContainer = $(".new-post-toggle");
var postTitle = $(".title");
var postContent = $(".content");
var blogPosts = $(".blogposts");
// Add new post
addNewPost.click(function() {
	if (newPostContainer.css("display", "none")) {
		newPostContainer.css("display", "block");
		blogPosts.css("display", "none");
	}
});
cancelNewPost.click(function() {
	$(".title").val = "";
	$(".content").val = "";
	newPostContainer.toggle();
	blogPosts.toggle();
})