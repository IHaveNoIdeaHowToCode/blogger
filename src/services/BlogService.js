import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "@/utils/Logger.js";
import { Blogs } from "@/models/Blogs.js";


class BlogsService {
  async getBlogs() {
    AppState.blogs = []
    const response = await api.get('api/blogs')
    logger.log('🗒️', response.data)
    const blogs = response.data.map(pojo => new Blogs(pojo))
    AppState.blogs = blogs
  }
}

export const blogService = new BlogsService()