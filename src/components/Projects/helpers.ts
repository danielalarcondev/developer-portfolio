export const configureProjectsNavigation = () => {
	const FADE_TRANSITION_DURATION = 700;

	const previousButton = document.querySelector(
		'.projects-carousel-previous'
	);
	const nextButton = document.querySelector('.projects-carousel-next');
	const numberOfProjects = document.querySelectorAll('.project').length;

	let activeProject = 1;
	let isPreviousTransitionOnGoing = false;
	let isNextTransitionOnGoing = false;

	previousButton?.addEventListener('click', () => {
		if (isPreviousTransitionOnGoing || isNextTransitionOnGoing) {
			return;
		}

		const nextActiveProject =
			activeProject > 1 ? activeProject - 1 : numberOfProjects;

		const currentProject = document.querySelector(
			`.project-${activeProject}`
		);
		const previousProject = document.querySelector(
			`.project-${nextActiveProject}`
		);

		if (!currentProject || !previousProject) {
			return;
		}

		isPreviousTransitionOnGoing = true;

		currentProject.classList.add('fade-out-previous');

		setTimeout(() => {
			currentProject.classList.remove('fade-out-previous');
			currentProject.classList.add('hidden');

			previousProject.classList.remove('hidden');
			previousProject.classList.add('flex');
			previousProject.classList.add('fade-in-previous');

			setTimeout(() => {
				previousProject.classList.remove('fade-in-previous');
				previousProject.classList.remove('hidden');
				previousProject.classList.add('flex');

				isPreviousTransitionOnGoing = false;
				activeProject = nextActiveProject;
			}, FADE_TRANSITION_DURATION);
		}, FADE_TRANSITION_DURATION);
	});

	nextButton?.addEventListener('click', () => {
		if (isPreviousTransitionOnGoing || isNextTransitionOnGoing) {
			return;
		}

		const nextActiveProject =
			activeProject === numberOfProjects ? 1 : activeProject + 1;

		const currentProject = document.querySelector(
			`.project-${activeProject}`
		);
		const nextProject = document.querySelector(
			`.project-${nextActiveProject}`
		);

		if (!currentProject || !nextProject) {
			return;
		}

		isNextTransitionOnGoing = true;

		currentProject.classList.add('fade-out-next');

		setTimeout(() => {
			currentProject.classList.remove('fade-out-next');
			currentProject.classList.add('hidden');

			nextProject.classList.remove('hidden');
			nextProject.classList.add('flex');
			nextProject.classList.add('fade-in-next');

			setTimeout(() => {
				nextProject.classList.remove('fade-in-next');
				nextProject.classList.remove('hidden');
				nextProject.classList.add('flex');

				isNextTransitionOnGoing = false;
				activeProject = nextActiveProject;
			}, FADE_TRANSITION_DURATION);
		}, FADE_TRANSITION_DURATION);
	});
}
