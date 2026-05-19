export const domain = {
  "kind": "invoice-ledger",
  "title": "Invoice Reminder Playbook",
  "purpose": "A purpose-built invoice ledger interface for friendly invoice reminder workflows that preserve relationships while improving cash collection.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Invoice ledger",
  "metricLabels": [
    "Cash At Risk",
    "Aging Buckets",
    "Tone Safety"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "BrightPath Tutoring Studio",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "overdue invoices with active follow-up plans",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "start-date",
      "label": "Start date",
      "type": "date",
      "sample": "2026-03-10",
      "placeholder": "Enter start date"
    },
    {
      "id": "deadline-date",
      "label": "Deadline date",
      "type": "date",
      "sample": "2026-04-15",
      "placeholder": "Enter deadline date"
    },
    {
      "id": "cadence-days",
      "label": "Cadence days",
      "type": "number",
      "sample": 7,
      "placeholder": "Enter cadence days"
    },
    {
      "id": "review-buffer-days",
      "label": "Review buffer days",
      "type": "number",
      "sample": 3,
      "placeholder": "Enter review buffer days"
    }
  ],
  "rows": [
    "Invoices entered",
    "Due dates checked",
    "Payment links reviewed",
    "Reminder sequence generated",
    "Aging buckets calculated",
    "Disputes noted",
    "Escalation checklist complete",
    "Collection plan exported"
  ],
  "artifacts": [
    "Email/SMS drafts",
    "Collection plan",
    "CSV ledger"
  ],
  "checks": [
    "No legal threats",
    "Due dates and balances required",
    "Final notice requires escalation checklist"
  ],
  "sampleClient": "BrightPath Tutoring Studio"
};
