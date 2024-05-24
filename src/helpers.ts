
const THEME_LOCAL_STORAGE_KEY = "THEME_CONFIGURATION";

enum ThemeConfig {
	DARK = "Dark",
	LIGHT = "Light"
}

const themeSwitcher = document.querySelector(
	'.theme-switcher'
) as HTMLInputElement;

const isStoredThemeConfigurationValid = (value: string | null) => value && Object.values(ThemeConfig).includes(value as ThemeConfig);

const getConfiguredTheme = (): ThemeConfig => {
	let currentConfiguration = null;
	const localStorageValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

	if (isStoredThemeConfigurationValid(localStorageValue)) {
		currentConfiguration = localStorageValue as ThemeConfig;

	} else {
		const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)')?.matches || false;
		currentConfiguration = isSystemDark ? ThemeConfig.DARK : ThemeConfig.LIGHT;
	}

	return currentConfiguration;
}

export const initThemeConfiguration = () => {

	const configuredTheme = getConfiguredTheme();

	if (configuredTheme === ThemeConfig.DARK) {
		document.documentElement.classList.add('dark');
		themeSwitcher?.click();
	}

	themeSwitcher?.addEventListener('click', () => {

		if (themeSwitcher?.checked) {
			document.documentElement.classList.add('dark');
			localStorage.setItem(THEME_LOCAL_STORAGE_KEY, ThemeConfig.DARK);

		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem(THEME_LOCAL_STORAGE_KEY, ThemeConfig.LIGHT);
		}

	});
}
