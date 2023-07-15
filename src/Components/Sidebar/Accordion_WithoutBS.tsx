import { FC } from "react";
import { AccordionType } from "./Accordions";

const AccordionWithoutBS: FC<AccordionType[]> = (categories) => {
  return (
    <>
      <div className="accordion">
        {categories.map(
          (value: { category: string; items: string[] }, index: number) => {
            return (
              <div className="accordion-item individual-category" key={index}>
                <div className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-target={`#accordion-heading-${index}`}
                    data-bs-toggle="collapse"
                  >
                    <div className="category-title">
                      <a href="#">{value.category}</a>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id={`accordion-heading-${index}`}
                >
                  <div className="accordion-content">
                    <ul className="accordion-content__list">
                      {value.items.map((item) => (
                        <li className="accordion-content__list-item">
                          {" "}
                          <a href="#">{item}</a>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default AccordionWithoutBS;
