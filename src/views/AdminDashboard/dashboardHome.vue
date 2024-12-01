<template>
  <div class="font-primary">
    <div>
    <dropfile class="mx-48" />
  </div>
     <div class="mx-52 my-20">
      <h1 class="text-center text-4xl uppercase font-bold">scan result</h1>
      <div class="flex flex-col space-y-5 mt-4 uppercase">
        <span class="font-bold">amount :</span> <input v-model="images.amount" class="border rounded px-2 py-1" />
        <span class="font-bold">date :</span> <input v-model="images.date" class="border rounded px-2 py-1" />
        <span class="font-bold">account number :</span> <input v-model="images.naccount" class="border rounded px-2 py-1" />
        <span class="font-bold">check number :</span> <input v-model="images.ncheck" class="border rounded px-2 py-1" />
        <span class="font-bold">recepient :</span> <input v-model="images.recepient" class="border rounded px-2 py-1" />

       <button @click="saveDoc" class="px-10 py-2 bg-primary text-white rounded-lg font-bold">Save this file</button>
      </div>
     
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    async saveDoc() {
      try {
        const response = await axios.post('http://localhost:5000/api/documents/save', this.images, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Data posted successfully:', response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    },
  },
  provide() {
    return {
      setImageUrl: this.setImageUrl,
    };
  },
  data() {
    return {
      images: {
        amount: '',
        date: '',
        naccount: '',
        ncheck: '',
        recepient: ''
      },
    };
  },
};
</script>
