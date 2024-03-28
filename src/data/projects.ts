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
		title: 'Project Title 1',
		description: [
			'Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat. Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat.',
			'Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat. Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat.',
		],
		tags: [
			'JavaScript',
			'Typescript',
			'React',
			'Sass',
			'Redux',
			'Redux-sagas',
			'Webpack',
			'Html',
			'Css',
			'Jest',
			'Cypress',
		],
		desktopMedia: ['/demo.gif', '/demo.gif', '/demo.gif'],
		phoneMedia: ['/demo.gif', '/demo.gif', '/demo.gif'],
		liveLink: 'https://google.com',
		repositoryLink: 'https://google.com',
		isActive: true
	},

	{
		projectId: '2',
		title: 'Project Title 2',
		description: [
			'Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat. Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat.',
			'Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat. Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat.',
		],
		tags: [
			'JavaScript',
			'Typescript',
			'React',
			'Sass',
			'Redux',
			'Redux-sagas',
			'Webpack',
			'Html',
			'Css',
			'Jest',
			'Cypress',
		],
		desktopMedia: ['/demo.gif', '/demo.gif', '/demo.gif'],
		phoneMedia: ['/demo.gif', '/demo.gif', '/demo.gif'],
		liveLink: 'https://google.com',
		repositoryLink: 'https://google.com',
		isActive: true
	},

	{
		projectId: '3',
		title: 'Project Title 3',
		description: [
			'Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat. Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat.',
			'Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat. Duis minim id cupidatat ad dolore enim tempor ea dolore quis. Anim dolore veniam amet elit do adipisicing veniam magna culpa labore irure nulla magna. Sit cupidatat cillum anim dolor adipisicing consectetur. Sint minim enim incididunt est ex voluptate ut nisi sunt quis. Labore duis excepteur et pariatur officia exercitation esse ipsum fugiat.',
		],
		tags: [
			'JavaScript',
			'Typescript',
			'React',
			'Sass',
			'Redux',
			'Redux-sagas',
			'Webpack',
			'Html',
			'Css',
			'Jest',
			'Cypress',
		],
		desktopMedia: ['/demo.gif', '/demo.gif', '/demo.gif'],
		phoneMedia: ['/demo.gif', '/demo.gif', '/demo.gif'],
		liveLink: 'https://google.com',
		repositoryLink: 'https://google.com',
		isActive: true
	}
]
