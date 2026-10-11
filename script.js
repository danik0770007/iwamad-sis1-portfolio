// ===== Dark / light theme toggle =====
const html = document.documentElement
const toggle = document.querySelector('#theme-toggle')

function applyTheme(theme) {
  html.dataset.theme = theme
  toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode'
  toggle.setAttribute('aria-pressed', String(theme === 'dark'))
}

let saved = null
try { saved = localStorage.getItem('theme') } catch (e) { /* storage unavailable */ }
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
applyTheme(saved || (prefersDark ? 'dark' : 'light'))

toggle.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  try { localStorage.setItem('theme', next) } catch (e) { /* ignore */ }
})

// ===== Contact form validation =====
const form = document.querySelector('#contact-form')
const success = document.querySelector('#form-success')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function setError(id, message) {
  const input = document.querySelector('#' + id)
  document.querySelector('#' + id + '-error').textContent = message
  input.setAttribute('aria-invalid', message ? 'true' : 'false')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  success.textContent = ''

  const name = form.elements.name.value.trim()
  const email = form.elements.email.value.trim()
  const message = form.elements.message.value.trim()
  let firstInvalid = null

  const nameError = name ? '' : 'Please enter your name.'
  let emailError = ''
  if (!email) emailError = 'Please enter your email address.'
  else if (!emailPattern.test(email)) emailError = 'This email looks incorrect. Use the format name@example.com.'
  const messageError = message ? '' : 'Please write a message.'

  setError('name', nameError)
  setError('email', emailError)
  setError('message', messageError)

  if (nameError) firstInvalid = form.elements.name
  else if (emailError) firstInvalid = form.elements.email
  else if (messageError) firstInvalid = form.elements.message

  if (firstInvalid) { firstInvalid.focus(); return }

  success.textContent = `Thank you, ${name}! Your message was accepted. (Demo form: nothing is actually sent.)`
  form.reset()
})
