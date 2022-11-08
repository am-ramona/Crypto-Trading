import * as React from 'react';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function createData(
    name: string,
    calories: string,
    fat: number,
    carbs: string,
    protein: string,
    title6: string,
    title7: string,
    title8: string,
    title9: string,
    title10: string,
    closeAllPos: React.ReactNode
) {
    return { name, calories, fat, carbs, protein, title6, title7, title8, title9, title10, closeAllPos };
    // return { name, title2, title3, title4, title5, title6, title7, title8, title9, title10 };
}

export const rows = [
    createData('BTC-PERP', 'LONG', 0.5, '$20,660.0', '$41,260.0', '$40,260.0', '$38,260.0', '-$38.0', '-$2.0', '+$0.55', <><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon style={{ justifySelf: 'start' }} /></>),
    createData('BTC-PERP', 'SHORT', 10, '$29,000.0', '$2,900.95', '$2,890.95', '$3,000.0', '+$100.0', '-$2.0', '+$0.55', <><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon style={{ justifySelf: 'start' }} /></>),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];