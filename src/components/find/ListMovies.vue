<script lang="ts" setup>
import { toRefs } from 'vue';
import Movie from '../../models/movie.model';
import { readonly } from 'vue';

const props = defineProps({
  movie: Movie
})



const { movie } = toRefs(props);
console.log(movie);
</script>

<template>
<!-- @click="handleClick($event)" -->

<div class="media-box" >
    <div :id="movie.id" class="media">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="media-picture" />
        <div class="media-text-box">
            <div class="media-text">
                <h2 class="media-title">{{ movie.title + " (" + movie.release_date.substring(0, 4) +")"}}</h2>
                <p class="synopsis">
                    {{movie.overview}}
                </p>
            </div>
            <p class="duration">Duration : {{movie.runtime}} min</p>
            <div class="pop-percent">
                <p class="percent">{{movie.vote_average * 10}}%</p>
                <img class="point3" src="../../assets/logos/point3.svg" alt="point" />
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
// media
.media-box {
    overflow: hidden;
    height: 190px;
    margin: 24px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.media {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
}

.media-text-box {
    display: flex;
    margin: 0 0 0 15px;
    flex: 1;
    flex-direction: column;
}

.media-text {
    max-height: 100px;
    overflow: hidden;
    flex: 2;
}

.media-title {
    font-size: 15px;
    font-weight: 600;
    margin: 7px 0 0 0;
}

.synopsis {
    font-weight: 400;
    font-size: 14px;
    text-align: justify;
    text-justify: auto;
    margin: 7px 0 0 0;
}

.duration {
    color: var(--dark-01);
    font-size: 12px;
}

.pop-percent {
    display: flex;
    margin: 0;
    justify-content: space-between;
}

.percent {
    color: var(--green);
}
</style>