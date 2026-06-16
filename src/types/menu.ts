export interface MenuItem {
  id: string
  nameHu: string
  nameEn: string
  descriptionHu?: string
  descriptionEn?: string
  price: number
}

export interface MenuCategory {
  id: string
  nameHu: string
  nameEn: string
  items: MenuItem[]
}

export interface Platter {
  id: string
  nameHu: string
  nameEn: string
  price: number
  itemsHu: string[]
  itemsEn: string[]
  featured?: boolean
}

export interface MenuData {
  dailyMenu: {
    soup: MenuItem
    main: MenuItem
    menuPrice: number
    updatedAt: string
  }
  categories: MenuCategory[]
  sides: {
    nameHu: string
    nameEn: string
    noteHu: string
    noteEn: string
    items: MenuItem[]
  }
  platters: Platter[]
}
