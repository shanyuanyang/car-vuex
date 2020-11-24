const data = [
  { id: 1, name: '奥迪', totality: '2', price: '100' },
  { id: 2, name: '宝马', totality: '3', price: '200' },
  { id: 3, name: '奔驰', totality: '5', price: '500' }
]

export const getAllData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 100)
  })
}
