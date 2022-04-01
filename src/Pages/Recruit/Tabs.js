import React,{useContext} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Recruit.module.css";
import { RecruitContext }from '../../hook/ContextRecruit'
import { toSlug } from "../../extensions/toSlug";
import { covertText } from "../../extensions/covertText";
import { compareSameKey } from "../../extensions/compareSameKey";
import { useHistory } from 'react-router-dom'
export default function SimpleAccordion() {
  const  {setCategory,data} = useContext(RecruitContext) 
  let history = useHistory();   
  
  return (
    <div className={"recruit position-sticky"} style={{ top: "80px" }}>
      {compareSameKey(data.map((ele) => ({ title: ele.category, job: ele.industry.name }))).map((ele, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#f47d20" }} />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <h5 className="ms-3">{covertText(ele.title)}</h5>
            </AccordionSummary>
            <AccordionDetails>
              {ele.job.map((e, i) => {
                return (
                  <h6
                    onClick={() => {
                      setCategory(e);
                       history.push(`/tuyen-dung/${toSlug(e)}`)
                    }}
                    className={`ms-3 d-block ${styles.link}`}
                    style={{
                      cursor: "pointer",
                      fontSize: "15px",
                      lineHeight: "30px",
                    }}
                    key={i}
                  >
                    {e}
                  </h6>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
