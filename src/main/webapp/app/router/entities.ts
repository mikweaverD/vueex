import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// prettier-ignore
const BankAccount = () => import('@/entities/bank-account/bank-account.vue');
// prettier-ignore
const BankAccountUpdate = () => import('@/entities/bank-account/bank-account-update.vue');
// prettier-ignore
const BankAccountDetails = () => import('@/entities/bank-account/bank-account-details.vue');
// prettier-ignore
const Label = () => import('@/entities/label/label.vue');
// prettier-ignore
const LabelUpdate = () => import('@/entities/label/label-update.vue');
// prettier-ignore
const LabelDetails = () => import('@/entities/label/label-details.vue');
// prettier-ignore
const Operation = () => import('@/entities/operation/operation.vue');
// prettier-ignore
const OperationUpdate = () => import('@/entities/operation/operation-update.vue');
// prettier-ignore
const OperationDetails = () => import('@/entities/operation/operation-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default [
  {
    path: '/bank-account',
    name: 'BankAccount',
    component: BankAccount,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/bank-account/new',
    name: 'BankAccountCreate',
    component: BankAccountUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/bank-account/:bankAccountId/edit',
    name: 'BankAccountEdit',
    component: BankAccountUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/bank-account/:bankAccountId/view',
    name: 'BankAccountView',
    component: BankAccountDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/label',
    name: 'Label',
    component: Label,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/label/new',
    name: 'LabelCreate',
    component: LabelUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/label/:labelId/edit',
    name: 'LabelEdit',
    component: LabelUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/label/:labelId/view',
    name: 'LabelView',
    component: LabelDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/operation',
    name: 'Operation',
    component: Operation,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/operation/new',
    name: 'OperationCreate',
    component: OperationUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/operation/:operationId/edit',
    name: 'OperationEdit',
    component: OperationUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/operation/:operationId/view',
    name: 'OperationView',
    component: OperationDetails,
    meta: { authorities: [Authority.USER] },
  },
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
];
