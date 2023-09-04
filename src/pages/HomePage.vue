<script>
export default {
  name: 'HomePage',
  data() {
    return {
      slides: [
        {
          image: 'https://www.my-personaltrainer.it/2021/04/13/vaccinazione-cane-orig.jpeg',
          title: 'Cane vaccinato',
          text: 'Questo cane è stato vaccinato e gode di ottima salute.',
          selected: true
        },
        {
          image: 'https://doctorvet.it/wp-content/uploads/2019/10/vaccinazione-cane.jpg',
          title: 'Cane vaccinato',
          text: 'Questo cane è stato vaccinato e protegge la sua salute.',
          selected: false
        },
        {
          image: 'https://www.my-personaltrainer.it/2021/04/13/vaccino-gatto-orig.jpeg',
          title: 'Gatto vaccianto',
          text: "Questo gatto è stato vaccinato e sta bene.",
          selected: false
        },
        {
          image: 'https://www.cani.it/img/330ccd33d85824a3c04b3d9e3c620281/w/755/289.jpg',
          title: 'Cane vaccinato',
          text: 'Questo cane è stato vaccinato e ora è al sicuro.',
          selected: false
        },
        {
          image: 'https://www.starbene.it/content/uploads/2023/07/pappagallo.jpg',
          selected: false
        }
      ],
      movimento: 0,
      autoScroll: null
    }
  },
  created() {
    this.startAutoScroll();
  },
  methods: {
    selectSlide(index) {
      this.movimento = index;
    },
    prevSlide() {
      this.movimento--;
      if (this.movimento < 0) {
        this.movimento = this.slides.length - 1;
      }
    },
    nextSlide() {
      this.movimento++;
      if (this.movimento > this.slides.length - 1) {
        this.movimento = 0;
      }
    },
    startAutoScroll() {
      this.autoScroll = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScroll);
    }
  }
}
</script>
<template>
  <div class="slider-container">
    <div class="slider-wrapper" @mouseover="stopAutoScroll" @mouseleave="startAutoScroll">

      <div class="item w-100">
        <img :src="slides[movimento].image">
        <div class="overlay">
          <h2>{{ slides[movimento].title }}</h2>
          <p>{{ slides[movimento].text }}</p>
        </div>
      </div>

      <div class="thumbs w-100">
        <div class="prev" @click="prevSlide"></div>
        <div class="next" @click="nextSlide"></div>
        <img :src="slide.image" v-for="(slide, index) in slides" :key="index" class="thumb"
          :class="[movimento === index ? 'active' : '']" @click="selectSlide(index)">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.slider-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.slider-wrapper {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}


.item {
  width: 100%;
  height: auto;
  position: relative;
}

.item img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.thumbs {
  display: flex;
  align-items: center;
  height: auto;
  background: #000;
  position: relative;
}


.thumb {
  flex: 1;
  max-width: 20%;
  opacity: 0.5;
  object-fit: cover;
  cursor: pointer;
}


.thumb img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.thumb.active {
  border: 2px solid #ccc;
  opacity: 1;
}

.overlay {
  position: absolute;
  bottom: 0;
  color: black;
  padding: 20px;
  text-align: left;
}

.slider-title {
  font-size: 2rem;
}

.slider-text {
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) {

  .thumbs {
    flex-direction: row;
    justify-content: center;
  }

  .thumb {
    max-width: 20%;
  }

  .slider-title {
    font-size: 1.5rem;
  }

  .slider-text {
    font-size: 1rem;
  }
}
</style>