export const useFetchData = () => {
    return new Promise((resolve, reject) => {
        const data = [{
                "id": 1,
                "name": "Товары",
                "categories": [{
                        "id": 1,
                        "name": "Электроника",
                        "subcategories": [{
                                "id": 1,
                                "name": "Телефоны и смарт-часы",
                                "tags": [{
                                        "id": 1,
                                        "name": "Смартфоны",
                                        "aliases": [
                                            "Телефон",
                                            "mobile",
                                            "iphone"
                                        ]
                                    },
                                    {
                                        "id": 2,
                                        "name": "Смарт-часы и фитнес-браслеты",
                                        "aliases": []
                                    },
                                    {
                                        "id": 3,
                                        "name": "SIM-карты",
                                        "aliases": []
                                    },
                                    {
                                        "id": 4,
                                        "name": "Мобильные телефоны",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "name": "Моноблоки и системные блоки",
                                "tags": [{
                                        "id": 5,
                                        "name": "Системные блоки",
                                        "aliases": []
                                    },
                                    {
                                        "id": 6,
                                        "name": "Моноблоки",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 3,
                                "name": "Офисная техника",
                                "tags": [{
                                        "id": 7,
                                        "name": "Принтеры",
                                        "aliases": []
                                    },
                                    {
                                        "id": 8,
                                        "name": "МФУ",
                                        "aliases": []
                                    },
                                    {
                                        "id": 9,
                                        "name": "Сканеры",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 4,
                                "name": "Телевизоры и видеотехника",
                                "tags": [{
                                        "id": 10,
                                        "name": "Телевизоры",
                                        "aliases": []
                                    },
                                    {
                                        "id": 11,
                                        "name": "Кронштейны",
                                        "aliases": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Одежда",
                        "subcategories": [{
                                "id": 5,
                                "name": "Женщинам",
                                "tags": [{
                                        "id": 12,
                                        "name": "Брюки, бриджи и капри",
                                        "aliases": []
                                    },
                                    {
                                        "id": 13,
                                        "name": "Верхняя одежда",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 6,
                                "name": "Мужчинам",
                                "tags": [{
                                        "id": 14,
                                        "name": "Брюки",
                                        "aliases": []
                                    },
                                    {
                                        "id": 15,
                                        "name": "Верхняя одежда",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 7,
                                "name": "Детям",
                                "tags": [{
                                        "id": 16,
                                        "name": "Девочкам",
                                        "aliases": []
                                    },
                                    {
                                        "id": 17,
                                        "name": "Мальчикам",
                                        "aliases": []
                                    },
                                    {
                                        "id": 18,
                                        "name": "Новорожденным",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 8,
                                "name": "Спецодежда",
                                "tags": [{
                                        "id": 19,
                                        "name": "Медицинская одежда",
                                        "aliases": []
                                    },
                                    {
                                        "id": 20,
                                        "name": "Сигнальная одежда",
                                        "aliases": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "Обувь",
                        "subcategories": [{
                                "id": 9,
                                "name": "Мужчинам",
                                "tags": [{
                                        "id": 21,
                                        "name": "Домашняя обувь",
                                        "aliases": []
                                    },
                                    {
                                        "id": 22,
                                        "name": "Ботинки и полуботинки",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 10,
                                "name": "Женщинам",
                                "tags": [{
                                        "id": 23,
                                        "name": "Балетки",
                                        "aliases": []
                                    },
                                    {
                                        "id": 24,
                                        "name": "Босоножки",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 11,
                                "name": "Детям",
                                "tags": [{
                                        "id": 25,
                                        "name": "Девочкам",
                                        "aliases": []
                                    },
                                    {
                                        "id": 26,
                                        "name": "Мальчикам",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 12,
                                "name": "Уход и аксессуары",
                                "tags": [{
                                        "id": 27,
                                        "name": "Чехлы на обувь",
                                        "aliases": []
                                    },
                                    {
                                        "id": 28,
                                        "name": "Губки",
                                        "aliases": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "name": "Дом и Сад",
                        "subcategories": [{
                                "id": 13,
                                "name": "Посуда",
                                "tags": [{
                                        "id": 29,
                                        "name": "Столовая посуда",
                                        "aliases": []
                                    },
                                    {
                                        "id": 30,
                                        "name": "Столовые приборы",
                                        "aliases": []
                                    },
                                    {
                                        "id": 31,
                                        "name": "Детская посуда",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 14,
                                "name": "Текстиль",
                                "tags": [{
                                        "id": 32,
                                        "name": "Шторы и карнизы",
                                        "aliases": []
                                    },
                                    {
                                        "id": 33,
                                        "name": "Постельное белье",
                                        "aliases": []
                                    },
                                    {
                                        "id": 34,
                                        "name": "Одеяла",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 15,
                                "name": "Дача и сад",
                                "tags": [{
                                        "id": 35,
                                        "name": "Отдых и пикник",
                                        "aliases": []
                                    },
                                    {
                                        "id": 36,
                                        "name": "Садовая мебель",
                                        "aliases": []
                                    },
                                    {
                                        "id": 37,
                                        "name": "Садовый инструмент",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 16,
                                "name": "Товары для бани и сауны",
                                "tags": [{
                                        "id": 38,
                                        "name": "Веники для бань",
                                        "aliases": []
                                    },
                                    {
                                        "id": 39,
                                        "name": "Банный текстиль",
                                        "aliases": []
                                    },
                                    {
                                        "id": 40,
                                        "name": "Ведра и кадки",
                                        "aliases": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "name": "Сырье",
                "categories": [{
                        "id": 5,
                        "name": "Металлы и сплавы",
                        "subcategories": [{
                                "id": 17,
                                "name": "Черные металлы и сплавы",
                                "tags": [{
                                        "id": 41,
                                        "name": "Сталь",
                                        "aliases": []
                                    },
                                    {
                                        "id": 42,
                                        "name": "Чугун",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 18,
                                "name": "Цветные металлы и сплавы",
                                "tags": [{
                                        "id": 43,
                                        "name": "Алюминий",
                                        "aliases": []
                                    },
                                    {
                                        "id": 44,
                                        "name": "Олово",
                                        "aliases": []
                                    },
                                    {
                                        "id": 45,
                                        "name": "Медь",
                                        "aliases": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "name": "Резина",
                        "subcategories": [{
                                "id": 19,
                                "name": "Резины общего назначения",
                                "tags": [{
                                        "id": 46,
                                        "name": "Натуральный каучук",
                                        "aliases": []
                                    },
                                    {
                                        "id": 47,
                                        "name": "Синтетический каучук бутадиеновый",
                                        "aliases": []
                                    },
                                    {
                                        "id": 48,
                                        "name": "Синтетический каучук изопреновый",
                                        "aliases": []
                                    }
                                ]
                            },
                            {
                                "id": 20,
                                "name": "Резины специального назначения",
                                "tags": [{
                                        "id": 49,
                                        "name": "Наирит",
                                        "aliases": []
                                    },
                                    {
                                        "id": 50,
                                        "name": "Бутадиеннитрильный каучук",
                                        "aliases": []
                                    },
                                    {
                                        "id": 51,
                                        "name": "Тиокол",
                                        "aliases": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "name": "Технологии",
                "categories": [{
                    "id": 7,
                    "name": "3D печать",
                    "subcategories": [{
                        "id": 21,
                        "name": "3D печать",
                        "tags": [{
                                "id": 52,
                                "name": "Прототипирование методом наплавления",
                                "aliases": [
                                    "FDM"
                                ]
                            },
                            {
                                "id": 53,
                                "name": "Селективное лазерное спекание",
                                "aliases": [
                                    "SLS"
                                ]
                            },
                            {
                                "id": 54,
                                "name": "Лазерная стереолитография",
                                "aliases": [
                                    "SLA"
                                ]
                            },
                            {
                                "id": 55,
                                "name": "Электронно-лучевая плавка",
                                "aliases": [
                                    "EBM"
                                ]
                            },
                            {
                                "id": 56,
                                "name": "Производство моделей с использованием ламинировани",
                                "aliases": [
                                    "LOM"
                                ]
                            },
                            {
                                "id": 57,
                                "name": "Многоструйное моделирование",
                                "aliases": [
                                    "MJM"
                                ]
                            }
                        ]
                    }]
                }]
            }
        ]
        setTimeout(() => {
          if (Math.random() * 100 < 7) {
            reject({ error: 'Ooops...' })
          } else {
            resolve(data);
          }
        }, Math.floor(Math.random() * 2000));
    });
};