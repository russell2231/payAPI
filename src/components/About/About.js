import { useEffect } from 'react';

import ScheduleDemo from '../shared/ScheduleDemo/ScheduleDemo';

import { ReactComponent as BgCircle } from '../../assets/shared/desktop/bg-pattern-circle.svg';
import styles from './About.module.scss';

const About = () => {
	useEffect(() => {
		document.title = 'PayAPI | About';
	}, []);

	return (
		<main className={styles.about}>
			<BgCircle className={styles.bgCircle} />
			<div className={styles.container}>
				<h1 className={styles.title}>
					We empower innovators by delivering access to the financial system
				</h1>
				<div className={styles.aboutGroup}>
					<h2>Our Vision</h2>
					<p>
						Our main goal is to build beautiful consumer experiences along with
						developer-friendly infrastructure. The result is an intelligent tool
						that gives everyone the ability to create amazing products that
						solve big problems. We are deeply focused on democratizing financial
						services through technology.
					</p>
				</div>
				<div className={styles.aboutGroup}>
					<h2>Our Business</h2>
					<p>
						At the core of our platform is the technical infrastructure APIs
						that connect consumers. Our innovative product provides key insights
						for businesses and individuals, as well as robust reporting for
						traditional financial institutions and developers.
					</p>
				</div>
			</div>

			<div className={styles.hero}></div>

			<div className={styles.container}>
				<ul className={styles.stats}>
					<li className={styles.statItem}>
						Team Members <span>300+</span>
					</li>
					<li className={styles.statItem}>
						Offices in the US <span>3</span>
					</li>
					<li className={styles.statItem}>
						Transactions analyzed <span>10M+</span>
					</li>
				</ul>

				<div className={styles.aboutGroup}>
					<h2>The Culture</h2>
					<p>
						We strongly believe there's always an opportunity to learn from each
						other outside of day-to-day work, whether it's company-wide
						offsites, internal hackathons, or co-worker meetups. We always value
						cross-team collaboration and diversity of thought, no matter the job
						title.
					</p>
				</div>
				<div className={styles.aboutGroup}>
					<h2>The People</h2>
					<p>
						We're all passionate about building a more efficient and inclusive
						financial infrastructure together. At PayAPI, we have diverse
						backgrounds and skills.
					</p>
				</div>

				<div className={styles.ready}>
					<h2>Ready to start?</h2>
					<ScheduleDemo />
				</div>
			</div>
		</main>
	);
};

export default About;
