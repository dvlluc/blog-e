import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import { SORT_POST_PARAMS } from "../constants";

const PostFilter = ({ filter, setFilter }) => {
  const { sort, query } = filter;

  return (
    <div>
      <MyInput
        value={query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="поиск"
      />
      <div style={{ textAlign: "right" }}>
        <MySelect
          value={sort}
          onChange={(sort) => setFilter({ ...filter, sort })}
          defaultValue="Сортировка по: "
          options={SORT_POST_PARAMS}
        />
      </div>
    </div>
  );
};

export default PostFilter;
