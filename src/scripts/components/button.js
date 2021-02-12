import render from './render';
export default function createButton ({
  label,
  onClick
}) {
  const button = document.createElement('button');
  button.textContent = label;
  button.addEventListener('click', onClick);
  render(button);
}
