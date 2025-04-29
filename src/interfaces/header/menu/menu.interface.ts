interface DataLinkElem {
    id: number,
    text: string,
    to: string
}

export interface MenuElemProps {
    dataLinkElem: DataLinkElem,
}