import { BaseFilter, InitialStateDataPeopleSetCollection } from '@/share/InterfactTypesDatasetCollection';
import jsonData from '@/utils/PEOPLE_COLLECTIONS.json'
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const initialState: InitialStateDataPeopleSetCollection = {
    value: jsonData,
    textHeader: jsonData[0].headers.label,
    textIntroduce: jsonData[0].headers.text_introduce,
    styleName: jsonData[0].style_name,
    dataSetValueBaseFilter: [],
    dataSetKey: '',
    dataSetValue: [],
    blocks: jsonData[0].blocks
}

export const getPeopleDataSetCollectionSlice = createSlice({
    name: "getPeopleDataSetCollectionSlice",
    initialState,
    reducers: {
        setBaseFilterPeopleDataSetValue: (state, action: PayloadAction<BaseFilter[]>) => {
            state.dataSetValueBaseFilter = action.payload;
        },
        setBaseFilterPeopleDataKey: (state, action: PayloadAction<string>) => {
            state.dataSetKey = action.payload;
        },
        setBaseFilterPeopleDataValue: (state, action: PayloadAction<string[] | number[]>) => {
            state.dataSetValue = action.payload;
        },
        setDataSetPeopleHeader: (state, action: PayloadAction<string>) => {
            state.textHeader = action.payload
        },
        setPeopleTextIntro: (state, action: PayloadAction<string>) => {
            state.textIntroduce = action.payload
        },
        setPeopleStyleName: (state, action: PayloadAction<string>) => {
            state.styleName = action.payload
        },
        setPeopleBlocksMenuList: (state, action: PayloadAction<string[]>) => {
            state.blocks = action.payload
        },

    },
});

export const { setBaseFilterPeopleDataSetValue,
    setBaseFilterPeopleDataKey, setBaseFilterPeopleDataValue,
    setDataSetPeopleHeader, setPeopleTextIntro, setPeopleStyleName, setPeopleBlocksMenuList } = getPeopleDataSetCollectionSlice.actions;

export default getPeopleDataSetCollectionSlice.reducer;
