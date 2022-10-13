//CUSTOM HOOK NÀY DÙNG ĐỂ LẤY DỮ LIỆU TỪ LOCAL STORAGE
//storedDataName - tên dữ liệu cần lấy: kiểu dữ liệu là string
//dữ liệu trả về:
//+ trả về mảng hoặc obj được lưu trữ
//+ Nếu dữ liệu lưu trữ là rỗng hoặc mảng trống thì trả về false.
const useGetItem = (storedDataName) => {
  const storedData = localStorage.getItem(storedDataName);
  if (!storedData) return false;

  const transformData = JSON.parse(storedData);
  if (transformData.length < 1) return false;

  return transformData;
};

export default useGetItem;
