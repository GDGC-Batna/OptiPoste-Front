<template>
  <div>
    <div>
      <h1>scan result</h1>
     <span class="font-bold">amount :</span> {{this.images.amount}}
      {{this.images.date}}
      {{this.images.naccount}}
      {{this.images.ncheck}}
      {{this.images.recepient}}
    </div>
    <div>
    <dropfile class="mx-48" />
  </div>
  </div>
</template>

<script>
import dropfile from "../../components/dropfile.vue";
export default {
  components: {
    dropfile,
  },
  methods: {
    setImageUrl(ImageUrls) {
      console.log("Image URL received:", ImageUrls);
      this.images = ImageUrls;
    },
  },
  provide() {
    return {
      setImageUrl: this.setImageUrl,
    };
  },
  data() {
    return {
      images: [],
    };
  },
};
</script>
