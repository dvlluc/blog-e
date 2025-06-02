import axios from "axios";
import { createRef } from "react";

export default class PostService {
  static async getAll(limit = 10, number = 1) {
    return await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: number,
      },
    });
  }
}
