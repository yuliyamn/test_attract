<template src="./filters.html"></template>

<script>
  import { mapState } from 'vuex';
  import vueSlider from 'vue-slider-component';
  import router from '../../store/router';

  export default {
    data() {
      return {
        maxPrice: 0,
        priceValue: [
          0,
          this.maxPrice
        ],
        categoriesSelected: [],
        citySelected: 0,
        categoryCount: [],
      }
    },
    name: "filters",
    computed: {
      ...mapState([
        'data',
        'city',
        'category'
      ]),
    },
    methods: {
      pushData() {
        this.$store.commit('UPDATE_CATEGORIES_SELECTED', this.categoriesSelected);
        this.$store.commit('UPDATE_CITY_SELECTED', this.citySelected);
        this.$store.commit('UPDATE_PRICE_SELECTED', this.priceValue);
        router.push({
          'path': '?categories=' + this.categoriesSelected +
          '&city=' + this.citySelected +
          '&priceFrom=' + this.priceValue[0] +
          '&priceTo=' + this.priceValue[1]
        });
      },

      GetMaxPrice() {
        let dataArray = this.data;
        let price = Math.max.apply(Math, dataArray.map((i) => {return i.price;}));
        this.maxPrice = price;
      },

      CountCategory() {
        let  count = {};
        this.data.forEach((i) => { count[i.category] = (count[i.category]||0) + 1;});
        this.categoryCount = count;
      },
    },
    mounted() {
      this.GetMaxPrice();
      this.CountCategory();
      this.$nextTick(() => this.$refs.priceSlider.setValue([0, this.maxPrice]));

      if(!!this.$route.query.city || !!this.$route.query.categories || !!this.$route.query.priceFrom || !!this.$route.query.priceTo) {
        this.citySelected = parseInt(this.$route.query.city);
        this.categories = this.$route.query.categories;
        this.priceValue = [parseInt(this.$route.query.priceFrom), parseInt(this.$route.query.priceTo)];
        this.categoriesSelected = [];

        this.$nextTick(() => this.$refs.priceSlider.setValue([
          parseInt(this.$route.query.priceFrom),
          parseInt(this.$route.query.priceTo)
        ]));

        if (this.categories) {
          this.categories = this.categories.split(',');
          this.categories.forEach((item) => {
            this.categoriesSelected.push(parseInt(item));
          });
        }
      }

    },
    components: {
      vueSlider
    },
  }
</script>

<style src="./filters.scss" lang="scss"></style>
