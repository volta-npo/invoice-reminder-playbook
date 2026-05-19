export const PRODUCT_ROLES = [
    'Bookkeeper',
    'Account owner',
    'Collections reviewer',
    'Client relationship lead',
];
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
export const PRODUCT_WORKFLOWS = [
    'Invoice aging cockpit',
    'Tone-safe reminder generator',
    'Dispute workflow',
    'Escalation checklist',
];
export const PRODUCT_GUARDS = [
    'Block aggressive language',
    'Require dispute review before escalation',
    'Flag missing payment terms',
];
export function createProductSaasBlueprint(config, domain) {
    return {
        product: config.title,
        northStar: config.metric,
        roles: PRODUCT_ROLES,
        integrations: PRODUCT_INTEGRATIONS,
        analytics: PRODUCT_ANALYTICS,
        workflows: PRODUCT_WORKFLOWS,
        guards: PRODUCT_GUARDS,
        modules: config.modules,
        artifacts: domain.artifacts
    };
}
//# sourceMappingURL=saas-blueprint.js.map