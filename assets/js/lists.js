const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" icon-name="${list.icon}"></i>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[0].link}"
          class="listItem"
          >${list.links[0].name}</a>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[1].link}"
          class="listItem"
          >${list.links[1].name}</a>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[2].link}"
          class="listItem"
          >${list.links[2].name}</a>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[3].link}"
          class="listItem"
          >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[0].link}"
        class="listItem"
        >${list.links[0].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[1].link}"
        class="listItem"
        >${list.links[1].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[2].link}"
        class="listItem"
        >${list.links[2].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[3].link}"
        class="listItem"
        >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();

const lists = document.querySelectorAll('.list');

lists.forEach(list => {
  list.addEventListener('mouseenter', () => {
    list.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });
  
  list.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const listRect = list.getBoundingClientRect();
    
    const distanceX = mouseX - (listRect.left + listRect.width / 2);
    const distanceY = mouseY - (listRect.top + listRect.height / 2);
    
    const rotateX = -distanceY / 40;
    const rotateY = distanceX / 40;
    
    list.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    
    list.style.boxShadow = '0 0 8px 2px rgba(147, 40, 255, 0.3)';
  });
  
  list.addEventListener('mouseleave', () => {
    list.style.transform = 'none';
    list.style.boxShadow = 'none';
  });
});

