import data from './main.js';
const assistants = [];

// seperate the assistants
data.forEach((item, key) => {
    if(item.assistant) {
        assistants.push(item);
        assistants[key].members = [];
    }
});
console.log(assistants);

// Group the members under assistants
data.forEach(item => {
    assistants.forEach(ass => {
        if(item.group == ass.group && item != ass) {

            ass.members.push(item);
        }
    });
});

const home = document.querySelector(".home");
console.log(home);

assistants.forEach(assistant => {

    // Create Elements
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardAssist = document.createElement('h3');
    const cardBody = document.createElement('div');
    const cardList = document.createElement('ul');

    // Append Class
    card.classList.add('card');
    cardTitle.classList.add('card__title');
    cardAssist.classList.add('card__assist');
    cardHeader.classList.add('card__header');
    cardList.classList.add('card__list');
    cardBody.classList.add('card__body', '-body-color');

    // Styles by group color

    cardTitle.style.borderTop = `2px solid ${assistant.group}`;
    cardAssist.style.borderBottom = `2px solid ${assistant.group}`;
    cardBody.style.backgroundColor = `${assistant.group}`

    // EventListeners
    let isClicked = false;
    cardHeader.addEventListener('click', function() {
        // Add and remove active class to the card body when clicked card header
        const parent = this.parentElement;
        const selectedBody = parent.querySelector('.card__body');
        if (isClicked) {
            selectedBody.classList.remove('-active');
            isClicked = false;
            return null;
        }
        selectedBody.classList.add('-active');
        isClicked = true;
    });

    // InnerHtml for card-header section 
    cardTitle.innerHTML = `${assistant.name}`;
    cardAssist.innerHTML = `Group ${assistant.group}`;

    // append Members to card-body
    assistant.members.forEach(member => {
        const cardItem = document.createElement('li');
        cardItem.innerHTML = `${member.name}`;
        cardItem.classList.add('card__item');
        cardList.appendChild(cardItem);
    })

    // build structures of card
    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(cardAssist);
    cardBody.appendChild(cardList);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    home.appendChild(card);
});
export default assistants;