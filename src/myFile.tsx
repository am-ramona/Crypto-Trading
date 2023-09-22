function containsDuplicates(array: any) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

let tabsMapping = new Map<string, number>([
  ["Positions", 0],
  ["Orders", 1],
  ["Liquidations", 2],
  ["Funding Payments", 3],
  ["Unrealized Funding", 4],
  ["Transfers", 5],
]);

function replacer(val: any) {
  // convert RegExp or function to string
  if (val && val.constructor === Function) {
    return val.toString();
  } else {
    return val; // return as is
  }
}

function parser(val: any) {
  if (val && typeof val == "string" && val.startsWith("function")) {
    return new Function("return " + val)();
  } else {
    return val; // return as is
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export { containsDuplicates, style, parser, replacer, tabsMapping }