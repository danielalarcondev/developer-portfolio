
export function handleExperienceHeight() {
	const experienceSection = document.querySelector(
		'.experience-section'
	) as HTMLElement;
	const profile = document.querySelector('.profile');

	let debounceTimeoutId: number | null = null;

	function calculateSectionHeight() {
		const profileHeight = document.querySelector('.profile')?.clientHeight;
		const twoColumnsView = window.innerWidth >= 768;

		if (twoColumnsView && profileHeight && experienceSection) {
			experienceSection.setAttribute(
				'style',
				`height:${profileHeight}px`
			);
		}
	}

	if (profile) {
		calculateSectionHeight();

		new ResizeObserver(() => {
			if (debounceTimeoutId) {
				clearTimeout(debounceTimeoutId);
			}
			debounceTimeoutId = setTimeout(calculateSectionHeight, 0);
		}).observe(profile);
	}
}