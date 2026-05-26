export function formatDate(dateStr?: string | null): string {
	if (!dateStr) return ''
	try {
		const date = new Date(dateStr)
		if (isNaN(date.getTime())) return ''
		const day = date.getDate()
		const month = date.toLocaleDateString('en-US', { month: 'long' })
		const year = date.getFullYear()
		return `${day} ${month} ${year}`
	} catch {
		return ''
	}
}
