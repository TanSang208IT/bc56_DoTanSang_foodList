
const BASE_URL = "https://64c8aca9a1fe0128fbd60a9a.mockapi.io/schema";

let getList =() => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
};

let deleteFood = (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
};
let addFood = (food) => {
return axios ({
    url: BASE_URL,
    method: "POST",
    data: food,
});
};

let getDetail = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let foodServ = {
    getList,
    deleteFood,
    addFood,
    getDetail,
};
export default foodServ;

