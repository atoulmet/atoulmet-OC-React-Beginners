function Categories({ categories, setActiveCategory, activeCategory }) {
	return (
		<select
			name='categories'
			value={activeCategory}
			onChange={(e) => setActiveCategory(e.target.value)}
		>
			{categories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	)
}

export default Categories
