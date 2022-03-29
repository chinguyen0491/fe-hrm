import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function SimpleAccordion() {
  const data = [
    {
      q:"Việc làm Khối văn phòng",
      a:"",
    },
    {
      q:"Việc làm Khối sản xuất",
      a:"",
    },
    {
      q:"Việc làm Khối kinh doanh",
      a:"",
    },
    {
      q:"Việc làm theo vị trí",
      a:"",
    } 
  ];
  return (
    <div className={'recruit position-sticky'} style={{top:'0'}}>
      {data.map((ele,index) => {
        return <Accordion  key={index}>
        <AccordionSummary 
         expandIcon={<ExpandMoreIcon sx={{ color: '#f47d20'}}/>}
         aria-controls={`panel${index}a-content`}
         id={`panel${index}a-header`}
       >
         <h5 className="ms-3">{ele.q}</h5>
       </AccordionSummary>
       <AccordionDetails>
         <p>
         {ele.a}
         </p>
       </AccordionDetails>
     </Accordion>
      })} 
    </div>
  );
}
