// ============================================================
//  Portfolio interactions — vanilla JS, no dependencies.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

	/* ---------- Footer year ---------- */
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

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

	/* ---------- Copy email ---------- */
	const copyBtn = document.getElementById('copy-email');
	if (copyBtn) {
		const label = copyBtn.textContent;
		let timer;
		copyBtn.addEventListener('click', () => {
			if (navigator.clipboard) navigator.clipboard.writeText(copyBtn.dataset.email).catch(() => {});
			copyBtn.textContent = 'Copied ✓';
			clearTimeout(timer);
			timer = setTimeout(() => { copyBtn.textContent = label; }, 1800);
		});
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
	// Click on the backdrop (but not on the dialog itself) closes the modal
	modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
	});
});
