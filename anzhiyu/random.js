var posts=["2024/05/03/hello-world/","2024/03/10/启动篇/","2024/03/13/个人日记篇/","2024/03/10/生活日记篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };