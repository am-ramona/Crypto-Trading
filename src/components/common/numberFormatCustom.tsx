// import React from "react";
// import PropTypes from "prop-types";
// import NumberFormat from "react-number-format";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
//   props,
//   ref
// ) {
//   const { onChange, ...other } = props;

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={ref}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value
//           }
//         });
//       }}
//       // isNumericString
//     />
//   );
// });

// NumberFormatCustom.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

// export default function FormattedInput() {
//     const [numberformat, setNumberformat] = React.useState();

//     const handleChange = (event: any) => {
//       setNumberformat(event.target.value);
//     };

//     return (
//       <Box>
//         <TextField
//           label="react-number-format"
//           value={numberformat}
//           onChange={handleChange}
//           name="numberformat"
//           id="formatted-numberformat-input"
//           InputProps={{
//             inputComponent: NumberFormatCustom
//           }}
//           variant="standard"
//         />
//       </Box>
//     );
//   }

export { };
