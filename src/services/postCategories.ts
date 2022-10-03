import IPostCategory from '../interfaces/IPostCategory';
import HttpClient from './httpClient';

class PostCategoriesService {
  static async readAll(): Promise<IPostCategory[]> {
    const { data } = await HttpClient.api.get('/postCategories');

    return data;
  }
}

export default PostCategoriesService;
