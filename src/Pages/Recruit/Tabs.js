import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Recruit.module.css";
import { toSlug } from "../../extensions/toSlug";
import { useHistory } from 'react-router-dom'
export default function SimpleAccordion() {
  const data = [
    {
      q: "Việc làm Khối văn phòng",
      a: [
        {
          title: "Công nghệ thông tin",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Phát triển phần mềm",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Nhân viên kinh doanh",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 4",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
      ],
    },
    {
      q: "Việc làm Khối sản xuất",
      a: [
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
      ],
    },
    {
      q: "Việc làm Khối kinh doanh",
      a: [
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
      ],
    },
    {
      q: "Việc làm theo vị trí",
      a: [
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
        {
          title: "Đây là dòng 1",
          content: "Lorem Ipsum is simply dummy",
        },
      ],
    },
  ];
  let history = useHistory();
  function handleCategory(e) {
    history.push(`/tuyen-dung/${e}`);
  }
  
  return (
    <div className={"recruit position-sticky"} style={{ top: "80px" }}>
      {data.map((ele, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#f47d20" }} />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <h5 className="ms-3">{ele.q}</h5>
            </AccordionSummary>
            <AccordionDetails>
              {ele.a.map((e, i) => {
                return (
                  <h6
                    onClick={() => handleCategory(toSlug(e.title))}
                    className={`ms-3 d-block ${styles.link}`}
                    style={{
                      cursor: "pointer",
                      fontSize: "15px",
                      lineHeight: "30px",
                    }}
                    key={i}
                  >
                    {e.title}
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
