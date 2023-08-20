// true = chay, còn
const MON_CHAY = true;
const CON_MON = true;

export let renderFoodList = (list) => {
  let contentHTML = "";
  list.reverse().forEach(
    ({ ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      let trString = `<tr>
    <td>${ma}</td>
    <td>${ten}</td>
    <td>${
      loai == MON_CHAY
        ? "<span class=text-success>Chay</span>"
        : "<span class=text-danger>Mặn</span>"
    }</td>
    <td>${gia}</td>
    <td>${khuyenMai}</td>
    <td>0</td>
    <td>${
      tinhTrang == CON_MON ? "<span class=text-warning>Còn</span>" : "Hết"
    }</td>
    <td>
    <button class='btn-danger btn' onclick="deleteFood(${ma})">Xóa</button>
    <button class='btn-primary btn' onclick="editFood(${ma})">Sửa</button>
    </td>
    </tr>`;
      contentHTML += trString;
    }
  );
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};
export let showDataForm = (data) => {
    let { id, name, type, price, discount, status, image, desc } = data;
   document.getElementById("foodID").value = ma;
   document.getElementById("tenMon").value = ten;
   document.getElementById("loai").value - loai;
   document.getElementById("giaMon").value = gia;
   document.getElementById("khuyenMai").value = khuyenMai;
   document.getElementById("tinhTrang").value = tinhTrang;
   document.getElementById("hinhMon").value = hinhAnh;
   document.getElementById("moTa").value = moTa;
}

export let onSuccess = (message) => {
    Swal.fire(message, "", "success");
};