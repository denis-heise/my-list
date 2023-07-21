<template>
  <div class="wrapper">
    <div class="left-block">
      <div class="left-one-list" v-for="data in this.sortedArray" :key="data">
        <div class="left-one-list__title">
          <svg @click="selectList" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 306 306">
            <g>
              <g id="keyboard-arrow-right">
                <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306"/>
              </g>
            </g>
          </svg>
          <div class="left-one-list__checkbox-title">
            <input :id="data.name" type="checkbox" @click="selectItems">
            <label :for="data.name">{{data.name}}</label> 
          </div>
        </div>
        <ul class="left-one-list__list-item">
          <li class="left-one-list__li" v-for="item in data.items" :key="item.name">
            <div class="left-one-list__one-input">
              <input :id="[data.name, item.name]" type="checkbox">
              <label :for="[data.name, item.name]" @click="selectOneItem">{{item.name}}</label>
            </div>
            <div class="left-one-list__one-color">
              <input type="text" class="number-item" :value="item.number" @input="checkNumber" @keypress="checkLengthNumber" @blur="checkValueNumber">
              <input type="color" class="color" :class="item.colorName" :value="item.color" @input="selectOneItem">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-block">
      <div class="right-one-list" v-for="data in getData" :key="data.name">
        <div class="right-one-list__title">
          <span>{{data.name}}</span>
          <button class="frozen" @click="sortNumberCard">Перемешать</button>
        </div>
        <div class="right-one-list__list-item">
          <div class="right-one-list__one-type" :class="{ hide: item.number === 0 || !item.select }" v-for="item in data.items" :key="item">
            <div class="color-right" :class="item.colorName" :style="{ backgroundColor: item.color}" v-for="number in item.number" :key="number" @click="removeCard"></div>
          </div>
        </div>
        <div class="right-one-list__mix-types hide">
          <div class="color-right" :class="[item.select ? '' : 'hide', item.colorName]" :style="{ backgroundColor: item.color}" v-for="item in sortArrayCards(data.items)" :key="[item.color, item.select]" @click="removeCard"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataHandler from '../mixins/data';
import changeHandler from '../mixins/change';
import selectHandler from '../mixins/select';
import sortHandler from '../mixins/sort';
import removeHandler from '../mixins/remove';

export default {
  name: 'mainBlock',
  mixins: [dataHandler, changeHandler, selectHandler, sortHandler, removeHandler],
  data(){
      return{
        sortedArray: []
      }
    },
  mounted(){
    this.sortedArray = this.getData;
  },
  computed: {
    getData () {
      return this.$store.state.data.data
    },
  }
}
</script>
