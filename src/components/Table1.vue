<template>
  <el-table id="table" :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" class="custom-table"
    :stripe="true" :header-row-class-name="setHeaderStyle" :cell-class-name="setCellStyle" :row-style="setRowStyle">
    <el-table-column prop="date" label="發布時間" sortable width="180" />
    <el-table-column prop="name" label="發布類型" width="180" />
    <el-table-column prop="address" label="標題" :formatter="formatter" />
  </el-table>
</template>

<script setup>


// console.log('DragTable',DragTable)
// let test = new DragTable("test",{

// })
// let test = new DragTable("table", {})
// const setHeaderStyle = () => {
//   return "custom-thead";
// };

const setRowStyle = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return { height: "65px", color: "#000", backgroundColor: "#FAF9F6" };
  } else {
    return { height: "65px", color: "#000", backgroundColor: "#F2F2F2" };
  }
};

const setCellStyle = ({ row, column, rowIndex, columnIndex }) => {
  return "custom-cell";
};

const formatter = (row, column) => {
  return row.address;
};
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
</script>

<style>
.custom-table {
  width: 946px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/* thead */
.custom-table .custom-thead th.el-table__cell {
  background-color: #2d537f;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.2px;
  border: none;
}

.custom-table thead th {
  height: 75px;
  text-align: center;
}

.custom-table .custom-thead th.el-table__cell:first-child {
  border-top-left-radius: 10px;
}

.custom-table .custom-thead th.el-table__cell:last-child {
  border-top-right-radius: 10px;
}

/* cell */
.custom-table thead th .cell {
  text-align: center;
}

.custom-table thead th:last-child .cell {
  text-align: left;
}

.custom-table tbody td:first-child .cell {
  font-weight: 700;
}

.custom-table .custom-cell {
  text-align: center;
  color: #000000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.9px;
}



.custom-table .custom-cell:last-child {
  text-align: left;
}

/* sort-caret */
.el-table .sort-caret {
  border: solid 8px transparent;
}

.custom-table .caret-wrapper {
  height: 24px;
}

.el-table .ascending .sort-caret.ascending {
  border-bottom-color: #fff;
}

.el-table .descending .sort-caret.descending {
  border-top-color: #fff;
}

.el-table .descending .sort-caret.descending {
  border-top-color: #fff;
}

.custom-table .sort-caret .sort-caret.ascending {
  top: 13px;
}

.custom-table .sort-caret.descending {
  bottom: -6px;
}
</style>
