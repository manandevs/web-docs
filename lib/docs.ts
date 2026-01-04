export const docsData = {
  html: {
    intro: {
      title: "Introduction to HTML",
      description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It is the skeletal system of the web.",
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`,
      points: [
        "HTML describes the structure of a Web page.",
        "HTML consists of a series of elements.",
        "Elements tell the browser how to display the content.",
      ],
    },
    elements: {
      title: "HTML Elements & Tags",
      description: "An HTML element is defined by a start tag, some content, and an end tag. Elements can be nested inside other elements.",
      code: `<!-- A Paragraph Element -->
<p>This is a paragraph.</p>

<!-- A Link Element -->
<a href="https://google.com">Click me</a>

<!-- An Image Element (Self-closing) -->
<img src="logo.png" alt="Logo" />`,
      points: [
        "Block-level elements start on a new line.",
        "Inline elements do not start on a new line.",
        "Some elements are 'void' (no closing tag).",
      ],
    },
  },

  // GIT MODULE
  git: {
    install: {
      title: "Installing Git",
      description: "Before you can use Git, you have to install it on your computer. You can check if it is already installed by typing 'git --version' in your terminal.",
      code: `# Check version
git --version

# Configure identity (Run after install)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"`,
      points: [
        "Download Git from git-scm.com.",
        "Configure your username and email immediately.",
      ],
    },
    init: {
      title: "Initializing & Cloning",
      description: "To start a new project with Git, you either initialize a new repository locally or clone an existing one from a remote source like GitHub.",
      code: `# Initialize a new repo in current folder
git init

# Clone an existing repo
git clone https://github.com/user/repo.git`,
      points: [
        "git init creates a hidden .git folder.",
        "git clone downloads the entire history.",
      ],
    },
  },
};