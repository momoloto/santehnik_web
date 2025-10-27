// Изображения для категорий услуг (используем Unsplash для качественных бесплатных изображений)
export const categoryImages = {
  installation: {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&q=80",
    alt: "Установка сантехники",
    fallback: "🛁"
  },
  systems: {
    url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80",
    alt: "Монтаж систем отопления и водоснабжения",
    fallback: "🔥"
  },
  radiators: {
    url: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&h=600&fit=crop&q=80",
    alt: "Полотенцесушители и радиаторы",
    fallback: "♨️"
  },
  pumps: {
    url: "/nasos.jpg",
    alt: "Насосное оборудование",
    fallback: "⚙️"
  },
  boilers: {
    url: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop&q=80",
    alt: "Котельное оборудование",
    fallback: "🔥"
  },
  general: {
    url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop&q=80",
    alt: "Общие сантехнические работы",
    fallback: "🚰"
  }
}

// Изображения для конкретных услуг с детализацией
export const serviceImages = {
  // Установка сантехники - детальные изображения
  "Установка ванны простой": "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop&q=80",
  "Установка ванны пластиковой": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&q=80",
  "Установка ванны с гидромассажем": "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop&q=80",
  "Установка унитаза": "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop&q=80",
  "Установка мойдодыра": "https://images.unsplash.com/photo-1594476932147-0ec9c2d38a0d?w=600&h=400&fit=crop&q=80",
  "Установка умывальника": "https://images.unsplash.com/photo-1594476932147-0ec9c2d38a0d?w=600&h=400&fit=crop&q=80",
  "Установка мойки на кухне": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80",
  "Установка биде": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&q=80",
  "Установка смесителя": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop&q=80",
  "Установка душевой кабины": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&q=80",
  "Установка штанги": "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&h=400&fit=crop&q=80",
  "Установка посудомоечной машины": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80",
  "Установка стиральной машины": "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&h=400&fit=crop&q=80",
  
  // Монтаж систем отопления и водоснабжения - детальные изображения по диаметрам
  "Монтаж труб водоснабжения/отопления (ПП, СПЭ, Мпл) d16-25 мм": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop&q=80",
  "Монтаж труб водоснабжения/отопления (ПП, СПЭ, Мпл) d26-40 мм": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Монтаж труб водоснабжения/отопления (ПП, СПЭ, Мпл) d50-63 мм": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж труб канализации внутренней d до 110 мм": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Монтаж труб канализации наружной до 110 мм": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Монтаж труб канализации наружной свыше 110 мм": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Монтаж точек водоснабжения (водорозетки)": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop&q=80",
  "Монтаж точек канализации": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Монтаж точек отопления": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  "Прокладка труб канализационных с теплоизоляцией": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Теплоизоляция труб до 50 мм": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Теплоизоляция труб свыше 50 мм": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Опрессовка системы водопровода и канализации": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  
  // Общие ключевые слова для монтажа систем
  "Монтаж труб": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Монтаж точек": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Прокладка труб": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Теплоизоляция": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Опрессовка": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  
  // Полотенцесушители и радиаторы - детальные изображения
  "Установка полотенцесушителя": "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&h=400&fit=crop&q=80",
  "Установка полотенцесушителя электрического": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&q=80",
  "Монтаж полотенцесушителя с подготовкой труб и кранов": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Установка радиатора": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  "Демонтаж радиатора": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Окраска радиатора стального": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&q=80",
  "Окраска радиатора чугунного": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&q=80",
  "Монтаж радиатора отопления на готовые подводы": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  "Термоголовка радиатора установка": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Конвектор в пол/настенный/напольный монтаж": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  
  // Общие ключевые слова для радиаторов
  "Монтаж радиатора": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  "Окраска радиатора": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&q=80",
  "Термоголовка": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Конвектор": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  
  // Насосное оборудование - детальные изображения для каждого типа
  "Монтаж насоса скважинного (до 20 м)": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Монтаж насоса 20–50 м": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж насоса 50–90 м": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Замена центробежного насоса": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop&q=80",
  "Монтаж циркуляционного насоса": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop&q=80",
  "Замена циркуляционного насоса": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop&q=80",
  "Монтаж насосной станции": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Замена насосной станции": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж системы Sololift": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Монтаж узла рециркуляции": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Монтаж бака расширительного": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Монтаж оголовка скважины": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Монтаж реле давления": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  
  // Общие ключевые слова для насосов
  "Монтаж насоса": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Замена насоса": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Насосная станция": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж реле": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Монтаж оголовка": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  
  // Котельное оборудование - детальные изображения для каждого типа
  "Обвязка котла до 50 кВт": "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop&q=80",
  "Обвязка котла до 105 кВт": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Обвязка котла двухконтурного до 50 кВт": "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop&q=80",
  "Обвязка котла двухконтурного до 105 кВт": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж котла электрического": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Монтаж газовой колонки": "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop&q=80",
  "Монтаж дымовой трубы внутри": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж дымовой трубы снаружи": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Монтаж кронштейна для дымохода": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Опрессовка действующей системы отопления": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop&q=80",
  
  // Общие ключевые слова для котлов
  "Обвязка котла": "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop&q=80",
  "Монтаж котла": "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop&q=80",
  "Монтаж дымовой трубы": "https://images.unsplash.com/photo-1621905252472-44d6e69d27ca?w=600&h=400&fit=crop&q=80",
  "Монтаж кронштейна": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  
  // Общие сантехнические работы
  "Установка счётчика": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop&q=80",
  "Установка фильтра": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop&q=80",
  "Монтаж вентиля": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop&q=80",
  "Установка сифона": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop&q=80",
  "Обвязка ванны": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&q=80",
  "Монтаж коллектора": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Монтаж фановых труб": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
  "Штробление": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  "Нарезка резьбы": "https://images.unsplash.com/photo-1581092918484-8313e1f7e837?w=600&h=400&fit=crop&q=80",
  "Установка редуктора": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop&q=80",
  "Установка крана": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop&q=80"
}

// Функция для получения изображения по категории
export const getCategoryImage = (categoryId) => {
  return categoryImages[categoryId] || {
    url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop&q=80",
    alt: "Сантехнические услуги",
    fallback: "🔧"
  }
}

// Функция для получения изображения услуги с улучшенным поиском
export const getServiceImage = (serviceTitle, categoryId) => {
  // Нормализуем название услуги
  const normalizedTitle = serviceTitle.toLowerCase().trim()
  
  // Ищем точное совпадение
  if (serviceImages[serviceTitle]) {
    return serviceImages[serviceTitle]
  }
  
  // Ищем подходящее изображение по ключевым словам
  const keywords = [
    { keys: ['ванн'], url: serviceImages["Установка ванны простой"] },
    { keys: ['унитаз'], url: serviceImages["Установка унитаза"] },
    { keys: ['мойдодыр', 'умывальник', 'раковин'], url: serviceImages["Установка мойдодыра"] },
    { keys: ['мойк'], url: serviceImages["Установка мойки на кухне"] },
    { keys: ['биде'], url: serviceImages["Установка биде"] },
    { keys: ['смесител'], url: serviceImages["Установка смесителя"] },
    { keys: ['душ'], url: serviceImages["Установка душевой кабины"] },
    { keys: ['штанг'], url: serviceImages["Установка штанги"] },
    { keys: ['посудомоечн'], url: serviceImages["Установка посудомоечной машины"] },
    { keys: ['стиральн'], url: serviceImages["Установка стиральной машины"] },
    { keys: ['труб'], url: serviceImages["Монтаж труб"] },
    { keys: ['полотенцесушител'], url: serviceImages["Установка полотенцесушителя"] },
    { keys: ['радиатор'], url: serviceImages["Установка радиатора"] },
    { keys: ['насос'], url: serviceImages["Монтаж насоса"] },
    { keys: ['котл'], url: serviceImages["Монтаж котла"] },
    { keys: ['счётчик', 'счетчик'], url: serviceImages["Установка счётчика"] },
    { keys: ['фильтр'], url: serviceImages["Установка фильтра"] },
    { keys: ['коллектор'], url: serviceImages["Монтаж коллектора"] }
  ]
  
  // Ключевые слова для котельного оборудования
  const boilersKeywords = [
    { keys: ['обвязка котла до 50 квт'], url: serviceImages["Обвязка котла до 50 кВт"] },
    { keys: ['обвязка котла до 105 квт'], url: serviceImages["Обвязка котла до 105 кВт"] },
    { keys: ['обвязка котла двухконтурного до 50'], url: serviceImages["Обвязка котла двухконтурного до 50 кВт"] },
    { keys: ['обвязка котла двухконтурного до 105'], url: serviceImages["Обвязка котла двухконтурного до 105 кВт"] },
    { keys: ['котла электрического'], url: serviceImages["Монтаж котла электрического"] },
    { keys: ['газовой колонки'], url: serviceImages["Монтаж газовой колонки"] },
    { keys: ['дымовой трубы внутри'], url: serviceImages["Монтаж дымовой трубы внутри"] },
    { keys: ['дымовой трубы снаружи'], url: serviceImages["Монтаж дымовой трубы снаружи"] },
    { keys: ['кронштейна для дымохода'], url: serviceImages["Монтаж кронштейна для дымохода"] },
    { keys: ['опрессовка действующей системы'], url: serviceImages["Опрессовка действующей системы отопления"] }
  ]
  
  // Ключевые слова для насосного оборудования
  const pumpsKeywords = [
    { keys: ['насоса скважинного (до 20'], url: serviceImages["Монтаж насоса скважинного (до 20 м)"] },
    { keys: ['насоса 20–50', '20-50'], url: serviceImages["Монтаж насоса 20–50 м"] },
    { keys: ['насоса 50–90', '50-90'], url: serviceImages["Монтаж насоса 50–90 м"] },
    { keys: ['центробежного насоса'], url: serviceImages["Замена центробежного насоса"] },
    { keys: ['циркуляционного насоса монтаж'], url: serviceImages["Монтаж циркуляционного насоса"] },
    { keys: ['циркуляционного насоса замена'], url: serviceImages["Замена циркуляционного насоса"] },
    { keys: ['циркуляционного насоса'], url: serviceImages["Монтаж циркуляционного насоса"] },
    { keys: ['насосной станции монтаж'], url: serviceImages["Монтаж насосной станции"] },
    { keys: ['насосной станции замена'], url: serviceImages["Замена насосной станции"] },
    { keys: ['насосной станции'], url: serviceImages["Монтаж насосной станции"] },
    { keys: ['системы sololift'], url: serviceImages["Монтаж системы Sololift"] },
    { keys: ['узла рециркуляции'], url: serviceImages["Монтаж узла рециркуляции"] },
    { keys: ['бака расширительного'], url: serviceImages["Монтаж бака расширительного"] },
    { keys: ['оголовка скважины'], url: serviceImages["Монтаж оголовка скважины"] },
    { keys: ['реле давления'], url: serviceImages["Монтаж реле давления"] }
  ]
  
  // Ключевые слова для радиаторов и полотенцесушителей
  const radiatorsKeywords = [
    { keys: ['полотенцесушителя электрического'], url: serviceImages["Установка полотенцесушителя электрического"] },
    { keys: ['полотенцесушителя с подготовкой'], url: serviceImages["Монтаж полотенцесушителя с подготовкой труб и кранов"] },
    { keys: ['полотенцесушител'], url: serviceImages["Установка полотенцесушителя"] },
    { keys: ['демонтаж радиатора'], url: serviceImages["Демонтаж радиатора"] },
    { keys: ['окраска радиатора стального'], url: serviceImages["Окраска радиатора стального"] },
    { keys: ['окраска радиатора чугунного'], url: serviceImages["Окраска радиатора чугунного"] },
    { keys: ['окраска радиатора'], url: serviceImages["Окраска радиатора стального"] },
    { keys: ['радиатора отопления на готовые подводы'], url: serviceImages["Монтаж радиатора отопления на готовые подводы"] },
    { keys: ['термоголовка'], url: serviceImages["Термоголовка радиатора установка"] },
    { keys: ['конвектор'], url: serviceImages["Конвектор в пол/настенный/напольный монтаж"] }
  ]
  
  // Дополнительные ключевые слова для монтажа систем
  const systemsKeywords = [
    { keys: ['d16-25', 'd16', 'водоснабжения/отопления'], url: serviceImages["Монтаж труб водоснабжения/отопления (ПП, СПЭ, Мпл) d16-25 мм"] },
    { keys: ['d26-40', 'd26', 'd40'], url: serviceImages["Монтаж труб водоснабжения/отопления (ПП, СПЭ, Мпл) d26-40 мм"] },
    { keys: ['d50-63', 'd50', 'd63'], url: serviceImages["Монтаж труб водоснабжения/отопления (ПП, СПЭ, Мпл) d50-63 мм"] },
    { keys: ['канализации внутренней', 'внутренней d'], url: serviceImages["Монтаж труб канализации внутренней d до 110 мм"] },
    { keys: ['канализации наружной до', 'наружной до 110'], url: serviceImages["Монтаж труб канализации наружной до 110 мм"] },
    { keys: ['канализации наружной свыше', 'свыше 110'], url: serviceImages["Монтаж труб канализации наружной свыше 110 мм"] },
    { keys: ['водорозетки', 'точек водоснабжения'], url: serviceImages["Монтаж точек водоснабжения (водорозетки)"] },
    { keys: ['точек канализации'], url: serviceImages["Монтаж точек канализации"] },
    { keys: ['точек отопления'], url: serviceImages["Монтаж точек отопления"] },
    { keys: ['с теплоизоляцией', 'канализационных с'], url: serviceImages["Прокладка труб канализационных с теплоизоляцией"] },
    { keys: ['теплоизоляция труб до', 'до 50 мм'], url: serviceImages["Теплоизоляция труб до 50 мм"] },
    { keys: ['теплоизоляция труб свыше', 'свыше 50 мм'], url: serviceImages["Теплоизоляция труб свыше 50 мм"] },
    { keys: ['опрессовка системы'], url: serviceImages["Опрессовка системы водопровода и канализации"] }
  ]
  
  // Сначала проверяем специфичные ключевые слова для котлов
  for (const { keys, url } of boilersKeywords) {
    if (keys.some(key => normalizedTitle.includes(key.toLowerCase()))) {
      return url
    }
  }
  
  // Затем проверяем специфичные ключевые слова для насосов
  for (const { keys, url } of pumpsKeywords) {
    if (keys.some(key => normalizedTitle.includes(key.toLowerCase()))) {
      return url
    }
  }
  
  // Затем проверяем специфичные ключевые слова для радиаторов
  for (const { keys, url } of radiatorsKeywords) {
    if (keys.some(key => normalizedTitle.includes(key.toLowerCase()))) {
      return url
    }
  }
  
  // Затем проверяем специфичные ключевые слова для систем
  for (const { keys, url } of systemsKeywords) {
    if (keys.some(key => normalizedTitle.includes(key.toLowerCase()))) {
      return url
    }
  }
  
  // Проверяем каждый набор ключевых слов
  for (const { keys, url } of keywords) {
    if (keys.some(key => normalizedTitle.includes(key))) {
      return url
    }
  }
  
  // Если не найдено, возвращаем изображение категории
  const categoryImage = getCategoryImage(categoryId)
  return categoryImage.url
}
