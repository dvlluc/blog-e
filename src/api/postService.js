import axios from "axios";
import { createRef } from "react";

export default class PostService {
  static async getAll() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.map((post) => ({ ...post, nodeRef: createRef(null) }));
  }
}
