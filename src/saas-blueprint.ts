export const PRODUCT_ROLES = ['Owner operator', 'Bookkeeper', 'Collections reviewer', 'Client relationship lead'];

export const PRODUCT_PERSONAS = ['Owner operator', 'Bookkeeper', 'Collections reviewer', 'Client relationship lead', 'Dispute resolver', 'Implementation pod lead'];

export const PRODUCT_INTEGRATIONS = [
  'Invoice CSV import',
  'Payment-link checklist',
  'Aging bucket export',
  'Dispute notes register',
];

export const PRODUCT_ANALYTICS = [
  'Overdue balance by bucket',
  'Dispute rate',
  'Follow-up coverage',
  'Cash collection forecast',
];

export const PRODUCT_KPIS = ['Invoices brought current', 'Days sales outstanding improvement', 'Tone-safe reminders approved', 'Dispute resolution cycle time', 'Escalation accuracy', 'Payment-link readiness'];

export const PRODUCT_WORKFLOWS = [
  'Invoice aging cockpit',
  'Tone-safe reminder generator',
  'Dispute workflow',
  'Escalation checklist',
];

export const PRODUCT_ONBOARDING = ['Import invoice aging snapshot', 'Classify accounts by relationship risk', 'Approve tone-safe reminder ladder', 'Map dispute and pause rules', 'Verify payment-link checklist', 'Train owner on escalation review'];

export const PRODUCT_GUARDS = [
  'Block aggressive language',
  'Require dispute review before escalation',
  'Flag missing payment terms',
];

export const PRODUCT_EXPANSION = ['Monthly receivables health review', 'Customer segment reminder variants', 'Dispute knowledge base buildout', 'Cashflow forecast handoff'];

export const PRODUCT_DATA_MODEL = ['Invoice', 'Aging bucket', 'Reminder sequence', 'Dispute reason', 'Payment link status', 'Escalation decision'];

export const PRODUCT_SUCCESS_SIGNALS = ['Escalations are owner-approved', 'Disputed invoices pause reminders', 'Tone variants match client relationship risk', 'Payment instructions are validated'];

export function createProductSaasBlueprint(config, domain) {
  return {
    product: config.title,
    northStar: config.metric,
    roles: PRODUCT_ROLES,
    personas: PRODUCT_PERSONAS,
    integrations: PRODUCT_INTEGRATIONS,
    analytics: PRODUCT_ANALYTICS,
    kpis: PRODUCT_KPIS,
    workflows: PRODUCT_WORKFLOWS,
    onboarding: PRODUCT_ONBOARDING,
    guards: PRODUCT_GUARDS,
    expansion: PRODUCT_EXPANSION,
    dataModel: PRODUCT_DATA_MODEL,
    successSignals: PRODUCT_SUCCESS_SIGNALS,
    modules: config.modules,
    artifacts: domain.artifacts
  };
}
