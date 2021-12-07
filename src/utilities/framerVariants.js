export const pageVariants = {
	page: {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1 } },
		exit: { opacity: 0 },
		reduced: {
			hidden: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
				transition: { duration: 0.5, delay: 0.1 },
			},
			exit: {
				opacity: 0,
			},
		},
	},
};

export const navVariants = {
	nav: {
		hidden: { opacity: 0, x: '100vw' },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', duration: 1 },
		},
		exit: { opacity: 0, x: '100vw' },
		reduced: {
			hidden: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
				transition: { duration: 0.5, delay: 0.1 },
			},
			exit: {
				opacity: 0,
			},
		},
	},
};
