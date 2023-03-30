type Fruits = "apple" | "banana" | {fruit: true, vegetable: false}

// Extact = keluarkan semua yang sama (tipe data)
type stringFruits = Extract<Fruits, string>
type objectFruits = Extract<Fruits, object>

// Extact = keluarkan semua yang bukan (tipe data)
type nonStringFruits = Exclude<Fruits, string>
type nonObjectFruits = Exclude<Fruits, object>