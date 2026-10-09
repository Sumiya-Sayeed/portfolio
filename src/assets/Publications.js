// status: 'published' | 'under-review'. Published entries carry a DOI; entries
// under review do not, so the component renders their venue as plain text.
export const publications = [
  {
    title: 'Probabilistic Multimodal Digital Twins for Healthcare Monitoring',
    authors: 'Sumiya Sayeed, Sanaz Bavafa, Alexandre dos Santos Roque, Edison Pignaton de Freitas',
    venue: '2026 11th International Conference on Smart and Sustainable Technologies (SpliTech), IEEE, pp. 1–7',
    year: 2026,
    status: 'published',
    doi: '10.23919/SpliTech70133.2026.11685578',
    description:
      'Proposes a Bayesian HMM belief state estimator with multimodal fusion for continuous patient health monitoring. Peer reviewed, oral presentation.',
    github: 'https://github.com/Sumiya-Sayeed/Digital-Twin-Project',
  },
  {
    title:
      'Explainable Drug Effects on LDL Cholesterol in Cardiovascular Patients Using XGBoost with SHAP and Transformer Models',
    authors: 'Sumiya Sayeed, Guojun Liang',
    venue:
      '2026 2nd International Conference on Federated Learning and Intelligent Computing Systems (FLICS), IEEE, pp. 537–544',
    year: 2026,
    status: 'published',
    doi: '10.1109/FLICS70075.2026.11621939',
    description:
      'Dual-model explainable framework for predicting LDL cholesterol change in 21,690 cardiovascular patients (MIMIC-IV), combining XGBoost with SHAP on clinical features and a Transformer on ordered drug-prescription sequences (AUC 0.73). Peer reviewed, oral presentation.',
    github: 'https://github.com/Sumiya-Sayeed/ldl-pipeline',
  },
  {
    title:
      'A Transparent Probabilistic Belief-State Framework for Calibrated, Interpretable Monitoring of Deterioration and Disease Progression across Heterogeneous Clinical Conditions: Development and Internal Evaluation in MIMIC-IV',
    authors: 'Sumiya Sayeed, Alexandre dos Santos Roque, Edison Pignaton de Freitas',
    venue: 'Intelligence-Based Medicine, Elsevier',
    year: 2026,
    status: 'under-review',
    description:
      'A transparent Bayesian belief-state framework for calibrated, interpretable monitoring of clinical deterioration and disease progression, developed and internally evaluated on MIMIC-IV across acute respiratory failure, acute kidney injury, and cirrhosis, with openly available code.',
  },
  {
    title:
      'Placement of Intervention Signals in Input-Output Hidden Markov Models for Physiological Early Warning: A Two-domain Test',
    authors: 'Sumiya Sayeed, Alexandre dos Santos Roque, Edison Pignaton de Freitas',
    venue: 'Biomedical Signal Processing and Control, Elsevier',
    year: 2026,
    status: 'under-review',
    description:
      'A two-domain study (CGM insulin, ICU vasopressors) of whether an intervention signal should enter a transparent Bayesian early-warning model as an observation or as an input to the state dynamics, proposing an alignment hypothesis and confounding diagnostics for the choice.',
  },
  {
    title: 'PEMDT: Probabilistic and Explicable Multimodal Digital Twins for Healthcare',
    authors: 'Sumiya Sayeed, Sanaz Bavafa, Alexandre dos Santos Roque, Edison Pignaton de Freitas',
    venue: 'Array, Elsevier',
    year: 2026,
    status: 'under-review',
    description:
      'A Bayesian multimodal digital twin for IoMT health monitoring that keeps an online belief state, evaluated on MIMIC-IV (64,691 ICU patients) and CASAS data, with AUC 0.740 and a 12-hour median warning ahead of vasopressor onset.',
  },
  {
    title:
      'A Probabilistic, Explainable Digital Twin for Air-Quality Risk: Calibration, Robustness, and Hybrid Integration with Machine Learning',
    authors: 'Sumiya Sayeed, Alexandre dos Santos Roque, Edison Pignaton de Freitas',
    venue: 'Environmental Sciences Europe, Springer',
    year: 2026,
    status: 'under-review',
    description:
      'A probabilistic environmental digital twin that forecasts air-quality exceedance risk from multimodal sensor streams, providing calibrated risk, per-signal explanation, robustness to missing observations, and label-free cross-site transfer.',
  },
];
