//CUSTOM HOOK DÙNG ĐỂ LƯU data VÀO LOCALSTORAGE
//data - dữ liệu cần lưu trữ: kiểu dữ liệu là array hoặc obj
//nameStoredData - tên của dữ liệu khi được lưu vào local storage: kiểu dữ liệu là string
const useSetItem = (data, nameStoredData) => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(nameStoredData, dataJSON);
};

export default useSetItem;
