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

export const organizationalResponsibilities = [
	{
		period: '2026.05',
		category: 'Programme committee',
		title: 'NLP4Ecology @ LREC 2026',
		detail: 'Member of the programme committee. Palma, 12 May 2026.',
		links: [
			{
				label: 'Programme committee',
				href: 'https://lrec-conf.org/proceedings/lrec2026/workshops/nlp4ecology/2026.nlp4ecology-1.0.pdf#page=5',
			},
			{ label: 'Workshop', href: 'https://nlp4ecology2026.di.unito.it/' },
		],
	},
	{
		period: '2025.03',
		category: 'Programme committee',
		title: 'NLP4Ecology @ NoDaLiDa/BalticHLT 2025',
		detail: 'Member of the programme committee. Tallinn, 2 March 2025.',
		links: [
			{ label: 'Programme committee', href: 'https://aclanthology.org/2025.nlp4ecology-1.0.pdf#page=6' },
			{ label: 'Workshop', href: 'https://econlpws2025.di.unito.it/' },
		],
	},
	{
		period: '2024.10',
		category: 'Local organisation',
		title: 'Temporal Representation and Reasoning (TIME) 2024',
		detail: 'Co-chair of the local organising committee. Montpellier, 28-30 October 2024.',
		links: [{ label: 'Organisation', href: 'https://www.lirmm.fr/time2024/#Organization' }],
	},
	{
		period: '2024-',
		category: 'Community',
		title: 'I2S Doctoral School Alumni Network',
		detail: 'Founder and coordinator.',
	},
];

export const reviewingAssignments = [
	{
		period: '2026',
		category: 'Peer review',
		title: '2nd Workshop NLP4Ecology @ LREC 2026',
		detail: 'Completed 2 reviews.',
	},
	{
		period: '2025',
		category: 'Peer review',
		title: '1st Workshop NLP4Ecology @ NoDaLiDa/BalticHLT 2025',
		detail: 'Completed 2 reviews.',
	},
	{
		period: '2026',
		category: 'Peer review',
		title: 'CSL 2026',
		detail: 'Completed 1 review.',
	},
];

export const collectiveResponsibilities = [
	{
		period: '2023-2026',
		category: 'Elected role',
		title: 'LIRMM Laboratory Council',
		detail: 'Elected Ph.D. student representative.',
		links: [{ label: 'LIRMM', href: 'https://www.lirmm.fr/' }],
	},
	{
		period: '2024-2026',
		category: 'Elected role',
		title: 'Information, Structures and Systems (I2S) Doctoral School Council',
		detail: 'Elected Ph.D. student representative.',
		links: [{ label: 'I2S Doctoral School', href: 'https://edi2s.umontpellier.fr/' }],
	},
	{
		period: '2024-2026',
		category: 'Student representation',
		title: 'Mathematics, Computer Science, Physics and Systems (MIPS) Cluster Council',
		detail: 'Ph.D. student representative at the University of Montpellier.',
		links: [{ label: 'MIPS cluster', href: 'https://www.umontpellier.fr/en/recherche/poles-de-recherche/pole-mips' }],
	},
	{
		period: '2024-2026',
		category: 'Student representation',
		title: 'Doctoral College (CDUM) Council',
		detail: 'Ph.D. student representative at the University of Montpellier.',
		links: [{ label: 'Doctoral College', href: 'https://collegedoctoral.umontpellier.fr/en/accueil-college-doctoral-de-luniversite-de-montpellier-en' }],
	},
	{
		period: '2023-2026',
		category: 'Academic service',
		title: 'HRS4R Strategic Group, University of Montpellier',
		detail: 'Member of the HRS4R strategic group.',
	},
];

export const memberships = [
	{ period: '2025-', title: 'French Institute for Higher National Defence Studies (IHEDN)', detail: 'Auditor.' },
	{ period: '2020-', title: 'International Association for Computing and Philosophy (IACAP)', detail: 'Permanent member.' },
	{ period: '2021-', title: 'Association for Logic, Language and Information (FoLLI)', detail: 'Member.' },
	{ period: '2021-', title: 'International Association for Ontology and its Applications (IAOA)', detail: 'Individual member.' },
	{ period: '2022-', title: 'Proof Society', detail: 'Member.' },
	{ period: '2024-', title: 'Proof-theoretic Semantics (PTS) Network', detail: 'Member.' },
	{ period: '2025-', title: 'Aristotelian Society', detail: 'Lifetime member.' },
	{ period: '2022-2027', title: 'ATALA (Association pour le Traitement Automatique des Langues)', detail: 'Individual member.' },
	{ period: '2022-2026', title: 'French Computer Science Society (SIF)', detail: 'Member.' },
	{ period: '2023-2025', title: 'French Mathematical Society (SMF)', detail: 'Member.' },
	{ period: '2024-2026', title: 'ELRA Language Resources Association', detail: 'Member.' },
	{ period: '2022-2027', title: 'Philosophy of Physics Society', detail: 'Member.' },
	{ period: '2018-', title: 'The Pond: Philosophy of Science Around the Mediterranean', detail: 'Member.' },
	{ period: '2016-2028', title: 'European Philosophy of Science Association', detail: 'Student member.' },
	{ period: '2015-', title: 'Diazoma', detail: 'Associate member of the nonprofit association for the restoration of ancient theatres in Greece.' },
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