export interface Project {
	projectId: string;
	title: string;
	description: string[];
	tags: string[];
	desktopMedia: string[];
	phoneMedia: string[];
	liveLink: string | undefined;
	repositoryLink: string | undefined;
	isActive: boolean | undefined;
}

export const PROJECTS: Project[] = [
	{
		projectId: '1',
		title: 'Project name',
		description: [
			"Description of the project. Laboris aliquip Lorem sunt voluptate magna tempor proident adipisicing Lorem esse esse minim tempor ullamco. Sit sunt Lorem ex mollit quis occaecat veniam. Aliquip magna laboris labore commodo irure qui non sit. Ea aute ad ex minim magna consectetur exercitation pariatur non et eiusmod. Aute aliquip fugiat nostrud labore ut cillum non consequat quis minim elit nulla nulla voluptate. Pariatur pariatur sint duis voluptate ut non proident consectetur aliqua. Mollit consequat cupidatat eu reprehenderit aliqua ad ad quis mollit ut labore aute."
		],
		tags: [
			'JavaScript',
			'Html',
			'Css',
			'Tailwind',
		],
		desktopMedia: ['/demo/desktop.mp4'],
		phoneMedia: ['/demo/phone.mp4'],
		liveLink: 'https://google.com',
		repositoryLink: 'https://github.com/',
		isActive: true
	}
]
