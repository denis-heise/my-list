export default {
    methods: {
        selectList (evt) {
            const target = evt.target;
            const listBlock = target.closest('.left-one-list');
            const listItems = listBlock.querySelector('.left-one-list__list-item');
            const arrow = listBlock.querySelector('.left-one-list__title svg');
      
            listItems.classList.toggle('visible');
            arrow.classList.toggle('rotate');
        },
        selectItems (evt) {
            const target = evt.target;
            const parentBlock = target.closest('.left-one-list__checkbox-title');
            const labelCheckbox = parentBlock.querySelector('label');
            const listBlock = target.closest('.left-one-list');
            const listItems = listBlock.querySelector('.left-one-list__list-item');
            const liBlocks = listBlock.querySelectorAll('.left-one-list__li');
        
            if(labelCheckbox.classList.contains('select')){
                listBlock.querySelectorAll('label').forEach(item => item.classList.remove('select'));
            } else {
                listBlock.querySelectorAll('label').forEach(item => item.classList.add('select'));
            }
        
            if(listItems.querySelectorAll('.select').length === 0){
                labelCheckbox.classList.remove('select');
            } else {
                labelCheckbox.classList.add('select');
            }
        
            liBlocks.forEach(item => {
                const nameItem = item.querySelector('label');
                const colorItem = item.querySelector('.color'); 
                const colorName = colorItem.classList[1];
                const numberColor = item.querySelector('.number-item').value;
                const select = nameItem.classList.contains('select');
        
                this.postData(labelCheckbox.textContent, nameItem.textContent, colorItem.value, colorName, numberColor, select);
            });
        },
        selectOneItem (evt) {
            const target = evt.target;
            const listBlock = target.closest('.left-one-list');
            const listName = listBlock.querySelector('.left-one-list__checkbox-title label');
            const listItems = listBlock.querySelector('.left-one-list__list-item');
            const liBlock = target.closest('.left-one-list__li');
            const nameItem = liBlock.querySelector('label');
            const colorItem = liBlock.querySelector('.color'); 
            const colorName = colorItem.classList[1];
            const numberColor = liBlock.querySelector('.number-item').value;
        
            if(evt.type === 'click'){
                nameItem.classList.toggle('select');
            }
            if(listItems.querySelectorAll('.select').length === 0){
                listName.classList.remove('select');
            } else {
                listName.classList.add('select');
            }
        
            this.changeData(listName.textContent, nameItem.textContent, colorItem.value, colorName, 'color');
            setTimeout(() => {
                this.postData(listName.textContent, nameItem.textContent, colorItem.value, colorName, numberColor, nameItem.classList.contains('select'));
            }, 200);
        }
    }
}