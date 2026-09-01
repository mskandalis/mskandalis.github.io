import {
	coAuthoredPublications,
	collectiveResponsibilities,
	education,
	honoursAwardsScholarships,
	memberships,
	newsItems,
	organisationalResponsibilities,
	publicOutreach,
	publications,
	researchDirections,
	researchPresentations,
	researchProfiles,
	researchRepositories,
	responsibilityItems,
	reviewingAssignments,
	seasonalSchools,
	supervisionProjects,
	teachingGroups,
} from './academic';

export type SearchEntry = {
	category: string;
	href: string;
	text: string;
	title: string;
};

const makeEntry = (category: string, href: string, title: string, text: string): SearchEntry => ({
	category,
	href,
	text,
	title,
});

const teachingHref = (label: string) => `/teaching/#teaching-${label.toLowerCase().replaceAll(' ', '-')}`;

export const siteSearchEntries: SearchEntry[] = [
	makeEntry(
		'Page',
		'/about/',
		'About Maximos Skandalis',
		'PhD researcher in artificial intelligence at LIRMM, CNRS & University of Montpellier. mskandalis@acm.org ORCID ResearchGate LinkedIn GitHub Google Scholar.',
	),
	makeEntry(
		'Page',
		'/research/',
		'Research',
		'Large language models LLMs, neurosymbolic AI, explainable AI XAI, multilingual AI, machine reasoning, natural language inference, contradiction detection, and AI applications.',
	),
	makeEntry(
		'Page',
		'/teaching/',
		'Teaching',
		'University teaching, lectures, tutorials, practical sessions, computer science, supervision, University of Montpellier, and Polytech Montpellier.',
	),
	makeEntry(
		'Page',
		'/record/',
		'Academic Record',
		'Education, degrees, seasonal schools, honours, awards, scholarships, PhD thesis, and academic training.',
	),
	makeEntry(
		'Page',
		'/responsibilities/',
		'Responsibilities',
		'Organisational responsibilities, reviewing, collective academic service, programme committees, memberships, and student representation.',
	),
	makeEntry('Page', '/notes/', 'News and Notes', 'Research news, talks, personal short essays, and public outreach.'),
	makeEntry('Page', '/cv/', 'Curriculum Vitae', 'Full academic record, publications, teaching, service, awards, education, and contact information.'),
	...researchDirections.map((item) =>
		makeEntry('Research direction', '/research/#directions', item.title, `${item.description} ${item.status}`),
	),
	...publications.map((item) =>
		makeEntry('Research / Conference proceedings', '/research/#proceedings', item.title, `${item.authors} ${item.venue} ${item.summary}`),
	),
	...coAuthoredPublications.map((item) =>
		makeEntry('Research / Co-authored publication', '/research/#co-authored', item.title, `${item.authors} ${item.venue} ${item.summary}`),
	),
	...researchPresentations.map((item) =>
		makeEntry('Research / Presentation', '/research/#presentations', item.title, `${item.date} ${item.format} ${item.detail}`),
	),
	...publicOutreach.map((item) =>
		makeEntry('Research / Public outreach', '/research/#outreach', item.title, `${item.date} ${item.detail}`),
	),
	...researchProfiles.map((item) => makeEntry('Research / Profile', '/research/', item.label, `Research profile ${item.label}`)),
	...researchRepositories.map((item) => makeEntry('Research / Repository', '/research/', item.label, `Research repository ${item.label}`)),
	...education.map((item) =>
		makeEntry('Academic Record / Education', '/record/#education', item.title, `${item.year} ${item.level ?? ''} ${item.detail}`),
	),
	...seasonalSchools.map((item) =>
		makeEntry('Academic Record / Seasonal school', '/record/#seasonal-schools', item.title, `${item.period} ${item.detail}`),
	),
	...honoursAwardsScholarships.map((item) =>
		makeEntry('Academic Record / Honour or scholarship', '/record/#honours', item.title, `${item.period} ${item.detail}`),
	),
	...teachingGroups.flatMap((group) =>
		group.assignments.map((item) =>
			makeEntry('Teaching / ' + group.label, teachingHref(group.label), item.title, `${item.year} ${item.programme} ${item.hours} ${item.institution}`),
		),
	),
	...supervisionProjects.map((item) =>
		makeEntry('Teaching / Supervision', '/teaching/#supervision', item.title, `${item.year} ${item.detail}`),
	),
	...responsibilityItems.map((item) =>
		makeEntry('Responsibilities / ' + item.category, '/responsibilities/#scope', item.title, `${item.period} ${item.detail}`),
	),
	...organisationalResponsibilities.map((item) =>
		makeEntry('Responsibilities / Organisation', '/responsibilities/#organisation', item.title, `${item.period} ${item.category} ${item.detail}`),
	),
	...reviewingAssignments.map((item) =>
		makeEntry('Responsibilities / Reviewing', '/responsibilities/#reviewing', item.title, `${item.period} ${item.category} ${item.detail}`),
	),
	...collectiveResponsibilities.map((item) =>
		makeEntry('Responsibilities / Academic service', '/responsibilities/#academic-service', item.title, `${item.period} ${item.category} ${item.detail}`),
	),
	...memberships.map((item) => makeEntry('Responsibilities / Membership', '/responsibilities/#memberships', item.title, `${item.period} ${item.detail}`)),
	...newsItems.map((item) => makeEntry('News', '/notes/#news', item.title, `${item.date} ${item.status} ${item.detail}`)),
];