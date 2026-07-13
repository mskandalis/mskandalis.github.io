export const researchDirections = [
	{
		index: 'R.01',
		kind: 'Research direction',
		title: 'Neurosymbolic NLI',
		description:
			'Combining large language models with logic and linguistic formalisms for semantic parsing and natural language reasoning.',
		status: 'Core focus',
	},
	{
		index: 'R.02',
		kind: 'Research direction',
		title: 'Contradiction detection',
		description:
			'Robust automatic detection of textual entailment and contradictions, with special attention to French-language resources.',
		status: 'Active research',
	},
	{
		index: 'R.03',
		kind: 'Research direction',
		title: 'High-stakes language AI',
		description:
			'Bringing formal methods, reliable data, and language technology together for consequential application domains.',
		status: 'Applied inquiry',
	},
];

export const publications = [
	{
		year: '2025',
		role: 'First author',
		title:
			'Neurosymbolic AI for Natural Language Inference in French: Combining LLMs and Theorem Provers for Semantic Parsing and Natural Language Reasoning',
		authors: 'Maximos Skandalis, Lasha Abzianidze, Richard Moot, Christian Retoré, and Simon Robillard.',
		venue: 'Proceedings of the 16th International Conference on Computational Semantics (IWCS), pages 242-253, Düsseldorf, Germany.',
		summary: 'LLMs and theorem provers for semantic parsing and natural language reasoning.',
		href: 'https://aclanthology.org/2025.iwcs-main.21',
		linkLabel: 'ACL Anthology',
	},
	{
		year: '2024',
		role: 'First author',
		title:
			'New Datasets for Automatic Detection of Textual Entailment and of Contradictions Between Sentences in French',
		authors: 'Maximos Skandalis, Richard Moot, Christian Retoré, and Simon Robillard.',
		venue: 'Proceedings of LREC-COLING 2024, pages 12173-12186, Torino, Italy. ELRA and ICCL.',
		summary: 'French datasets for automatic textual entailment and contradiction detection.',
		href: 'https://aclanthology.org/2024.lrec-main.1065',
		linkLabel: 'ACL Anthology',
	},
	{
		year: '2023',
		role: 'First author',
		title:
			'DACCORD: un jeu de données pour la Détection Automatique d’énonCés COntRaDictoires en français',
		authors: 'Maximos Skandalis, Richard Moot, and Simon Robillard.',
		venue: 'Actes de CORIA-TALN 2023, volume 1: travaux de recherche originaux, pages 285-297, Paris, France. ATALA.',
		summary: 'A French dataset for automatic detection of contradictory statements.',
		href: 'https://aclanthology.org/2023.jeptalnrecital-long.22',
		linkLabel: 'ACL Anthology',
	},
	{
		year: '2026',
		role: 'Collaborative work',
		title: 'Global PIQA: Evaluating Commonsense Reasoning Across 100+ Languages and Cultures',
		authors:
			'Tyler A. Chang, Catherine Arnett, and authors at the 5th Multilingual Representation Learning Workshop.',
		venue: 'Submitted to NeurIPS 2026.',
		summary: 'A multilingual and multicultural evaluation of commonsense reasoning.',
		href: 'https://arxiv.org/abs/2510.24081',
		linkLabel: 'arXiv',
	},
];

export const education = [
	{
		year: 'Current',
		title: 'Ph.D., Computer Science and AI',
		detail: 'CNRS and University of Montpellier, France.',
	},
	{
		year: 'M.S.',
		title: 'Mathematical Logic and Theoretical Computer Science',
		detail: 'Paris Cité University, France.',
	},
	{
		year: 'M.A.',
		title: 'History and Philosophy of Science',
		detail: 'École normale supérieure de Paris (ENS Ulm), France.',
	},
	{
		year: 'Ptychio',
		title: 'Classics and Linguistics',
		detail: 'Aristotle University of Thessaloniki, Greece.',
	},
];

export const researchTalks = [
	{
		date: '2025.12',
		title: 'Apprentissage profond et méthodes formelles pour la détection automatique d’énoncés contradictoires',
		detail: 'Oral presentation. 2025 Annual Scientific Day of the ICO Key Challenge, Toulouse, France.',
		href: 'https://www.ico-occitanie.fr/wp-content/uploads/2025/07/Programme-Journee-ICO-2025-C.pdf#page=6',
		linkLabel: 'Event programme',
	},
	{
		date: '2025.11',
		title: 'Qualité des données et approches neurosymboliques pour les tâches d’inférence textuelle et de détection automatique de contradictions',
		detail: 'Oral presentation. First thematic workshop of the RECAST working group, ENS Paris, France.',
		href: 'https://gt-recast.github.io/events/2025-11-17.html',
		linkLabel: 'Event programme',
	},
];

export const teachingGroups = [
	{
		label: 'Lectures',
		frenchLabel: 'Cours magistraux',
		assignments: [
			{
				year: '2025-2026',
				title: 'Logic for AI and Software Engineering',
				programme: 'Master 1 Computer Science',
				hours: '4.5 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
			{
				year: '2024-2025',
				title: 'Formal Languages, Automata, and Regular Expressions',
				programme: '4th Year Computer Engineering',
				hours: '5 h',
				institution: 'DevOps Department, Polytech Montpellier.',
			},
			{
				year: '2023-2024',
				title: 'Object-Oriented Design & Programming 1',
				programme: '3rd Year Computer Engineering',
				hours: '7.5 h',
				institution: 'Department of Computer Science & Management, Polytech Montpellier.',
			},
		],
	},
	{
		label: 'Tutorials',
		frenchLabel: 'Travaux dirigés',
		assignments: [
			{
				year: '2025-2026',
				title: 'Programming in C',
				programme: 'L1 Mathematics / Dual L1 Computer Science & Mathematics',
				hours: '37.5 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
			{
				year: '2025-2026',
				title: 'Event-Driven Programming',
				programme: 'L1 Computer Science CMI',
				hours: '30 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
			{
				year: '2025-2026',
				title: 'Software Engineering Workshops',
				programme: 'L3 Computer Science / Dual L3 Computer Science & Mathematics',
				hours: '33 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
			{
				year: '2025-2026',
				title: 'Web Programming',
				programme: 'L2 Computer Science',
				hours: '21 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
			{
				year: '2025-2026',
				title: 'Functional Programming',
				programme: 'L1 Computer Science',
				hours: '30 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
			{
				year: '2024-2025',
				title: 'Formal Languages, Automata, and Regular Expressions',
				programme: '3rd Year Computer Engineering',
				hours: '6 h',
				institution: 'Department of Computer Science & Management, Polytech Montpellier.',
			},
			{
				year: '2024-2025',
				title: 'Formal Languages, Automata, and Regular Expressions',
				programme: '4th and 5th Year Computer Engineering',
				hours: '19.5 h',
				institution: 'DevOps Department, Polytech Montpellier.',
			},
			{
				year: '2023-2024',
				title: 'Object-Oriented Design & Programming 1',
				programme: '3rd Year Computer Engineering',
				hours: '6 h',
				institution: 'Department of Computer Science & Management, Polytech Montpellier.',
			},
			{
				year: '2023-2024',
				title: 'Formal Languages, Automata, and Regular Expressions',
				programme: '3rd Year Computer Engineering',
				hours: '9 h',
				institution: 'Department of Computer Science & Management, Polytech Montpellier.',
			},
		],
	},
	{
		label: 'Practical sessions',
		frenchLabel: 'Travaux pratiques',
		assignments: [
			{
				year: '2025-2026',
				title: 'Algorithmics PeiP',
				programme: 'L1',
				hours: '15 h',
				institution: 'Polytech Montpellier.',
			},
			{
				year: '2024-2025',
				title: 'Use of Computer Systems PeiP',
				programme: 'L1',
				hours: '13.5 h',
				institution: 'Polytech Montpellier.',
			},
			{
				year: '2023-2024',
				title: 'Algorithmics PeiP',
				programme: 'L1',
				hours: '7.5 h',
				institution: 'Polytech Montpellier.',
			},
			{
				year: '2023-2024',
				title: 'Algorithmics 1 (Python)',
				programme: 'L1 Mathematics',
				hours: '15 h',
				institution: 'Department of Computer Science, Faculty of Sciences, University of Montpellier.',
			},
		],
	},
];

export const supervisionProjects = [
	{
		year: '2025-2026',
		title: 'M1 internship: GraphRAG for NLI-based fact-checking with LLMs',
		detail: 'Research internship supervision.',
	},
	{
		year: '2025-2026',
		title: 'M1 TER: Few-shot learning for natural language inference in French',
		detail: 'Research project supervision. The internship received the highest mark in the Master’s programme for the year.',
	},
	{
		year: '2025-2026',
		title: 'M1 CMI TER: Spatio-temporal reasoning capabilities of large language models',
		detail: 'Co-supervision of a research project on assessing LLM reasoning capabilities.',
	},
	{
		year: '2024-2025',
		title: 'M1 TER: Few-shot learning for natural language inference in French',
		detail: 'Research project supervision.',
	},
	{
		year: '2023-2024',
		title: 'L3 internship: Few-shot learning for natural language inference in French',
		detail: 'Internship project supervision.',
	},
];

export const responsibilityItems = [
	{
		period: 'Current',
		category: 'Research',
		title: 'Doctoral researcher in artificial intelligence',
		detail:
			'Conducting doctoral research at LIRMM, CNRS and the University of Montpellier on neurosymbolic natural language inference and contradiction detection.',
	},
	{
		period: '2023-2026',
		category: 'Teaching',
		title: 'University teaching',
		detail:
			'272 reported teaching hours across lectures, tutorials, and practical sessions at the Faculty of Sciences and Polytech Montpellier.',
		href: '/teaching/',
		linkLabel: 'Teaching record',
	},
	{
		period: '2023-2026',
		category: 'Supervision',
		title: 'Student research supervision',
		detail:
			'Supervising and co-supervising M1 internships, M1 research projects, and an L3 internship in natural language inference and LLM reasoning.',
		href: '/teaching/#supervision',
		linkLabel: 'Supervision record',
	},
	{
		period: 'Current',
		category: 'Funding',
		title: 'Public-interest research remit',
		detail:
			'Funded by the French Ministry of the Armed Forces through the Defence Innovation Agency and by the Cybersecurity Institute of Occitanie.',
	},
];

export const newsItems = [
	{
		date: '2025.12',
		title: 'Deep learning and formal methods for contradiction detection',
		status: 'ICO annual scientific day',
		detail: 'Oral presentation at the 2025 Annual Scientific Day of the ICO Key Challenge in Toulouse, France.',
		href: 'https://www.ico-occitanie.fr/wp-content/uploads/2025/07/Programme-Journee-ICO-2025-C.pdf#page=6',
	},
	{
		date: '2025.11',
		title: 'Data quality and neurosymbolic approaches to textual inference',
		status: 'RECAST thematic workshop',
		detail: 'Oral presentation at the first thematic workshop of the RECAST working group at ENS Paris.',
		href: 'https://gt-recast.github.io/events/2025-11-17.html',
	},
	{
		date: '2026.07',
		title: 'Research website relaunch',
		status: 'Site update',
		detail: 'A new public record for papers, teaching, supervision, and notes from the research process.',
		href: '/about/',
	},
];