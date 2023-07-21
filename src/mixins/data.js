export default {
  methods: {
    postData (listName, nameItem, colorItem, colorName, numberColor, select) {
      const arrayItems = JSON.parse(JSON.stringify(this.getData));

      arrayItems.forEach(element => {
        if(element['name'] === listName){
          const arrayElements = element['items'];
          let newDataItem = {
            id: arrayElements.length + 1,
            name: nameItem,
            colorName: colorName,
            color: colorItem,
            number: Number(numberColor),
            select: select === undefined ? true : select
          };
          
          arrayElements.forEach(item => {
            if(item['name'] === nameItem.textContent){
              newDataItem['id'] = item['id'];
            } 
          });

          const getIndexItem = (item) => item['name'] === newDataItem['name'];
          const myIndex = arrayElements.findIndex(getIndexItem);

          if (myIndex !== -1) {
            arrayElements.splice(myIndex, 1);
            arrayElements.push(newDataItem);
          } else {
            arrayElements.push(newDataItem);
          }
        }
      });

      this.$store.commit('data/GET_DATA', arrayItems);
    },
    changeData (listName, nameItem, valueType, colorName, type) {
      this.sortedArray.forEach(item => {
        if(item['name'] === listName){
          item['items'].forEach(element => {
            if(element['name'] === nameItem){
              element[type] = valueType;
              element['colorName'] = colorName;
            }
          });
        }
      });
    }
  }
}