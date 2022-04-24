<template>
    <img :src="sliderImgData.originalImage" alt="">
    <img :src="slidingImage" alt="">
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { PropType } from 'vue';
import { VerifySliderCodeResult } from '../../services/login';
const props = defineProps({
    sliderImgData: {
        type: Object as PropType<VerifySliderCodeResult>,
        default: () => ({
            expireTime: 0,
            slidingImage: '',
            originalImage: '',
            xWidth: 0,
            yHeight: 0
        })
    }
})
const slidingImage = computed(() => `data:image;${props.sliderImgData.slidingImage}`)
</script>
<style lang="scss" src="./slider-verify-code.scss" scoped>
</style>