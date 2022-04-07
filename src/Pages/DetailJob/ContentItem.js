import React from "react";
import styles from "./main.module.css";

function ContentItem({ title, desc, content }) {
    console.log('====================================');
    console.log(content);
    console.log('====================================');
  let newDesc = desc;
  // let newDesc = desc ? desc.replace(/<\/?[^>]+(>|$)/g, "") : undefined
  if (newDesc) {
    if (newDesc.includes("-")) {
      // newDesc = newDesc.replaceAll('-', '<br> +')
      newDesc = desc.replaceAll("/web/", "http://test.diligo.vn:15000/web/");
      newDesc = newDesc.replace("<br>", "");
    }
  }
  return (
    <>
      <div className="mt-3">
        {newDesc !== "" && (
          <>
            <h3 className={styles.content__title}>{title}</h3>
            <p
              className={`${styles.cotent__desc} mt-2`}
              dangerouslySetInnerHTML={{ __html: newDesc }}
            />
          </>
        )}
        {typeof content === "object" ? (
          <ul className={styles.list}>
            {content.map((val, index) => (
              <li key={index} className={styles.item}>
                {val}
              </li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </>
  );
}

export default ContentItem;
