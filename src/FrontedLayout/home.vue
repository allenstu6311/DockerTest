<template>
  <!-- <Table1 /> -->
  <div class="container">
    <table id="table" border="1">
      <thead></thead>
      <tbody></tbody>
    </table>
  </div>
  {{ msg }}

  <v-btn color="primary"> 1223</v-btn>
  
</template>
<script setup>
import { getProductInfo } from "@/assets/js/api/ajax.js";
// import Header from "../components/Backend/Header.vue";
// import DragTable from "allendragtable"
import utils from "../assets/js/utils"
const msg = ref("hello")

function test(a,b){
  return a+b
}


// onMounted(() => {
//   callAPI();
//   new DragTable("table", {
//     tableData: tableData,
//   })

// });

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];



const callAPI = () => {
  let test = getProductInfo({ id: 1 });

  test
    .then((res) => {
      // console.log("UI succcess", res);
    })
    .catch((err) => {
      console.log("UI fail", err);
    });
};
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
