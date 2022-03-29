import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './FAQ.module.css'
export default function SimpleAccordion() {
  const data = [
    {
      q:"Thông tin về công ty",
      a:"",
    },
    {
      q:"Quy trình phỏng vấn",
      a:"",
    },
    {
      q:"Chính sách phúc lợi",
      a:"",
    },
    {
      q:"Hỗ trợ nhân sự",
      a:"",
    },
    {
      q:"Tìm việc",
      a:"",
    } 
  ];
  return (
    <div className={styles.accordion}>
      {data.map((ele,index) => {
        return <Accordion>
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
