export default {
    methods: {
        checkNumber (evt) {
            const target = evt.target;
            const listBlock = target.closest('.left-one-list');
            const listName = listBlock.querySelector('.left-one-list__checkbox-title label');
            const liBlock = target.closest('.left-one-list__li');
            const nameItem = liBlock.querySelector('label');
            const colorItem = liBlock.querySelector('.color'); 
            const colorName = colorItem.classList[1];
            const numberColor = liBlock.querySelector('.number-item').value;
            const NUMBER_REGEXP = /[^0-9]/g;
      
            target.value = target.value.replace(NUMBER_REGEXP, '');
      
            this.changeData(listName.textContent, nameItem.textContent, numberColor, colorName, 'number');
            this.postData(listName.textContent, nameItem.textContent, colorItem.value, colorName, numberColor, nameItem.classList.contains('select'));
        },
        checkValueNumber (evt) {
            const target = evt.target;
            const listBlock = target.closest('.left-one-list');
            const listName = listBlock.querySelector('.left-one-list__checkbox-title label');
            const liBlock = target.closest('.left-one-list__li');
            const nameItem = liBlock.querySelector('label');
            const colorItem = liBlock.querySelector('.color'); 
            const colorName = colorItem.classList[1];
        
            if(target.value === ''){
                target.value = 0;
            }
        
            this.changeData(listName.textContent, nameItem.textContent, target.value, colorName, 'number');
        },
        checkLengthNumber (evt) {
            const target = evt.target;
        
            if(target.value.length === 2) {
                target.value = target.value.slice(0, -1);
            }
        }
    }
}