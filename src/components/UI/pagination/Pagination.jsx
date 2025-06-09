import { useMemo } from "react";
import { getPagesArray } from "../../../utils/pages";
import classes from "./Pagination.module.css";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = useMemo(() => {
    return getPagesArray(totalPages);
  }, [totalPages]);

  return (
    <div className={classes.page__wrapper}>
      {!!totalPages &&
        pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            className={p === page ? `${classes.page} ${classes.page__active}` : classes.page}
            key={p}
          >
            {p}
          </span>
        ))}
    </div>
  );
};

export default Pagination;
