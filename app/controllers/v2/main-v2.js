import { onSuccess, renderFoodList, showDataForm } from "./controllers-v2.js";
import foodServ from "../../service/service.js";
import {layThongTin} from "../v1/controllers-v1.js";

// render DS món ăn
let fetchFoodList = () => {
foodServ.getList().then((res) => {
  console.log(res);
  renderFoodList(res.data);
}).catch((err) =>
{
    console.log(err);
});
};
fetchFoodList();

//tách service


let deleteFood=(id) => { 
    foodServ.deleteFood(id).then((res) =>{
        console.log(res);
        onSuccess("Xóa thành công! ")
        fetchFoodList();
    }).catch((err)=>{
        console.log(err);
    });
 };
 window.deleteFood = deleteFood;

 window.addFood = () => {
    let data = layThongTin();
    foodServ.addFood(data).then((res) =>{
        $("#exampleModal").modal("hide");
        onSuccess("Thêm thành công!")
        fetchFoodList();
    }).catch((err) =>{
        console.log(err);
    });
 };

window.editFood = () => {
    $("#exampleModal").modal("show");
    foodServ.getDetail(id).then((res) =>{
            console.log(res);
            showDataForm(res.data);
        }).catch((err)=>{
            console.log(err);
        });
};