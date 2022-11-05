export const initialBills = {
    bills: [
        {
            "id": 1,
            "description": "Dominoes",
            "category": "Food & Dining",
            "amount": 430,
            "date": "2020-01-02"
        },
        {
            "id": 2,
            "description": "Car wash",
            "category": "Utility",
            "amount": 500,
            "date": "2020-01-06"
        },
        {
            "id": 3,
            "description": "Amazon",
            "category": "Shopping",
            "amount": 2030,
            "date": "2020-01-07"
        },
        {
            "id": 4,
            "description": "House rent",
            "category": "Food & Dining",
            "amount": 35900,
            "date": "2020-01-03"
        },
        {
            "id": 5,
            "description": "Tuition",
            "category": "Education",
            "amount": 2200,
            "date": "2020-01-12"
        },
        {
            "id": 6,
            "description": "Laundry",
            "category": "Personal Care",
            "amount": 320,
            "date": "2020-01-14"
        },
        {
            "id": 7,
            "description": "Vacation",
            "category": "Travel",
            "amount": 3430,
            "date": "2020-01-18"
        }
    ]
};

export const totalBills = initialBills.length;

export const initialCategories = {
    categories: [
        {
            id: 1,
            tag: "Travel",
        },
        {
            id: 2,
            tag: "Personal Care",
        },
        {
            id: 3,
            tag: "Education",
        },
        {
            id: 4,
            tag: "Food & Dining",
        },
        {
            id: 5,
            tag: "Utility",
        },
        {
            id: 6,
            tag: "Shopping",
        },
    ]
};

export const totalCategories = initialCategories.length;