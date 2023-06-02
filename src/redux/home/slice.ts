
import {createSlice} from '@reduxjs/toolkit';


const homeSlice = createSlice({
    name:'home',
    initialState:{
        collections:[
            {
                id:0,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},

                ]
            },
            {
                id:1,
                title:"123",
                user: "@Maks",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            },
            {
                id:2,
                title:"Weird Planet",
                user: "@Kirill",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},

                ]
            },
            {
                id:3,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            },
            {
                id:4,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            },
            {
                id:5,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            },{
                id:6,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            },
            {
                id:7,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            },
            {
                id:8,
                title:"Cute Planet",
                user: "@Oleg",
                price:'1.0 ETH',
                nfts:[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]
            }
        ]
    },
    reducers:{
            
    },

})

export const {} = homeSlice.actions;
export default homeSlice.reducer;