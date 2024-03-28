export const configureCopyEmail = () => {
	const button = document.querySelector('.copy-icon') as HTMLElement;
	const emailAddress: string =
		document.querySelector('.email-address')?.textContent || '';

	const onCopyEmail = async () => {
		if (!emailAddress) {
			return;
		}

		try {
			await navigator.clipboard.writeText(emailAddress);
		} finally {
			const emailButtonWrapper = document.querySelector(
				'.email-button-wrapper'
			) as HTMLElement;

			console.log('emailButtonWrapper', emailButtonWrapper);
			emailButtonWrapper?.classList.add('email-copied-animation');

			setTimeout(() => {
				emailButtonWrapper?.classList.remove('email-copied-animation');
			}, 1500);
		}
	};

	button?.addEventListener('click', onCopyEmail);
}
