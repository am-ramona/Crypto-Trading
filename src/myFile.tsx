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


// const signMessage = async () => {
//   const signRaw = await talismanWallet._signer?.signRaw;

//   if (signRaw && wallet?.address) {
//     const { signature } = await signRaw({
//       type: "payload",
//       data: "Some data to sign...",
//       address: wallet.address,
//     });
//   }
// };

// const connectWallet = async () => {
//   const allInjected = await web3Enable("my cool dapp");

//   const allAccounts = await web3Accounts();

//   // console.log("allAccounts", allAccounts);
//   // console.log("typeof allAccounts", typeof allAccounts);
//   setAllAccounts(allAccounts);

//   const SENDER = allAccounts[0].address;
//   setAddress(SENDER);
// };

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// const CustomBox = styled(BoxComponent)({
//   // your custom styles go here
//   width: "50%",
//   justifySelf: "center",
// });
// as typeof BoxComponent;

// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);
// const [open, setOpen] = useState(false);

// const handleChange = (event: SelectChangeEvent<typeof age>) => {
//   setAge(Number(event.target.value) || "");
// };

// const onKeyPressed = useCallback(
//   (e: any) => {
//     if (!/[0-9]/.test(e.key)) {
//       e.preventDefault();
//     }
//     // console.log(e.keyCode);
//     setUsdcValue(e.target.value / marketPrice);

//     console.log("value is:", e.target.value);
//     console.log(e.target.value);
//     // setUsdcValue
//     // return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(e.code) ? true : !isNaN(Number(e.key)) && e.code!=='Space'
//   },
//   [usdcValue]
// );

// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any;
//   }
// }

// const handleClose = (
//   event: React.SyntheticEvent<unknown>,
//   success?: string,
//   reason?: string
// ) => {
//   if (reason !== "backdropClick") {
//     setOpen(false);
//   }
// };

// const createNotification = (type: any) => {
//   console.log('notification created')
//   return () => {
//     switch (type) {
//       case 'info':
//         NotificationManager.info('Info message');
//         break;
//       case 'success':
//         NotificationManager.success('Opened Long Position BTC-PERP');
//         break;
//       case 'warning':
//         NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//         break;
//       case 'error':
//         NotificationManager.error('Error message', 'Click me!', 5000, () => {
//           alert('callback');
//         });
//         break;
//     }
//   };
// }

// interface PropsType {
//   children: JSX.Element
//   xs ?: string
// }
// class BoxComponent extends React.Component<PropsType, {}> {
//   render() {
//     return (
//       <Box component="span" sx={{
//         p: 1, display: 'grid', alignContent: 'center',
//         justifyContent: 'center', border: '1px solid #ff31b9ff'
//       }}>
//       {this.props.children}
//       </Box>
//     )
//   }
// }

// import React, { ReactNode } from "react";

// interface Props {
//     children?: ReactNode
//     // any props that come into the component
// }

// const Button1 = ({ children, ...props }: Props) => (
//     <Button {...props}>{children}</Button>
// );

export { }

// import React, { FC } from "react";

// interface Props {
//     // any props that come into the component
// }

// const Button1: FC<Props> = ({ children, ...props }) => (
//     <Button {...props}>{children}</Button>
// );
// const defaultProps = {
//   options: perpetualsMarkets,
//   getOptionLabel: (option: PerpetualsMarketsType) => option.label,
// };
// const flatProps = {
//   options: perpetualsMarkets.map((option) => option.label),
// };

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

export { }