import { BoxQtyInTruckData } from "../common/firebase_data";

export const getBoxSpaceTotal = (boxs?: BoxQtyInTruckData[]) => {
    let boxSpaceTotal = 0

    boxs?.forEach(({ dataBox, qty }) => {
        const volumeInTheBox = calculateVolume(
            parseFloat(dataBox?.heigth ?? ""),
            parseFloat(dataBox?.width ?? ""),
            parseFloat(dataBox?.depth ?? ""))
        boxSpaceTotal += volumeInTheBox * (qty ?? 0)
    })

    return boxSpaceTotal
}


export const calculateVolume = (height: number, width: number, depth: number) => {
    return (
        height *
        width *
        depth
    );
}

