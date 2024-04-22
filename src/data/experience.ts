export interface Experience {
	date: string;
	title: string;
	description: string;
	tags: string[];
}

export const EXPERIENCES: Experience[] = [
	{
		date: 'Jan 2020 - PRESENT',
		title: 'Front-end Developer II',
		description: 'Description of the role. Cillum tempor irure elit ipsum sit ad. Sint proident consectetur esse sint. Cillum sunt labore sint ut ex cillum est est quis elit sit sit. Proident et aliquip nostrud irure pariatur pariatur. Ex commodo ut do et duis ea quis non voluptate ut incididunt. Anim sit laborum nostrud laboris et laborum exercitation id eu tempor.',
		tags: [
			'JavaScript',
			'Typescript',
			'React',
			'Git',
		]
	},
	{
		date: 'Sep 2017 - Jan 2020',
		title: 'Front-end Developer I',
		description: 'Consequat magna officia laborum labore Lorem. Id velit nostrud sunt minim non culpa eiusmod dolor labore exercitation magna. Amet in labore aliqua in eu consequat proident eu voluptate nisi aliquip pariatur minim.',
		tags: [
			'JavaScript',
			'Typescript',
			'React',
			'Git',
		]
	}
]
