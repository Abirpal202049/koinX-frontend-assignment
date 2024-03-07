export const tokenomicsOption = {
  tooltip: {
    trigger: "item",
  },
  color: ["#0082FF", "#FAA002",],
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 80, name: "Crowdsale investors" },
        { value: 20, name: "Foundation " },
      ],
    },
  ],
};
