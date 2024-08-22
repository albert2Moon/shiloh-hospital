
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { key_staff } from "../assets/assets";
import { advisory_board } from "../assets/assets";
import { impact_stories } from "../assets/assets";
import { blog_post_list } from "../assets/assets";


export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const contextValue = {
        key_staff,
        advisory_board,
        impact_stories,
        blog_post_list
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;