import type { Image } from '../../payload-types'

export function getPayloadImageUrl(
	image: number | Image | null | undefined,
	fallback = '',
): string {
	if (!image || typeof image === 'number') return fallback
	return image.url ?? fallback
}

export function getPayloadImageDimensions(
	image: number | Image | null | undefined,
	fallback = { width: 1280, height: 720 },
) {
	if (!image || typeof image === 'number') return fallback
	return {
		width: image.width ?? fallback.width,
		height: image.height ?? fallback.height,
	}
}
