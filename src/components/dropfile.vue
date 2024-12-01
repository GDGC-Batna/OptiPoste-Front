<template>
  <div v-if="!isLoading">
    <div
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        <div
          v-if="!files.length"
          class="bg-[#CCCCCC] flex flex-col items-center py-20 space-y-5 mt-10"
        >
          <HardDriveUpload class="size-20" />
          <span class="text-3xl font-semibold">Drop files here or</span>
          <u class="cursor-pointer animate-pulse text-lg">click here</u> to
          upload.
        </div>
      </label>

      <div
        class="mt-4 flex items-center justify-center py-5 bg-[#CCCCCC] mx-auto"
        v-if="files.length"
      >
        <div
          v-for="(file, index) in files"
          :key="file.name"
          class="relative"
          draggable="true"
          @dragstart="startDrag(index)"
          @dragover="dragoverItem(index)"
          @dragend="endDrag"
        >
          <div>
            <button
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
              class="absolute top-1 left-1 text-black"
            >
              <b>&times;</b>
            </button>
          </div>
          <div>
            <img
              class="h-fit w-fit cursor-pointer"
              :src="generateThumbnail(file)"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="files.length">
      <button
        v-if="!isLoading"
        @click="uploadImage"
        class="bg-primary text-white font-bold py-2 px-6 text-sm rounded-lg mt-4 w-full"
      >
        Upload Images
      </button>
    </div>
  </div>
  <div v-else class="flex flex-col justify-center items-center h-[50vh]">
    <span class="text-3xl font-bold uppercase">  Uploading images ...</span>
  
    <LoaderCircle class="size-20 text-black animate-spin my-3" />
  </div>
</template>

<script>
import axios from "axios";
import { Upload, LoaderCircle, HardDriveUpload } from "lucide-vue-next";

export default {
  data() {
    return {
      isDragging: false,
      files: [],
      dragIndex: null,
      isLoading: false,
    };
  },
  components: {
    Upload,
    LoaderCircle,
    HardDriveUpload,
  },
  inject: ["setImageUrl"],
  methods: {
    onChange() {
      const newFiles = [...this.$refs.file.files].filter(
        (file) =>
          !this.files.some((f) => f.name === file.name && f.size === file.size)
      );
      this.files = [...this.files, ...newFiles];
    },
    generateThumbnail(file) {
      let fileSrc = URL.createObjectURL(file);
      setTimeout(() => {
        URL.revokeObjectURL(fileSrc);
      }, 1000);
      return fileSrc;
    },
    remove(i) {
      this.files.splice(i, 1);
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },

    startDrag(index) {
      this.dragIndex = index;
    },
    dragoverItem(index) {
      if (this.dragIndex !== null && this.dragIndex !== index) {
        const filesCopy = [...this.files];
        const draggedItem = filesCopy.splice(this.dragIndex, 1)[0];
        filesCopy.splice(index, 0, draggedItem);
        this.files = filesCopy;
        this.dragIndex = index;
      }
    },
    endDrag() {
      this.dragIndex = null;
      this.files.pop();
    },

    async uploadImage() {
      console.log("Uploading images...");
      const formData = new FormData();

      if (this.files.length > 0) {
        this.files.forEach((file) => {
          formData.append("file", file);
        });
      } else {
        alert("No images selected");
        return;
      }

      try {
        this.isLoading = true;
        const response = await axios.post(
          "http://localhost:5000/api/ocr/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.isLoading = false;

        const ImageUrls = response.data;

        this.setImageUrl(ImageUrls);
        console.log("Injecting Image URLs:", ImageUrls);
      } catch (error) {
        console.error("Error uploading images:", error);
        alert("Image upload failed");
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
