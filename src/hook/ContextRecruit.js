import React, { useState  , createContext } from 'react' 
const RecruitContext = createContext() 
function RecruitProvider({children}) {    
    const [category , setCategory] = useState('')  
    const value = { 
        category,
        setCategory,
    }
    return (
        <RecruitContext.Provider value={value}> 
            {children}
        </RecruitContext.Provider> 
    )
}
export { RecruitProvider, RecruitContext }