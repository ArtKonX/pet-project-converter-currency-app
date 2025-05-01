import { HistoryConvertationItemData } from "@/interfaces/converter/history-convertation/history-convertation.interface";

export default function removeDuplicates(array: HistoryConvertationItemData[]) {
    return array.filter((elem, index, arr) =>
        index === arr.findIndex(item => item.id === elem.id)
    );
};