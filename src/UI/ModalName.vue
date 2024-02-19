<template>
  <div>
    <ul class="modal__name">
      <li
        v-for="brand in brands"
        :key="brand.id"
        @click="toggleColor(brand.id, brand.name)"
        :class="{ clickName: brand.id === activeBrandId }"
      >
        {{ brand.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBrandId: null,
      isHighlighted: true,
      brands: [
        { id: 1, name: "vans" },
        { id: 2, name: "adidas" },
        { id: 3, name: "puma" },
        { id: 4, name: "reebok" },
        { id: 5, name: "new balance" },
      ],
      nameProducts: null,
    };
  },
  props: {
    parentFilteredProducts: {
      type: Array,
    },
    addedName: {
      type: String,
    },
  },
  computed: {
    addName() {
      return (this.addedName = this.nameProducts);
    },
  },
  methods: {
    toggleColor(id, name) {
      if (this.isHighlighted) {
        this.activeBrandId = this.activeBrandId === id ? null : id;
        this.nameProducts = this.nameProducts === name ? null : name;
        this.$emit("filtered-products-name", this.nameProducts);
      } else {
        this.activeBrandId = null;
        this.nameProducts = null;
      }
    },
    sendFilteredProducts() {
      this.$emit("filtered-products-name", null);
    },
  },
};
</script>

<style scoped>
ul {
  padding-inline-start: 0px;
}
li {
  list-style-type: none;
  color: white;
  user-select: none;
  cursor: pointer;
  transition: all 0.1s;
  margin: 0 10px;
  padding: 3px 5px;
  font-size: 17px;
  border: 1.5px solid rgb(199, 88, 32);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(49, 49, 49, 0.5);
}
li:hover {
  background-color: white;
  color: black;
}
.modal__name {
  display: flex;
  justify-content: center;
  align-items: center;
}
.clickName {
  background-color: rgb(199, 88, 32) !important;
  color: white !important;
  border: 1.5px solid white;
}
@media (max-width: 690px) {
  li {
    font-size: 15px;
  }
  .modal__name {
    font-size: 15px;
  }
}
@media (max-width: 655px) {
  li {
    margin: 0 5px;
  }
}
</style>
