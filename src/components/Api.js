import axios from "axios";

 
export const getMaterials = async (search, page) => {
  const key = "30737585-7687c43aebcf0b54a5b307985"
  const searchApi= `https://pixabay.com/api/?key=${key}&q=${search}&type=photo&orientation=horizontal&page=${page}&per_page=12&safesearch=true`;
  const response = await axios.get(searchApi);
  return response.data;
};
 