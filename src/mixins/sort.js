export default {
  methods: {
    sortNumberCard (evt) {
      const target = evt.target;
      const listBlock = target.closest('.right-one-list');
      const listItem = listBlock.querySelector('.right-one-list__list-item');
      const listTypes = [...listItem.querySelectorAll('.right-one-list__one-type')];
      const mixTypesBlock = listBlock.querySelector('.right-one-list__mix-types');

      if(listTypes.every(item => item.classList.contains('hide'))){
        target.classList.add('frozen');
      } else {
        target.classList.remove('frozen');
      }

      target.classList.toggle('mix');
      listItem.classList.toggle('mix');

      if(listItem.classList.contains('mix') && !target.classList.contains('frozen')){
        listItem.classList.add('hide');
        mixTypesBlock.classList.remove('hide');
      } else {
        listItem.classList.remove('hide');
        mixTypesBlock.classList.add('hide');
      }

      target.textContent = target.classList.contains('mix') && !target.classList.contains('frozen') ? 'Сортировать' : 'Перемешать';
    },
    sortArrayCards (array) {
      let itemsArray = [];
  
      array.forEach(item => {
        for(let i = 0; i < item['number']; i++){
          const newItem = {
            colorName: item['colorName'],
            color: item['color'],
            select: item['select']
          };
          itemsArray.push(newItem);
        }
        itemsArray.sort(() => Math.random() - 0.5);
      });
  
      return itemsArray;
    }
  }
}