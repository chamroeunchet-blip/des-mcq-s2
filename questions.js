// ឯកសារទិន្នន័យសំណួរ៖ questions.js
// ដំណាក់កាលទី ១៖ ទំព័រទី 1 ដល់ 17 (Endocrinology, Nutrition, Adrenal Insufficiency)

const dataMET01 = [
  {
    "id": 1,
    "question": "1) Which of the following confirmed values meet the diagnostic threshold for diabetes?",
    "correct": "fasting blood glucose equal to or greater than 126mg/dl.",
    "incorrect": [
      "fasting blood glucose equal to or greater than 140mg/dl",
      "random glucose greater than 160 mg/dl",
      "2 hour post prandial glucose greater than or equal to 126 mg/dl"
    ]
  },
  {
    "id": 2,
    "question": "2) Of the following, who is at greatest risk for type 1 diabetes?",
    "correct": "Someone with family members who have celiac and thyroid disease.",
    "incorrect": [
      "Someone with family members who have type 2 diabetes.",
      "Someone who is overweight and smokes cigarettes.",
      "Someone who has a history of severe and chronic hypoglycemia."
    ]
  },
  {
    "id": 3,
    "question": "3) Which of the following best describes type 1 diabetes?",
    "correct": "auto-immune disease that attacks the beta cells of the pancreas",
    "incorrect": [
      "insulin resistance secondary to obesity",
      "hyperglycemia that can be treated with pills or insulin",
      "a disease that is more common in children who drink cows milk"
    ]
  },
  {
    "id": 4,
    "question": "4) Circle the statement that reflects the action of insulin.?",
    "correct": "all of the above",
    "incorrect": [
      "enhances lipogenesis",
      "inhibits glycogenolysis",
      "promotes protein synthesis"
    ]
  },
  {
    "id": 5,
    "question": "5) Tight glucose control reduces the risk of diabetes related complications. Circle the blood glucose targets as outlined by the American Diabetes Association.?",
    "correct": "before meal glucose 70mg/dl-130mg/dl 1-2 hours after a meal, <180mg/dl A1c<7%",
    "incorrect": [
      "before meal glucose 80mg/dl-120mg/dl, post prandial glucose 100mg/dl-140mg/dl",
      "glucose between 70mg/dl-150mg/dl A1c less than 6.5%",
      "fasting glucose <126mg/dl, random <200mg/dl"
    ]
  },
  {
    "id": 6,
    "question": "6) TR is taking 15 units of glargine at bedtime and 4 units of humalog before each meal. TR is experiencing at least one episode of hypoglycemia a day, usually between meals. TR checks glucose levels before each meal. Pre meal glucose levels are 110 mg/dl on average. What initial change in self-management would you recommend?",
    "correct": "decrease the humalog by 1 unit each meal",
    "incorrect": [
      "decrease the glargine dose by 2 units",
      "ask TR to monitor 2 hour post-prandial glucose levels",
      "ask TR to increase carbohydrate intake by 15 gms at each meal"
    ]
  },
  {
    "id": 7,
    "question": "7) Diabetes Ketoacidosis (DKA) is a dangerous condition for people with diabetes. Which of the following statements is NOT accurate?",
    "correct": "Sub-Q insulin should be given 4 hours after the intravenous insulin infusion is discontinued.",
    "incorrect": [
      "the two most important things the patient needs are fluid and insulin",
      "DKA is often precipitated by illness or infection.",
      "people with type 1 diabetes are more likely to go into DKA"
    ]
  },
  {
    "id": 8,
    "question": "8) KL is a 24 year old admitted in DKA. Which of the following insulins may be used intravenously to treat his hyperglycemia?",
    "correct": "regular",
    "incorrect": [
      "lantus",
      "NPH",
      "a basal bolus combination"
    ]
  },
  {
    "id": 9,
    "question": "9) Which of the following is a risk factor for HHNS (hyperglycemic, hyperosmolar nonketotic syndrome) in persons with type 2 diabetes.?",
    "correct": "viral infection",
    "incorrect": [
      "stress",
      "occasional alcohol intake",
      "over insulinization"
    ]
  },
  {
    "id": 10,
    "question": "10) During a diabetes education session, you notice the patient is beginning to sweat and get shaky. She uses her meter to test her blood glucose and it is 58. The patient tells you she has a box of raisins in her purse. What is the best action?",
    "correct": "advise the patient to eat about 2 tablespoons of her raisins",
    "incorrect": [
      "leave the room to get 3 glucose tablets",
      "call the doctor for orders",
      "give a glucagon injection"
    ]
  },
  {
    "id": 11,
    "question": "11) According to the Diabetes Control and Complications Trial (DCCT), patients with intensive diabetes management had a significant reduction in:?",
    "correct": "all three microvascular complications of diabetes",
    "incorrect": [
      "retinopathy progression only",
      "macrovascular complications",
      "macrovascular and microvascular complications"
    ]
  },
  {
    "id": 12,
    "question": "12) The main feature of proliferative retinopathy is: [Multiple Choice ] ?",
    "correct": "Growth of new blood vessels",
    "incorrect": [
      "Proliferation of cotton wool spots.",
      "Venous beading",
      "Thickening of the retina"
    ]
  },
  {
    "id": 13,
    "question": "13) Risk factor reduction prevents complications. Which of the following actions will reduce microvascular disease?",
    "correct": "controlling hypertension",
    "incorrect": [
      "Increasing fiber intake",
      "taking a daily aspirin",
      "stress management"
    ]
  },
  {
    "id": 14,
    "question": "14) Which of the following is an example of a peripheral sensory polyneuropathy: ?",
    "correct": "\"stocking glove\" loss of protective sensation",
    "incorrect": [
      "intermittent claudication",
      "loss of the fat pad below the metatarsal head",
      "gustatory sweating"
    ]
  },
  {
    "id": 15,
    "question": "15) Of the following, which risk factor is most predictive for future foot ulcers?",
    "correct": "history of previous foot ulceration or amputation",
    "incorrect": [
      "loss of protective sensation",
      "smoking",
      "insulin treatment"
    ]
  },
  {
    "id": 16,
    "question": "16) Which of the following is a correct retinopathy screening guideline according to the American Diabetes Association?",
    "correct": "Patients with new onset type 2 diabetes require a dilated eye exam upon diagnosis.",
    "incorrect": [
      "For both Type 1 and Type 2 diabetes, a dilated eye exam should be done upon diagnosis.",
      "Eye examinations must be provided in-person by an experienced Ophthalmologist or Optometrist.",
      "Laser photocoagulation should be provided to patients with nonproliferative retinopathy."
    ]
  },
  {
    "id": 17,
    "question": "17) Which of the following is a true statement about microvascular disease? [MultipleChoice ] ?",
    "correct": "Cigarette smoking increases risk of nephropathy.",
    "incorrect": [
      "Erectile dysfunction is an indicator of nephropathy,",
      "Alchohol consumption decreases neuropathic pain.",
      "Proteinuria is an early indicator of retinopathy."
    ]
  },
  {
    "id": 18,
    "question": "18) Which of the following findings may occur when a person with diabetes has a severe infection?",
    "correct": "hyperglycemia",
    "incorrect": [
      "hypoglycemia",
      "decreased insulin requirements",
      "somogyi effect"
    ]
  },
  {
    "id": 19,
    "question": "19) Diabetic nephropathy is a clinical syndrome characterized by the following?",
    "correct": "All of the about",
    "incorrect": [
      "Persistent albuminuria (>300 mg/d or >200 μg/min) that is confirmed on at least 2 occasions 3-6 months apart",
      "Progressive decline in the glomerular filtration rate (GFR)",
      "Elevated arterial blood pressure"
    ]
  },
  {
    "id": 20,
    "question": "20) Une patiente de 53 ans est hospitalisé pour le bilan d'une perdre du poids (anorexie, amaigrissement de 3 kg en 4 semaines, asthénie). Quel signe clinique est plus un argument pour une hyperthyroïdie?",
    "correct": "Palpitation à 120/mn",
    "incorrect": [
      "Tremblement des extrémités",
      "Hypertension",
      "Angoisse",
      "Asthénie"
    ]
  },
  {
    "id": 21,
    "question": "21) Quel facteur aggravant l'orbithopathie dysthyroïdienne devez vous rechercher?",
    "correct": "Tabagism actif",
    "incorrect": [
      "Tabagism sevré",
      "Régime sans iode",
      "Alcoolism actif",
      "Alcoolism sevré"
    ]
  },
  {
    "id": 22,
    "question": "22) Quel bilan hormonal vous prescrivez dans le premier plan pour confirmer l'hyperthyroïdie?",
    "correct": "TSH, T3L, T4L",
    "incorrect": [
      "TSH, T3L",
      "T4L, T3L",
      "THS, T4L",
      "T4L"
    ]
  },
  {
    "id": 23,
    "question": "23) Quel examen paraclinique prescrivez-vous à visée étiologique de l'hyperthyroïdie dans le premier plan?",
    "correct": "Echographie de la thyroid",
    "incorrect": [
      "TDM du cou",
      "Echocardiographie",
      "IRM du cou",
      "Scintigraphie"
    ]
  },
  {
    "id": 24,
    "question": "24) Quel est l'examen biologique pour confirmer le diagnostic de la maladie de Basedow?",
    "correct": "Ac-anti récepteur de la TSH",
    "incorrect": [
      "Ac-anti thyroglobuline",
      "Ac-anti TPO",
      "Thyroglubuline",
      "Calcitonine"
    ]
  },
  {
    "id": 25,
    "question": "25) jours après vous commencez le traitement par PTU votre patiente présente de la fièvre et douleur de la gorge. Quelle est votre mesure à prendre?",
    "correct": "Hg urgence",
    "incorrect": [
      "TSH urgence",
      "T4L urgence",
      "TSH, T3L, T4L urgence",
      "Procalcitonine urgence"
    ]
  },
  {
    "id": 26,
    "question": "26) Quelle est le bilan pré-thérapeutique (ATS) à faire chez les femmes ayant une hyperthyroïdie?",
    "correct": "bHCG",
    "incorrect": [
      "Hg",
      "Fonction rénal",
      "Procalcitonine",
      "Calcitonine"
    ]
  },
  {
    "id": 27,
    "question": "27) Les sigines et symptômes si-dessous ce sont des caractères d'une exopthalmie maligne sauf un le quel?",
    "correct": "Exopthalmie < 25mm, réductible, non douloureuse",
    "incorrect": [
      "Exopthalmie > 25mm, irréductible, douloureuse",
      "Inocclusion palpébrale (infiltration oedémateuse)",
      "Atteinte neuropathique: diplopie",
      "Atteinte inflammatoire: kératite"
    ]
  },
  {
    "id": 28,
    "question": "28) Quel est, parmi les éléments de l'anamnèse celui qui n'est pas lié à un risque de dénutrition ?",
    "correct": "le sexe masculin ou féminin",
    "incorrect": [
      "les conditions sociales (vit seul)",
      "l'antécédent de gastrectomie",
      "contexte dépression mentale",
      "le trouble de la déglutition"
    ]
  },
  {
    "id": 29,
    "question": "29) Parmi les élément de dénutrition suivants, lequel n'est pas juste ?",
    "correct": "État d'agression diminue les besoins",
    "incorrect": [
      "Déséquilibre entre les apports et les besoins",
      "Altération de composition corporelle",
      "Altération de fonction physiologique",
      "État d'agression augmente les besoins"
    ]
  },
  {
    "id": 30,
    "question": "30) Lequel n'est pas un élément clinique en faveur du diagnostic de dénutrition présentant chez un patient adulte jeune ?",
    "correct": "la perte de poids récente ≥5% en 6 mois",
    "incorrect": [
      "indice de masse corporelle inférieur à 18,5",
      "l'amyotrophie des quatre membres",
      "la diminution des capacités fonctionnelles",
      "la perte de poids récente ≥10% en 6 mois"
    ]
  },
  {
    "id": 31,
    "question": "31) Concernant l'index de masse corporelle, lequel est un élément clinique en faveur du diagnostic de dénutrition modérée présentant chez un patient âgé≥70 ans?",
    "correct": "IMC≤21",
    "incorrect": [
      "IMC≤18,5",
      "IMC≤18",
      "Albumine <20g/l",
      "Albumine <30g/l"
    ]
  },
  {
    "id": 32,
    "question": "32) Les propositions suivantes sont les indices anthropométriques dans le diagnostic dénutrition, sauf: ?",
    "correct": "Mesure tour de la hanche",
    "incorrect": [
      "Périmètre brachiale",
      "Indice de masse corporelle",
      "Pli cutané rétro-tricipital",
      "Mesure talon-genou"
    ]
  },
  {
    "id": 33,
    "question": "33) Les propositions suivantes sont les indices anthropométriques de la dénutrition, laquelle est pour mesurer la masse maigre: ?",
    "correct": "Périmètre brachiale",
    "incorrect": [
      "Indice de masse corporelle",
      "Pli cutané rétro-tricipital",
      "Mesure talon-genou",
      "Mesure tour de la hanche"
    ]
  },
  {
    "id": 34,
    "question": "34) Les propositions suivantes sont les indices anthropométriques de la dénutrition, laquelle est pour mesurer la masse grasse: ?",
    "correct": "Pli cutané rétro-tricipital",
    "incorrect": [
      "Périmètre brachiale",
      "Indice de masse corporelle",
      "Mesure talon-genou",
      "Mesure tour de la hanche"
    ]
  },
  {
    "id": 35,
    "question": "35) Parmi les propositions suivantes concernant la gravité de la dénutrition chez le sujet âgé, laquelle n'est pas juste ?",
    "correct": "Est un facteur pronostic dependant",
    "incorrect": [
      "Augmente le risque d'infection",
      "Augmente le risque de décès",
      "Augmente la durée d'hospitalisation",
      "Est un facteur pronostic indépendant"
    ]
  },
  {
    "id": 36,
    "question": "36) Face à l'aggression (Stress, traumatisme, chirurgie, infection sévère), la réponse de notre organisme donne?",
    "correct": "Diminue la production hépatique de l'albumine",
    "incorrect": [
      "Augmente la métabolisme de bas",
      "Augmente la dépense énergétique de repos",
      "Hyperproduction des protéines inflammatoires",
      "Augmente la production hépatique de l'albumine"
    ]
  },
  {
    "id": 37,
    "question": "37) Dans l'état aggression (Stress, traumatisme, chirurgie, infection sévère), une des hormones suivantes n'est pas augmentée, laquelle?",
    "correct": "La thyroxine",
    "incorrect": [
      "Le glucagon",
      "Le cortisol",
      "L'adrénaline",
      "La catécholamine"
    ]
  },
  {
    "id": 38,
    "question": "38) Parmi les propositions suivantes concernant l'albumine, une seule est fausse. Laquelle?",
    "correct": "Est le meilleur marqueur de la dénutrition aiguë",
    "incorrect": [
      "Est normalement présente dans le plasma à un taux plus élevé que celui de l'ensemble de toutes les autres protéines",
      "Est bio-synthétisée dans le foie",
      "Son taux plasmatique abaissé favorise la constitution de l'ascite chronique",
      "Constitue un bon marqueur de la dénutrition"
    ]
  },
  {
    "id": 39,
    "question": "39) Lequel est un élément biologique en faveur du diagnostic de dénutrition?",
    "correct": "albuminémie <30g/l",
    "incorrect": [
      "transthyrétinémie >300 mg/l",
      "LDL - cholestérol augmenté",
      "proteine (C) réactive est élevée",
      "transferrinémie augmentée"
    ]
  },
  {
    "id": 40,
    "question": "40) Lequel n'est pas un élément biologique nécessaire dans la condition de risque de dénutrition?",
    "correct": "Les leucocytes",
    "incorrect": [
      "Sérum albumine",
      "Sérum préalbumine",
      "Sérum cholestérol",
      "Les lymphocytes"
    ]
  },
  {
    "id": 41,
    "question": "41) Au stade d'insuffisance rénale terminale (patient dialysé): une réponse juste?",
    "correct": "La dénutrition majore le risque de mortalité",
    "incorrect": [
      "L'état nutritionnel n'a aucune influence sur le pronostic",
      "L'obésité est un facteur péjoratif qui aggrave le pronostic",
      "La perte de poids améliore le pronostic",
      "La prise de poids aggrave le pronostic"
    ]
  },
  {
    "id": 42,
    "question": "42) Parmi les propositions suivantes concernant les compléments nutritionnels oraux (CNO), laquelle n'est pas juste ?",
    "correct": "Peut remplacer les aliments normaux",
    "incorrect": [
      "Au moins 2fois / j et 2h avant les repas",
      "Ne remplace pas les aliments normaux",
      "Peut être mélangé aux aliments",
      "Les goûts sont sucrés ou salés"
    ]
  },
  {
    "id": 43,
    "question": "43) Vous préconiser une nutrition parentérale car:?",
    "correct": "Toutes ces propositions sont fausses",
    "incorrect": [
      "L'utilisation de la voie digestive est impossible en raison de l' ATCD de gastrectomie",
      "La nutrition parentérale entraine moins de risque de complication infectieuse que la nutrition entérale",
      "La nutrition parentérale entraine moins de risque d'hyperglycémie que la nutrition entérale",
      "La nutrition parentérale est moins couteuse que la nutrition entérale"
    ]
  },
  {
    "id": 44,
    "question": "44) L'obésité grade I chez un adulte jeune est défini par : ?",
    "correct": "Un IMC > 30 kg/m²",
    "incorrect": [
      "Un IMC >25 kg/m²",
      "Un IMC > 35 kg/m²",
      "Un IMC > 40 kg/m²",
      "Un IMC > 23 kg/m²"
    ]
  },
  {
    "id": 45,
    "question": "45) Les elements suivants sont à déterminer le risque de dénutrition, sauf: ?",
    "correct": "La perte de gout",
    "incorrect": [
      "La perte d'appétit",
      "Le stress psychologique",
      "La perte de poids",
      "L'index de masse corporelle"
    ]
  },
  {
    "id": 46,
    "question": "46) On préfère la nutrition entérale par rapport à la nutrition parentérale car: Une seule est fausse?",
    "correct": "Elle est demandée par les patients hôpitalisés",
    "incorrect": [
      "Elle est plus simple et moins coûteuse",
      "Elle a un effet trophique sur muqueuse intestinale",
      "Elle a moins de complications métaboliques",
      "Elle est indiquée dans le digestif fonctionnel"
    ]
  },
  {
    "id": 47,
    "question": "47) On préfère la nutrition parentérale par rapport à la nutrition entérale car: Une seule est fausse?",
    "correct": "Le patient a eu une gastrectomie partielle",
    "incorrect": [
      "Le patient a une malabsorption intestinale",
      "Le patient a une perforation intestinale",
      "Le patient a une occlusion intestinale",
      "Le patient a un vomissement incohersible"
    ]
  },
  {
    "id": 48,
    "question": "48) Un patient de 53 ans est hospitalisé pour le bilan d'une baisse de l'état général (anorexie, amaigrissement de 3 kg en 2 semaines, asthénie), diarrhées et vomissements depuis 2 semaines. Vous évoquez 2 diagnostics différenties: une gastro-entérite par intoxication alimentaire et une insuffisance surrénalienne aiguë (ISA). Quel signe clinique est plus un argument pour une ISA ?",
    "correct": "Mélanodermie",
    "incorrect": [
      "Diarrhées glairo-sanglantes",
      "Hypotension",
      "Douleurs abdominales",
      "Fièvre à 38(°C)"
    ]
  },
  {
    "id": 49,
    "question": "49) Vous suspectez une ISA chez une patiente de 45 ans, avec pour facteur déclenchant possible une infection urinaire. Parmi les critères suivants, lequel est un critère de gravité immédiate ?",
    "correct": "Confusion",
    "incorrect": [
      "FC>90/min",
      "T>38(°C)",
      "FR>20/min",
      "Diurèse <50 ml/kg/min"
    ]
  },
  {
    "id": 50,
    "question": "50) Madame F, 33 ans a été amenée par sa famille pour un malaise il y a 1 heure, sans perte de conscience. Elle se plaignait d'asthénie, anorexie et vomissements depuis 3 semaines. A l'examen clinique: PA=85/60 mmHg, FC=100/min. T=37,9°C; confusion. Abdomen sensible de façon diffuse mais particulièrement en fosse iliaque droite. Vous évoquez une ISA. Parmi les diagnostics ci-dessous, quel diagnostic différentiel évoquez-vous en urgence ?",
    "correct": "Choc septique secondaire à une appendicite compliquée",
    "incorrect": [
      "Choc hémorragique secondaire à une grossesse extra-utérine",
      "Choc cardiogénique secondaire à une embolie pulmonaire",
      "Choc hypovolémique secondaire à une insuffisance rénale aiguë",
      "Choc anaphylactique secondaire à une allergie médicamenteuse"
    ]
  },
  {
    "id": 51,
    "question": "51) Le diagnostic étiologique d'une hyponatrémie nécessite d'évaluer l'état d'hydratation extra-cellullaire et un ionogramme urinaire. Concernant cet examen, indiquez la proposition exacte.?",
    "correct": "Oriente vers une insuffisance surrénale si natriurèse >20 mmol/l",
    "incorrect": [
      "Nécessite une diurèse des 24h",
      "Difficile à réaliser car il faut une sonde urinaire",
      "Oriente vers une insuffisance surrénale si natriurèse <20 mmol/l",
      "Après injection de furosémide pour relancer la diurèse si oligurie"
    ]
  },
  {
    "id": 52,
    "question": "52) Concernant le traitement hormonal en urgence, indiquez les propositions exactes?",
    "correct": "Hémisuccinate d'hydrocortisone 50 mg IV, 4 fois / 24h",
    "incorrect": [
      "Hémisuccinate d'hydrocortisone 200 mg IV, 1 fois/24h",
      "Hémisuccinate d'hydrocortisone la voie PO est possible si pas de voie IV",
      "Hémisuccinate d'hydrocortisone à débuter dès la confirmation diagnostique",
      "Hémisuccinate d'hydrocortisone remplacé par Fludrocortisone si indisponible"
    ]
  },
  {
    "id": 53,
    "question": "53) Parmi les cas de découverte récente chez les Cambodgiens de souche, quelle est la cause la plus fréquente d'insuffisance surrénale lente?",
    "correct": "Tuberculose",
    "incorrect": [
      "Rétraction corticale",
      "Métastases d'un cancer pulmonaire",
      "Déficit enzymatique",
      "Accident des anticoagulants"
    ]
  },
  {
    "id": 54,
    "question": "54) Parmi les thérapeutiques ci-dessous, laquelle est dangereuse en présence d'une insuffisance surrénale primitive ?",
    "correct": "Potassium",
    "incorrect": [
      "Pénicilline",
      "Hydrocortisone",
      "Régime normosodé",
      "9 alpha Fluorohydrocortisone"
    ]
  },
  {
    "id": 55,
    "question": "55) Quelle est la condition qui permet de porter avec certitude le diagnostic de maladie d'Addison?",
    "correct": "Le taux de 17 OH urinaires est inférieur à 2 mg/24h et ne s'élève pas après stimulation par le synacthène",
    "incorrect": [
      "La cortisolémie est inférieure à 5 microgrammes pour 100 ml",
      "L'hypotension, l'hyponatrémie et l'hyperkaliémie sont présentes",
      "Le taux des 17 OH urinaires est inférieur à 2 mg/24h et ne s'élève pas",
      "Le taux d'ACTH plasmatique est normal"
    ]
  },
  {
    "id": 56,
    "question": "56) Une malade de 42 ans est traitée depuis 5 ans pour une authentique insuffisance surrénale chronique. Elle reste fatiguée et hypertendue. Une erreur importante dans la prescription de son traitement précisé ci-dessous est probablement responsable de ce mauvais résultat:?",
    "correct": "Flurocortisone 50 mg: un comprimé le matin",
    "incorrect": [
      "Hydrocortisone 10 mg: un comprimé le matin, à midi et le soir",
      "Vitamine (C) 50 mg: un comprimé le matin et à midi",
      "Traitement à maintenir en permanence, doses à tripler en cas d'épisode infectieux intercurrent",
      "Maintien d'une alimentation très peu salée en raison de la corticothérapie"
    ]
  },
  {
    "id": 57,
    "question": "57) Vous explorez une maladie d'Addison d'origine tuberculeuse. Parmi les propositions suivantes, concernant l'exploration hypophyso-surrénale, quelle est celle ou quelles sont celles qui est (sont) exacte(s) ?",
    "correct": "Il existe des calcifications au niveau des cortico-surrénales",
    "incorrect": [
      "Le taux d'ACTH plasmatique est bas",
      "Le test de stimulation par le synacthène est positif",
      "L'activité rénine plasmatique (ARP) est base",
      "Il existe une hypokaliémie en période de décompensation"
    ]
  },
  {
    "id": 58,
    "question": "58) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn T0=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quelle est votre hypothèse diagnostique :?",
    "correct": "Insuffisance surrénalienne aiguë périphérique",
    "incorrect": [
      "Insuffisance surrénalienne aiguë centrale",
      "Péritonite",
      "Sepsis sévère",
      "Lupus érythémateux disséminé en poussée"
    ]
  },
  {
    "id": 59,
    "question": "59) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn, To=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Que signifie la mélanodermie?",
    "correct": "Excès d'ACTH",
    "incorrect": [
      "Excès de TRH",
      "Excès de TSH",
      "Déshydratation extracellulaire",
      "Exposition solaire prolongée"
    ]
  },
  {
    "id": 60,
    "question": "60) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn, To=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quels trouble ionique vous attendez-vous à retrouver ?",
    "correct": "Hyponatrémie",
    "incorrect": [
      "Hypokaliémie",
      "Hypermagnésémie",
      "Hypernatrémie",
      "Riens"
    ]
  },
  {
    "id": 61,
    "question": "61) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn. T0=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quel sera votre bilan étiologique en urgence :?",
    "correct": "Dosage cortisol et ACTH",
    "incorrect": [
      "Test au synacthène",
      "Dosage cortisol et TSH",
      "Dosage aldostérone",
      "Dosage rénine"
    ]
  },
  {
    "id": 62,
    "question": "62) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn To=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quelle est la principale étiologie ?",
    "correct": "Tuberculose surrénalienne et atteinte auto-immune",
    "incorrect": [
      "Hémorragie surrénalienne",
      "Thrombose surrénalienne",
      "Bloc 21 alpha hydroxylase",
      "Cancer surrénalienne"
    ]
  },
  {
    "id": 63,
    "question": "63) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn, T0=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quel va être votre traitement en urgence ?",
    "correct": "Remplissage vasculaire et glucocorticoïde IVSE",
    "incorrect": [
      "Apport de K+",
      "Insuline glucose",
      "Minéralocorticoïde IVSE",
      "Glucocorticoïde PO"
    ]
  },
  {
    "id": 64,
    "question": "64) Quel est le diagnostic d'un patient avec état dyspnéique fébrile après 48h d'hospitalisation? (QRU) (SBA)?",
    "correct": "Pneumonie nosocomiale",
    "incorrect": [
      "Pneumonie Inhalation",
      "Pneumonie communautaire",
      "Bronchite aigue",
      "Pneumocystose"
    ]
  },
  {
    "id": 65,
    "question": "65) Devant un tableau de Pneumonie au cours d'hospitalisation, quel examen clinique faites-vous? (QRU) (SBA)?",
    "correct": "Intérogatoire pour savoir s'il y a des troubles de deglutition",
    "incorrect": [
      "Auscultation cardiaque",
      "Examen neurologique",
      "Regardez sur son état veineux",
      "Regardez son Sonde Urinaire"
    ]
  },
  {
    "id": 66,
    "question": "66) Examen clinique montrait une toux avec des crachats verdâtres avec des crépitants basale droite, quel examen paraclinique demandez-vous pour confirmer le diagnostic ? (QRU) (SBA)?",
    "correct": "Radiographie pulmonaire",
    "incorrect": [
      "CRP + NSF + VS",
      "Tubage gastrique",
      "Bronchoscopie",
      "Échographie abdomino-pelvienne"
    ]
  },
  {
    "id": 67,
    "question": "67) La Radio pulmonaire montrait une opacité floue basale droite. Le diagnostic est confirmé pour une Pneumonie nosocomiale, quel est le germe le plus souvent peut responsable dans cette pathologie? (QRU) (SBA)?",
    "correct": "Pseudomonase spp",
    "incorrect": [
      "Streptococcus susi",
      "Streptococcus pneumoniae à SDP",
      "Staphylococcus Méti-Résistant",
      "Staphylococcus Blanc"
    ]
  },
  {
    "id": 68,
    "question": "68) Quel est le traitement proposez-vous pour une Pneumonie nosocomiale (germe indéterminé)? (QRU) (SBA)?",
    "correct": "Ceftazidime +/- Vancomycine",
    "incorrect": [
      "Ceftazidime",
      "Ceftriaxone + Moxifloxacine",
      "Amoxicilline + Acide clavulanique",
      "Cabarpenem"
    ]
  },
  {
    "id": 69,
    "question": "69) Définition d'une infection nosocomiale: (QRU) (SBA)?",
    "correct": "Après 48h d'hospitalisation",
    "incorrect": [
      "Avant d'être hospitalisé",
      "Au cours d'une hospitalisation",
      "Après une semaine d'hospitalisation",
      "Après avoir réalisé des gestes invasifs (intubé ventilé, FOGD, Sonde urinaire...)"
    ]
  },
  {
    "id": 70,
    "question": "70) Quelle antibiotiques anti-staphylococcique à choisir devant une infection due au Staph Méti-R: (QRU) (SBA)?",
    "correct": "VANCOMYCINE",
    "incorrect": [
      "OXACILLINE",
      "CEFTRIAXONE",
      "CEFTAZIDIME",
      "AMOXICILLINE"
    ]
  },
  {
    "id": 71,
    "question": "71) Quelle antibiotique peut-on donner pour une infection dû au group de Pseudomonas: (QRU) (SBA)?",
    "correct": "CEFTAZIDIME",
    "incorrect": [
      "BACTRIM",
      "OFLOXACINE",
      "CEFTRIAXONE",
      "ACIDE FUSIDIQUE"
    ]
  },
  {
    "id": 72,
    "question": "72) Quelles sont les infections nosocomiales le plus rencontrée au Cambodge: (QRU) (SBA)?",
    "correct": "Infection respiratoire",
    "incorrect": [
      "Infection digestive",
      "Infection urinaire",
      "Infection sur cathéter",
      "Infection de la plaie post opéré"
    ]
  },
  {
    "id": 73,
    "question": "73) Quel est le cause de l'hyper-éosinophilie le plus rencontré au Cambodge: (QRU) (SBA)?",
    "correct": "Cause Parasitaire",
    "incorrect": [
      "Cause allergique",
      "Utilisation des Antibiotiques",
      "Cause néoplasique",
      "Maladie du sang"
    ]
  },
  {
    "id": 74,
    "question": "74) Devant une hyperéosinophilique, quel examen demander vous en premier intention: (QRU) (SBA)?",
    "correct": "Examen parasitologie des selle",
    "incorrect": [
      "CRP+NSF+VS",
      "Les auto-anticorps",
      "BOM",
      "Coproculture"
    ]
  },
  {
    "id": 75,
    "question": "75) Un patient de 76 ans est hospitalisé dans votre service depuis 5 jours pour baisse de l'état générale. Il présente brutalement une dyspnée. Quels sont les éléments suivants qui vous paraissent des arguments en faveur d'une embolie pulmonaire ? (CM)?",
    "correct": "Un antécédent personnel de maladie thrombo-embolique veineuse, Son âge",
    "incorrect": [
      "Son âge",
      "Une fréquence cardiaque à 80/min",
      "Un antécédent de chirurgie de prothèse de hanche il y a 1 an",
      "Des crépitants"
    ]
  },
  {
    "id": 76,
    "question": "76) Vous examinez durant votre visite un patient fébrile avec une suspicion d'infection du cathéter. Parmi les signes suivants, lequel n'est pas un critère de sévérité ? (CS)?",
    "correct": "Une fréquence respiratoire >20/min",
    "incorrect": [
      "Une hypotension < 90mmHg",
      "Une oligurie <0.5ml/kg/h",
      "Des troubles de conscience",
      "Une hypoxémie < 60mmHg en air"
    ]
  },
  {
    "id": 77,
    "question": "77) Un patient hospitalisé dans votre unité a été hospitalisé pour sepsis sévère. Des hémocultures ont été réalisées à l'admission. L'examen direct a révélé des bacilles gram positif. Quel(s) germe(s) vous parait responsable(s) d'après ce résultat ? (CM)?",
    "correct": "Un staphylocoque, Un pneumocoque",
    "incorrect": [
      "Un méningocoque",
      "Un Escherichia Coli",
      "Un pneumocoque",
      "Un Pseudomonas Aeruginosa"
    ]
  },
  {
    "id": 78,
    "question": "78) Parmi les éléments biologiques suivants, lesquels évoquent un syndrome inflammatoire biologique ? (CM)?",
    "correct": "Une élévation de la CRP, Une thrombocytose, Un fibrinogène élevé",
    "incorrect": [
      "Une haptoglobine effondrée",
      "Une albumine augmentée",
      "Un fibrinogène élevé",
      "Une thrombocytose"
    ]
  },
  {
    "id": 79,
    "question": "79) Face à un patient hospitalisé confus, quels signes sont en faveur d'une encéphalopathie par carence en vitamine B1? (CM)?",
    "correct": "Une hypotension orthostatique, Une hypertonie, Des anomalies oculomotrices",
    "incorrect": [
      "Des signes de localisation",
      "Une abolition des ROT aux 4 membres",
      "Une hypertonie",
      "Des anomalies oculomotrices"
    ]
  },
  {
    "id": 80,
    "question": "80) Face à un malade choqué, quel(s) raisonnement(s) vous parait(ssent) juste(s) ? (CS)?",
    "correct": "Une pâleur et des douleurs abdominales peuvent orienter vers une hémorragie non extériorisée",
    "incorrect": [
      "Un ECG normal élimine un choc cardiogénique secondaire à un infarctus du myocarde (IDM)",
      "Une RP normale élimine un cœur pulmonaire aigu (CPA) secondaire à une embolie pulmonaire (EP)",
      "Une apyrexie élimine un choc septique secondaire à une bactériémie",
      "Des troubles de conscience et un coma orientent vers une méningite"
    ]
  },
  {
    "id": 81,
    "question": "81) Face à une insuffisance rénale aiguë et un état de choc, quel argument n'est pas en faveur d'une insuffisance surrénalienne aiguë? (CS)?",
    "correct": "Une hypernatrémie associée à une hypokaliémie",
    "incorrect": [
      "Des vomissements et diarrhées",
      "Des douleurs abdominales avec un examen abdominal normal",
      "Un traitement par corticoïdes au long court sevré brutalement",
      "Une hypoglycémie"
    ]
  },
  {
    "id": 82,
    "question": "82) Parmi les propositions suivantes concernant la Noradrénaline dans le choc septique, lesquelles sont justes ?",
    "correct": "On peut commencer à la posologie de 0.01g/kg/min IVSE, Elle doit s'associer à l'expansion volémique, Elle doit s'associer à l'antibiothérapie précoce",
    "incorrect": [
      "Elle est à débuter en urgence dès le début de la PEC",
      "Elle a un mécanisme de vasoconstriction 1 prédominant",
      "Elle doit s'associer à l'expansion volémique",
      "Elle doit s'associer à l'antibiothérapie précoce"
    ]
  },
  {
    "id": 83,
    "question": "83) H(CM) Quels sont les points suivient de l'echec antibiothérapie:?",
    "correct": "persistance des signes >48h extension localisé, apparition de métastase septique",
    "incorrect": [
      "nouvelle infection",
      "extension localisé",
      "réapparition au cours de la convalescente",
      "apparition de métastase septique"
    ]
  },
  {
    "id": 84,
    "question": "84) (CM) le choix de l'antibiothérapie tenir compte selon :?",
    "correct": "le site de l'infection, le terrain",
    "incorrect": [
      "le terrain",
      "le diagnostic bactériologique sans signe Clinique,",
      "le patient a présenté une fièvre aigue seule.",
      "la qualité de confort."
    ]
  },
  {
    "id": 85,
    "question": "85) (CM) Quel sont les 3 signes cliniques plus fréquentés Vue chez les patients présentent de Syndrome Neuro-méningé:?",
    "correct": "Fièvre, Céphalée, Nausée et Vomissement",
    "incorrect": [
      "Céphalée",
      "Nausée et Vomissement",
      "Trouble de la conscience",
      "Raideur de la nuque."
    ]
  },
  {
    "id": 86,
    "question": "86) (CS) Une jeunne fille ayant de VIH> 5ans avec CD4: 45/mm3, et encours de traitement par des TB et ARV (anti-rétroviral débuté 2 semaines après les Anti- TB) avec une bonne réponde aux traitements Mais au J35, elle se présent: Fièvre, asthénie et touxQuel l'examen nécessaire pour diagnostiquer PARADOXAL syndrome?",
    "correct": "Autre examens pour chercher des infections",
    "incorrect": [
      "Hémoculture",
      "Examen de crachat contrôle",
      "Tx CD4 et charge viral",
      "Radio pulmonaire"
    ]
  },
  {
    "id": 87,
    "question": "87) (CS) A 19-year-old man has donated blood for the first timeDespite having no risk factors for human immunodeficiency virus (HIV) infection, his blood tests positive for HIV by enzyme immunoassay (EIA)Which of the following statements is correct?",
    "correct": "EIA is an excellent screening test",
    "incorrect": [
      "EIA is currently the most specific test for HIV",
      "He might have a false-positive secondary to an unsuspected collagen vascular disease",
      "He has a 75% chance of truly being infected with HIV",
      "A Western blot test would be more Sensitive"
    ]
  },
  {
    "id": 88,
    "question": "88) (CS) A 43-year-old man developed a cough shortly after returning from a 1-month hiking trip in ThailandWhile there, he was hiking in the ForestDuring his trip, he had developed a \"flu-like\" illness consisting of fever, cough, and muscle pains, which resolved spontaneously A CXR shows a thin-walled cavity in the right upper lobe, and the sputum reveals fungal elements Which of the following is the most likely causative organism?",
    "correct": "coccidioidomycosis",
    "incorrect": [
      "ringworm",
      "Cryptococcus neoformans",
      "Candida albicans",
      "mycobacteria"
    ]
  },
  {
    "id": 89,
    "question": "89) (CS)A24-year-old woman complains of pain in the upper chest every time she eats or drinks anythingShe is HIV positive, but currently not on any antiretroviral therapyHer last CD4 count was 250/mm3Select the most likely pathogen causing infection.?",
    "correct": "Candida",
    "incorrect": [
      "Staphylococcus aureus",
      "Pcarinii",
      "Streptococcus pneumoniae",
      "Gram-negative enteric bacilli"
    ]
  },
  {
    "id": 90,
    "question": "90) (CS).A 44-year-old renal transplant patient develops severe cough and shortness of breath on exertionOn examination, he appears dyspneic, respirations 24/min, pulse 110/min, and oxygen saturation 88% His lungs are clear on auscultation and heart sounds are normalCXR shows bilateral diffuse peri-hilar infiltrates Bronchoscopy and bronchial brushings show clusters of cysts that stain with methenamine silver (silver staining) Which of the following is the most appropriate next step in management?",
    "correct": "trimethoprim-sulfamethoxazole",
    "incorrect": [
      "amphotericin B",
      "cephalosporins",
      "aminoglycosides",
      "penicillins"
    ]
  },
  {
    "id": 91,
    "question": "91) (CS).A 19-year-old woman was traveling in a rural KandalShe returned 3 weeks ago and, over the past few days, has gradually developed lower abdominal pain and diarrheaNow the symptoms are much worse with 10 stools a day consisting mostly of mucus and bloodShe is febrile, the abdomen is tender in left lower quadrant, and the remaining examination is normalHer stool is mostly comprised of blood and mucus Which of the following is the most likely causative organism?",
    "correct": "histolytica infection",
    "incorrect": [
      "Escherichia coli infection",
      "Salmonella infection",
      "Shigella infection",
      "Vibrio parahaemolyticus infection"
    ]
  },
  {
    "id": 92,
    "question": "92) (CS) A 43 years-old businesswoman is developing a new enterprise in Phnom PenhOn her most recent trip to Siem reap, she developed diffuse watery diarrhea with severe cramps 1 week after arriving The illness resolved after about 2 days with no further complications Which of the following is the most likely causative organism?",
    "correct": "Ecoli",
    "incorrect": [
      "Campylobacter",
      "Salmonella",
      "Shigella",
      "rotavirus"
    ]
  },
  {
    "id": 93,
    "question": "93) (CS) A 22-year-old university student is back travel from Kampong somTen days after arriving, she develops symptoms of anorexia, malaise, and abdominal cramps followed by a sudden onset of watery diarrhea There are no symptoms of fever or chills, and the stools are nonbloody.The most likely pathogen causing infection.?",
    "correct": "coli",
    "incorrect": [
      "Campylobacter",
      "Salmonella",
      "Shigella",
      "rotavirus"
    ]
  },
  {
    "id": 94,
    "question": "94) (CS).A31-year-old woman presents with symptoms of vulvar itching and burning made worse by urinatingShe has no fever or frequency, but has noticed a recent whitish vaginal dischargeClinical examination reveals vulvar erythema, edema, and fissuresOn speculum examination, there is a white discharge with small white plaques loosely adherent to the vaginal wallWhich of the following treatments is appropriate for her asymptomatic male sexual partner?",
    "correct": "no investigation or treatment",
    "incorrect": [
      "azole cream to the penis",
      "oral fluconazole",
      "standard urethritis investigation",
      "azithromycin plus cefixime"
    ]
  },
  {
    "id": 95,
    "question": "95) (CS)A 24-year-old man is traveling in Southeast AsiaHe is eating at local restaurants and from street vendorsHe now develops high fevers, anorexia, and frequent passage of small-volume stools containing blood, pus, and mucus This is associated with severe abdominal cramps and painful straining when having bowel movementsThe most likely pathogen causing infection.?",
    "correct": "Shigella",
    "incorrect": [
      "Campylobacter",
      "Ecoli",
      "Salmonella",
      "rotavirus"
    ]
  },
  {
    "id": 96,
    "question": "96) (CS) A27-year-old woman is on holiday on the Beach of KAMPOTShe is at a seafood restaurant and has fresh shellfish for dinner.Twenty-four hours later, she and 12 friends in the same group develops symptoms of nausea, vomiting, abdominal cramps, and watery diarrheathe most likely pathogen causing infection.?",
    "correct": "Vibrio parahaemolyticus",
    "incorrect": [
      "Vibrio cholera",
      "enterotoxigenic Ecoli",
      "Salmonella",
      "Shigella"
    ]
  },
  {
    "id": 97,
    "question": "97) (CS)-year-old man presents with diarrheaHe returned 3 weeks ago from a trip to rural MundulkirieOver the past few days, he has gradually developed lower abdominal pain and diarrheaNow the symptoms are much worse with eight stools a day consisting mostly of mucus and bloodHe is afebrile, the abdomen is tender in left lower quadrant, and the remaining examination is normalHis stool is mostly comprised of blood and mucus Which of the following is the most appropriate initial diagnostic test?",
    "correct": "examination of a wet stool specimen",
    "incorrect": [
      "stool culture",
      "stool toxin assay",
      "examination of a dried stool specimen",
      "immunofluorescence of stool specimen"
    ]
  },
  {
    "id": 98,
    "question": "98) (CS)A34-year-old man presents with diarrhea 3 weeks after returning from a trip to kg SOMOver the past few weaks, he has gradually developed severe head ache, and lower abdominal pain and diarrheaNow the symptoms are much worse with malaise, and a severe head ache, confusion. He is afebrile, the abdomen is tender in left lower quadrant, and his stools tests show tinea solium. Which offollowing the initial?",
    "correct": "Cerebral scanner with radio contrass",
    "incorrect": [
      "Cerebral MRI",
      "Lombar puncture",
      "Serology test of Tsolium antibody",
      "Abdominal ultrasound"
    ]
  },
  {
    "id": 99,
    "question": "99) (CS)A22-year-old woman HIV+ complains of vulvar itching, burning, and pain when voiding urineShe has no other symptoms of fever, vaginal discharge, or urinary frequency Physical examination reveals some vulvar ulceration but no vaginal discharge The ulcers are small 2-3-mm lesions with an erythematous base Which of the following is the most likely diagnosis?",
    "correct": "HSV infection",
    "incorrect": [
      "Trichomonas vaginalis infection",
      "Ngonorrhoeae infection",
      "Ctrachomatis infection",
      "Mgenitalium infection"
    ]
  },
  {
    "id": 100,
    "question": "100) (CM) A 30-year-old HIV+ begins an anti TB regimen for treatment of pulmonary tuberculosis that includes isoniazid One month after initiation of therapy, the man visits his primary care physician with complaints of fatigue, anorexia, and nauseaLaboratory tests show:WBC count: 8000/mm3Hemoglobin: 15.2 g/dLHematocrit: 49.7% Aspartate aminotransferase: 240 U/LAlanine aminotransferase: 285 U/L Alkaline phosphatase: 405 U/L Which of the following places this patient at increased risk for developing this complication of isoniazid therapy?",
    "correct": "Active injection drug use, Hepatitis B or C, Drink alcohol",
    "incorrect": [
      "Hepatitis B or C",
      "First-time treatment with isoniazid",
      "Drink alcoohol",
      "HIV"
    ]
  },
  {
    "id": 101,
    "question": "101) (CM).A 25-year-old HIV+ patient known more than 10 years without Anti Retro Viral treatmentOn day he develops severe head ache and right hemiplesiaOn examination, he appears malaise, head ache and right hemiplesia, BP: 14/8 mm/Hg pulse 80/min, and his CD4 count 57 cells/mm3 Which of the following is the most appropriate next step in management?",
    "correct": "test serology of anti body of toxoplasmosis, Cerebral scan, cotrimoxazole",
    "incorrect": [
      "amphotericin B",
      "Cerebral scan",
      "Lumbar puncture",
      "cotrimoxazole"
    ]
  },
  {
    "id": 102,
    "question": "102) Le jeune homme B, 15 ans, sans antécédent particulier, vient à la consultation de néphrologie pour syndrome œdémateux. Il apporte avec lui des examens suivants: urée =0.40g/L créatinine =85μmol/L albuminémie =18g/L. Vous pensez à un syndrome néphrotique idiopathique. Quel est l'examen complémentaire pour confirmer le diagnostic ?",
    "correct": "Protéinurie des 24 heures",
    "incorrect": [
      "Uroculture (ECBU)",
      "Bandelette urinaire",
      "Electrophorèse des protéines urinaires",
      "Electrophorèse des protéines plasmatiques"
    ]
  },
  {
    "id": 103,
    "question": "103) Monsieur M, âgé de 50 ans est venu voir un médecin de ville pour un bilan de santé. Le médecin a trouvé une protéinurie des 24 heures à quantité néphrotique mais cette protéinurie est négative en bandelette urinaire. Le patient est donc adressé à la consultation de néphrologie. Devant ce contexte, quel est le diagnostic le plus probable ?",
    "correct": "Myélome multiple à chaînes légères",
    "incorrect": [
      "Néphropathie lupique",
      "Nécrose tubulaire aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique"
    ]
  },
  {
    "id": 104,
    "question": "104) Mademoiselle S, de 20 ans, sans antécédent particulier sauf diabétique chez les parents, se présente à la consultation pour syndrome œdémateux. Elle apporte quelques résultats biologiques réalisés en ville qui montrent: GB=6 giga/L, Hb=125g/L plaquettes = 115giga/L, urée = 0.45g/L, créatinine =90μmol/L, albuminémie =22 g/L, protéinurie =5 g/24h, pas d'hématurie. Quel est le diagnostic le plus probable ?",
    "correct": "Néphropathie lupique",
    "incorrect": [
      "Glomerulonephrite aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique",
      "Maladie de Berger (néphropathie à IgA)"
    ]
  },
  {
    "id": 105,
    "question": "105) Vous voyez Monsieur D, 25 ans, sans antécédent particulier, en consultation externe pour œdème des paupières et des membres inférieurs. Il apporte des résultats biologiques qui montrent: Na=140 mmo/l; K=4,2 mmol/l; Créat =90 μmol/l; Ca=1,9 mmol/L (76 mg/L). Pour compléter ce bilan biologique, quel dosage vous semble le plus approprié en 1° intention?",
    "correct": "Dosage de l'albuminémie",
    "incorrect": [
      "Dosage de la PTH",
      "Dosage de la TSH",
      "Dosage de la vitamine (D)",
      "Dosage de la phosphorémie"
    ]
  },
  {
    "id": 106,
    "question": "106) Monsieur N de 56 ans, hypertendu sous diurétique thiazidique, se présente à la consultation pour un œdème des membres inférieurs. Il apporte un résultat biologique qui montre: - Na=140 mmo/I; K=4 mmol/l; Créat=100 μmol/l - Ca=80 mg/L; albuminémie = 25 g/L Quel est le diagnostic le plus probable ?",
    "correct": "Fausse hypocalcémie",
    "incorrect": [
      "Hypercalcémie",
      "Vraie hypocalcémie",
      "Vraie normocalcémie",
      "Fausse normocalcémie"
    ]
  },
  {
    "id": 107,
    "question": "107) Vous voyez en consultation un homme de 64 ans suivi pour une Insuffisance rénale chronique d'origine diabétique. Le dernier bilan biologique a montré: - Na=140 mmo/l; K=5 mmol/l; Créat=500 μmol/l - Ca=2 mmol/L (80 mg/L); albuminémie =40 g/L. Parmi les traitements ci-dessous, lequel est le plus approprié dans ce contexte en 1° intention ?",
    "correct": "Alfacalcidol",
    "incorrect": [
      "Ergocalciférol",
      "Cholécalciférol",
      "Calcium et vitamine (D)",
      "Carbonate de calcium"
    ]
  },
  {
    "id": 108,
    "question": "108) Vous avez reçu un patient avec un tableau d'insuffisance rénale chronique terminale, mais la calcémie est à 112 mg/L. Parmi les étiologies suivantes, laquelle est la plus probable?",
    "correct": "Myélome multiple",
    "incorrect": [
      "Néphroangiosclérose",
      "Néphropathie lupique",
      "Syndrome néphrotique",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 109,
    "question": "109) Monsieur D, 65 ans, est adressé aux urgences pour état somnolent. Les examens sanguins montrent: Hb=95g/L, Na+=130mmol/L, K+=7.6mmol/L, Cl=110mmol/L, urée =1.45g/L, créatinine =1425μmol/L, Bicarbonates =18 mmol/L, GB=9.2giga/L, plaquettes = 280giga/L CRP=45mg/L. Pour les urgences suivantes, laquelle nécessite le traitement immédiat ?",
    "correct": "Hyperkaliémie",
    "incorrect": [
      "Anémie",
      "Hyponatrémie",
      "Insuffisance rénale",
      "Acidose métabolique"
    ]
  },
  {
    "id": 110,
    "question": "110) Monsieur K, 65 ans, diabétique, vient vous voir à la consultation pour œdème des membres inférieurs. Les résultats sanguins du même jour montrent : urée =0.95g/L et créatinine =260μmol/L. Il y a 6 mois, la créatininémie était à 250μmol/L. Vous décidez de proposer un diurétique en plus des antihypertenseurs. Quel médicament prescrivez-vous ?",
    "correct": "Furosemide",
    "incorrect": [
      "Bumétamide",
      "Acétazolamide",
      "Spironolactone",
      "Hydrochlorothiazide"
    ]
  },
  {
    "id": 111,
    "question": "111) Une jeune femme de 30 ans vous est adressée par un médecin de ville pour nausées et vomissements répétés. On note dans ces antécédents des épisodes d'œdème généralisé il y a 10 ans. Les résultats biologiques montrent : urée =2,56 g/L, créatinine =1580 μmol/L et une atrophie des 2 reins avec dédifférenciation cortico-médullaire à l'échographie. Quelles sont les causes les plus probables de cette insuffisance rénale chronique ?",
    "correct": "Glomerulonephrite rapidement progressive",
    "incorrect": [
      "Maladie de Berger",
      "Néphropathie lupique",
      "Syndrome d'Alport",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 112,
    "question": "112) Le jeune homme B, 15 ans, sans antécédent particulier, vient à la consultation de néphrologie pour syndrome œdémateux. Il apporte avec lui des examens suivants: urée =0.40g/L, créatinine =85μmol/L, albuminémie =18g/L. Vous pensez à un syndrome néphrotique idiopathique. Quel est l'examen complémentaire pour confirmer le diagnostic ?",
    "correct": "Protéinurie des 24 heures",
    "incorrect": [
      "Uroculture (ECBU)",
      "Bandelette urinaire",
      "Electrophorèse des protéines urinaires",
      "Electrophorèse des protéines plasmatiques"
    ]
  },
  {
    "id": 113,
    "question": "113) Monsieur M, âgé de 50 ans est venu voir un médecin de ville pour un bilan de santé. Le médecin a trouvé une protéinurie des 24 heures à quantité néphrotique mais cette protéinurie est négative en bandelette urinaire. Le patient est donc adressé à la consultation de néphrologie. Devant ce contexte, quel est le diagnostic le plus probable ?",
    "correct": "Myélome multiple à chaînes légères",
    "incorrect": [
      "Néphropathie lupique",
      "Nécrose tubulaire aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique"
    ]
  },
  {
    "id": 114,
    "question": "114) Mademoiselle S, de 20 ans, sans antécédent particulier sauf diabétique chez les parents, se présente à la consultation pour syndrome œdémateux. Elle apporte quelques résultats biologiques réalisés en ville qui montrent: GB=6 giga/L Hb=125g/L, plaquettes = 115giga/L, urée =0.45g/L, créatinine =90μmol/L, albuminémie =22 g/L, protéinurie =5 g/24h. pas d'hématurie. Quel est le diagnostic le plus probable ?",
    "correct": "Néphropathie lupique",
    "incorrect": [
      "Glomerulonephrite aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique",
      "Maladie de Berger (néphropathie à IgA)"
    ]
  },
  {
    "id": 115,
    "question": "115) Vous voyez Monsieur .D, 25 ans, sans antécédent particulier, en consultation externe pour œdème des paupières et des membres inférieurs. Il apporte des résultats biologiques qui montrent :Na=140 mmo/l; K=4,2 mmol/l; Créat =90 μmol/l; Ca=1,9 mmol/L (76 mg/L). Pour compléte ce bilan biologique, quel dosage vous semble le plus approprié en 1° intention?",
    "correct": "Dosage de l'albuminémie",
    "incorrect": [
      "Dosage de la PTH",
      "Dosage de la TSH",
      "Dosage de la vitamine.D",
      "Dosage de la phosphorémie"
    ]
  },
  {
    "id": 116,
    "question": "116) Monsieur N de 56 ans, hypertendu sous diurétique thiazidique, se présente à la consultation pour un œdème des membres inférieurs. Il apporte un résultat biologique qui montre: - Na=140 mmo/I; K=4 mmol/l; Créat=100 μmol/l - Ca=80 mg/L; albuminémie = 25 g/L Quel est le diagnostic le plus probable ?",
    "correct": "Fausse hypocalcémie",
    "incorrect": [
      "Hypercalcémie",
      "Vraie hypocalcémie",
      "Vraie normocalcémie",
      "Fausse normocalcémie"
    ]
  },
  {
    "id": 117,
    "question": "117) Vous voyez en consultation un homme de 64 ans suivi pour une Insuffisance rénale chronique d'origine diabétique. Le dernier bilan biologique a montré: - Na=140 mmo/l; K=5 mmol/l; Créat=500 μmol/l - Ca=2 mmol/L (80 mg/L); albuminémie =40 g/L. Parmi les traitements ci-dessous, lequel est le plus approprié dans ce contexte en 1° intention ?",
    "correct": "Alfacalcidol",
    "incorrect": [
      "Ergocalciférol",
      "Cholécalciférol",
      "Calcium et vitamine.D",
      "Carbonate de calcium"
    ]
  },
  {
    "id": 118,
    "question": "118) Vous avez reçu un patient avec un tableau d'insuffisance rénale chronique terminale, mais la calcémie est à 112 mg/L. Parmi les étiologies suivantes, laquelle est la plus probable?",
    "correct": "Myélome multiple",
    "incorrect": [
      "Néphroangiosclérose",
      "Néphropathie lupique",
      "Syndrome néphrotique",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 119,
    "question": "119) Monsieur D, 65 ans, est adressé aux urgences pour état somnolent. Les examens sanguins montrent: Hb=95g/L, Na+=130mmol/L, K+=7.6mmol/L, Cl=110mmol/L, urée =1.45g/L, créatinine =1425μmol/L, Bicarbonates =18 mmol/L, GB=9.2giga/L, plaquettes = 280giga/L CRP=45mg/L. Pour les urgences suivantes, laquelle nécessite le traitement immédiat ?",
    "correct": "Hyperkaliémie",
    "incorrect": [
      "Anémie",
      "Hyponatrémie",
      "Insuffisance rénale",
      "Acidose métabolique"
    ]
  },
  {
    "id": 120,
    "question": "120) Monsieur K, 65 ans, diabétique, vient vous voir à la consultation pour œdème des membres inférieurs. Les résultats sanguins du même jour montrent : urée =0.95g/L et créatinine =260μmol/L. Il y a 6 mois, la créatininémie était à 250μmol/L. Vous décidez de proposer un diurétique en plus des antihypertenseurs. Quel médicament prescrivez-vous ?",
    "correct": "Furosemide",
    "incorrect": [
      "Bumétamide",
      "Acétazolamide",
      "Spironolactone",
      "Hydrochlorothiazide"
    ]
  },
  {
    "id": 121,
    "question": "121) Une jeune femme de 30 ans vous est adressée par un médecin de ville pour nausées et vomissements répétés. On note dans ces antécédents des épisodes d'œdème généralisé il y a 10 ans. Les résultats biologiques montrent : urée =2,56 g/L, créatinine =1580 μmol/L et une atrophie des 2 reins avec dédifférenciation cortico-médullaire à l'échographie. Quelles sont les causes les plus probables de cette insuffisance rénale chronique ?",
    "correct": "Glomerulonephrite rapidement progressive",
    "incorrect": [
      "Maladie de Berger",
      "Néphropathie lupique",
      "Syndrome d'Alport",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 122,
    "question": "122) Quel est le paramètre qui ne correspond pas au tableau biologique d'une insuffisance rénale fonctionnelle ?",
    "correct": "Diminution de la concentration uréique urinaire",
    "incorrect": [
      "Augmentation de l'urée sanguine",
      "Augmentation de la créatininémie",
      "Diminution de la natriurèse",
      "Hématocrite augmenté"
    ]
  },
  {
    "id": 123,
    "question": "123) Une femme de 35 ans sans ATCD médical, a eu une septicémie post-abortum, compliqué d'une insuffisance rénale auguë anurique justifiant le recours à des hémodialyse répétées. 6 semaines plus tard, la diurèse n'a toujours pas repris. Parmis les causes suivantes, quelle est celle qui vous parait expliquer le plus vraisemblablement la persistance de l'insuffisance rénale ?",
    "correct": "Nécrose corticale bilatérale",
    "incorrect": [
      "Néphrocalcinose",
      "Thrombose des veines rénales",
      "Obstacle sur les voies urinaires",
      "Aucune des propositions n'est correcte"
    ]
  }
  // សូមបន្តដាក់សំណួរទី 124 នៅខាងក្រោមនេះក្នុងដំណាក់កាលទី ៣...
 
,
  {
    "id": 55,
    "question": "55) Quelle est la condition qui permet de porter avec certitude le diagnostic de maladie d'Addison?",
    "correct": "Le taux de 17 OH urinaires est inférieur à 2 mg/24h et ne s'élève pas après stimulation par le synacthène",
    "incorrect": [
      "La cortisolémie est inférieure à 5 microgrammes pour 100 ml",
      "L'hypotension, l'hyponatrémie et l'hyperkaliémie sont présentes",
      "Le taux des 17 OH urinaires est inférieur à 2 mg/24h et ne s'élève pas",
      "Le taux d'ACTH plasmatique est normal"
    ]
  },
  {
    "id": 56,
    "question": "56) Une malade de 42 ans est traitée depuis 5 ans pour une authentique insuffisance surrénale chronique. Elle reste fatiguée et hypertendue. Une erreur importante dans la prescription de son traitement précisé ci-dessous est probablement responsable de ce mauvais résultat:?",
    "correct": "Flurocortisone 50 mg: un comprimé le matin",
    "incorrect": [
      "Hydrocortisone 10 mg: un comprimé le matin, à midi et le soir",
      "Vitamine (C) 50 mg: un comprimé le matin et à midi",
      "Traitement à maintenir en permanence, doses à tripler en cas d'épisode infectieux intercurrent",
      "Maintien d'une alimentation très peu salée en raison de la corticothérapie"
    ]
  },
  {
    "id": 57,
    "question": "57) Vous explorez une maladie d'Addison d'origine tuberculeuse. Parmi les propositions suivantes, concernant l'exploration hypophyso-surrénale, quelle est celle ou quelles sont celles qui est (sont) exacte(s) ?",
    "correct": "Il existe des calcifications au niveau des cortico-surrénales",
    "incorrect": [
      "Le taux d'ACTH plasmatique est bas",
      "Le test de stimulation par le synacthène est positif",
      "L'activité rénine plasmatique (ARP) est base",
      "Il existe une hypokaliémie en période de décompensation"
    ]
  },
  {
    "id": 58,
    "question": "58) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn T0=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quelle est votre hypothèse diagnostique :?",
    "correct": "Insuffisance surrénalienne aiguë périphérique",
    "incorrect": [
      "Insuffisance surrénalienne aiguë centrale",
      "Péritonite",
      "Sepsis sévère",
      "Lupus érythémateux disséminé en poussée"
    ]
  },
  {
    "id": 59,
    "question": "59) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn, To=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Que signifie la mélanodermie?",
    "correct": "Excès d'ACTH",
    "incorrect": [
      "Excès de TRH",
      "Excès de TSH",
      "Déshydratation extracellulaire",
      "Exposition solaire prolongée"
    ]
  },
  {
    "id": 60,
    "question": "60) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn, To=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quels trouble ionique vous attendez-vous à retrouver ?",
    "correct": "Hyponatrémie",
    "incorrect": [
      "Hypokaliémie",
      "Hypermagnésémie",
      "Hypernatrémie",
      "Riens"
    ]
  },
  {
    "id": 61,
    "question": "61) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn. T0=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quel sera votre bilan étiologique en urgence :?",
    "correct": "Dosage cortisol et ACTH",
    "incorrect": [
      "Test au synacthène",
      "Dosage cortisol et TSH",
      "Dosage aldostérone",
      "Dosage rénine"
    ]
  },
  {
    "id": 62,
    "question": "62) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn To=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quelle est la principale étiologie ?",
    "correct": "Tuberculose surrénalienne et atteinte auto-immune",
    "incorrect": [
      "Hémorragie surrénalienne",
      "Thrombose surrénalienne",
      "Bloc 21 alpha hydroxylase",
      "Cancer surrénalienne"
    ]
  },
  {
    "id": 63,
    "question": "63) Mme B, 63 ans, est amenée aux urgences par son mari pour confusion. Dans ses antécédents, on note une hypothyroïdie substituée, un diabète insulino-requérant équilibré. Son mari vous précise que depuis 3 semaines, elle est beaucoup plus fatiguée, et elle a perdu du poids. Ce qui les amène ce jour, c'est que Mme B ne sait plus ni où elle est, ni la date du jour. A cela s'ajoutent des vomissements et des douleurs abdominales diffuses. A l'examen clinique: PA=95/53 mmHg, FC=97/mn, T0=38°2. Elle tient des propos confus. Vous êtes frappé par la couleur foncée de sa peau. Elle présente de francs signes de déshydratation intra et extra cellulaire. L'examen abdominal révèle une sensibilité diffuse, mais pas de défense ni de contracture. L'examen cutané retrouve un vitiligo. Le reste de l'examen est sans particularité. Quel va être votre traitement en urgence ?",
    "correct": "Remplissage vasculaire et glucocorticoïde IVSE",
    "incorrect": [
      "Apport de K+",
      "Insuline glucose",
      "Minéralocorticoïde IVSE",
      "Glucocorticoïde PO"
    ]
  },
  {
    "id": 64,
    "question": "64) Quel est le diagnostic d'un patient avec état dyspnéique fébrile après 48h d'hospitalisation? (QRU) (SBA)?",
    "correct": "Pneumonie nosocomiale",
    "incorrect": [
      "Pneumonie Inhalation",
      "Pneumonie communautaire",
      "Bronchite aigue",
      "Pneumocystose"
    ]
  },
  {
    "id": 65,
    "question": "65) Devant un tableau de Pneumonie au cours d'hospitalisation, quel examen clinique faites-vous? (QRU) (SBA)?",
    "correct": "Intérogatoire pour savoir s'il y a des troubles de deglutition",
    "incorrect": [
      "Auscultation cardiaque",
      "Examen neurologique",
      "Regardez sur son état veineux",
      "Regardez son Sonde Urinaire"
    ]
  },
  {
    "id": 66,
    "question": "66) Examen clinique montrait une toux avec des crachats verdâtres avec des crépitants basale droite, quel examen paraclinique demandez-vous pour confirmer le diagnostic ? (QRU) (SBA)?",
    "correct": "Radiographie pulmonaire",
    "incorrect": [
      "CRP + NSF + VS",
      "Tubage gastrique",
      "Bronchoscopie",
      "Échographie abdomino-pelvienne"
    ]
  },
  {
    "id": 67,
    "question": "67) La Radio pulmonaire montrait une opacité floue basale droite. Le diagnostic est confirmé pour une Pneumonie nosocomiale, quel est le germe le plus souvent peut responsable dans cette pathologie? (QRU) (SBA)?",
    "correct": "Pseudomonase spp",
    "incorrect": [
      "Streptococcus susi",
      "Streptococcus pneumoniae à SDP",
      "Staphylococcus Méti-Résistant",
      "Staphylococcus Blanc"
    ]
  },
  {
    "id": 68,
    "question": "68) Quel est le traitement proposez-vous pour une Pneumonie nosocomiale (germe indéterminé)? (QRU) (SBA)?",
    "correct": "Ceftazidime +/- Vancomycine",
    "incorrect": [
      "Ceftazidime",
      "Ceftriaxone + Moxifloxacine",
      "Amoxicilline + Acide clavulanique",
      "Cabarpenem"
    ]
  },
  {
    "id": 69,
    "question": "69) Définition d'une infection nosocomiale: (QRU) (SBA)?",
    "correct": "Après 48h d'hospitalisation",
    "incorrect": [
      "Avant d'être hospitalisé",
      "Au cours d'une hospitalisation",
      "Après une semaine d'hospitalisation",
      "Après avoir réalisé des gestes invasifs (intubé ventilé, FOGD, Sonde urinaire...)"
    ]
  },
  {
    "id": 70,
    "question": "70) Quelle antibiotiques anti-staphylococcique à choisir devant une infection due au Staph Méti-R: (QRU) (SBA)?",
    "correct": "VANCOMYCINE",
    "incorrect": [
      "OXACILLINE",
      "CEFTRIAXONE",
      "CEFTAZIDIME",
      "AMOXICILLINE"
    ]
  },
  {
    "id": 71,
    "question": "71) Quelle antibiotique peut-on donner pour une infection dû au group de Pseudomonas: (QRU) (SBA)?",
    "correct": "CEFTAZIDIME",
    "incorrect": [
      "BACTRIM",
      "OFLOXACINE",
      "CEFTRIAXONE",
      "ACIDE FUSIDIQUE"
    ]
  },
  {
    "id": 72,
    "question": "72) Quelles sont les infections nosocomiales le plus rencontrée au Cambodge: (QRU) (SBA)?",
    "correct": "Infection respiratoire",
    "incorrect": [
      "Infection digestive",
      "Infection urinaire",
      "Infection sur cathéter",
      "Infection de la plaie post opéré"
    ]
  },
  {
    "id": 73,
    "question": "73) Quel est le cause de l'hyper-éosinophilie le plus rencontré au Cambodge: (QRU) (SBA)?",
    "correct": "Cause Parasitaire",
    "incorrect": [
      "Cause allergique",
      "Utilisation des Antibiotiques",
      "Cause néoplasique",
      "Maladie du sang"
    ]
  },
  {
    "id": 74,
    "question": "74) Devant une hyperéosinophilique, quel examen demander vous en premier intention: (QRU) (SBA)?",
    "correct": "Examen parasitologie des selle",
    "incorrect": [
      "CRP+NSF+VS",
      "Les auto-anticorps",
      "BOM",
      "Coproculture"
    ]
  },
  {
    "id": 75,
    "question": "75) Un patient de 76 ans est hospitalisé dans votre service depuis 5 jours pour baisse de l'état générale. Il présente brutalement une dyspnée. Quels sont les éléments suivants qui vous paraissent des arguments en faveur d'une embolie pulmonaire ? (CM)?",
    "correct": "Un antécédent personnel de maladie thrombo-embolique veineuse, Son âge",
    "incorrect": [
      "Son âge",
      "Une fréquence cardiaque à 80/min",
      "Un antécédent de chirurgie de prothèse de hanche il y a 1 an",
      "Des crépitants"
    ]
  },
  {
    "id": 76,
    "question": "76) Vous examinez durant votre visite un patient fébrile avec une suspicion d'infection du cathéter. Parmi les signes suivants, lequel n'est pas un critère de sévérité ? (CS)?",
    "correct": "Une fréquence respiratoire >20/min",
    "incorrect": [
      "Une hypotension < 90mmHg",
      "Une oligurie <0.5ml/kg/h",
      "Des troubles de conscience",
      "Une hypoxémie < 60mmHg en air"
    ]
  },
  {
    "id": 77,
    "question": "77) Un patient hospitalisé dans votre unité a été hospitalisé pour sepsis sévère. Des hémocultures ont été réalisées à l'admission. L'examen direct a révélé des bacilles gram positif. Quel(s) germe(s) vous parait responsable(s) d'après ce résultat ? (CM)?",
    "correct": "Un staphylocoque, Un pneumocoque",
    "incorrect": [
      "Un méningocoque",
      "Un Escherichia Coli",
      "Un pneumocoque",
      "Un Pseudomonas Aeruginosa"
    ]
  },
  {
    "id": 78,
    "question": "78) Parmi les éléments biologiques suivants, lesquels évoquent un syndrome inflammatoire biologique ? (CM)?",
    "correct": "Une élévation de la CRP, Une thrombocytose, Un fibrinogène élevé",
    "incorrect": [
      "Une haptoglobine effondrée",
      "Une albumine augmentée",
      "Un fibrinogène élevé",
      "Une thrombocytose"
    ]
  },
  {
    "id": 79,
    "question": "79) Face à un patient hospitalisé confus, quels signes sont en faveur d'une encéphalopathie par carence en vitamine B1? (CM)?",
    "correct": "Une hypotension orthostatique, Une hypertonie, Des anomalies oculomotrices",
    "incorrect": [
      "Des signes de localisation",
      "Une abolition des ROT aux 4 membres",
      "Une hypertonie",
      "Des anomalies oculomotrices"
    ]
  },
  {
    "id": 80,
    "question": "80) Face à un malade choqué, quel(s) raisonnement(s) vous parait(ssent) juste(s) ? (CS)?",
    "correct": "Une pâleur et des douleurs abdominales peuvent orienter vers une hémorragie non extériorisée",
    "incorrect": [
      "Un ECG normal élimine un choc cardiogénique secondaire à un infarctus du myocarde (IDM)",
      "Une RP normale élimine un cœur pulmonaire aigu (CPA) secondaire à une embolie pulmonaire (EP)",
      "Une apyrexie élimine un choc septique secondaire à une bactériémie",
      "Des troubles de conscience et un coma orientent vers une méningite"
    ]
  },
  {
    "id": 81,
    "question": "81) Face à une insuffisance rénale aiguë et un état de choc, quel argument n'est pas en faveur d'une insuffisance surrénalienne aiguë? (CS)?",
    "correct": "Une hypernatrémie associée à une hypokaliémie",
    "incorrect": [
      "Des vomissements et diarrhées",
      "Des douleurs abdominales avec un examen abdominal normal",
      "Un traitement par corticoïdes au long court sevré brutalement",
      "Une hypoglycémie"
    ]
  },
  {
    "id": 82,
    "question": "82) Parmi les propositions suivantes concernant la Noradrénaline dans le choc septique, lesquelles sont justes ?",
    "correct": "On peut commencer à la posologie de 0.01g/kg/min IVSE, Elle doit s'associer à l'expansion volémique, Elle doit s'associer à l'antibiothérapie précoce",
    "incorrect": [
      "Elle est à débuter en urgence dès le début de la PEC",
      "Elle a un mécanisme de vasoconstriction 1 prédominant",
      "Elle doit s'associer à l'expansion volémique",
      "Elle doit s'associer à l'antibiothérapie précoce"
    ]
  },
  {
    "id": 83,
    "question": "83) H(CM) Quels sont les points suivient de l'echec antibiothérapie:?",
    "correct": "persistance des signes >48h extension localisé, apparition de métastase septique",
    "incorrect": [
      "nouvelle infection",
      "extension localisé",
      "réapparition au cours de la convalescente",
      "apparition de métastase septique"
    ]
  },
  {
    "id": 84,
    "question": "84) (CM) le choix de l'antibiothérapie tenir compte selon :?",
    "correct": "le site de l'infection, le terrain",
    "incorrect": [
      "le terrain",
      "le diagnostic bactériologique sans signe Clinique,",
      "le patient a présenté une fièvre aigue seule.",
      "la qualité de confort."
    ]
  },
  {
    "id": 85,
    "question": "85) (CM) Quel sont les 3 signes cliniques plus fréquentés Vue chez les patients présentent de Syndrome Neuro-méningé:?",
    "correct": "Fièvre, Céphalée, Nausée et Vomissement",
    "incorrect": [
      "Céphalée",
      "Nausée et Vomissement",
      "Trouble de la conscience",
      "Raideur de la nuque."
    ]
  },
  {
    "id": 86,
    "question": "86) (CS) Une jeunne fille ayant de VIH> 5ans avec CD4: 45/mm3, et encours de traitement par des TB et ARV (anti-rétroviral débuté 2 semaines après les Anti- TB) avec une bonne réponde aux traitements Mais au J35, elle se présent: Fièvre, asthénie et touxQuel l'examen nécessaire pour diagnostiquer PARADOXAL syndrome?",
    "correct": "Autre examens pour chercher des infections",
    "incorrect": [
      "Hémoculture",
      "Examen de crachat contrôle",
      "Tx CD4 et charge viral",
      "Radio pulmonaire"
    ]
  },
  {
    "id": 87,
    "question": "87) (CS) A 19-year-old man has donated blood for the first timeDespite having no risk factors for human immunodeficiency virus (HIV) infection, his blood tests positive for HIV by enzyme immunoassay (EIA)Which of the following statements is correct?",
    "correct": "EIA is an excellent screening test",
    "incorrect": [
      "EIA is currently the most specific test for HIV",
      "He might have a false-positive secondary to an unsuspected collagen vascular disease",
      "He has a 75% chance of truly being infected with HIV",
      "A Western blot test would be more Sensitive"
    ]
  },
  {
    "id": 88,
    "question": "88) (CS) A 43-year-old man developed a cough shortly after returning from a 1-month hiking trip in ThailandWhile there, he was hiking in the ForestDuring his trip, he had developed a \"flu-like\" illness consisting of fever, cough, and muscle pains, which resolved spontaneously A CXR shows a thin-walled cavity in the right upper lobe, and the sputum reveals fungal elements Which of the following is the most likely causative organism?",
    "correct": "coccidioidomycosis",
    "incorrect": [
      "ringworm",
      "Cryptococcus neoformans",
      "Candida albicans",
      "mycobacteria"
    ]
  },
  {
    "id": 89,
    "question": "89) (CS)A24-year-old woman complains of pain in the upper chest every time she eats or drinks anythingShe is HIV positive, but currently not on any antiretroviral therapyHer last CD4 count was 250/mm3Select the most likely pathogen causing infection.?",
    "correct": "Candida",
    "incorrect": [
      "Staphylococcus aureus",
      "Pcarinii",
      "Streptococcus pneumoniae",
      "Gram-negative enteric bacilli"
    ]
  },
  {
    "id": 90,
    "question": "90) (CS).A 44-year-old renal transplant patient develops severe cough and shortness of breath on exertionOn examination, he appears dyspneic, respirations 24/min, pulse 110/min, and oxygen saturation 88% His lungs are clear on auscultation and heart sounds are normalCXR shows bilateral diffuse peri-hilar infiltrates Bronchoscopy and bronchial brushings show clusters of cysts that stain with methenamine silver (silver staining) Which of the following is the most appropriate next step in management?",
    "correct": "trimethoprim-sulfamethoxazole",
    "incorrect": [
      "amphotericin B",
      "cephalosporins",
      "aminoglycosides",
      "penicillins"
    ]
  },
  {
    "id": 91,
    "question": "91) (CS).A 19-year-old woman was traveling in a rural KandalShe returned 3 weeks ago and, over the past few days, has gradually developed lower abdominal pain and diarrheaNow the symptoms are much worse with 10 stools a day consisting mostly of mucus and bloodShe is febrile, the abdomen is tender in left lower quadrant, and the remaining examination is normalHer stool is mostly comprised of blood and mucus Which of the following is the most likely causative organism?",
    "correct": "histolytica infection",
    "incorrect": [
      "Escherichia coli infection",
      "Salmonella infection",
      "Shigella infection",
      "Vibrio parahaemolyticus infection"
    ]
  },
  {
    "id": 92,
    "question": "92) (CS) A 43 years-old businesswoman is developing a new enterprise in Phnom PenhOn her most recent trip to Siem reap, she developed diffuse watery diarrhea with severe cramps 1 week after arriving The illness resolved after about 2 days with no further complications Which of the following is the most likely causative organism?",
    "correct": "Ecoli",
    "incorrect": [
      "Campylobacter",
      "Salmonella",
      "Shigella",
      "rotavirus"
    ]
  },
  {
    "id": 93,
    "question": "93) (CS) A 22-year-old university student is back travel from Kampong somTen days after arriving, she develops symptoms of anorexia, malaise, and abdominal cramps followed by a sudden onset of watery diarrhea There are no symptoms of fever or chills, and the stools are nonbloody.The most likely pathogen causing infection.?",
    "correct": "coli",
    "incorrect": [
      "Campylobacter",
      "Salmonella",
      "Shigella",
      "rotavirus"
    ]
  },
  {
    "id": 94,
    "question": "94) (CS).A31-year-old woman presents with symptoms of vulvar itching and burning made worse by urinatingShe has no fever or frequency, but has noticed a recent whitish vaginal dischargeClinical examination reveals vulvar erythema, edema, and fissuresOn speculum examination, there is a white discharge with small white plaques loosely adherent to the vaginal wallWhich of the following treatments is appropriate for her asymptomatic male sexual partner?",
    "correct": "no investigation or treatment",
    "incorrect": [
      "azole cream to the penis",
      "oral fluconazole",
      "standard urethritis investigation",
      "azithromycin plus cefixime"
    ]
  },
  {
    "id": 95,
    "question": "95) (CS)A 24-year-old man is traveling in Southeast AsiaHe is eating at local restaurants and from street vendorsHe now develops high fevers, anorexia, and frequent passage of small-volume stools containing blood, pus, and mucus This is associated with severe abdominal cramps and painful straining when having bowel movementsThe most likely pathogen causing infection.?",
    "correct": "Shigella",
    "incorrect": [
      "Campylobacter",
      "Ecoli",
      "Salmonella",
      "rotavirus"
    ]
  },
  {
    "id": 96,
    "question": "96) (CS) A27-year-old woman is on holiday on the Beach of KAMPOTShe is at a seafood restaurant and has fresh shellfish for dinner.Twenty-four hours later, she and 12 friends in the same group develops symptoms of nausea, vomiting, abdominal cramps, and watery diarrheathe most likely pathogen causing infection.?",
    "correct": "Vibrio parahaemolyticus",
    "incorrect": [
      "Vibrio cholera",
      "enterotoxigenic Ecoli",
      "Salmonella",
      "Shigella"
    ]
  },
  {
    "id": 97,
    "question": "97) (CS)-year-old man presents with diarrheaHe returned 3 weeks ago from a trip to rural MundulkirieOver the past few days, he has gradually developed lower abdominal pain and diarrheaNow the symptoms are much worse with eight stools a day consisting mostly of mucus and bloodHe is afebrile, the abdomen is tender in left lower quadrant, and the remaining examination is normalHis stool is mostly comprised of blood and mucus Which of the following is the most appropriate initial diagnostic test?",
    "correct": "examination of a wet stool specimen",
    "incorrect": [
      "stool culture",
      "stool toxin assay",
      "examination of a dried stool specimen",
      "immunofluorescence of stool specimen"
    ]
  },
  {
    "id": 98,
    "question": "98) (CS)A34-year-old man presents with diarrhea 3 weeks after returning from a trip to kg SOMOver the past few weaks, he has gradually developed severe head ache, and lower abdominal pain and diarrheaNow the symptoms are much worse with malaise, and a severe head ache, confusion. He is afebrile, the abdomen is tender in left lower quadrant, and his stools tests show tinea solium. Which offollowing the initial?",
    "correct": "Cerebral scanner with radio contrass",
    "incorrect": [
      "Cerebral MRI",
      "Lombar puncture",
      "Serology test of Tsolium antibody",
      "Abdominal ultrasound"
    ]
  },
  {
    "id": 99,
    "question": "99) (CS)A22-year-old woman HIV+ complains of vulvar itching, burning, and pain when voiding urineShe has no other symptoms of fever, vaginal discharge, or urinary frequency Physical examination reveals some vulvar ulceration but no vaginal discharge The ulcers are small 2-3-mm lesions with an erythematous base Which of the following is the most likely diagnosis?",
    "correct": "HSV infection",
    "incorrect": [
      "Trichomonas vaginalis infection",
      "Ngonorrhoeae infection",
      "Ctrachomatis infection",
      "Mgenitalium infection"
    ]
  },
  {
    "id": 100,
    "question": "100) (CM) A 30-year-old HIV+ begins an anti TB regimen for treatment of pulmonary tuberculosis that includes isoniazid One month after initiation of therapy, the man visits his primary care physician with complaints of fatigue, anorexia, and nauseaLaboratory tests show:WBC count: 8000/mm3Hemoglobin: 15.2 g/dLHematocrit: 49.7% Aspartate aminotransferase: 240 U/LAlanine aminotransferase: 285 U/L Alkaline phosphatase: 405 U/L Which of the following places this patient at increased risk for developing this complication of isoniazid therapy?",
    "correct": "Active injection drug use, Hepatitis B or C, Drink alcohol",
    "incorrect": [
      "Hepatitis B or C",
      "First-time treatment with isoniazid",
      "Drink alcoohol",
      "HIV"
    ]
  },
  {
    "id": 101,
    "question": "101) (CM).A 25-year-old HIV+ patient known more than 10 years without Anti Retro Viral treatmentOn day he develops severe head ache and right hemiplesiaOn examination, he appears malaise, head ache and right hemiplesia, BP: 14/8 mm/Hg pulse 80/min, and his CD4 count 57 cells/mm3 Which of the following is the most appropriate next step in management?",
    "correct": "test serology of anti body of toxoplasmosis, Cerebral scan, cotrimoxazole",
    "incorrect": [
      "amphotericin B",
      "Cerebral scan",
      "Lumbar puncture",
      "cotrimoxazole"
    ]
  },
  {
    "id": 102,
    "question": "102) Le jeune homme B, 15 ans, sans antécédent particulier, vient à la consultation de néphrologie pour syndrome œdémateux. Il apporte avec lui des examens suivants: urée =0.40g/L créatinine =85μmol/L albuminémie =18g/L. Vous pensez à un syndrome néphrotique idiopathique. Quel est l'examen complémentaire pour confirmer le diagnostic ?",
    "correct": "Protéinurie des 24 heures",
    "incorrect": [
      "Uroculture (ECBU)",
      "Bandelette urinaire",
      "Electrophorèse des protéines urinaires",
      "Electrophorèse des protéines plasmatiques"
    ]
  },
  {
    "id": 103,
    "question": "103) Monsieur M, âgé de 50 ans est venu voir un médecin de ville pour un bilan de santé. Le médecin a trouvé une protéinurie des 24 heures à quantité néphrotique mais cette protéinurie est négative en bandelette urinaire. Le patient est donc adressé à la consultation de néphrologie. Devant ce contexte, quel est le diagnostic le plus probable ?",
    "correct": "Myélome multiple à chaînes légères",
    "incorrect": [
      "Néphropathie lupique",
      "Nécrose tubulaire aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique"
    ]
  },
  {
    "id": 104,
    "question": "104) Mademoiselle S, de 20 ans, sans antécédent particulier sauf diabétique chez les parents, se présente à la consultation pour syndrome œdémateux. Elle apporte quelques résultats biologiques réalisés en ville qui montrent: GB=6 giga/L, Hb=125g/L plaquettes = 115giga/L, urée = 0.45g/L, créatinine =90μmol/L, albuminémie =22 g/L, protéinurie =5 g/24h, pas d'hématurie. Quel est le diagnostic le plus probable ?",
    "correct": "Néphropathie lupique",
    "incorrect": [
      "Glomerulonephrite aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique",
      "Maladie de Berger (néphropathie à IgA)"
    ]
  },
  {
    "id": 105,
    "question": "105) Vous voyez Monsieur D, 25 ans, sans antécédent particulier, en consultation externe pour œdème des paupières et des membres inférieurs. Il apporte des résultats biologiques qui montrent: Na=140 mmo/l; K=4,2 mmol/l; Créat =90 μmol/l; Ca=1,9 mmol/L (76 mg/L). Pour compléter ce bilan biologique, quel dosage vous semble le plus approprié en 1° intention?",
    "correct": "Dosage de l'albuminémie",
    "incorrect": [
      "Dosage de la PTH",
      "Dosage de la TSH",
      "Dosage de la vitamine (D)",
      "Dosage de la phosphorémie"
    ]
  },
  {
    "id": 106,
    "question": "106) Monsieur N de 56 ans, hypertendu sous diurétique thiazidique, se présente à la consultation pour un œdème des membres inférieurs. Il apporte un résultat biologique qui montre: - Na=140 mmo/I; K=4 mmol/l; Créat=100 μmol/l - Ca=80 mg/L; albuminémie = 25 g/L Quel est le diagnostic le plus probable ?",
    "correct": "Fausse hypocalcémie",
    "incorrect": [
      "Hypercalcémie",
      "Vraie hypocalcémie",
      "Vraie normocalcémie",
      "Fausse normocalcémie"
    ]
  },
  {
    "id": 107,
    "question": "107) Vous voyez en consultation un homme de 64 ans suivi pour une Insuffisance rénale chronique d'origine diabétique. Le dernier bilan biologique a montré: - Na=140 mmo/l; K=5 mmol/l; Créat=500 μmol/l - Ca=2 mmol/L (80 mg/L); albuminémie =40 g/L. Parmi les traitements ci-dessous, lequel est le plus approprié dans ce contexte en 1° intention ?",
    "correct": "Alfacalcidol",
    "incorrect": [
      "Ergocalciférol",
      "Cholécalciférol",
      "Calcium et vitamine (D)",
      "Carbonate de calcium"
    ]
  },
  {
    "id": 108,
    "question": "108) Vous avez reçu un patient avec un tableau d'insuffisance rénale chronique terminale, mais la calcémie est à 112 mg/L. Parmi les étiologies suivantes, laquelle est la plus probable?",
    "correct": "Myélome multiple",
    "incorrect": [
      "Néphroangiosclérose",
      "Néphropathie lupique",
      "Syndrome néphrotique",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 109,
    "question": "109) Monsieur D, 65 ans, est adressé aux urgences pour état somnolent. Les examens sanguins montrent: Hb=95g/L, Na+=130mmol/L, K+=7.6mmol/L, Cl=110mmol/L, urée =1.45g/L, créatinine =1425μmol/L, Bicarbonates =18 mmol/L, GB=9.2giga/L, plaquettes = 280giga/L CRP=45mg/L. Pour les urgences suivantes, laquelle nécessite le traitement immédiat ?",
    "correct": "Hyperkaliémie",
    "incorrect": [
      "Anémie",
      "Hyponatrémie",
      "Insuffisance rénale",
      "Acidose métabolique"
    ]
  },
  {
    "id": 110,
    "question": "110) Monsieur K, 65 ans, diabétique, vient vous voir à la consultation pour œdème des membres inférieurs. Les résultats sanguins du même jour montrent : urée =0.95g/L et créatinine =260μmol/L. Il y a 6 mois, la créatininémie était à 250μmol/L. Vous décidez de proposer un diurétique en plus des antihypertenseurs. Quel médicament prescrivez-vous ?",
    "correct": "Furosemide",
    "incorrect": [
      "Bumétamide",
      "Acétazolamide",
      "Spironolactone",
      "Hydrochlorothiazide"
    ]
  },
  {
    "id": 111,
    "question": "111) Une jeune femme de 30 ans vous est adressée par un médecin de ville pour nausées et vomissements répétés. On note dans ces antécédents des épisodes d'œdème généralisé il y a 10 ans. Les résultats biologiques montrent : urée =2,56 g/L, créatinine =1580 μmol/L et une atrophie des 2 reins avec dédifférenciation cortico-médullaire à l'échographie. Quelles sont les causes les plus probables de cette insuffisance rénale chronique ?",
    "correct": "Glomerulonephrite rapidement progressive",
    "incorrect": [
      "Maladie de Berger",
      "Néphropathie lupique",
      "Syndrome d'Alport",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 112,
    "question": "112) Le jeune homme B, 15 ans, sans antécédent particulier, vient à la consultation de néphrologie pour syndrome œdémateux. Il apporte avec lui des examens suivants: urée =0.40g/L, créatinine =85μmol/L, albuminémie =18g/L. Vous pensez à un syndrome néphrotique idiopathique. Quel est l'examen complémentaire pour confirmer le diagnostic ?",
    "correct": "Protéinurie des 24 heures",
    "incorrect": [
      "Uroculture (ECBU)",
      "Bandelette urinaire",
      "Electrophorèse des protéines urinaires",
      "Electrophorèse des protéines plasmatiques"
    ]
  },
  {
    "id": 113,
    "question": "113) Monsieur M, âgé de 50 ans est venu voir un médecin de ville pour un bilan de santé. Le médecin a trouvé une protéinurie des 24 heures à quantité néphrotique mais cette protéinurie est négative en bandelette urinaire. Le patient est donc adressé à la consultation de néphrologie. Devant ce contexte, quel est le diagnostic le plus probable ?",
    "correct": "Myélome multiple à chaînes légères",
    "incorrect": [
      "Néphropathie lupique",
      "Nécrose tubulaire aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique"
    ]
  },
  {
    "id": 114,
    "question": "114) Mademoiselle S, de 20 ans, sans antécédent particulier sauf diabétique chez les parents, se présente à la consultation pour syndrome œdémateux. Elle apporte quelques résultats biologiques réalisés en ville qui montrent: GB=6 giga/L Hb=125g/L, plaquettes = 115giga/L, urée =0.45g/L, créatinine =90μmol/L, albuminémie =22 g/L, protéinurie =5 g/24h. pas d'hématurie. Quel est le diagnostic le plus probable ?",
    "correct": "Néphropathie lupique",
    "incorrect": [
      "Glomerulonephrite aiguë",
      "Néphropathie diabétique",
      "Syndrome néphrotique idiopathique",
      "Maladie de Berger (néphropathie à IgA)"
    ]
  },
  {
    "id": 115,
    "question": "115) Vous voyez Monsieur .D, 25 ans, sans antécédent particulier, en consultation externe pour œdème des paupières et des membres inférieurs. Il apporte des résultats biologiques qui montrent :Na=140 mmo/l; K=4,2 mmol/l; Créat =90 μmol/l; Ca=1,9 mmol/L (76 mg/L). Pour compléte ce bilan biologique, quel dosage vous semble le plus approprié en 1° intention?",
    "correct": "Dosage de l'albuminémie",
    "incorrect": [
      "Dosage de la PTH",
      "Dosage de la TSH",
      "Dosage de la vitamine.D",
      "Dosage de la phosphorémie"
    ]
  },
  {
    "id": 116,
    "question": "116) Monsieur N de 56 ans, hypertendu sous diurétique thiazidique, se présente à la consultation pour un œdème des membres inférieurs. Il apporte un résultat biologique qui montre: - Na=140 mmo/I; K=4 mmol/l; Créat=100 μmol/l - Ca=80 mg/L; albuminémie = 25 g/L Quel est le diagnostic le plus probable ?",
    "correct": "Fausse hypocalcémie",
    "incorrect": [
      "Hypercalcémie",
      "Vraie hypocalcémie",
      "Vraie normocalcémie",
      "Fausse normocalcémie"
    ]
  },
  {
    "id": 117,
    "question": "117) Vous voyez en consultation un homme de 64 ans suivi pour une Insuffisance rénale chronique d'origine diabétique. Le dernier bilan biologique a montré: - Na=140 mmo/l; K=5 mmol/l; Créat=500 μmol/l - Ca=2 mmol/L (80 mg/L); albuminémie =40 g/L. Parmi les traitements ci-dessous, lequel est le plus approprié dans ce contexte en 1° intention ?",
    "correct": "Alfacalcidol",
    "incorrect": [
      "Ergocalciférol",
      "Cholécalciférol",
      "Calcium et vitamine.D",
      "Carbonate de calcium"
    ]
  },
  {
    "id": 118,
    "question": "118) Vous avez reçu un patient avec un tableau d'insuffisance rénale chronique terminale, mais la calcémie est à 112 mg/L. Parmi les étiologies suivantes, laquelle est la plus probable?",
    "correct": "Myélome multiple",
    "incorrect": [
      "Néphroangiosclérose",
      "Néphropathie lupique",
      "Syndrome néphrotique",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 119,
    "question": "119) Monsieur D, 65 ans, est adressé aux urgences pour état somnolent. Les examens sanguins montrent: Hb=95g/L, Na+=130mmol/L, K+=7.6mmol/L, Cl=110mmol/L, urée =1.45g/L, créatinine =1425μmol/L, Bicarbonates =18 mmol/L, GB=9.2giga/L, plaquettes = 280giga/L CRP=45mg/L. Pour les urgences suivantes, laquelle nécessite le traitement immédiat ?",
    "correct": "Hyperkaliémie",
    "incorrect": [
      "Anémie",
      "Hyponatrémie",
      "Insuffisance rénale",
      "Acidose métabolique"
    ]
  },
  {
    "id": 120,
    "question": "120) Monsieur K, 65 ans, diabétique, vient vous voir à la consultation pour œdème des membres inférieurs. Les résultats sanguins du même jour montrent : urée =0.95g/L et créatinine =260μmol/L. Il y a 6 mois, la créatininémie était à 250μmol/L. Vous décidez de proposer un diurétique en plus des antihypertenseurs. Quel médicament prescrivez-vous ?",
    "correct": "Furosemide",
    "incorrect": [
      "Bumétamide",
      "Acétazolamide",
      "Spironolactone",
      "Hydrochlorothiazide"
    ]
  },
  {
    "id": 121,
    "question": "121) Une jeune femme de 30 ans vous est adressée par un médecin de ville pour nausées et vomissements répétés. On note dans ces antécédents des épisodes d'œdème généralisé il y a 10 ans. Les résultats biologiques montrent : urée =2,56 g/L, créatinine =1580 μmol/L et une atrophie des 2 reins avec dédifférenciation cortico-médullaire à l'échographie. Quelles sont les causes les plus probables de cette insuffisance rénale chronique ?",
    "correct": "Glomerulonephrite rapidement progressive",
    "incorrect": [
      "Maladie de Berger",
      "Néphropathie lupique",
      "Syndrome d'Alport",
      "Néphropathie diabétique"
    ]
  },
  {
    "id": 122,
    "question": "122) Quel est le paramètre qui ne correspond pas au tableau biologique d'une insuffisance rénale fonctionnelle ?",
    "correct": "Diminution de la concentration uréique urinaire",
    "incorrect": [
      "Augmentation de l'urée sanguine",
      "Augmentation de la créatininémie",
      "Diminution de la natriurèse",
      "Hématocrite augmenté"
    ]
  },
  {
    "id": 123,
    "question": "123) Une femme de 35 ans sans ATCD médical, a eu une septicémie post-abortum, compliqué d'une insuffisance rénale auguë anurique justifiant le recours à des hémodialyse répétées. 6 semaines plus tard, la diurèse n'a toujours pas repris. Parmis les causes suivantes, quelle est celle qui vous parait expliquer le plus vraisemblablement la persistance de l'insuffisance rénale ?",
    "correct": "Nécrose corticale bilatérale",
    "incorrect": [
      "Néphrocalcinose",
      "Thrombose des veines rénales",
      "Obstacle sur les voies urinaires",
      "Aucune des propositions n'est correcte"
    ]
  }
  // សូមបន្តដាក់សំណួរទី 124 នៅខាងក្រោមនេះក្នុងដំណាក់កាលទី ៣...

,
  {
    "id": 124,
    "question": "124) Parmis les éléments suivants, donnez celui (ceux) qui ne représente(nt) pas une circonstance favorisante à l'apparition d'une hyperkaliémie dans l'insuffisance rénale aiguë :?",
    "correct": "Hyperhydratation",
    "incorrect": [
      "Hémolyse",
      "Rhabdomyolyse",
      "Hémorragie digestive",
      "Acidose"
    ]
  },
  {
    "id": 125,
    "question": "125) Lors d'une insuffisance rénale aiguë le risque vital immédiat est lié à l'un des facteurs suivants :?",
    "correct": "L'hyperkaliémie",
    "incorrect": [
      "L'hyperuricémie",
      "L'élévation de l'urée",
      "La rétention hydrique",
      "L'hypotension artérielle"
    ]
  },
  {
    "id": 126,
    "question": "126) Les médicaments suivants sont renommés susceptibles de déclancher des insuffisances rénales aiguës dans certaines conditions, sauf un. Lequel ?",
    "correct": "Insuline",
    "incorrect": [
      "Amphotericine .B",
      "Aminosides",
      "Glafénine",
      "Produit de Contraste Iodée"
    ]
  },
  {
    "id": 127,
    "question": "127) Parmis les mécanismes de l'insuffisance rénale aiguë, Les affirmations suivantes sont exactes, sauf un, lequel ?",
    "correct": "Gradient de pression entre les tubules et les capillaires glomérulaires",
    "incorrect": [
      "La résistance artériolaire efférente diminue",
      "La résistance artériolaire afférente augmente",
      "Diminution du débit sanguin renal",
      "Augmentation de pression dans la chambre urinaire"
    ]
  },
  {
    "id": 128,
    "question": "128) Le mécanisme de l'adaptation apparait au cours de l'insuffisance rénale aiguë fonctionnelle :?",
    "correct": "Vasoconstriction post-glomérulaire, réabsorption de Na et d'eau au niveau tubulaire.",
    "incorrect": [
      "Vasoconstriction pré-glomérulaire, inhibition de la réabsorption de Na et d'eau au niveau tubulaire.",
      "Vasodilatation pré et post-glomérulaire, réabsorption de Potassium et d'eau au niveau tubulaire.",
      "Vasoconstriction pré-glomérulaire, réabsorption de Na et d'eau au niveau tubulaire.",
      "Vasoconstriction post-glomérulaire, réabsorption de phosphate et de la créatinine au niveau tubulaire."
    ]
  },
  {
    "id": 129,
    "question": "129) Chez un malade attaint d'insuffisance rénale chronique, on observe souvent une tendance hémorragique anormale. Parmi les examens suivants, lequel est habituellement perturbé ?",
    "correct": "Temps de saignement",
    "incorrect": [
      "Numération des plaquettes",
      "Fibrinogène",
      "Temps de Quick",
      "Temps de céphaline activé"
    ]
  },
  {
    "id": 130,
    "question": "130) La qualité minimum de protéine nécessaire pour maintenir une balance azotée chez les malades en insuffisance rénale chronique est :?",
    "correct": "0.5g/kg de poids",
    "incorrect": [
      "1g/kg de poids",
      "2,25g/kg de poids",
      "3 g/kg de poids",
      "4g/kg de poids"
    ]
  },
  {
    "id": 131,
    "question": "131) L'anémie de l'insuffisance rénale chronique présante les caractéristiques suivantes, sauf une, laquelle :?",
    "correct": "Parfaitement corrigée par l'épuration extra rénale",
    "incorrect": [
      "Liée à un déficit en érythropoiétine",
      "Normochrome",
      "Peu régénérative",
      "Demie vie des GRs diminuée"
    ]
  },
  {
    "id": 132,
    "question": "132) Un homme de 55 ans est en hémodialyse depuis 5 ans pour insuffisance rénale terminale causée par une HTA. Il est actuellement asymptomatique et anurique. Une échographie rénale révèle des kystes simples au niveau du rein gauche, aucune anomalie rénale n'est visible à droite.Conduite à tenir:?",
    "correct": "Echographie de controle dans 1 an",
    "incorrect": [
      "Néphrectomie du rein gauche",
      "Artériographie avec embolisation de l'artère rénale gauche",
      "Scanner abdominale",
      "Angiographie par voie veineuse"
    ]
  },
  {
    "id": 133,
    "question": "133) Parmi les diurétiques suivants, quell est celui qui n'est pas contre-indiqué en cas d'insuffisance rénale ?",
    "correct": "Furosemide",
    "incorrect": [
      "Spironolactone",
      "Diurétique thiazidique",
      "Diurétique épagneurs de potassium",
      "Association de diurétique thiazidique et épagneurs de potassium."
    ]
  },
  {
    "id": 134,
    "question": "134) Dans la maladie rénale chronique, l'argument qu'on doit penser à l'origine glomérulaire :?",
    "correct": "Contexte de maladie générale, présance de proteinuriae > 3g/hématurie et HTA",
    "incorrect": [
      "Contexte de maladie générale, absance de proteinurie/ hématurie et HTA",
      "Contexte de maladie générale, présance de proteinurie/ hématurie mais pas d'HTA",
      "Contexte de maladie infectieuse, présance de proteinuria > 3g/ hématurie et HTA",
      "Contexte de maladie générale, présance de proteinuria <3g/ hématurie et HTA"
    ]
  },
  {
    "id": 135,
    "question": "135) Les moyens thérapeutiques pour ralentir la progression de l'insuffisance rénale chronique :?",
    "correct": "Bon contrôle de PA<13/8 cmHg et protéinurie <0.5g/j, restriction protidique (0,8 à 1g/kg/j)",
    "incorrect": [
      "Bon contrôle de PA<13/8cmHg et proteinuria <0,5g/j, restriction protidique (1 à 2g/kg/j)",
      "Bon contrôle de PA<13/8 cmHg et protéinurie <1,5g/j, restriction protidique (0,8 à 1g/kg/j)",
      "Bon contrôle de PA < 13/8cmHg et protéinurie <1g/j, restriction protidique (1g à 1,5g/kg/j)",
      "Bon contrôle de PA<13/8 cmHg et proteinuria > 1g/j, restriction protidique (0,8 à 1g/kg/j)"
    ]
  },
  {
    "id": 136,
    "question": "136) Devant une insuffisance rénale chronique de cause inconnue, on peut évoquer à son origine une néphropathie interstitielle chronique si l'on constate :?",
    "correct": "Une leucocyturie à 50 000/ml à une protéinurie de 0,3 g/24h",
    "incorrect": [
      "Protéinurie >5g/24h",
      "Une hématurie de l'ordre de 100 000/ml associée à une protéinurie de 1g/24h",
      "Un syndrome néphrotique",
      "Présance d'auto anticorp anti MBG"
    ]
  },
  {
    "id": 137,
    "question": "137) La dialyse péritonéale est une dialyse :?",
    "correct": "Continue avec un cathétère péritoneal, poches plastiques souples de 2 ou 3 litres contenant un dialysat riche en glucose et bonne système de connection.",
    "incorrect": [
      "Discontinue avec un cathétère péritoneal, poches plastiques souples de 2 ou 3 litres contenant un dialysat riche en glucose et bonne système de connection.",
      "Continue avec un catheter fémoral, poches plastiques souples de 2 ou 3 litres contenant un dialysat riche en glucose et bonne système de connection.",
      "Discontinue avec un cathétère péritoneal, poches plastiques souples de 4 ou 5 litres contenant un dialysat riche en glucose et bonne système de connection.",
      "Continue avec un cathétère péritoneal, poches plastiques souples de 2 ou 3 litres contenant un dialysat riche en sodium et bonne système de connection."
    ]
  },
  {
    "id": 138,
    "question": "138) Combien y-a-t-il d'échanges de dyalisat par jour au cours de la DPCA (dialyse péritonéale continue ambulatoire)?",
    "correct": "3 à 4",
    "incorrect": [
      "1 à 2",
      "2 à 3",
      "4 à 5",
      "5 à 6"
    ]
  },
  {
    "id": 139,
    "question": "139) Un phénomène d'ultrafiltration au cours de l'hémodialyse :?",
    "correct": "Phénomène passif permettant le passage d'eau et des solutés à travers de la membrane, grâce au gradient de pression",
    "incorrect": [
      "Phénomène actif permettant le passage d'eau et des solutés à travers de la membrane, grâce au gradient de pression",
      "Phénomène actif permettant le passage d'eau et des solutés à travers de la membrane, grâce au gradient de concentration",
      "Phénomène passif permettant le passage d'eau et des solvants à travers de la membrane, grâce au gradient de concentration",
      "Phénomène passif permettant le passage des substances du compartiment plus concentré vers le compartiment moins concentré, grâce au gradient de concentration"
    ]
  },
  {
    "id": 140,
    "question": "140) les Incidents-accidents en hémodialyse, sauf un, lequel ?",
    "correct": "Cécité complete",
    "incorrect": [
      "Choc anaphylatique",
      "Syndrome de déséquilibre",
      "Nausées, vomissements, crampe musculaire",
      "Problèmes cardiaques"
    ]
  },
  {
    "id": 141,
    "question": "141) Qu'est-ce qu'une fistule artério-veineuse?",
    "correct": "Anastomose vasculaire sous cutané entre la veine et l'artère",
    "incorrect": [
      "Anastomose vasculaire sous cutané entre l'artère et l'artère",
      "Anastomose vasculaire sous cutané entre la veine et la veine",
      "Anastomose vasculaire sous cutané entre la veine et les capillaires",
      "Anastomose vasculaire entre l'artère et les capillaires"
    ]
  },
  {
    "id": 142,
    "question": "142) L'ostéoblaste est une cellule qui assure :?",
    "correct": "la formation osseuse",
    "incorrect": [
      "la résorption osseuse",
      "la réparation du cartilage",
      "la sécrétion du liquide synovial",
      "l'orientation des travées"
    ]
  },
  {
    "id": 143,
    "question": "143) Une de ces hormones freine la résorption ostéoplastique. Laquelle :?",
    "correct": "la calcitonine",
    "incorrect": [
      "la PTH",
      "la thyroxine",
      "la 1-25OH)2 OH-D3",
      "le cortisol"
    ]
  },
  {
    "id": 144,
    "question": "144) Une femme de 58 ans, ménopausée depuis près de 10 ans, présente sur l'absorptiométrie au rayon X une densitométrie osseuse de T score -2.5, avec douleur lombaire d'apparition spontanée. Ce symptôme disparait quelque temps après. Sa densitométrie est l'un des cas suivant:?",
    "correct": "ostéoporose fracturaire",
    "incorrect": [
      "ostéopénie",
      "ostéoporose",
      "ostéoporose préfracturaire",
      "Toutes les réponses sont justes"
    ]
  },
  {
    "id": 145,
    "question": "145) L'ostéoporose peut survenir chez les sujets exposés à une corticothérapie prolongée. Laquelle de ces réponse est inexacte :?",
    "correct": "l'action directe sur les osteoclasts",
    "incorrect": [
      "une dose moyenne à 7.5 mg d'équivalent prednisolone",
      "l'âge (plus de 65 ans) est un facteur de risque",
      "l'augmentation du risque de fracture",
      "Toutes les réponses sont inexactes"
    ]
  },
  {
    "id": 146,
    "question": "146) Parmi les éléments du mécanisme des ostéonécroses cortico-induites, lequel n'est pas justifié dans le processus de la perte osseuse.?",
    "correct": "Elles prédominent à l'une des têtes fémorales, puis au condyle femoral",
    "incorrect": [
      "Elles sont préférentiellement épiphysaires, plus rarement métaphysaires.",
      "Elles surviennent précocement mais sont souvent détectées après plusieurs mois de traitement",
      "La dose cumulée et la dose journalière (>20 mg/j) les facteurs de risque les plus importants.",
      "L'IRM est l'examen de choix pour détecter les ostéonécroses (de petite taille)."
    ]
  },
  {
    "id": 147,
    "question": "147) Une femme de 50 ans, récemment ménopausée, n'a jamais bénéficié d'examen gynécologique, vient vous consulter pour son problème osseux. Laquelle de ces propositions vous semble justifiée pour éviter une fragilisation osseuse.?",
    "correct": "supplémentation en calcium",
    "incorrect": [
      "supplémentation en vitamine (D)",
      "traitement par les biphosphonates",
      "supplémentation hormonale",
      "traitement par le raloxifène"
    ]
  },
  {
    "id": 148,
    "question": "148) Ces résultats biologiques suivants concernent l'hyperparathyroidie primitive, laquelle vous parait le plus convenable.?",
    "correct": "Toutes les réponses sont exactes",
    "incorrect": [
      "Hypercalcémie",
      "Hypercalciurie",
      "Hypophosphorémie",
      "Elévation des phophatases alcalines"
    ]
  },
  {
    "id": 149,
    "question": "149) A la différence des autres ostéopathies fragilisantes, le diagnostic de l'ostéomalacie par carence de vitamine D est évoqué devant :?",
    "correct": "bassin en coeur de carte à jouer",
    "incorrect": [
      "les douleurs par tassements vertébraux",
      "l'effondrement de la densitométrie osseuse",
      "l'hypertransparence osseuse à la radiographie",
      "Toutes les réponses sont fausses"
    ]
  },
  {
    "id": 150,
    "question": "150) Lequel de ces médicaments ne diminue pas le risque de déminéralisation quand vous prescrivez à une femme ostéoporotique.?",
    "correct": "Bétamétasone",
    "incorrect": [
      "anticonvulsivants",
      "tamoxifene",
      "estrogènes",
      "progsérone"
    ]
  },
  {
    "id": 151,
    "question": "151) Parmi ces éléments relevant de la déminéralisation, lequel concerne le plus l'ostéoporose?",
    "correct": "l'âge, le sexe",
    "incorrect": [
      "les antécédents familiaux",
      "le terrain: éthylisme, tabagisme",
      "les habitudes alimentaires: apports en Ca",
      "la prise de médicaments: biphosphonates, corticoids"
    ]
  },
  {
    "id": 152,
    "question": "152) The following statements are about macule, tick the correct answer?",
    "correct": "Macule represents a change in color of the skin, not raised or depressed compared to the skin surface usually < 10mm in diameter",
    "incorrect": [
      "Macule is a palpable skin lesion < 5 mm in diameter",
      "Macule is a palpable skin lesion > 5 mm in diameter",
      "Macule represents a change in color of the skin, not raised or depressed compared to the skin surface usually > 10mm in diameter",
      "Macule is non-blanchable punctate foci of hemorrhage lesion"
    ]
  },
  {
    "id": 153,
    "question": "153) A 10 months old boy consulted for a hyperpigmented non-palpable skin lesion with 30 mm in diameter on the buttock What is your appropriate diagnosis? Tick the incorrect answer?",
    "correct": "Solar lentigo",
    "incorrect": [
      "Congenital dermal melanocytosis",
      "Congenital nevus",
      "Café- au- lait spot",
      "Speckled lentiginous nevus"
    ]
  },
  {
    "id": 154,
    "question": "154) The following statements are about papule, tick the correct answer:?",
    "correct": "Papule is an elevated, solid skin lesion usually < 5 mm in diameter",
    "incorrect": [
      "Papule is an elevated, flat topped skin lesion > 10mm in diameter",
      "Papule is an elevated skin lesion containing clear liquid",
      "Papule is an elevated skin lesion containing yellow liquid",
      "Papule is an non- palpable skin lesion"
    ]
  },
  {
    "id": 155,
    "question": "155) A 45 year-old man with 45kg, consulted for a hypopigmented patches on the body since about 5 years On physical examination those patches are numbness He has an enlargement of the ulnar nerve of the right hand What would be your best diagnosis? Tick the correct answer:?",
    "correct": "Leprosy",
    "incorrect": [
      "Vitiligo",
      "Post-inflammatory hypopigmentation",
      "Nevus anemicus",
      "Pityriasis versicolor"
    ]
  },
  {
    "id": 156,
    "question": "156) A 65 year-old lady consulted for a hyperpigmented patch on the left cheek for 4 years She reported that the skin lesion is changing during the last 6 months, it get darker with different colors, larger The plaque was asymmetric with irregular border With a suspicion of lentigo maligna, you would like to perform the following procedures Which one the most appropriate?",
    "correct": "A spindle (part of dark brown and part of light brown) skin biopsy",
    "incorrect": [
      "A curettage for culture",
      "A curettage for histopathology",
      "A CO2 Laser- therapy, take the crust for culture and histopathology",
      "An electrodessication and send the burned out tissue to histopathology"
    ]
  },
  {
    "id": 157,
    "question": "157) A 6 year-old boy brought to you for multiple flesh-colored pimples on the body The parents reported that those lesion are appeared soon after his first school and it does itch sometimes On examination the kid has dry skin Multiple, waxy non-follicular papules and nodules are with central umbilicated What would be your best diagnosis?",
    "correct": "Mollucum contagiosum",
    "incorrect": [
      "Folliculitis",
      "Furuncle",
      "Furunculosis",
      "Acne"
    ]
  },
  {
    "id": 158,
    "question": "158) A 14 year-old boy which is in the nearby primary school, brought to you for multiple papules and nodule on the centrofacial area since very young age Parents reported that the kid take regularly medication for his epileptic problem Examination we found additionally white patch on the body and skin colored papules on the periungual areas What would be your best diagnosis?",
    "correct": "Tuberous sclerosis",
    "incorrect": [
      "Acne",
      "Folliculitis",
      "Molluscum contagiosum",
      "Furuncle"
    ]
  },
  {
    "id": 159,
    "question": "159) A 24 year-old woman consulted for multiple erythematous lesion on the both legs This is the 6th times of the same problem she has this year Those lesions are painful to the touch, infiltrated and hot You made a diagnosis of erythema nodosum The following cause you should check Tick the incorrect answer?",
    "correct": "Food allergy",
    "incorrect": [
      "Throat infection",
      "Sarcoidosis",
      "Tuberculosis",
      "Leprosy"
    ]
  },
  {
    "id": 160,
    "question": "160) Urticaria is a skin disease defined by an eruption with (which answer is correct)?",
    "correct": "transient papules and oedematous plaques",
    "incorrect": [
      "fixed and not transient papules",
      "papules and vesicles",
      "macules and vesicles",
      "scales and papules"
    ]
  },
  {
    "id": 161,
    "question": "161) Psoriasis is a skin disease with (which answer is correct)?",
    "correct": "erythema, plaques, scales",
    "incorrect": [
      "erythema, plaques, crusts",
      "erythema, vesicles, scales",
      "erythema, papules, erosions",
      "no erythema, macules and scales"
    ]
  },
  {
    "id": 162,
    "question": "162) Panniculitis is characterized by (which answer is correct)?",
    "correct": "palpable nodules",
    "incorrect": [
      "macules",
      "papules",
      "ulcerations",
      "urticae (wheals)"
    ]
  },
  {
    "id": 163,
    "question": "163) If a young man has a generalized eruption with target lesions on his hands, what would be your best diagnosis (which answer is correct):?",
    "correct": "erythema multiforme",
    "incorrect": [
      "contact dermatitis",
      "bullous pemphigoid",
      "urticaria",
      "pemphigus vulgaris"
    ]
  },
  {
    "id": 164,
    "question": "164) A 35 year-old man presented with multiple urticarial plaques with strong pruritous He reported, sometimes he has swelling on the lips and the tongue, Abdominal pain and dyspnea were also reported You made a diagnosis of urticarial with angioedema The following medications would be an appropriate treatment, which answer is incorrect?",
    "correct": "high dose of systemic antibiotic",
    "incorrect": [
      "systemic steroids",
      "systemic antihistamines",
      "topical corticoids",
      "subcutaneous adrenaline"
    ]
  },
  {
    "id": 165,
    "question": "165) A 35 year-old man presented with multiple urticarial plaques with strong pruritous He reported, sometimes he has swelling on the lips and the tongue, Abdominal pain and dyspnea were also reported You made a diagnosis of urticarial with angioedema The following laboratory examinations would be very helpful for you to find out the cause of the urticarial Which test you would think it doesn't help you much?",
    "correct": "Syphilis serology",
    "incorrect": [
      "Skin prick test",
      "Thyroid function test and antibody",
      "Specific IgE",
      "stools examinations"
    ]
  },
  {
    "id": 166,
    "question": "166) A 60 year-old woman consulted for burning lesion on the lower lip since 3 days The patient was travelling to province which take more than 6 hours We saw group of vesicle on erythematous base and erosion What would be your best diagnosis?",
    "correct": "Herpes simplex",
    "incorrect": [
      "Dermatitis herpetiformis",
      "Herpes gestationis",
      "Varicella",
      "Zoster"
    ]
  },
  {
    "id": 167,
    "question": "167) A 7 year-old boy brought to you for skin lesion around the nose and on the ears Those lesion are started on the ears with itching and small vesicle confluence to plaques We saw multiple erosions and plaques with honey-yellow crust on perinasal areas What would be your appropriate diagnosis?",
    "correct": "Impetigo",
    "incorrect": [
      "Tinea faciei",
      "Lupus erythematosus",
      "Herpes simplex",
      "Varicella"
    ]
  },
  {
    "id": 168,
    "question": "168) A 10 year-old boy brought to the Department of pediatricdermatology for high fever, vomiting, weakness (sleeping all the time) and skin rashes since 3 days We saw purpura and ecchymosis which are with central necrosis and mostly located on the trunk, but axillary area and limbs was also affected What would be your best diagnosis?",
    "correct": "Meningococcemia",
    "incorrect": [
      "Scorbut",
      "Idiopathic thrombocytopenic purpura",
      "Leukocytoclastic vasculitis",
      "Dengue fever"
    ]
  },
  {
    "id": 169,
    "question": "169) What kind of skin lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/1.png",
    "correct": "An ulcer",
    "incorrect": [
      "An erosion",
      "A fissuration",
      "An excoriation",
      "A fistule"
    ]
  },
  {
    "id": 170,
    "question": "170) What kind of skin lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/2.png",
    "correct": "Pustules",
    "incorrect": [
      "Vesicles",
      "Nodules",
      "Papules",
      "Patches"
    ]
  },
  {
    "id": 171,
    "question": "171) What kind of skin lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/3.png",
    "correct": "Patches",
    "incorrect": [
      "Vesicles",
      "Papules",
      "Pustules",
      "Wheal"
    ]
  },
  {
    "id": 172,
    "question": "172) What kind of configuration lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/4.png",
    "correct": "Serpiginous",
    "incorrect": [
      "Annular",
      "Reticular",
      "Dermatoma",
      "Target lesion"
    ]
  },
  {
    "id": 173,
    "question": "173) What kind of skin lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/5.png",
    "correct": "Purpura",
    "incorrect": [
      "Telangiectasia",
      "Livedo reticularis",
      "Livedo racemosa",
      "Cutis marmorata"
    ]
  },
  {
    "id": 174,
    "question": "174) What kind of configuration lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/6.png",
    "correct": "Annular",
    "incorrect": [
      "Reticular",
      "Serpiginous",
      "Dermatoma",
      "Target lesion"
    ]
  },
  {
    "id": 175,
    "question": "175) What kind of skin lesion you see in the picture?",
    "image": "https://raw.githubusercontent.com/chamroeunchet-blip/des-mcq-s2/refs/heads/main/7.png",
    "correct": "Scale",
    "incorrect": [
      "Crust",
      "Scar",
      "Atrophic",
      "Erosion"
    ]
  }
  // សូមបន្តដាក់សំណួរទី 176 នៅខាងក្រោមនេះក្នុងដំណាក់កាលទី ៤ (ដំណាក់កាលបញ្ចប់)...

,
  {
    "id": 176,
    "question": "176) Une jeune femme de 21 ans est hospitalisée pour une douleur du membre inférieur gauche 3 jours après un avortement spontané à 15 semaines d'aménorrhées. L'interrogatoire retrouve un antécédent d'avortement spontané 6 mois avant un épisode de polyarthralgie il y a 1 an traité par antalgiques sans bilan complémentaire. T 37,9° C, PA 130/60 mmHg, Fc 80/min, SpO2 98% en air. L'auscultation cardio-pulmonaire est sans particularités. Mollet gauche inflammatoire et œdématié. Le bilan réalisé avant tout traitement note: GB 3.2 G/L dont 63% de neutrophiles et 37% de lymphocytes; Hb 11g/dL; plaquettes 120 G/L, TCA 84 (témoin 32); TP 98%. Quelle est l'hypothèse diagnostique la plus probable ?",
    "correct": "Thrombophlébite compliquant un syndrome des antiphospholipides",
    "incorrect": [
      "Thrombophlébite compliquant un avortement spontané",
      "Thrombophlébite compliquée d'une embolie pulmonaire",
      "Thrombophlébite compliquant un lupus érythémateux aigu disséminé",
      "Avortement spontané compliqué d'un érysipèle"
    ]
  },
  {
    "id": 177,
    "question": "177) Une patiente de 62 ans est hospitalisée pour AEG fébrile depuis 3 mois. Depuis 6 mois elle a perdu 10 kg. Vous notez un purpura des 2 membres inférieurs infiltré et un souffle systolique aortique. T 37,9° C, PA 190/90 mmHg, FC 90/min, RR 22/min. SpO2 98% en air. L'auscultation cardio-pulmonaire est sans particularités. Le bilan réalisé avant tout traitement note: VS 72, CRP 150, GB 12,4 G/L dont 80% de neutrophiles; Hb 11g/dL; plaquettes 180 G/L, Bilan hépatique normal; créatinine 150 mcmol/l, urée 0,52 g/l; BU protéine ++, hématies +++ nitrites 0. La radio de thorax est normale. Vous suspectez une polyartérite noueuse mais vous voulez éliminer un diagnostic différentiel en urgence, lequel plus précisément ?",
    "correct": "Endocardite infectieuse subaiguë",
    "incorrect": [
      "Glomerulonephrite paranéoplasique",
      "Myxome de l'oreillette gauche",
      "Embolies de cholestérol",
      "Lupus érythémateux aiguë"
    ]
  },
  {
    "id": 178,
    "question": "178) Chez cette patiente le diagnostic de PAN est fortement suspecté avec en plus à l'examen neurologique des paresthésies du pied droit suspectes de mononévrite. Le bilan biologique est en faveur d'une hépatite B chronique active. Quel critère de gravité de PAN menace le pronostic vital à court-terme ?",
    "correct": "Insuffisance rénale aiguë",
    "incorrect": [
      "Perte de poids > 4 kg",
      "Mononeuropathie",
      "Hypertension artérielle",
      "Hyperéosinophilie"
    ]
  },
  {
    "id": 179,
    "question": "179) Une jeune femme de 27 ans sans antécédents personnels ni familiaux est hospitalisée pour une fièvre à 38°C intermittente depuis 1 mois, pas d'étiologie retrouvée à l'examen, sans amélioration après une antibiothérapie probabiliste par amoxicilline dans l'hypothèse d'une infection urinaire. Le bilan biologique montre GB 3 G/L avec 50% de neutrophiles et 50% de lymphocytes, Hb 11g/dL; plaquettes 90 G/L. Quel examen complémentaire vous paraît le plus utile en 1ère intension à ce stade ?",
    "correct": "Anticorps anti-VIH en ELISA",
    "incorrect": [
      "Anticorps anti-nucléaires de type ACAN en IFI",
      "Anticorps anti-nucléaires de type ACAN en ELISA",
      "Anticorps anti-DNA natifs en ELISA",
      "Anticorps anti-mycoplasme en ELISA"
    ]
  },
  {
    "id": 180,
    "question": "180) Une jeune femme de 32 ans aux antécédents personnels de vitiligo, et familial d'Hypothyroidie est hospitalisée pour une fièvre à 38°C intermittente depuis 1 mois, polyarthralgie sas polyarthrite à l'examen. Le bilan biologique montre GB 3 G/L avec 80% de neutrophiles et 20% de lymphocytes, Hb 11g/dL; plaquettes 90 G/L. Bilirubine toltale 30 dont 20 de libre. Quel examen complémentaire vous paraît le plus utile en 1ère intension à ce stade ?",
    "correct": "Anticorps anti-nucléaires de type ACAN en IFI",
    "incorrect": [
      "Anticorps anti-VIH en ELISA",
      "Anticorps anti-nucléaires de type ACAN en ELISA",
      "Anticorps anti-DNA natifs en ELISA",
      "Anticorps anti-mycoplasme en ELISA"
    ]
  },
  {
    "id": 181,
    "question": "181) Une jeune femme de 37 ans aux antécédents de lupus consulte pour une récidive par éruption cutanée de la face et polyarthrite. Vous examinez son ordonnance ci-dessous. Parmi les classes médicamenteuses et molécules qu'elle prend, quelle est la plus probablement responsable de lupus induit?",
    "correct": "Antiépileptique : cabamazépine",
    "incorrect": [
      "Antihypertenseur: inhibiteur calcique",
      "Contraception: microprogestatif",
      "Antituberculeux: rifampicine",
      "Immunosuppresseur : plaquenil"
    ]
  },
  {
    "id": 182,
    "question": "182) Un patient de 63 ans est diagnostiqué pour une vascularite giganto-cellulaire de Horton et mis sous corticoïdes à la posologie de 1 mg/kg. Il a des antécédents de diabète non-insulinodépendant depuis 10 ans et de HTA; il a pour traitement régulier DAONIL et TRIATEC. A quelle complication aiguë est-il le plus à risque pendant le premier mois de traitement ?",
    "correct": "Hyperglycémie",
    "incorrect": [
      "Hypertenstion",
      "Hyperkaliémie",
      "Hypersomnie",
      "hypernatrémie"
    ]
  },
  {
    "id": 183,
    "question": "183) Vous recevez en consultation de médecine interne Mlle R, 27 ans, venant de la province Preah Vihea. Elle est adressée par son médecin traitant pour suspicion de lupus érythémateux disséminé. Elle a un antécédent de thyroïdite de Hashimoto et une fracture du poignet gauche. Elle n'a pas d'antécédents gynécologiques et n'a pas d'allergie. Elle prend pour traitement LEVOTHYROX 1/jour et une contraception œstro-progestative. Elle ne fume pas et ne boit pas. Elle se plaint de polyarthralgies matinales des poignets et des doigts, une photosensibilité et une toux irritative depuis 3 semaines. L'examen cutané retrouve un érythème malaire typique en ailes de papillon. Pas de signes d'arthrite nets. Matité basale pulmonaire droite et diminution du murmure vésiculaire en bas droite. Auscultation cardiaque normale. T: 37.3° C, PA: 130/60 mmHg, FC: 100/min, FR: 24/min. D'après la classification << ARA >>, Combien de critères cliniques de lupus retenez-vous ?",
    "correct": "3",
    "incorrect": [
      "4",
      "5",
      "6",
      "7"
    ]
  },
  {
    "id": 184,
    "question": "184) Vous recevez en consultation de médecine interne Mlle R, 27 ans, venant de la province Preah Vihea. Elle est adressée par son médecin traitant pour suspicion de lupus érythémateux disséminé. Elle a un antécédent de thyroïdite de Hashimoto et une fracture du poignet gauche. Elle n'a pas d'antécédents gynécologiques et n'a pas d'allergie. Elle prend pour traitement LEVOTHYROX 1/jour et une contraception œstro-progestative. Elle ne fume pas et ne boit pas. Elle se plaint de polyarthralgies matinales des poignets et des doigts, une photosensibilité et une toux irritative depuis 3 semaines. L'examen cutané retrouve un érythème malaire typique en ailes de papillon. Pas de signes d'arthrite nets. Matité basale pulmonaire droite et diminution du murmure vésiculaire en bas droite. Auscultation cardiaque normale. T: 37.3° C, PA: 130/60 mmHg, FC: 100/min, FR: 24/min. Vous avez prescrit un bilan biologique dont voici les résultats. Hb 11g/dl, GB 3.5G/L dont 80% de PNN; Plaquettes 450 G/L. Na 142, K 3,5; Chlore 110; Bicarbonates 24; Créat 70 mcmol/l; CRP 10. Bilan hépatique normal. Bilan de coagulation normal. D'après la classification << ARA >>, Combien de critère(s) biologique(s) de lupus retenez-vous ?",
    "correct": "1",
    "incorrect": [
      "2",
      "3",
      "4"
    ]
  },
  {
    "id": 185,
    "question": "185) Vous recevez en consultation de médecine interne Mlle R, 27 ans, venant de la province Preah Vihea. Elle est adressée par son médecin traitant pour suspicion de lupus érythémateux disséminé. Elle a un antécédent de thyroïdite de Hashimoto et une fracture du poignet gauche. Elle n'a pas d'antécédents gynécologiques et n'a pas d'allergie. Elle prend pour traitement LEVOTHYROX 1/jour et une contraception œstro-progestative. Elle ne fume pas et ne boit pas. Elle se plaint de polyarthralgies matinales des poignets et des doigts, une photosensibilité et une toux irritative depuis 3 semaines. L'examen cutané retrouve un érythème malaire typique en ailes de papillon. Pas de signes d'arthrite nets. Matité basale pulmonaire droite et diminution du murmure vésiculaire en bas droite. Auscultation cardiaque normale. T: 37.3° C, PA: 130/60 mmHg, FC: 100/min, FR: 24/min. Quel examen biologique d'auto-immunité le plus spécifique choisissez-vous?",
    "correct": "Anticorps anti-DNA natifs",
    "incorrect": [
      "Anticorps anti nucléaires (ACAN) en IFI",
      "Anticorps anti-cardiolipides",
      "Anticorps anti- Scl-70",
      "Anticorps anti-phospholipides"
    ]
  },
  {
    "id": 186,
    "question": "186) Vous recevez en consultation de médecine interne Mlle R, 27 ans, venant de la province Preah Vihea. Elle est adressée par son médecin traitant pour suspicion de lupus érythémateux disséminé. Elle a un antécédent de thyroïdite de Hashimoto et une fracture du poignet gauche. Elle n'a pas d'antécédents gynécologiques et n'a pas d'allergie. Elle prend pour traitement LEVOTHYROX 1/jour et une contraception œstro-progestative. Elle ne fume pas et ne boit pas. Elle se plaint de polyarthralgies matinales des poignets et des doigts, une photosensibilité et une toux irritative depuis 3 semaines. L'examen cutané retrouve un érythème malaire typique en ailes de papillon. Pas de signes d'arthrite nets. Matité basale pulmonaire droite et diminution du murmure vésiculaire en bas droite. Auscultation cardiaque normale. T: 37.3° C, PA: 130/60 mmHg, FC: 100/min, FR: 24/min. Quel est le diagnostique étiologique que vous évoquez à l'atteinte pulmonaire ?",
    "correct": "Pleurésie lupique",
    "incorrect": [
      "Embolie pulmonaire",
      "Fibrose pulmonaire",
      "Hypertension artérielle pulmonaire",
      "Hémorragie intra-alvéolaire"
    ]
  },
  {
    "id": 187,
    "question": "187) Vous recevez en consultation de médecine interne Mlle R, 27 ans, venant de la province Preah Vihea. Elle est adressée par son médecin traitant pour suspicion de lupus érythémateux disséminé. Elle a un antécédent de thyroïdite de Hashimoto et une fracture du poignet gauche. Elle n'a pas d'antécédents gynécologiques et n'a pas d'allergie. Elle prend pour traitement LEVOTHYROX 1/jour et une contraception œstro-progestative. Elle ne fume pas et ne boit pas. Elle se plaint de polyarthralgies matinales des poignets et des doigts, une photosensibilité et une toux irritative depuis 3 semaines. L'examen cutané retrouve un érythème malaire typique en ailes de papillon. Pas de signes d'arthrite nets. Matité basale pulmonaire droite et diminution du murmure vésiculaire en bas droite. Auscultation cardiaque normale. T: 37.3° C, PA: 130/60 mmHg, FC: 100/min, FR: 24/min Le diagnostic de Lupus est affirmé sur les critères de l'ARA, y compris un bilan d'auto-immunité en faveur. Vous allez prescrire un traitement par corticoïdes et Hydroxychloroquine (Plaquenil). Quel bilan pré-thérapeutique prescrivez-vous ?",
    "correct": "Examen fond d'œil",
    "incorrect": [
      "Radiographie pulmonaire",
      "Fonction rénale",
      "Fonction hépatique",
      "Bilan infectieux"
    ]
  },
  {
    "id": 188,
    "question": "188) L'état de la patiente s'améliore sous traitement : les douleurs articulaires et le tableau thoracique disparaissent, ce qui vous permet d'arrêter rapidement la corticothérapie. Elle poursuite le Plaquenil régulièrement. Vous la revoyez en urgence 1 an après pour un tableau de douleurs diffuses et frissons depuis 1 semaine, mal calmé par du paracétamol (3g/j). elle se plaint aussi de dyspnée et d'épistaxis depuis 3 jours. Elle a voyagé toute la nuit depuis son domicile, et quand vous la voyez à Phnom Penh le matin: T: 37,3° C, PA 120/70, FC 120/min régulier, SpO2 98% en air, FR 26/min Pâleur et subictère. Auscultation cardio-pulmonaire normale. Epistaxis antérieur sans lésion ORL évidente. Examen articulaire sans anomalie. L'examen abdominal retrouve une splénomégalie sans hépatomégalie. Quelle est votre hypothèse diagnostique no1?",
    "correct": "Anémie hémolytique auto-immune",
    "incorrect": [
      "Purpura thrombopénique auto-immune",
      "Hémorragie Digestive",
      "Accès palustre",
      "CIVD"
    ]
  },
  {
    "id": 189,
    "question": "189) L'état de la patiente s'améliore sous traitement : les douleurs articulaires et le tableau thoracique disparaissent, ce qui vous permet d'arrêter rapidement la corticothérapie. Elle poursuite le Plaquenil régulièrement. Vous la revoyez en urgence 1 an après pour un tableau de douleurs diffuses et frissons depuis 1 semaine, mal calmé par du paracétamol (3g/j). elle se plaint aussi de dyspnée et d'épistaxis depuis 3 jours. Elle a voyagé toute la nuit depuis son domicile, et quand vous la voyez à Phnom Penh le matin: T: 37,3° C, PA 120/70, FC 120/min régulier, SpO2 98% en air, FR 26/min. Pâleur et subictère. Auscultation cardio-pulmonaire normale. Epistaxis antérieur sans lésion ORL évidente. Examen articulaire sans anomalie. L'examen abdominal retrouve une splénomégalie sans hépatomégalie. Quel examen biologique réalisez-vous en urgence en faveur de votre hypothèse no1 ?",
    "correct": "NFS, réticulocyte, Haptoglobine",
    "incorrect": [
      "Plaquettes",
      "Test Paludisme",
      "Bilan de coagulation: TP, TCA",
      "EPS"
    ]
  },
  {
    "id": 190,
    "question": "190) L'état de la patiente s'améliore sous traitement: les douleurs articulaires et le tableau thoracique disparaissent, ce qui vous permet d'arrêter rapidement la corticothérapie. Elle poursuite le Plaquenil régulièrement. Vous la revoyez en urgence 1 an après pour un tableau de douleurs diffuses et frissons depuis 1 semaine, mal calmé par du paracétamol (3g/j). elle se plaint aussi de dyspnée et d'épistaxis depuis 3 jours. Elle a voyagé toute la nuit depuis son domicile, et quand vous la voyez à Phnom Penh le matin: T: 37,3° C, PA 120/70, FC 120/min régulier, SpO2 98% en air, FR 26/min Pâleur et subictère. Auscultation cardio-pulmonaire normale. Epistaxis antérieur sans lésion ORL évidente. Examen articulaire sans anomalie. L'examen abdominal retrouve une splénomégalie sans hépatomégalie. Quel est le principe votre traitement en urgence ?",
    "correct": "Corticothérapie forte dose",
    "incorrect": [
      "Splénectomie",
      "Anti-TNF alpha",
      "Transfusion",
      "Plasma cytaphérèse"
    ]
  },
  {
    "id": 191,
    "question": "191) What is primary prevention in cancer?",
    "correct": "To prevent individuals from exposing to risk factors of cancers",
    "incorrect": [
      "To protect individuals from having cancer diseases",
      "To cure the individuals from the early stage of diseases",
      "To prevent the individuals from developing a pre-cancerous lesion to a cancer",
      "To cure a primary cancer disease thus the disease will be prevented"
    ]
  },
  {
    "id": 192,
    "question": "192) What is secondary prevention in cancer?",
    "correct": "To prevent the individuals from developing a pre-cancerous lesion to a cancer by screening methods",
    "incorrect": [
      "To protect individuals from having cancer diseases",
      "To screen individuals from primary metastasis to secondary metastasis of cancer",
      "To prevent individuals from exposing to risk factors of cancers",
      "To cure individuals from primary cancer disease thus the disease will be prevented"
    ]
  },
  {
    "id": 193,
    "question": "193) What is tertiary prevention of cancer?",
    "correct": "To take multi-disciplinary approach to make curative intent for individuals",
    "incorrect": [
      "To protect individuals from having cancer diseases",
      "To screen individuals from primary metastasis to secondary metastasis of cancer",
      "To prevent individuals from exposing to risk factors of cancers",
      "To prevent the individuals from developing a pre-cancerous lesion to a cancer"
    ]
  },
  {
    "id": 194,
    "question": "194) If grouped, what are the major risk factors of cancers. Please choose the best answer?",
    "correct": "Genetic factors and Environmental risk factors",
    "incorrect": [
      "Nutrition, Environment, Genetic risk factors",
      "Modifiable and non-modifiable risk factors",
      "Auto-immune and non self risk factors",
      "Genetic mutation, nutrition risk factors"
    ]
  },
  {
    "id": 195,
    "question": "195) What is correct answer regarding to the risk factors of colon cancer?",
    "correct": "Lynch syndrome (HNPCC), Familial Polyposis, Non healthy Diet, Tobacco, Alcohol",
    "incorrect": [
      "Pollution, diet, BRCA1 mutation",
      "Lynch syndrome (HNPCC), Non-healthy diet, radiation exposure",
      "BRCA1-2 mutation, radiation exposure",
      "Pollution, Non-healthy diet, Tobacco"
    ]
  },
  {
    "id": 196,
    "question": "196) Regarding public health measure for cancer screening, there are two main major measures to be considered for making the program, please choose the best answer.?",
    "correct": "Opportunistic vs Population-based screening",
    "incorrect": [
      "Individual screening vs community-based screening",
      "Public vs private health care centers screening",
      "Hospital based vs Community based screening",
      "Individual based vs hospital based screening"
    ]
  },
  {
    "id": 197,
    "question": "197) What are the criteria to take in account for making the decision to choose a screening program?",
    "correct": "Important of disease, resources, impact on disease outcomes, cost-effectiveness, Consequences",
    "incorrect": [
      "Important disease, Resource available, Impact on disease outcomes, funding, Cost-effectiveness",
      "Funding, Human resource, sustainability, cost-effectiveness, important of disease",
      "Important of disease, funding, cost-effectiveness, consequence",
      "Cost-effectiveness, resources, impact, funding, sustanability"
    ]
  },
  {
    "id": 198,
    "question": "198) What is sensitivity of a test?",
    "correct": "Ability of the test to identify positive results. Proportion of actual positives which are correctly identified as such",
    "incorrect": [
      "The probability to have cancer following a positive test result. Proportion of positive test results which are TRUE POSITIVE",
      "Ability of the test to identify negative results. Proportion of negatives which are correctly identified",
      "The probability and ability of the test to identify negative results.",
      "The probability to be healthy following a negative test result. Proportion of negative test results which are TRUE NEGATIVE"
    ]
  },
  {
    "id": 199,
    "question": "199) What is specificity of a test?",
    "correct": "Ability of the test to identify negative results. Proportion of negatives which are correctly identified",
    "incorrect": [
      "The probability to have cancer following a positive test result. Proportion of positive test results which are TRUE POSITIVE",
      "The probability and ability of the test to identify negative results.",
      "The probability to be healthy following a negative test result. Proportion of negative test results which are TRUE NEGATIVE",
      "Ability of the test to identify positive results. Proportion of actual positives which are correctly identified as such"
    ]
  },
  {
    "id": 200,
    "question": "200) What is Positive predictive value?",
    "correct": "The probability to have cancer following a positive test result. Proportion of positive test results which are TRUE POSITIVE",
    "incorrect": [
      "Ability of the test to identify negative results. Proportion of negatives which are correctly identified",
      "The probability and ability of the test to identify negative results.",
      "The probability to be healthy following a negative test result. Proportion of negative test results which are TRUE NEGATIVE",
      "Ability of the test to identify positive results. Proportion of actual positives which are correctly identified as such"
    ]
  },
  {
    "id": 201,
    "question": "201) What is Negative predictive value?",
    "correct": "The probability to be healthy following a negative test result. Proportion of negative test results which are TRUE NEGATIVE",
    "incorrect": [
      "The probability to have cancer following a positive test result. Proportion of positive test results which are TRUE POSITIVE",
      "Ability of the test to identify negative results. Proportion of negatives which are correctly identified",
      "The probability and ability of the test to identify negative results.",
      "Ability of the test to identify positive results. Proportion of actual positives which are correctly identified as such"
    ]
  },
  {
    "id": 202,
    "question": "202) What is a best answer regarding primary and secondary prevention of Cervical cancer?",
    "correct": "Vaccination of bivalent HPV can prevent cervical cancer up to 80%",
    "incorrect": [
      "It is alternative to do a screening test after Vaccination",
      "Women up to 35 years old is systematically recommended to do screening test",
      "Screening can be done 5 years if negative on PAP smear",
      "Vaccination is also mandatory for married women"
    ]
  },
  {
    "id": 203,
    "question": "203) What is a best answer regarding primary and secondary Hepato-Cellular Carcinoma?",
    "correct": "Currently, there is a national program (Cambodia) for primary prevention on HCC, it is the vaccination of hepatitis (B)",
    "incorrect": [
      "Hepatic ultrasound is the best method to detect early HCC disease",
      "The best choice for public early detection of HCC (secondary prevention) is to have a hepatic MRI with contrast",
      "Detection of Alpha-foeto-protein cancer be an effective way to find HCC at early stage",
      "Alpha-Foeto-protein and hepatic ultrasound must be done every month for cirrhotic patients"
    ]
  },
  {
    "id": 204,
    "question": "204) What is the best answer regarding primary and secondary prevention of colon cancers?",
    "correct": "FOBT can reduce mortality rate of colorectal cancer up to 30%",
    "incorrect": [
      "The effective method to reduce colon cancer is to have an effective primary prevention by suppressing risk factors",
      "Colonoscopy can reduce incidence of colorectal cancer up to 60%",
      "FOBT can reduce incidence of colorectal cancer up to 50%",
      "Colonoscopy can reduce mortality rate of colorectal cancer up to 60%"
    ]
  },
  {
    "id": 205,
    "question": "205) What is the best answer regarding primary and secondary prevention of lung cancer?",
    "correct": "Public health measure to reduce the consumption of tobacco would be feasible to reduce lung cancer incidence",
    "incorrect": [
      "PET Scan is the best public screening test for early detection of lung cancer",
      "Chest-X ray could be the best choice for early detection of lung cancer",
      "The only best way to detect lung cancer at early stage is to have a health check-up with bronchoscopy",
      "At least Thoracic high sensitivity CAT Scan will help to reduce lung cancer incidence"
    ]
  },
  {
    "id": 206,
    "question": "206) M. S DR âgé de 75 ans, vient vous voir en consultation pour la douleur lombaire très intense avec un déficit sensitive et motrice des 2 membres inférieurs, une constipation depuis 7 jours. Il est en cours d'un traitement hormonal pour son cancer de la prostate découverte depuis 7 mois. Quel est votre diagnostic ?",
    "correct": "Syndrome de compression médullaire",
    "incorrect": [
      "Calcul rénal.",
      "Effets indésirables de traitement hormonal.",
      "Ostéophyte.",
      "Pyélonéphrite Aiguë."
    ]
  },
  {
    "id": 207,
    "question": "207) En cas d'un syndrome de compression médullaire par une métastase osseuse suit à un IRM rachidienne, En cas de la présence d'un signe de l'épidurite, voulez-vous ajouter quel médicament de plus ?",
    "correct": "Corticoïdes.",
    "incorrect": [
      "Paracétamol.",
      "Aspirine.",
      "Ibuprofène.",
      "Diazépam."
    ]
  },
  {
    "id": 208,
    "question": "208) Dans quel cas la radiothérapie de la colonne rachidienne est indiquée dans le syndrome de compression médullaire compliqué par un cancer de la prostate ?",
    "correct": "Après l'intervention chirurgicale.",
    "incorrect": [
      "Le traitement chirurgical est possible.",
      "L'apparition du déficit neurologique dans les 48 premières heures.",
      "L'apparition du déficit neurologique dans les 24 premières heures.",
      "L'apparition du déficit neurologique dans les 72 premières heures."
    ]
  },
  {
    "id": 209,
    "question": "209) Dans certain cancer, un syndrome de lyse tumorale apparait?",
    "correct": "Le plus souvent pendant la chimiothérapie ou dans les jours qui suivent (entre 1 et 5 jours).",
    "incorrect": [
      "2 semaines après le traitement par la chimiothérapie.",
      "Quelque mois plus tard après avoir finis le traitement.",
      "Lorsqu'il y a des sites métastatiques multiples.",
      "3 semaines après le traitement par la chimiothérapie."
    ]
  },
  {
    "id": 210,
    "question": "210) Qu'est-ce qu'on voit à la radiographie thoracique dans un syndrome cave supérieur compliqué par une tumeur?",
    "correct": "Elargissement du médiastin.",
    "incorrect": [
      "Opacité micronodulaire.",
      "Encombrement des sinus costo diaphragmatique.",
      "Epaississement bronchique.",
      "Opacité retrouvé surtout dans l'apex du poumon droite."
    ]
  },
  {
    "id": 211,
    "question": "211) Comment traiter une thrombose diagnostiquée chez un patient cancéreux ?",
    "correct": "Héparine Bas Poids Moléculaire 200 UI/kg/j jusqu'à une amélioration.",
    "incorrect": [
      "Commencer tout d'abord pas Aspirine.",
      "Héparine Bas Poids Moléculaire 200 UI/kg/j (en 1 ou 2 injections SC). Puis Anticoagulant orale SINTROM avec INR>2,0 et <3,0",
      "Anticoagulant orale SINTROM avec INR>2,0 et < 3,0 puis Héparine Bas Poids Moléculaire 200 UI/kg/j (en 1 ou 2 injections SC).",
      "Héparine Bas Poids Moléculaire 400 UI/kg/j jusqu'à une amélioration."
    ]
  },
  {
    "id": 212,
    "question": "212) Concernant le critère de la gravité de la neutropénie fébrile, le taux des Polynucléaires neutrophiles (≤500-<1000/mm3) est classé dans quel grade de l'OMS?",
    "correct": "Grade 3",
    "incorrect": [
      "Normal",
      "Grade 1",
      "Grade 2",
      "Grade 4"
    ]
  },
  {
    "id": 213,
    "question": "213) Quel est la première question urgente pourra être posé au patient dans le cas d'une suspicion de la neutropénie fébrile suite à une chimiothérapie d'un cancer?",
    "correct": "(A) En cas de neutropénie grade 3 ou 4: Le malade est-il fébrile. En cas de fièvre: Le malade est-il neutropénique",
    "incorrect": [
      "Vous avez quoi comme le type de cancer",
      "Quelle est le protocole de la chimiothérapie que vous avez reçu",
      "Quand est-ce que vous avez reçu le traitement",
      "Est-ce que c'est la première cure de traitement"
    ]
  },
  {
    "id": 214,
    "question": "214) Quel est le risque principal causer le décès dans la neutropénie fébrile suite à une chimiothérapie d'un cancer?",
    "correct": "Choc septique.",
    "incorrect": [
      "La déshydratation causée par la fièvre.",
      "Choc cardiogénique.",
      "Choc hypovolémique.",
      "Choc anaphylactique."
    ]
  },
  {
    "id": 215,
    "question": "215) Le recours au Facteurs de croissance hématopoïétiques de manière préventive, prophylaxie secondaire, est indiqué dans quel cas ?",
    "correct": "Suite à un épisode de neutropénie fébrile post chimiothérapie.",
    "incorrect": [
      "Dès la première cure da la chimiothérapie.",
      "Avant commencer la chimiothérapie.",
      "S'il y a une demande d'un patient.",
      "Patient à haut risque d'une infection grave."
    ]
  },
  {
    "id": 216,
    "question": "216) L' OMS adefinit paliers trois de la douleur, le paracétamol codéine est classé dans :?",
    "correct": "Palier 2",
    "incorrect": [
      "Palier 1",
      "Palier 3",
      "Anti inflammatoire",
      "Anti pyrétique"
    ]
  },
  {
    "id": 217,
    "question": "217) Quelle est le type de la douleur cancéreux?",
    "correct": "Douleur chronique",
    "incorrect": [
      "Douleur aigue",
      "Douleur post-traumatisme",
      "Douleur pose opératoire",
      "Douleur nocturne"
    ]
  },
  {
    "id": 218,
    "question": "218) Dose équivalente de la morphine par voir oral et sous cutanée?",
    "correct": "Dose oral = Dose SC/2",
    "incorrect": [
      "Dose oral Dose SC/3",
      "Dose oral Dose SC/4",
      "Dose oral Dose SC/5",
      "Dose oral Dose SC"
    ]
  },
  {
    "id": 219,
    "question": "219) Quelle est l' effets indésirables le plus fréquent de la morphine :?",
    "correct": "Constipation",
    "incorrect": [
      "Nausées",
      "Vomissement",
      "Vertige",
      "Somnolence"
    ]
  },
  {
    "id": 220,
    "question": "220) Quelle est la méthode plus simple et couramment pour évaluation la douleur ?",
    "correct": "Auto-évaluation",
    "incorrect": [
      "Hétéro-évaluation",
      "Echelle NCCPC",
      "Echelle GED-DI",
      "Echelle EDINN"
    ]
  },
  {
    "id": 221,
    "question": "221) Une dame de 23ans avec grossesse de 12SA, G1P0A0 ente pour une consultation anté-natale. Un hémogramme demandé de façon systématique retrouve des globules rouges à 4000.000/mm3, une hémoglobine à 9g/dl, Ht à 28%, VGM à 70fl, CCMH à 30%, GB à 8000/mm3, plaquettes à 400 000/mm3. Vous êtes interne au service d'hématologie et vous êtes invité(e) pour donner vos avis concernant cette anomalie. Comment interprétez-vous cet hémogramme?",
    "correct": "Une anémie hypochrome michrocytaire avec la taux de plaquette et de GB normale.",
    "incorrect": [
      "Une anémie hypochrome microcytaire avec leucopénie et thrombocytose.",
      "Une anémie normochrome normocytaire avec la taux de plaquettes et GB dans la limite normale.",
      "Une anémie normochrome macrocytaire avec thrombopénie et leucopénie.",
      "Aucune réponse juste."
    ]
  },
  {
    "id": 222,
    "question": "222) Une dame de 23ans avec grossesse de 12SA, G1P0A0 ente pour une consultation anté-natale. Un hémogramme demandé de façon systématique retrouve des globules rouges à 4000.000/mm3 une hémoglobine à 9g/dl, Ht à 28%, VGM à 70fl, CCMH à 30%, GB à 8000/mm3, plaquettes à 400 000/mm3. Vous êtes interne au service d'hématologie et vous êtes invité(e) pour donner vos avis concernant cette anomalie. Quels hypothèses de diagnostiques pensez-vous?",
    "correct": "Une thalassémie ou carence en fer",
    "incorrect": [
      "Une anémie hémolytique Auto-immune",
      "Une anémie réfractaire",
      "Une anémie par carence en vitamine B12",
      "Leucémie Aigue"
    ]
  },
  {
    "id": 223,
    "question": "223) Une dame de 23ans avec grossesse de 12SA, G1P0A0 ente pour une consultation anté-natale. Un hémogramme demandé de façon systématique retrouve des globules rouges à 4000.000/mm3, une hémoglobine à 9g/dl Ht à 28%, VGM à 70fl, CCMH à 30%, GB à 8000/mm3, plaquettes à 400 000/mm3. Vous êtes interne au service d'hématologie et vous êtes invité(e) pour donner vos avis concernant cette anomalie. A l'interrogatoire, elle est une seule enfant dans la famille. Son père et sa mère sont en bonne santé. Elle n'a aucun signe hémorragique. A l'examen clinique, vous trouvez une splénomégalie de 2cm sous rebord costale gauche sans autre anomalie. La TA 110/80 mmHg, FC 86/mm RR 20/mn. Quel est votre prise en charge?",
    "correct": "Bilan paraclinique pour trouver la cause de son anémie.",
    "incorrect": [
      "La transfusion en urgence",
      "Augmentation de la dose de fer qu'elle prend pour sa grossesse",
      "Suplémentation vitaminique",
      "Interruption de la grossesse"
    ]
  },
  {
    "id": 224,
    "question": "224) Une dame de 23ans avec grossesse de 12SA, G1P0A0 ente pour une consultation anté-natale. Un hémogramme demandé de façon systématique retrouve des globules rouges à 4000.000/mm3, une hémoglobine à 9g/dl Ht à 28%, VGM à 70fl, CCMH à 30%, GB à 8000/mm3., plaquettes à 400 000/mm3. Vous êtes interne au service d'hématologie et vous êtes invité(e) pour donner vos avis concernant cette anomalie. Vous demandez d'ajouter le taux de réticulocyte et un électrophorese des hémoglobines. Le taux de Réticulocyte est à 4%. L'électrophorese des Hb: - Hb A: 40% - Hb A2: 15% - Hb F: 20% - Hb E: 25% Quel est la cause de son anémie?",
    "correct": "Beta/E thalassémie",
    "incorrect": [
      "Beta thalassémie majeur",
      "Beta thalassémie mineur",
      "Alpha thalassémie modérée avec délétion de 3 genes.",
      "Aucune réponse correcte"
    ]
  },
  {
    "id": 225,
    "question": "225) Une dame de 23ans avec grossesse de 12SA, G1P0A0 ente pour une consultation anté-natale. Un hémogramme demandé de façon systématique retrouve des globules rouges à 4000.000/mm3 une hémoglobine à 9g/dl, Ht à 28%, VGM à 70fl, CCMH à 30%, GB à 8000/mm3, plaquettes à 400 000/mm3. Vous êtes interne au service d'hématologie et vous êtes invité(e) pour donner vos avis concernant cette anomalie. Vous annoncez le diagnostique au patiente et sa famille. Pour donner le conseil génétique, vous demandez à son mari une électrophorese des Hb qui est tout à fait normale. Comment définir le risque de ses enfants?",
    "correct": "50% de beta thalassémie mineur et 50% d'hémoglobinopathie E heterozygote",
    "incorrect": [
      "25% de beta thalassémie majeur, 75% normale",
      "25% d'alfa thalassémie silencieuse, 75% normale",
      "50% de beta thalassémie mineur et 50% normale",
      "Pas de réponse correcte"
    ]
  },
  {
    "id": 226,
    "question": "226) Une jeune femme de 18 ans vient consulter son médecin traitant pour une fatigue depuis un mois. L'examen clinique retrouve des petites adénopathies cervicales, axillaires et inguinales. L'hémogramme demandé montre les résultats suivants : Hématies: 3,8 T/L Leucocytes: 23 G/L, Hémoglobine: 120 g/l PN 31%, Hématocrite: 36% PE: 0%, V.G.M.: 92 fl PB: 0%, C.C.M.H. 33% Lymp.: 65%, Mono.: 4% Plaquettes: 135 G/L, Interprétez cet hémogramme:?",
    "correct": "Hyperleucocytose, thrombopénie",
    "incorrect": [
      "Anémie normocytaire Normochrome",
      "Bicytopénie",
      "Hyperleucocytose",
      "Hémogramme Normale"
    ]
  },
  {
    "id": 227,
    "question": "227) Une jeune femme de 18 ans vient consulter son médecin traitant pour une fatigue depuis un mois. L'examen clinique retrouve des petites adénopathies cervicales, axillaires et inguinales. L'hémogramme demandé montre les résultats suivants: Hématies: 3,8 T/L Leucocytes: 23 G/L, Hémoglobine: 120 g/l PN: 31%, Hématocrite: 36% PE: 0%, V.G.M.: 92 fl PB: 0%, C.C.M.H. 33% Lymp.: 65% Mono.: 4% Plaquettes: 135 G/L. Quels sont les diagnostics à envisager?",
    "correct": "Infection",
    "incorrect": [
      "Aplasie médullaire",
      "Leucémie Aigue",
      "PTI",
      "Leucémie chronique"
    ]
  },
  {
    "id": 228,
    "question": "228) Une jeune femme de 18 ans vient consulter son médecin traitant pour une fatigue depuis un mois. L'examen clinique retrouve des petites adénopathies cervicales, axillaires et inguinales. L'hémogramme demandé montre les résultats suivants: Hématies: 3,8 T/L Leucocytes: 23 G/L, Hémoglobine: 120 g/l PN: 31%, Hématocrite: 36% PE: 0%, V.G.M.: 92 fl PB: 0%, C.C.M.H. 33% Lymp.: 65%, Mono.: 4%, Plaquettes: 135 G/L. Quels examens complémentaires allez-vous demander ?",
    "correct": "Examen ORL + marqueurs infectieux",
    "incorrect": [
      "Myéllogramme",
      "Auto-anticorps",
      "TDM Thoraco-abomino-pélvienne",
      "Ponction ganglion obligatoire"
    ]
  },
  {
    "id": 229,
    "question": "229) Un homme de 30 ans, sans antécédent médical, consulte pour une asthénie modérée et une sensation de gêne post prandiale dans l'hypochondre gauche. Votre examen révèle une splénomégalie isolée, débordant le grill costal de 4 cm. Hématies: 4,8 T/L Leucocytes: 80 G/L, Hémoglobine: 140 g/l PN: 70%, Hématocrite: 43% PE: 0%, V.G.M.: 90 fl PB: 0%, C.C.M.H. 33% Lymp.: 3%, Mono.: 1%, Plaquettes: 550 G/L Myéloblastes: 2%, Promyélocytes 5% Myélocytes: 9% V.S. 8 mm/1h Métamyélo.: 10%. Quel est le diagnostic le plus vraisemblable ?",
    "correct": "Leucémie chronic myéloblastique",
    "incorrect": [
      "Leucémie aigue",
      "Leucémie chronic Lymphoblastique",
      "Thrombocytose Essentielle",
      "Infection Bactérienne"
    ]
  },
  {
    "id": 230,
    "question": "230) Un homme de 30 ans, sans antécédent médical, consulte pour une asthénie modérée et une sensation de gêne post prandiale dans l'hypochondre gauche. Votre examen révèle une splénomégalie isolée débordant le grill costal de 4 cm. Hématies: 4,8 T/L Leucocytes: 80 G/L, Hémoglobine: 140 g/l PN: 70% Hématocrite: 43% PE: 0% V.G.M.: 90 fl PB: 0%, C.C.M.H. 33% Lymp.: 3%, Mono.: 1% Plaquettes: 550 G/L Myéloblastes: 2%, Promyélocytes 5%, Myélocytes: 9%, V.S. 8 mm/1h, Métamyélo.: 10%. Quels examens faut-il pratiquer ?",
    "correct": "Myélogramme + BCR-abl",
    "incorrect": [
      "TDM abdominopelvienne pour rechercher tumeure de rate",
      "Biopsie Rate",
      "Coloscopie",
      "rechercher parasitoses"
    ]
  }
];

// សម្រាប់ផ្នែកផ្សេងទៀត (អ្នកអាចបន្ថែមសំណួរចូលតាមក្រោយ ឬបែងចែកពី dataMET01 មកដាក់ក៏បាន)
const dataMET02 = [];
const dataMET03 = [];
const dataMET04 = [];









