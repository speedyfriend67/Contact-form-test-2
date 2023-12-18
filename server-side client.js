<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Thread</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/disqus/latest/disqus.min.js"></script>
  <script>
    // Initialize Disqus with your forum shortname
    DISQUS.config({
      shortname: 'your-forum-shortname',
      identifier: 'my-thread-id',
      url: 'https://your-github-pages-url.com/thread',
    });

    // Load Disqus comments when the page is ready
    window.onload = function() {
      DISQUS.reset();
      DISQUS.show();
    };

    // Create function to handle new comment submission
    function handleNewComment(text) {
      // Use AJAX to send the comment text to your own server-side script
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/submit-comment');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // Update UI and reload Disqus comments
            // ... 
          } else {
            // Handle error
            // ...
          }
        }
      };
      xhr.send(JSON.stringify({ text }));
    }

    // Bind event listener to comment form if present
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
      commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value;
        handleNewComment(commentText);
      });
    }
  </script>
</head>
<body>
  <h1>My Thread</h1>
  <div id="disqus_thread"></div>

  <form id="comment-form">
    <textarea id="comment-text" placeholder="Write your comment"></textarea>
    <button type="submit">Submit</button>
  </form>

</body>
</html>
