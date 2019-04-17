const addTarget = () => {
  const links = document.getElementById('preview').querySelectorAll('a')
  links.forEach((link) => link.setAttribute("target", "_blank"))
}

const handleChange = () => {
  document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value, { breaks: true })
  addTarget()
}

document.getElementById('editor').addEventListener('input', handleChange)
handleChange()