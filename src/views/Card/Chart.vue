<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps(["list"]);
const { t } = useI18n();
const time = [];
const temp = [];
const data = [...props.list];

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  time.push(element.dt_txt);
  temp.push(element.main.temp);
}

const chartOptions = {
  chart: {
    height: 450,
    type: "line",
  },
  stroke: {
    width: 5,
    curve: "smooth",
  },

  xaxis: {
    type: "datetime",
    categories: time,
    tickAmount: 5,
    labels: {
      formatter: function (value, timestamp, opts) {
        return opts.dateFormatter(new Date(timestamp), "dd/MM/yy HH:mm");
      },
      style: {
        colors: "#C8C8C8",
        fontSize: "11px",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val, index) {
        return val.toFixed(0);
      },
      style: {
        colors: "#C8C8C8",
      },
    },
    axisBorder: {
      show: true,
      color: "#C8C8C8",
    },
  },
  title: {
    text: t("main.temp"),
    align: "left",
    style: {
      fontSize: "13px",
      color: "#C8C8C8",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      type: "vertical",
      stops: [0, 100, 100, 100],
    },
  },
};
const series = [
  {
    name: t("main.temp"),
    data: temp,
  },
];
</script>
<style lang="scss" scoped>

</style>