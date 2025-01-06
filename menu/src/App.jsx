import { useState } from 'react'
import Title from './Title'
import menuData from './data'
import Menu from './Menu'
import Categories from './Categories'

const allCategories = ['all', ...new Set(menuData.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuData)
      return;
    }
    const newItems = menuData.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
