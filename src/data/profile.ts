import { Language, Tool } from '../types';

interface Location {
	city: string;
	country: string;
}


export interface Profile {
	name: string;
	position: string;
	location: Location;
	languages: Language[];
	aboutMe: string[];
	email: string;
	linkedinLink: string;
	tools: Set<Tool>;
}

export const PROFILE: Profile = {
	name: 'Your name',
	position: 'Software Developer',
	location: {
		city: 'New York',
		country: 'United States',
	},
	languages: [
		Language.ENGLISH
	],
	aboutMe: [
		'Your summary. Labore commodo nostrud commodo exercitation fugiat laborum. Incididunt anim esse laborum irure fugiat est aliqua voluptate est. Cillum reprehenderit proident quis enim ex elit pariatur tempor consequat id laboris. Cupidatat dolor pariatur aliquip ea ad officia ipsum proident.'
	],
	email: 'youremail@gmail.com',
	linkedinLink: 'https://www.linkedin.com/in/your-profile',
	tools: new Set([
		Tool.JAVASCRIPT,
		Tool.TYPESCRIPT,
		Tool.HTML,
		Tool.CSS,
	])
}
