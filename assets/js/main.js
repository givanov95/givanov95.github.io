// ============================================================
//  Portfolio interactions — vanilla JS, no dependencies.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

	/* ---------- Footer year ---------- */
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	/* ---------- Mobile menu ---------- */
	const toggle = document.getElementById('menu-toggle');
	const menu = document.getElementById('mobile-menu');
	if (toggle && menu) {
		toggle.addEventListener('click', () => {
			const open = menu.classList.toggle('hidden') === false;
			toggle.setAttribute('aria-expanded', String(open));
		});
		menu.querySelectorAll('.mobile-link').forEach((link) =>
			link.addEventListener('click', () => menu.classList.add('hidden'))
		);
	}

	/* ---------- Typing effect ---------- */
	const typed = document.getElementById('typed');
	if (typed) {
		const roles = [
			'Full-Stack Web Developer',
			'Laravel & PHP Engineer',
			'Vue & Next.js Developer',
			'Open-source author',
		];
		let r = 0, c = 0, deleting = false;
		const tick = () => {
			const word = roles[r];
			typed.textContent = word.slice(0, c);
			if (!deleting && c < word.length) {
				c++;
			} else if (deleting && c > 0) {
				c--;
			} else if (!deleting && c === word.length) {
				deleting = true;
				setTimeout(tick, 1600);
				return;
			} else {
				deleting = false;
				r = (r + 1) % roles.length;
			}
			setTimeout(tick, deleting ? 45 : 90);
		};
		tick();
	}

	/* ---------- Scroll reveal ---------- */
	const reveals = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window) {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		reveals.forEach((el) => io.observe(el));
	} else {
		reveals.forEach((el) => el.classList.add('in-view'));
	}

	/* ---------- Active nav link on scroll ---------- */
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = [...navLinks]
		.map((l) => document.querySelector(l.getAttribute('href')))
		.filter(Boolean);
	if ('IntersectionObserver' in window && sections.length) {
		const spy = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				navLinks.forEach((l) => {
					l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
				});
			});
		}, { rootMargin: '-45% 0px -50% 0px' });
		sections.forEach((s) => spy.observe(s));
	}

	/* ---------- CV modal ---------- */
	const modal = document.getElementById('cv-modal');
	const openModal = () => {
		modal.classList.remove('hidden');
		modal.classList.add('flex');
		document.body.style.overflow = 'hidden';
	};
	const closeModal = () => {
		modal.classList.add('hidden');
		modal.classList.remove('flex');
		document.body.style.overflow = '';
	};
	document.querySelectorAll('[data-open-cv]').forEach((b) => b.addEventListener('click', openModal));
	document.querySelectorAll('[data-close-cv]').forEach((b) => b.addEventListener('click', closeModal));
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
	});
});
