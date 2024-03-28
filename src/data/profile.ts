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

export const PROFILE = {
	name: 'Daniel Alarcón',
	position: 'Software Engineer',
	location: {
		city: 'Frisco TX',
		country: 'United States',
	},
	languages: [
		Language.SPANISH,
		Language.ENGLISH,
	],
	aboutMe: [
		'I\'m passionate about building products on the web, specialized in the Front-end with over 5 years of commercial experience.',
		'My strongest tech skills are the solid knowledge of the front-end stack (JavaScript, CSS. HTML), which gives me the base to learn, use, an be quickly productive with the javascript ecosystem and all the tools necessary to bridge the gap between data/API and UI/UX design and create user-friendly and accessible products.'
	],
	email: 'danielalarconcuesta@gmail.com',
	linkedinLink: 'https://www.linkedin.com/in/danielalarcon17',
	tools: new Set([
		Tool.JAVASCRIPT,
		Tool.TYPESCRIPT,
		Tool.HTML,
		Tool.CSS,
		Tool.SASS,
		Tool.REACT,
		Tool.REDUX,
		Tool.ANGULAR,
		Tool.NODE,
		Tool.NEST_JS,
		Tool.NEXT_JS,
		Tool.ASTRO_BUILD
	])
}
