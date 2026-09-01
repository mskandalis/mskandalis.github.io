import globalPiqaBibtex from './global-piqa.bib?raw';

export const bibtexEntries = {
	'neurosymbolic-2025': String.raw`@inproceedings{skandalis-etal-2025-neurosymbolic,
    title = "Neurosymbolic {AI} for Natural Language Inference in {F}rench : combining {LLM}s and theorem provers for semantic parsing and natural language reasoning",
    author = "Skandalis, Maximos  and
      Abzianidze, Lasha  and
      Moot, Richard  and
      Retor{\'e}, Christian  and
      Robillard, Simon",
    editor = "Evang, Kilian  and
      Kallmeyer, Laura  and
      Pogodalla, Sylvain",
    booktitle = "Proceedings of the 16th International Conference on Computational Semantics",
    month = sep,
    year = "2025",
    address = {D{\"u}sseldorf, Germany},
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.iwcs-main.21/",
    pages = "242--253",
    ISBN = "979-8-89176-316-6",
    abstract = "In this article, we describe the first comprehensive neurosymbolic pipeline for the task of Natural Language Inference (NLI) for French, with the synergy of Large Language Models (CamemBERT) and automated theorem provers (GrailLight, LangPro). LLMs prepare the input for GrailLight by tagging each token with Part-of-Speech and grammatical information based on the Type-Logical Grammar formalism. GrailLight then produces the lambda-terms given as input to the LangPro theorem prover, a tableau-based theorem prover for natural logic originally developped for English. Currently, the proposed system works on the French version of SICK dataset. The results obtained are comparable to the ones on the English and Dutch versions of SICK with the same LangPro theorem prover, and are better than the results of recent transformers on this specific dataset.Finally, we have identified ways to further improve the results obtained, such as giving access to the theorem prover to lexical knowledge via a knowledge base for French."
}`,
	'datasets-2024': String.raw`@inproceedings{skandalis-etal-2024-new,
    title = "New Datasets for Automatic Detection of Textual Entailment and of Contradictions between Sentences in {F}rench",
    author = "Skandalis, Maximos  and
      Moot, Richard  and
      Retor{\'e}, Christian  and
      Robillard, Simon",
    editor = "Calzolari, Nicoletta  and
      Kan, Min-Yen  and
      Hoste, Veronique  and
      Lenci, Alessandro  and
      Sakti, Sakriani  and
      Xue, Nianwen",
    booktitle = "Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)",
    month = may,
    year = "2024",
    address = "Torino, Italia",
    publisher = "ELRA and ICCL",
    url = "https://aclanthology.org/2024.lrec-main.1065/",
    pages = "12173--12186",
    abstract = "This paper introduces DACCORD, an original dataset in French for automatic detection of contradictions between sentences. It also presents new, manually translated versions of two datasets, namely the well known dataset RTE3 and the recent dataset GQNLI, from English to French, for the task of natural language inference / recognising textual entailment, which is a sentence-pair classification task. These datasets help increase the admittedly limited number of datasets in French available for these tasks. DACCORD consists of 1034 pairs of sentences and is the first dataset exclusively dedicated to this task and covering among others the topic of the Russian invasion in Ukraine. RTE3-FR contains 800 examples for each of its validation and test subsets, while GQNLI-FR is composed of 300 pairs of sentences and focuses specifically on the use of generalised quantifiers. Our experiments on these datasets show that they are more challenging than the two already existing datasets for the mainstream NLI task in French (XNLI, FraCaS). For languages other than English, most deep learning models for NLI tasks currently have only XNLI available as a training set. Additional datasets, such as ours for French, could permit different training and evaluation strategies, producing more robust results and reducing the inevitable biases present in any single dataset."
}`,
	'daccord-2023': String.raw`@inproceedings{skandalis-etal-2023-daccord,
    title = "{DACCORD} : un jeu de donn{\'e}es pour la D{\'e}tection Automatique d'{\'e}non{C}{\'e}s {CO}nt{R}a{D}ictoires en fran{\c{c}}ais",
    author = "Skandalis, Maximos  and
      Moot, Richard  and
      Robillard, Simon",
    editor = "Servan, Christophe  and
      Vilnat, Anne",
    booktitle = "Actes de CORIA-TALN 2023. Actes de la 30e Conf{\'e}rence sur le Traitement Automatique des Langues Naturelles (TALN), volume 1 : travaux de recherche originaux -- articles longs",
    month = "6",
    year = "2023",
    address = "Paris, France",
    publisher = "ATALA",
    url = "https://aclanthology.org/2023.jeptalnrecital-long.22/",
    pages = "285--297",
    language = "fra",
    abstract = "La t{\^a}che de d{\'e}tection automatique de contradictions logiques entre {\'e}nonc{\'e}s en TALN est une t{\^a}che de classification binaire, o{\`u} chaque paire de phrases re{\c{c}}oit une {\'e}tiquette selon que les deux phrases se contredisent ou non. Elle peut {\^e}tre utilis{\'e}e afin de lutter contre la d{\'e}sinformation. Dans cet article, nous pr{\'e}sentons DACCORD, un jeu de donn{\'e}es d{\'e}di{\'e} {\`a} la t{\^a}che de d{\'e}tection automatique de contradictions entre phrases en fran{\c{c}}ais. Le jeu de donn{\'e}es {\'e}labor{\'e} est actuellement compos{\'e} de 1034 paires de phrases. Il couvre les th{\'e}matiques de l{'}invasion de la Russie en Ukraine en 2022, de la pand{\'e}mie de Covid-19 et de la crise climatique. Pour mettre en avant les possibilit{\'e}s de notre jeu de donn{\'e}es, nous {\'e}valuons les performances de certains mod{\`e}les de transformeurs sur lui. Nous constatons qu{'}il constitue pour eux un d{\'e}fi plus {\'e}lev{\'e} que les jeux de donn{\'e}es existants pour le fran{\c{c}}ais, qui sont d{\'e}j{\`a} peu nombreux.In NLP, the automatic detection of logical contradictions between statements is a binary classification task, in which a pair of sentences receives a label according to whether or not the two sentences contradict each other. This task has many potential applications, including combating disinformation. In this article, we present DACCORD, a new dataset dedicated to the task of automatically detecting contradictions between sentences in French. The dataset is currently composed of 1034 sentence pairs. It covers the themes of Russia{'}s invasion of Ukraine in 2022, the Covid-19 pandemic, and the climate crisis. To highlight the possibilities of our dataset, we evaluate the performance of some recent Transformer models on it. We conclude that our dataset is considerably more challenging than the few existing datasets for French."
}`,
	'aristotle-2016': String.raw`@inproceedings{skandalis:hal-04658183,
  TITLE = {{$O$ $A$$\rho$$\iota$$\sigma$$\tau$$o$$\tau$έ$\lambda$$\eta$$\varsigma$ $\kappa$$\alpha$$\iota$ $\eta$ $\phi$$\iota$$\lambda$$o$$\sigma$$o$$\phi$$\iota$$\alpha$ $\tau$$\omega$$\nu$ $\mu$$\alpha$$\theta$$\eta$$\mu$$\alpha$$\tau$$\iota$$\kappa$$\omega$$\nu$ $\tau$$o$$\upsilon$ $\Pi$$\lambda$ά$\tau$$\omega$$\nu$$\alpha$}},
  AUTHOR = {Skandalis, Maximos and Skandalis, Stefanos},
  URL = {https://hal.science/hal-04658183},
  BOOKTITLE = {{Studies in Greek Philosophy SeriesThe World Congress of Philosophy: The Philosophy of Aristotle (WCP2016)}},
  ADDRESS = {Ath{\`e}nes, Greece},
  ORGANIZATION = {{International Association of Greek Philosophy (IAGP) and Greek Philosophical Society (GPS) and Philosophical Society of Cyprus (PSC)}},
  EDITOR = {Konstantine Boudouris and Kleitos Ioannides},
  PUBLISHER = {{Ionia Publications}},
  VOLUME = {6},
  PAGES = {254-264},
  YEAR = {2016},
  MONTH = Jul,
  KEYWORDS = {$\Phi$$\iota$$\lambda$$o$$\sigma$$o$$\phi$$\iota$$\alpha$ $\tau$$\omega$$\nu$ $\mu$$\alpha$$\theta$$\eta$$\mu$$\alpha$$\tau$$\iota$$\kappa$$\omega$$\nu$ ; $A$$\rho$$\chi$$\alpha$$\iota$$\alpha$ $\epsilon$$\lambda$$\lambda$$\eta$$\nu$$\iota$$\kappa$ά $\mu$$\alpha$$\theta$$\eta$$\mu$$\alpha$$\tau$$\iota$$\kappa$ά ; $\Theta$$\epsilon$$\omega$$\rho$$\iota$$\alpha$ $\alpha$$\rho$$\iota$$\theta$$\mu$$\omega$$\nu$ ; $\Pi$$\lambda$$\alpha$$\tau$$\omega$$\nu$$\iota$$\kappa$έ$\varsigma$ $\mu$$\alpha$$\theta$$\eta$$\mu$$\alpha$$\tau$$\iota$$\kappa$έ$\varsigma$ $\iota$$\delta$έ$\epsilon$$\varsigma$ ; $\Pi$$\lambda$ά$\tau$$\omega$$\nu$ ; $A$$\rho$$\iota$$\sigma$$\tau$$o$$\tau$έ$\lambda$$\eta$$\varsigma$ ; Aristotle ; Plato ; Philosophy of mathematics ; Platonic mathematical forms ; Number theory ; Greek mathematics},
  PDF = {https://hal.science/hal-04658183v1/file/WCP2016%2C%20Skandalis%20-%20Aristotle%20and%20Plato%27s%20Philosophy%20of%20Mathematics.pdf},
  HAL_ID = {hal-04658183},
  HAL_VERSION = {v1},
}`,
	'few-shot-2026': String.raw`@report{dievart:hal-05649167,
  TITLE = {{Fine-tuning avec peu d'exemples et few-shot learning avec des LLMs pour les t{\^a}ches d'inf{\'e}rence textuelle et de d{\'e}tection automatique de contradictions pour le fran{\c c}ais}},
  AUTHOR = {Dievart, Colin and Ammari, Reda and Aljibbaoui, Tala and Skandalis, Maximos and Sioutis, Michael},
  URL = {https://hal.science/hal-05649167},
  INSTITUTION = {{Universit{\'e} de Montpellier}},
  YEAR = {2026},
  MONTH = Jun,
  type = {Res. rep.},
  KEYWORDS = {Few-shot Learning ; Fine-tuning ; LLM ; Natural language inference ; Inf{\'e}rence textuelle ; Fran{\c c}ais ; Intelligence artficielle},
  PDF = {https://hal.science/hal-05649167v1/file/Few-shot_learning_NLI_FR.pdf},
  HAL_ID = {hal-05649167},
  HAL_VERSION = {v1},
}`,
  'global-piqa-2026-local-draft': `@misc{chang2026globalpiqaevaluatingcommonsense,
      title={Global PIQA: Evaluating Commonsense Reasoning Across 100+ Languages and Cultures}, 
      author={Tyler A. Chang and Catherine Arnett and Abdelrahman Sadallah and Abdelrahman Eldesokey and Abeer Kashar and Abolade Daud and Abosede Grace Olanihun and Adamu Labaran Mohammed and Adeyemi Praise and Adhikarimayum Meerajita Sharma and Aditi Gupta and Adril Putra Merin and Adwoa Bremang and Afitab Iyigun and Afonso Simplício and Ahmed Essouaied and Aicha Chorana and Akhil Eppa and Akintunde Oladipo and Akriti Kuri and Akshay Ramesh and Aleksei Dorkin and Alfred Malengo Kondoro and Alham Fikri Aji and Ali Eren Çetintaş and Allan Hanbury and Alou Dembele and Alp Niksarli and Álvaro Arroyo and Amin Bajand and Amol K. Chaudhary and Ana Chkhaidze and Ana Carolina Condez and Anamaria-Roberta Hartl and Andiswa Mkhonto and Andrew Hoblitzell and Andrew Tran and Angelos Poulis and Anirban Majumder and Anjali Chaudhary and Anna Vacalopoulou and Annette Kuuipolani Kanahele Wong and Annika Simonsen and Anton Kovalev and Anupam Nayak and Ashvanth S and Ayodeji Lana and Ayu Purwarianti and Bashar Alhafni and Benedict Busole and Bernard Ghanem and Bharti Nathani and Biljana Stojanovska Đurić and Blessing Ogundipe and Bolaotan Agbonile and Bragi Bergsson and Bruce Torres Fischer and Burak Tutar and Burcu Çınar and Cade Kane and Can Udomcharoenchaikit and Chadi Helwe and Chaithra Reddy Nerella and Chen Cecilia Liu and Chiamaka Nwokolo and Christopher Homan and Clément Sampebgo and Cristina España-Bonet and Cynthia Amol and Daeyoep Lee and Dan Saattrup Smart and Dana Arad and Daniil Dzenhaliou and Dasol Choi and David Liu and David Semedo and David Anugraha and Deborah Popoola and Deividas Mataciunas and Delphine Nyaboke and Dennis Owusu and Dhyuthy Krishna Kumar and Diogo Tavares and Diogo Glória-Silva and Divyanshu Goyal and DongGeon Lee and E. Kelly Buchanan and Ebele Nwamaka Anajemba and Egonu Ngozi Grace and Elena Mick and Elias Herranen and Eliza Acharya and Eman Nisar and Emile Anand and Emmanuel Habumuremyi and Emuobonuvie Maria Ajiboye and Eryawan Presma Yulianatara and Esther Adenuga and Ewa Rudnicka and Faith Itiola and Faran Taimoor Butt and Fareeha Fayyaz Sheikh and Fathima Thekkekara and Fatima Haouari and Faustin Nsengiyumva and Fenal Ashokbhai Ilasariya and Filbert Aurelian Tiranata and Firas Laakom and Francesca Grasso and Francesco Periti and Francesco Orabona and Gbenga Kayode Solomon and Genta Indra Winata and Gia Nghia Ngo and Gloria Udhedhe-oze and Gonçalo Vinagre and Gopi Naga Sai Ram Challagolla and Gorka Urbizu-Garmendia and Gouthami Vadithya and Guijin Son and Gulnaz Abdykadyrova and Gyan Swaroop and Hafeez Ullah and Hafsteinn Einarsson and Hai Hu and Hamidreza Hassani and Hamza Zaidi and Haopeng Zhang and Harethah Abu Shairah and Harry Vuong and Hele-Andra Kuulmets and Hitesh Kumar and Houda Bouamor and Hwanjo Yu and Iben Nyholm Debess and İbrahim Ethem Deveci and Ikhlasul Akmal and Ikhyun Cho and Inês Vieira and Inês Calvo and Isaac Manzi and Ismael Illa Salifou and Ismail Daud and Ismail Yusuf and Itay Itzhak and Ivan Zhelyazkov and Ivan Belashkin and Ivan Spada and Jacob Brinton and Jafar Isbarov and Jaka Čibej and Jan Kocoń and Jan Cuhel and Jauza Krito and Jebish Purbey and Jennifer Za and Jennifer Mickel and Jenny Kunz and Jessica Ratovondranto and Jeyarajalingam Varsha and Jihae Jeong and Jimena Tena Dávalos and Jinu Lee and João Magalhães and John Seon Keun Yi and Jongin Kim and Joseph Chataignon and Joseph Marvin Imperial and Jubeerathan Thevakumar and Judith Land and Julia Alekseenko and Junchen Jiang and Jungwhan Kim and Kairit Sirts and Kamesh R and Kamesh V and Kanda Tshinu and Kätriin Kukk and Kaustubh Ponkshe and Kavsar Huseynova and Ke He and Kenneth Enevoldsen and Kent Joshua Alvarez and Kerem Zaman and Khalil Mrini and Kian Kyars and Komal Gour and Krishnakumar Lainitha and Krister Kruusmaa and Kunal Mukherjee and Kusum Chouhan and Laura Castro and Laura M. Porrino-Moscoso and Lenny Sivi Za Nzambi and Leshem Choshen and Levent Sencan and Lilja Øvrelid and Lisa Alazraki and Loretta Oma Jones and Lovina Ehimen-Ugbede and Luheerathan Thevakumar and Luxshan Thavarasa and Mahnoor Malik and Mamadou K. Keita and Mansi Jangid and Marco De Santis and Marcos Garcia and Marek Šuppa and Mariam D'Ciofalo and Marii Ojastu and Marium Attaullah and Maryam Sikander and Mausami Jangid and Maximos Skandalis and Mehak Mehak and Mehmet İlteriş Bozkurt and Melaku Bayu and Menan Velayuthan and Mhasilenuo Vizo and Michael Leventhal and Michał Marcińczuk and Mina Almasi and Mirna Potočnjak and Mithil Bangera and Mohammadamin Shafiei and Mohiba Ansari and Mridul Sharma and Mrityunjaya Indoria and Mughees Ur Rehman and Muhammad Ravi Shulthan Habibi and Murat Kolić and Murat Barkın Kınay and Nada Galant and Naina Singh and Naphat Permpredanun and Narada Maugin and Nathalie Norman and Nicholas Kluge Corrêa and Nikola Ljubešić and Nirmal Thomas and Nisansa de Silva and Nisheeth Joshi and Nitish Ponkshe and Nizar Habash and Nneoma Udeze and Noel Thomas and Noémi Ligeti-Nagy and Nouhoum Coulibaly and Odunayo Ogundepo and Odunayo Kareemat Buliaminu and Oghojafor Godswill Fejiro and Okechukwu God'spraise and Olanrewaju Samuel and Olaoye Deborah Oluwaseun and Olasoji Akindejoye and Olga Snissarenko and Onyinye Anulika Chiemezie and Orkun Kınay and Osman Tursun and Oyelade Oluwafemi Joshua and Oyesanmi Fiyinfoluwa and Pablo Rodríguez and Pablo Gamallo and Palak Arora and Pedro Valente and Peter Rupnik and Philip Oghenesuowho Ekiugbo and Prakhar Agarwal and Pramit Sahoo and Prokopis Prokopidis and Pua Niau-Puhipau and Quadri Yahya and Rachele Mignone and Raghav Singhal and Rahul Raja and Ram Mohan Rao Kadiyala and Raphael Merx and Rasmus Larsen and Ratnavel Rajalakshmi and Rishav Ghosh and Romina Oji and Ron Kekeha Solis and Rui Guerra and Rushikesh Zawar and Sa'ad Nasir Bashir and Saeed Alzaabi and Sahil Sandeep and Sai Pavan Batchu and Sai Sandeep Kantareddy and Saleha Muzammil and Salsabila Zahirah and Sam Buchanan and Samuel Rutunda and Sander Land and Sarah Sulollari and Sardar Ali and Saroj Sapkota and Sarveswaran Kengatharaiyer and Saulius Tautvaisas and Sayambhu Sen and Sayantani Banerjee and Sebastien Diarra and Segun Afolayan and Senthilnathan M and Sewoong Lee and Shaan Shah and Shankar Venkitachalam and Sharifa Djurabaeva and Sharon Ibejih and Shivanya Shomir Dutta and Siddhant Gupta and Silvia Paniagua Suárez and Sina Ahmadi and Sivasuthan Sukumar and Siyuan Song and Snegha A and Sokratis Sofianopoulos and Sona Elza Simon and Sonja Benčina and Sophie Gvasalia and Sphurti More and Spyros Dragazis and Stefan Milosavljević and Stephan P. Kaufhold and Suba S and Sultan Alrashed and Surangika Ranathunga and Taiga Someya and Taja Kuzman Pungeršek and Tal Haklay and Tasi'u Jibril and Tatsuya Aoyama and Tea Abashidze and Terenz Jomar Dela Cruz and Terra Blevins and Themistoklis Nikas and Theresa Idoko and Thu Mai Do and Tilek Chubakov and Tina Munda and Tobiloba Owoeye and Tommaso Gargiani and Uma Rathore and Uni Johannesen and Uwuma Ugwu and Vallerie Alexandra Putra and Vanya Bannihatti Kumar and Varvara Arzt and Vasily Konovalov and Vasudevan Nedumpozhimana and Viktoria Ondrejova and Viktoryia Ondrejova and Vishnu Vardhan Reddy Kummitha and Vuk Dinić and Walelign Sewunetie and Winston Wu and Xiaojing Zhao and Yacouba Diarra and Yaniv Nikankin and Yash Mathur and Yash Bagla and Yeshil Bangera and Yixi Chen and Yiyuan Li and Yolanda Ogundepo and Yonatan Belinkov and Zaid Alyafeai and Zhargal Batozargalova and Zhengyang Shan and Zhi Rui Tam and Zilu Tang and Zuzana Nadova and Baber Abbasi and Stella Biderman and David Stap and Duygu Ataman and Fabian Schmidt and Hila Gonen and Jiayi Wang and David Ifeoluwa Adelani},
      year={2026},
      eprint={2510.24081},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2510.24081}, 
}`,
  'fomo-2025': `@misc{skandalis:hal-05002405,
  TITLE = {{Hybrid AI with LLMs and Theorem Provers for Semantic Parsing and Natural Language Inference for French}},
  AUTHOR = {Skandalis, Maximos and Abzianidze, Lasha and Moot, Richard and Robillard, Simon},
  URL = {https://hal.science/hal-05002405},
  NOTE = {Poster},
  HOWPUBLISHED = {{FoMo 2025 - ELLIS Winter School on Foundation Models}},
  ORGANIZATION = {{ELLIS Unit Amsterdam and University of Amsterdam}},
  YEAR = {2025},
  MONTH = Mar,
  PDF = {https://hal.science/hal-05002405v1/file/Natural_language_inference_neurosymbolic_ai.pdf},
  HAL_ID = {hal-05002405},
  HAL_VERSION = {v1},
}`,
	'global-piqa-2026': globalPiqaBibtex,
} as const;