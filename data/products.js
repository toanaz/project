const products = [
  {
    name: 'Macbook M1',
    image: '/images/macbook.jpg',
    description: 'apple',
    brand: 'Apple',
    category: 'Laptop',
    price: 1299.99,
    countInStock: 15,
    rating: 5,
    numReviews: 15,
    specs: {
      BỘ_XỬ_LÝ: 'Apple M1 chip',
      BỘ_NHỚ: '8GB unified memory',
      BỘ_NHỚ_TRỮ_LƯU_TRONG: '256GB SSD storage',
      MÀN_HÌNH: '13.3-inch Retina display',
      ĐỒ_HỌA: 'Apple 8-core GPU',
    },
  },
  {
    name: 'Laptop Lenovo Ideapad Slim 5 14IAH8 83BF002NVN',
    image: '/images/lenovo.jpg',
    description: 'I5-12450H/16GB/512GB PCIE/14.0 WUXGA/WIN11/XÁM',
    brand: 'Lenovo',
    category: 'Laptop',
    price: 1099.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    specs: {
      BỘ_XỬ_LÝ: 'Intel Core i5-12450H',
      BỘ_NHỚ: '16GB RAM',
      BỘ_NHỚ_TRỮ_LƯU_TRONG: '512GB PCIe NVMe SSD',
      MÀN_HÌNH: '14.0-inch WUXGA Display',
      HỆ_ĐIỀU_HÀNH: 'Windows 11',
      MÀU: 'Gray',
    },
  },
  {
    name: 'Màn hình MSI Pro MP223 22 inch',
    image: '/images/msi.jpg',
    description: 'Mô tả về màn hình MSI Pro MP223 22 inch',
    brand: 'MSI',
    category: 'Screen',
    price: 199.99,
    countInStock: 20,
    rating: 4.2,
    numReviews: 8,
    specs: {
      KÍCH_THƯỚC: '22 inch',
      ĐỘ_PHÂN_GIẢI: 'Full HD',
      TẦN_SỐ_QUÉT: '60Hz',
    },
  },

  {
   name:'PC CPS Gaming G5',
   image:'/images/pc.jpg',
   description:'Mô tả về màn hình MSI Pro MP223 22 inch',
   brand:'PC',
   category:'PC',
   price:799.99,
   countInStock:10,
   rating:4.1,
   numReviews:8,
   specs:{
    CPU:'AMD Ryzen 5 5600x',
    SOCKET:'Intel LGA 1700',
    GPU:'RTX 3060',
    RAM:'8GB',
    RAM_SLOTS:'4 x DDR4',
    HARD_DRIVE:'SSD 250GB PCIe NVMe',
    Chipset:'B760',
    WiFi:'Không',
    Bluetooth:'Không',
    PSU:'550W',
   }
  }
];

export default products;
