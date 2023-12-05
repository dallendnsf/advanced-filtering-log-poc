import {
  getGridNumericOperators,
  getGridBooleanOperators,
  getGridSingleSelectOperators,
  getGridStringOperators,
  getGridDateOperators,
} from "@mui/x-data-grid-pro";

export function getCustomGridNumericOperators() {
  return getGridNumericOperators().filter(
    (operator) => operator.value !== "isAnyOf"
  );
}

export function getCustomGridSingleSelectOperators() {
  return getGridSingleSelectOperators().filter(
    (operator) => operator.value !== "isAnyOf"
  );
}

export function getCustomGridStringOperators() {
  return getGridStringOperators().filter(
    (operator) =>
      operator.value !== "isAnyOf" &&
      operator.value !== "isEmpty" &&
      operator.value !== "isNotEmpty"
  );
}

export function getCustomGridDateOperators() {
  return getGridDateOperators().filter(
    (operator) =>
      operator.value !== "isEmpty" && operator.value !== "isNotEmpty"
  );
}

export function getCustomGridBooleanOperators() {
  return getGridBooleanOperators().filter((operator) => operator); // All operators are suitable for now. Adding this function as a placeholder
}

export function formatOperatorString(operator: string) {
  return operator
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLowerCase();
}
