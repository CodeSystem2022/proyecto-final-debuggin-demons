// Create the footer element
const footerElement = document.querySelector('footer');
footerElement.classList.add('bg-dark', 'text-center', 'text-white');

// Create the container element
const containerElement = document.createElement('div');
containerElement.classList.add('container', 'p-4');

// Create the social media section element
const socialMediaSectionElement = document.createElement('section');
socialMediaSectionElement.classList.add('mb-4');

// Create the social media buttons
const facebookButtonElement = document.createElement('a');
facebookButtonElement.classList.add('btn', 'btn-outline-light', 'btn-floating', 'm-1');
facebookButtonElement.href = '#!';
facebookButtonElement.setAttribute ('role','button');
const facebookIconElement = document.createElement('i');
facebookIconElement.classList.add('fab', 'fa-facebook-f');
facebookButtonElement.appendChild(facebookIconElement);

const twitterButtonElement = document.createElement('a');
twitterButtonElement.classList.add('btn', 'btn-outline-light', 'btn-floating', 'm-1');
twitterButtonElement.href = '#!';
twitterButtonElement.role = 'button';
const twitterIconElement = document.createElement('i');
twitterIconElement.classList.add('fab', 'fa-twitter');
twitterButtonElement.appendChild(twitterIconElement);

const googleButtonElement = document.createElement('a');
googleButtonElement.classList.add('btn', 'btn-outline-light', 'btn-floating', 'm-1');
googleButtonElement.href = '#!';
googleButtonElement.role = 'button';
const googleIconElement = document.createElement('i');
googleIconElement.classList.add('fab', 'fa-google');
googleButtonElement.appendChild(googleIconElement);

const instagramButtonElement = document.createElement('a');
instagramButtonElement.classList.add('btn', 'btn-outline-light', 'btn-floating', 'm-1');
instagramButtonElement.href = '#!';
instagramButtonElement.role = 'button';
const instagramIconElement = document.createElement('i');
instagramIconElement.classList.add('fab', 'fa-instagram');
instagramButtonElement.appendChild(instagramIconElement);

const linkedinButtonElement = document.createElement('a');
linkedinButtonElement.classList.add('btn', 'btn-outline-light', 'btn-floating', 'm-1');
linkedinButtonElement.href = '#!';
linkedinButtonElement.role = 'button';
const linkedinIconElement = document.createElement('i');
linkedinIconElement.classList.add('fab', 'fa-linkedin-in');
linkedinButtonElement.appendChild(linkedinIconElement);

const githubButtonElement = document.createElement('a');
githubButtonElement.classList.add('btn', 'btn-outline-light', 'btn-floating', 'm-1');
githubButtonElement.href = '#!';
githubButtonElement.role = 'button';
const githubIconElement = document.createElement('i');
githubIconElement.classList.add('fab', 'fa-github');
githubButtonElement.appendChild(githubIconElement);

// Append the social media buttons to the social media section element
socialMediaSectionElement.appendChild(facebookButtonElement);
socialMediaSectionElement.appendChild(twitterButtonElement);
socialMediaSectionElement.appendChild(googleButtonElement);
socialMediaSectionElement.appendChild(instagramButtonElement);
socialMediaSectionElement.appendChild(linkedinButtonElement);
socialMediaSectionElement.appendChild(githubButtonElement);

// Create the form section element
const formSectionElement = document.createElement('section');
formSectionElement.classList.add('mi-clase');

// Create the form element
const formElement = document.createElement('form');
formElement.action = '';

// Create the email input element
const emailInputElement = document.createElement('input');
emailInputElement.type = 'email';
emailInputElement.id = 'form5Example21';
emailInputElement.classList.add('form-control');
emailInputElement.placeholder = 'Email address';

// Create the email input label element
const emailInputLabelElement = document.createElement('label');
emailInputLabelElement.for = 'form5Example21';
emailInputLabelElement.classList.add('form-label');
emailInputLabelElement.textContent = 'Email address';

// Create the email input wrapper element
const emailInputWrapperElement = document.createElement('div');
emailInputWrapperElement.classList.add('form-outline', 'form')

// Append the email input wrapper element to the form element
formElement.appendChild(emailInputWrapperElement);

// Create the submit button element
const submitButtonElement = document.createElement('button');
submitButtonElement.type = 'submit';
submitButtonElement.classList.add('btn', 'btn-outline-light', 'mb-4');
submitButtonElement.textContent = 'Subscribe';

// Append the submit button element to the form element
formElement.appendChild(submitButtonElement);

// Append the form element to the form section element
formSectionElement.appendChild(formElement);

// Create the text section element
const textSectionElement = document.createElement('section');
textSectionElement.classList.add('mb-4');

// Create the text element
const textElement = document.createElement('p');
textElement.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.';

// Append the text element to the text section element
textSectionElement.appendChild(textElement);

// Create the links section element
const linksSectionElement = document.createElement('section');
linksSectionElement.classList.add('mi-otra-clase');

// Create the links row element
const linksRowElement = document.createElement('div');
linksRowElement.classList.add('row');

// Create the links column elements
const linksColumn1Element = document.createElement('div');
linksColumn1Element.classList.add('col-lg-3', 'col-md-6', 'mb-4', 'mb-md-0');
const linksColumn2Element = document.createElement('div');
linksColumn2Element.classList.add('col-lg-3', 'col-md-6', 'mb-4', 'mb-md-0');
const linksColumn3Element = document.createElement('div');
linksColumn3Element.classList.add('col-lg-3', 'col-md-6', 'mb-4', 'mb-md-0');
const linksColumn4Element = document.createElement('div');
linksColumn4Element.classList.add('col-lg-3', 'col-md-6', 'mb-4', 'mb-md-0');

// Create the links elements
const links1Element = document.createElement('a');
links1Element.classList.add('text-white');
links1Element.textContent = 'Link 1';
links1Element.href = '#!';
const links2Element = document.createElement('a');
links2Element.classList.add('text-white');
links2Element.textContent = 'Link 2';
links2Element.href = '#!';
const links3Element = document.createElement('a');
links3Element.classList.add('text-white');
links3Element.textContent = 'Link 3';
links3Element.href = '#!';
const links4Element = document.createElement('a');
links4Element.classList.add('text-white');
links4Element.textContent = 'Link 4';
links4Element.href = '#!';

// Append the links to the links column elements
linksColumn1Element.appendChild(links1Element);
linksColumn2Element.appendChild(links2Element);
linksColumn3Element.appendChild(links3Element);
linksColumn4Element.appendChild(links4Element);

// Append the links column elements to the links row element
linksRowElement.appendChild(linksColumn1Element);
linksRowElement.appendChild(linksColumn2Element);
linksRowElement.appendChild(linksColumn3Element);
linksRowElement.appendChild(linksColumn4Element);

// Append the links row element to the links section element
linksSectionElement.appendChild(linksRowElement);

// Create the copyright element
const copyrightElement = document.createElement('div');
copyrightElement.classList.add('text-center', 'p-3', 'bg-dark');
copyrightElement.style = 'background-color: rgba(0, 0, 0, 0.2;'

// Create the copyright text element
const copyrightTextElement = document.createElement('a');
copyrightTextElement.classList.add('text-white');
// copyrightTextElement

// Set the copyright text
copyrightTextElement.textContent = '© 2023 Copyright:';

// Append the copyright text element to the copyright element
copyrightElement.appendChild(copyrightTextElement);

// Append the social media section element to the container element
containerElement.appendChild(socialMediaSectionElement);

// Append the form section element to the container element
containerElement.appendChild(formSectionElement);

// Append the text section element to the container element
containerElement.appendChild(textSectionElement);

// Append the links section element to the container element
containerElement.appendChild(linksSectionElement);

// Append the copyright element to the container element
containerElement.appendChild(copyrightElement);


// Append the container element to the footer element
footerElement.appendChild(containerElement);