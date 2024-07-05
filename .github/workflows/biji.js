<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notes Viewer</title>
</head>
<body>
  <h1>Notes from Main Branch</h1>
  <div id="notes"></div>

  <!-- 直接在 HTML 文件中嵌入 JavaScript 代码 -->
  <script>
    async function fetchMainBranchNotes() {
      const response = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/contents/notes.md?ref=main');
      const data = await response.json();
      const content = atob(data.content);
      document.getElementById('notes').innerText = content;
    }

    fetchMainBranchNotes();
  </script>
</body>
</html>
