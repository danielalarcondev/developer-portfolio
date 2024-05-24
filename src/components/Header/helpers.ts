
const PRIMARY_COLOR = 'bg-primary-700';
	const TRANSPARENT = 'bg-transparent';
	const TRANSPARENT_WITH_OPACITY = 'bg-transparent/10';

	const subheader = document.querySelector('.subheader') as HTMLElement;
	const button = document.querySelector('.menu-button') as HTMLElement;
	const ul = document.querySelector('.menu-ul') as HTMLElement;
	const nav = document.querySelector('.menu-nav') as HTMLElement;
	const menuButtons = document.querySelectorAll('.menu-anchor');
	
	let isMenuOpen = false;
	let intersectionObserverOptions = {
		root: null,
		threshold: 1.0,
	};

export const configureMenu = () => {
	/* Intersection Observer */
	const handleSubheaderIsVisible = () => {
		nav?.classList.remove(PRIMARY_COLOR);
		nav?.classList.add(TRANSPARENT_WITH_OPACITY);

		if (!isMenuOpen) {
			ul?.classList.remove(PRIMARY_COLOR);
			ul?.classList.add(TRANSPARENT);
		}
	};

	const handleSubheaderIsNotVisible = () => {
		nav?.classList.remove(TRANSPARENT_WITH_OPACITY);
		ul?.classList.remove(TRANSPARENT);

		nav?.classList.add(PRIMARY_COLOR);
		ul?.classList.add(PRIMARY_COLOR);
	};

	const handleScroll = ([entry]: IntersectionObserverEntry[]) => {
		const isSubheaderVisible = entry?.isIntersecting;

		if (isSubheaderVisible) {
			handleSubheaderIsVisible();
			return;
		}

		handleSubheaderIsNotVisible();
	};

	let observer = new IntersectionObserver(
		handleScroll,
		intersectionObserverOptions
	);

	if (subheader && observer) {
		observer.observe(subheader);
	}

	/* Events - Menu Button */
	button?.addEventListener('click', () => {
		isMenuOpen = !isMenuOpen;

		if (isMenuOpen) {
			ul?.classList.remove(TRANSPARENT);
			ul?.classList.add(PRIMARY_COLOR);
		} else {
			ul?.classList.remove(PRIMARY_COLOR);
			ul?.classList.add(TRANSPARENT);
		}
	});

	const closeMenu = () => {
		if (isMenuOpen) {
			button?.click();
		}
	};

	/* Resize Observer */
	new ResizeObserver(() => {
		closeMenu();
	}).observe(document.body);

	menuButtons.forEach((button) => {
		button.addEventListener('click', closeMenu);
	});
}
