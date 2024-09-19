<template>
  <div>
    <carousel :transition="500" :autoplay="2000" :wrapAround="true" :snapAlign="center" :breakpoints="breakpoints">
        
        <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <div class="card-stats">
            <div
              class="one-third"
              v-for="(stat, index) in item.info"
              :key="index"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div>
        </template>
      </Card>
        </slide>
        
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    
  </div>
</template>


<script>

import Card from "@/components/UI/Card.vue";
import items from "@/seeders/items.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items: items,
      breakpoints: {
          300:{
              itemsToShow: 1
          },
          700:{
              itemsToShow: 4
          }
      }
    };
  },
};
</script>



<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>