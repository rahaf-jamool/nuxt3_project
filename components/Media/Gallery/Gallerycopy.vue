<template>
  <div class="container my-5 photo-gallery">
    <CoolLightBox
      :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
      :items="lightboxItems"
      :index="imageIndex"
      @close="imageIndex = null"
    >
    </CoolLightBox>

    <div class="row images-wrapper">
      <div class="col-12">
        <TitleHead :title="$t('PhotoGallery')" image="logo-write.png" />
      </div>

      <div
        class="col-lg-3 col-md-6 col-12"
        v-for="(item, index) in MediaPhotos"
        :key="item.id"
        @click="showLightBox(index)"
        data-aos="fade-up"
        :data-aos-duration="item.id * 300"
      >
        <div class="image-div">
          <VLazyImage
            :src="
              item.image != null || ''
                ? baseURL + item.image
                : require('~/public/assets/images/Icons/LogoSport.png')
            "
            alt="..."
          />
          <!-- <h3>{{ $i18n.locale == "ar" ? item.name : item.englishName }}</h3> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHead from "../../global/TitleHead";
import { mapState, mapActions } from "vuex";

export default {
  name: "Gallery",
  components: {
    TitleHead,
  },
  data() {
    return {
      imageIndex: null,
      baseURL: "https://admin.uaetta.org/",
    };
  },
  methods: {
    ...mapActions(["fetchMediaPhotos"]),
    showLightBox(index) {
      const currentBlock = this.MediaPhotos[index];
      if (currentBlock.blockPhotos.length === 0) {
        // console.log("There are no photos available");
        return;
      }
      const lightboxItems = currentBlock.blockPhotos.map((photo) => ({
        src: this.baseURL + photo.image,
        title: currentBlock.name,
      }));
      this.imageIndex = 0; // start with the first photo
      this.lightboxItems = lightboxItems;
    },
  },
  created() {
    this.fetchMediaPhotos();
  },
  computed: {
    ...mapState({
      MediaPhotos: "MediaPhotos",
    }),
  },
};
</script>

<style>
.images-wrapper {
  margin: 30px 0;
}

.image-div {
  transition: all 0.2s ease-out;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);
  text-align: center;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  height: 300px;
}
.image-div:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  cursor: pointer;
}
.image-div h3 {
  padding: 5px 0;
  text-align: center;
}

.image-div img {
  height: 100%;
  width: 100%;
  border-bottom: 4px solid #fec419;
}
</style>
