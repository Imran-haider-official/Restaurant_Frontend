import React, { useState } from 'react'

const menuItems = [
  {
    id: 1,
    category: 'Breakfast',
    name: 'Croissant',
    price: 55,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1630332016499-3d83a04ee95a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    category: 'Breakfast',
    name: 'Muffin',
    price: 30,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1617196035807-4458d2e3f5bd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    category: 'Breakfast',
    name: 'Waffles',
    price: 45,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1604908177522-1f5e5cf16a60?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    category: 'Breakfast',
    name: 'Bacon',
    price: 25,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    category: 'Breakfast',
    name: 'Pancakes',
    price: 40,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    category: 'Breakfast',
    name: 'Eggs Benedict',
    price: 65,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1608039755401-5131e7bac6b4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    category: 'Breakfast',
    name: 'French Toast',
    price: 35,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    category: 'Breakfast',
    name: 'Bagel',
    price: 28,
    rating: 3,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    category: 'Lunch',
    name: 'Caesar Salad',
    price: 25,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    category: 'Lunch',
    name: 'Oatmeal',
    price: 60,
    rating: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    category: 'Lunch',
    name: 'Cobb Salad',
    price: 20,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1547941367-f80723d8859c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    category: 'Lunch',
    name: 'Coleslaw',
    price: 35,
    rating: 3,
    image: 'https://images.unsplash.com/photo-1580822180964-01b35d8b62d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 13,
    category: 'Lunch',
    name: 'Grilled Chicken',
    price: 75,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1532636875304-0c89119d9ac1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 14,
    category: 'Lunch',
    name: 'Fish Tacos',
    price: 45,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 15,
    category: 'Lunch',
    name: 'Quinoa Bowl',
    price: 38,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 16,
    category: 'Lunch',
    name: 'Burger',
    price: 50,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 17,
    category: 'Dinner',
    name: 'Steak',
    price: 120,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 18,
    category: 'Dinner',
    name: 'Salmon',
    price: 85,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 19,
    category: 'Dinner',
    name: 'Pasta Carbonara',
    price: 65,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1551892376-c73ba8b6b219?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 20,
    category: 'Dinner',
    name: 'Chicken Parmesan',
    price: 70,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 21,
    category: 'Pizza',
    name: 'Margherita Pizza',
    price: 45,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 22,
    category: 'Pizza',
    name: 'Pepperoni Pizza',
    price: 50,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 23,
    category: 'Pizza',
    name: 'BBQ Chicken Pizza',
    price: 55,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 24,
    category: 'Pizza',
    name: 'Vegetarian Pizza',
    price: 42,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 25,
    category: 'Burger',
    name: 'Classic Burger',
    price: 48,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 26,
    category: 'Burger',
    name: 'Cheese Burger',
    price: 52,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1551782450-17144efb5723?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 27,
    category: 'Burger',
    name: 'Bacon Burger',
    price: 58,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 28,
    category: 'Burger',
    name: 'Veggie Burger',
    price: 45,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 29,
    category: 'Drinks',
    name: 'Coffee',
    price: 15,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 30,
    category: 'Drinks',
    name: 'Orange Juice',
    price: 12,
    rating: 3,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 31,
    category: 'Drinks',
    name: 'Smoothie',
    price: 18,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 32,
    category: 'Drinks',
    name: 'Iced Tea',
    price: 10,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 33,
    category: 'Dessert',
    name: 'Chocolate Cake',
    price: 35,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 34,
    category: 'Dessert',
    name: 'Ice Cream',
    price: 25,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 35,
    category: 'Dessert',
    name: 'Tiramisu',
    price: 40,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 36,
    category: 'Dessert',
    name: 'Cheesecake',
    price: 38,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
  },
]

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Pizza', 'Burger', 'Drinks', 'Dessert']

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase())

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredItems.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1) // Reset to first page when category changes
  }

  const renderPagination = () => {
    if (totalPages <= 1) return null

    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          className="pagination-link"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      )
    }

    // First page + ellipsis if needed
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className="pagination-link"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      )
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="pagination-link pagination-break">
            ...
          </span>
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-link ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      )
    }

    // Last page + ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="pagination-link pagination-break">
            ...
          </span>
        )
      }
      pages.push(
        <button
          key={totalPages}
          className="pagination-link"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          className="pagination-link"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )
    }

    return (
      <div className="pagination-container">
        <div className="pagination">
          {pages}
        </div>
      </div>
    )
  }

  return (
    <section className="menu-page">
      <div className="menu-header">
        <h2>All Items</h2>
        <div className="menu-header-underline" />
      </div>

      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${cat === activeCategory ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {currentItems.map((item) => (
          <article key={item.id} className="menu-card">
            <div className="menu-card-img-wrap">
              <img src={item.image} alt={item.name} className="menu-card-img" />
            </div>
            <div className="menu-card-body">
              <div className="menu-card-title">
                <h3>{item.name}</h3>
                <span>${item.price}</span>
              </div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className={idx < item.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <div className="menu-actions">
                <button className="order-btn" type="button">Order Now</button>
                <button className="cart-btn" type="button" aria-label={`Add ${item.name} to cart`}>
                  🛒
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {renderPagination()}
    </section>
  )
}

export default Menu