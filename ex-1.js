function sortCustomerName(customers) {
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let value = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = value;
      }
    }
  }
  return customers;
}

// ตอบคำถามตรงนี้จ้า
// O(n^2)

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
