"use strict";

const conditions = [
  {
    label: "Equals",
    operator: "==",
  },
  {
    label: "Different",
    operator: "<>",
  },
];

const measurableConditions = [
  ...conditions,
  {
    label: "Greater than",
    operator: ">",
  },
  {
    label: "Greater or equal",
    operator: ">=",
  },
  {
    label: "Less than",
    operator: "<",
  },
  {
    label: "Less or equal",
    operator: "<=",
  },
];

const getConditionsOptions = (fieldType) => {
  console.log(`Field type: ${fieldType}`);
  if (!fieldType) return [];

  if (fieldType === "string") return conditions;
  if (fieldType != "string") return measurableConditions;
};

export default getConditionsOptions;
