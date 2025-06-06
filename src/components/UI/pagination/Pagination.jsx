import { useMemo } from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = useMemo(() => {
    return getPagesArray(totalPages);
  }, [totalPages]);

  return (
    <div className="page__wrapper">
      {!!totalPages &&
        pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            className={p === page ? "page page__active" : "page"}
            key={p}
          >
            {p}
          </span>
        ))}
    </div>
  );
};

export default Pagination;
