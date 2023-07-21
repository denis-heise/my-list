export default {
  methods: {
    removeCard (evt) {
      const target = evt.target;
      const listBlock = target.closest('.right-one-list');
      const listName = listBlock.querySelector('.right-one-list__title span').textContent;
      const arrayItems = JSON.parse(JSON.stringify(this.getData));

      arrayItems.forEach(item => {
        if(item['name'] === listName){
          item['items'].forEach(element => {
            if(element['colorName'] === target.classList[1]) {
              const numberElement = element['number'] -= 1;

              this.changeData(listName, element['name'], numberElement, element['colorName'], 'number');
              this.postData(listName, element['name'], element['color'], element['colorName'], numberElement);
            }
          });
        }
      });
    }
  }
}