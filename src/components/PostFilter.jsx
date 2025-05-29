import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import { sortPostParams } from "../constants";

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
          options={sortPostParams}
        />
      </div>
    </div>
  );
};

export default PostFilter;
