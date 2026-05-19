export const config = {
  "number": 35,
  "slug": "invoice-reminder-playbook",
  "title": "Invoice Reminder Playbook",
  "category": "AI & Automation",
  "tagline": "Friendly invoice reminder workflows that preserve relationships while improving cash collection.",
  "persona": "Finance/ops students helping owners professionalize billing.",
  "gap": "Late payments are operationally painful, and owners need language as much as software.",
  "niche": "Micro businesses with informal billing processes.",
  "metric": "overdue invoices with active follow-up plans",
  "modules": [
    "Reminder sequence",
    "Tone variants",
    "Payment status tracker",
    "Escalation checklist"
  ],
  "theme": {
    "accent": "#7c3aed",
    "accent2": "#c4b5fd",
    "emoji": "\u26a1",
    "metricLabel": "Automation safety",
    "workflow": [
      "Define workflow boundary",
      "Identify data and failure risks",
      "Require human review",
      "Export safe implementation plan"
    ],
    "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "reminder-sequence",
      "label": "Reminder sequence",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify reminder sequence with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "tone-variants",
      "label": "Tone variants",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify tone variants with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "payment-status-tracker",
      "label": "Payment status tracker",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify payment status tracker with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "escalation-checklist",
      "label": "Escalation checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify escalation checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Invoice Reminder Playbook and capture baseline evidence.",
      "Complete the reminder sequence workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "BrightPath Tutoring Studio",
    "chapter": "El Paso",
    "studentLead": "Volta Student Lead",
    "notes": "Responsible automation project to reduce admin time without exposing student data. Invoice Reminder Playbook sample.",
    "evidencePrefix": "Invoice Reminder Playbook",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
