import axios from "axios";
export default class PostService {
  static async getAll(limit = 10, number = 1) {
    return await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: number,
      },
    });
  }

  static async getById(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  static async getCommentsByPostId(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
