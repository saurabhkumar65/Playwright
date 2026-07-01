import uwwbe2eConfig from '../../../projects/e2e-tests/e2e-tests.config';

let puwUrl: string = 'http://localhost:7136';
let uwUrl: string = 'http://localhost:5093';
let custUrl: string = 'http://localhost:7137';
let emailUrl: string = 'http://localhost:5160';
let uwwb: string =
  process.env.ENV === 'DEV'
    ? 'https://app-uwwbportal-dev-eastus2-001.azurewebsites.net'
    : 'http://localhost:4200';

export const TEAM: string | undefined = process.env.TEAM;

export const urls: { [Key: string]: string } = {
  //uwwb application url

  submission: `${uwwb}/inbox?tab=submissions`,
  submissionWfView: `${uwwb}/inbox?tab=submissions&view=2`,
  risk: `${uwwb}/inbox?tab=risks`,
  riskWorkFlowView: `${uwwb}/inbox?tab=risks&view=2`,
  teamInbox: `${uwwb}/teamInbox`,
  renewals: `${uwwb}/inbox?tab=renewals`,
  openArrow: `${uwwb}/`,
  landingPage: `${uwwb}/home`,
  riskOpenArrow: `${uwwb}/rating/7611f215-cfab-4354-ada9-a84dc132cd68/overview`,
  submissonMockData: '**/v1/submissions/getSubmissionsGrid',
  submissonWorkFlowViewMockData: '**/v1/submissions/getSubmissionsBoard',
  riskListMockData: '**/v1/Lifecycle/flowsGrid/My/Risks',
  riskFlowViewMockData: '**/v1/Lifecycle/flowsBoard/My/Risks',
  teamInboxMockData: '**/v1/workItems/teamInbox/**',
  customerOverviewMockData: '**/v1/Customer/Overview/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  customerHierarchyMockData: '**/v1/Customer/hierarchy/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  esgCustomerPanel: '**/v1/Customer/esg/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  sanctionsMockData: '**/v1/Customer/sanctions/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  customerSanctionsAddress: '**/v1/Customer/address/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  renewalPolicyMockData: '**/v1/Lifecycle/flowsGrid/Team/RenewalProspects',
  customerVerificationMockData:
    '**/v1/Customer/verificationStatus/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  customerUnexpError: '**/v1/Customer/verificationStatus/5c16fda7-2aee-e820-63cf-973ab9a9a83a',
  customerOtherMockdata: '**/v1/Customer/financial/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',
  CustomerMatchesMockData: '**/v1/Customer/manualVerification/4750b15c-0420-4a1a-85eb-d0ca8306ca5f',

  //pre underwriting url
  createManuallyApi: `${puwUrl}/SubmissionEventProducer/createManually`,
  createByInternalApi: `${puwUrl}/SubmissionEventProducer/createByInternalApi`,
  createByExternalApi: `${puwUrl}/SubmissionEventProducer/createByExternalApi`,
  createFromEmailApi: `${puwUrl}/SubmissionEventProducer/createFromEmail`,
  failBrokerAgreementCheckApi: `${puwUrl}/SubmissionEventProducer/failBrokerAgreementCheck/`,
  riskDetailsCapturedApi: `${puwUrl}/SubmissionEventProducer/captureRiskDetails/`,
  assignApi: `${puwUrl}/SubmissionEventProducer/assign/`,
  selectInsuredApi: `${puwUrl}/SubmissionEventProducer/selectInsured/`,
  clearAsNewBusinessApi: `${puwUrl}/SubmissionEventProducer/clearAsNewBusiness/`,
  clearAsRenewalApi: `${puwUrl}/SubmissionEventProducer/clearAsRenewal/`,
  declinedApi: `${puwUrl}/SubmissionEventProducer/decline/`,
  brokerAgreementCheckPassedApi: `${puwUrl}/SubmissionEventProducer/passBrokerAgreementCheck/`,
  brokerSelectApi: `${puwUrl}/SubmissionEventProducer/selectBroker/`,
  autoDeclinedApi: `${puwUrl}/SubmissionEventProducer/autoDecline/`,
  placeholderBrokerSelectedApi: `${puwUrl}/SubmissionEventProducer/selectPlaceholderBroker/`,
  selectPolicyApi: `${puwUrl}/SubmissionEventProducer/selectPolicy/`,
  blockApi: `${puwUrl}/SubmissionEventProducer/block/`,
  putItOnHold: `${puwUrl}/SubmissionEventProducer/putItOnHold/`,
  changeHoldReason: `${puwUrl}/SubmissionEventProducer/changeHoldReason/`,
  selectProductApi: `${puwUrl}/SubmissionEventProducer/selectProduct/`,
  enquiryApi: `${uwUrl}/v1/enquiries/`,
  capturePeriodOfInsuranceApi: `${puwUrl}/SubmissionEventProducer/capturePeriodOfInsurance/`,

  //underwriting url
  submissionGridApi: `${uwUrl}/v1/submissions/getSubmissionsGrid`,
  userTeamOverrideApi: `${uwUrl}/v1/UserTeamOverride/`,
  workItemsAssign_url: `${uwUrl}/v1/WorkItems/`,
  usersApi: `${uwUrl}/v1/Users/`,
  employeeProfilesApi: `${uwUrl}/v1/EmployeeProfiles/`,
  renewalApi: `${uwUrl}/v1/renewalprospects/`,
  enquiryApiId: `${uwUrl}/v1/enquiries`,
  flowsApi: `${uwUrl}/v1/Flows/`,
  tempEmailIngest: `${uwUrl}/v1/emailtemp/ingest`,

  //customerEventProducer url
  createCustomerApi: `${custUrl}/CustomerEventProducer/createCustomer`,
  verifyCustomerApi: `${custUrl}/CustomerEventProducer/verifyCustomer`,

  //emailIngestion url
  ingestApi: `${emailUrl}/api/Email/ingest`,

  //wait for
  decline: '/v1/Flows/Flow.Risk',
  assignToTeamMember: '/v1/Teams',
  assignToSelf: '/v1/WorkItems/Flow.Risk',
  user: '/v1/Users',
  putOnHold: '/v1/Config/lifecyclemanager.holdreasons/flow.riskworkflow',
  updatePutOnHold: '/v1/Config/lifecyclemanager.holdreasons/flow.riskworkflow',
  putOnHoldBtn: '/putOnHold',
  updateOnHold: '/updateOnHold',
  resume: '/resume',
};

export const mockPath: { [Key: string]: string } = {
  submissonMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/mockData.json',
  paginationMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/paginationMockData.json',
  teamInboxPaginationMockData:
    'apps/uwwb-portal-e2e/shared/api/mocks/teamInboxPaginationMockData.json',
  submissonWorkFlowViewMockData:
    'apps/uwwb-portal-e2e/shared/api/mocks/SubmissionWorkflowViewMockdata.json',
  riskListViewMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/mockDataRiskList.json',
  riskListViewUSPEMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/mockDataRiskListUSPE.json',
  riskFlowViewMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/RiskFlowViewMockData.json',
  customerOverviewMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/customerOverviewMockData.json',
  teamInboxMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/teamInboxMockData.json',
  teamInboxOnHoldMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/teamInboxOnHoldMockData.json',
  teamInboxSortingMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/teamInboxSortingMockData.json',
  overviewCustomerMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/customer-overview-data.json',
  customerHierarchyMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/customerHierarchy.json',
  esgMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/esgMockData.json',
  sanctionsMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/customer-sanctions-mockData.json',
  customerSanctionsAddressMock:
    'apps/uwwb-portal-e2e/shared/api/mocks/customerSanctionsAddress.json',
  renewalPolicyMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/renewalPolicyMockData.json',
  customerVerificationMockData: 'apps/uwwb-portal-e2e/shared/api/mocks/customerVerification.json',
  customerUnverifiedMatchesMockData:
    'apps/uwwb-portal-e2e/shared/api/mocks/customerUnverifiedMatches.json',
  customerOtherMockdata: 'apps/uwwb-portal-e2e/shared/api/mocks/customerOther.json',
};

export const puwHeaders: { [Key: string]: string } = {
  Accept: '',
  'Content-Type': 'application/json',
};

export const team: { [Key: string]: string } = {
  //preunderwriting
  USML_1: 'USML_Advanced_Boardroom',
  USML_1_1: 'USML_Advanced_Boardroom_1',
  USML_1_2: 'USML_Advanced_Boardroom_2',
  USML_1_3: 'USML_Advanced_Boardroom_3',
  USML_1_4: 'USML_Advanced_Boardroom_4',
  USML_1_5: 'USML_Advanced_Boardroom_5',
  USML_1_6: 'USML_Advanced_Boardroom_6',
  USML_1_7: 'USML_Advanced_Boardroom_7',
  USML_1_8: 'USML_Advanced_Boardroom_8',
  USML_1_9: 'USML_Advanced_Boardroom_9',
  USML_1_10: 'USML_Advanced_Boardroom_10',
  USML_1_11: 'USML_Advanced_Boardroom_11',
  USML_1_12: 'USML_Advanced_Boardroom_12',
  USML_1_13: 'USML_Advanced_Boardroom_13',
  USML_1_14: 'USML_Advanced_Boardroom_14',
  USML_1_20: 'USML_Advanced_Boardroom_20',
  USML_1_21: 'USML_Advanced_Boardroom_21',
  USML_1_22: 'USML_Advanced_Boardroom_22',
  USML_1_23: 'USML_Advanced_Boardroom_23',
  USML_2: 'USML_Armour_Boardroom_Protection',
  USML_2_1: 'USML_Armour_Boardroom_Protection_1',
  USML_2_2: 'USML_Armour_Boardroom_Protection_2',
  USML_2_3: 'USML_Armour_Boardroom_Protection_3',
  USML_2_4: 'USML_Armour_Boardroom_Protection_4',
  USML_3: 'USML_Execuguard',
  USML_3_1: 'USML_Execuguard_1',
  USML_3_2: 'USML_Execuguard_2',
  USML_3_3: 'USML_Execuguard_3',
  USML_3_4: 'USML_Execuguard_4',
  USPE: 'USPE',
  USPE_1: 'USPE_1',
  USPE_2: 'USPE_2',
  USPE_3: 'USPE_3',
  USPE_4: 'USPE_4',
  USPE_5: 'USPE_5',
  USPE_6: 'USPE_6',
  USPE_7: 'USPE_7',
  USPE_8: 'USPE_8',
  USPE_9: 'USPE_9',
  USPE_10: 'USPE_10',
  USPE_11: 'USPE_11',
  London_DandO: 'LondonDandO_CyExUSDandO',
  London_DandO_1: 'LondonDandO_CyExUSDandO_1',
  London_DandO_2: 'LondonDandO_CyExUSDandO_2',
  London_DandO_3: 'LondonDandO_CyExUSDandO_3',
  London_DandO_4: 'LondonDandO_CyExUSDandO_4',
  London_DandO_5: 'LondonDandO_CyExUSDandO_5',
  London_DandO_6: 'LondonDandO_CyExUSDandO_6',
  London_DandO_7: 'LondonDandO_CyExUSDandO_7',
  London_DandO_8: 'LondonDandO_CyExUSDandO_8',
  London_DandO_9: 'LondonDandO_CyExUSDandO_9',
  US_Cyber: 'US_Submission_For_Cyber',
  London_DandO_Renewal: 'LondonDandO_Renewal',
  USML_AdvancedBoardroom_Renewal: 'USML_AdvancedBoardroom_Renewal',
  USML_AdvancedBoardroom_Renewal_1: 'USML_AdvancedBoardroom_Renewal_1',
  USML_ArmourBoardroom_Renewal: 'USML_ArmourBoardroom_Renewal',
  USML_ArmourBoardroom_Renewal_1: 'USML_ArmourBoardroom_Renewal_1',
};

export const teamId: { [Key: string]: string } = {
  USML: '3f1120d2-c024-414f-8cd1-ce37736b2658',
  USPE: 'ef0283b6-5768-40b4-88dc-bb376562d985',
  London_DandO: '7c3c75cb-cb4c-4464-a6bb-3d910439b1d8',
};
export const teamName: { [Key: string]: string } = {
  USML: 'Management Liability',
  USPE: 'Specialty Lines - US PE',
  London_DandO: 'CyEx - US D and O',
};

export const filePath: { [Key: string]: string } = {
  index: 'apps/uwwb-portal-e2e/shared/api/mocks/index.json',
  grsReqJsonPath: 'C:/GrsRequests/',
  grsOutPutJsonPath: 'C:/GrsOutPuts/',
  createByExternal_USMLExecuguardApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createByExternalApi_USML_Execuguard.json',
  createByExternal_USPEApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createByExternalApi_USPE.json',
  createByExternal_London_DandOApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createByExternalApi_LondonD&O_CyExUSDandO.json',
  createManually_USML_Advanced_BoardroomApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USML_Advanced_Boardroom.json',
  createManually_USML_Armour_BoardroomApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USML_Armour_Boardroom_Protection.json',
  createManually_USML_ExecuguardApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USML_Execuguard.json',
  createManually_USML_Renewal_ExecuguardApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USML_Execuguard_Renewal.json',
  createManually_USPEApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USPE.json',
  createManually_London_DandOApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_LondonDandO_CyExUSDandO.json',
  createByInternal_USML_Advanced_BoardroomApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createByInternalApi_USML_Advanced_Boardroom.json',
  createByInternal_USPEApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createByInternalApi_USPE.json',
  createByInternal_USML_Armour_Boardroom_ProtectionApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createByInternalApi_USML_Armour_Boardroom_Protection.json',
  createFromEmail_USML_Armour_Boardroom_ProtectionApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createFromEmailApi_USML_Armour_Boardroom_Protection.json',
  createFromEmailApi_LondonApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createFromEmailApi_LondonD&O_CyExUSDandO.json',
  createFromEmailApi_USPEApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createFromEmailApi_USPE.json',
  riskDetailsCapturedRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/riskDetailsCaptured.json',
  assignRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/assignApi.json',
  selectInsuredRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/selectInsuredApi.json',
  clearAsNewBusinessRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/clearAsNewBusinessApi.json',
  clearAsRenewalRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/clearAsRenewalApi.json',
  declinedRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/declined.json',
  brokerAgreementCheckPassedRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/brokerAgreementCheckPassedApi.json',
  brokerSelectRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/brokerSelectApi.json',
  brokerSelectLicensedRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/brokerSelectLicensedApi.json',
  failBrokerAgreementCheckRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/failBrokerAgreementCheck.json',
  autoDeclinedRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/autoDeclined.json',
  placeholderBrokerSelectedRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/placeholderBrokerSelected.json',
  selectPolicyRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/selectPolicyApi.json',
  blockRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/blockApi.json',
  putItOnHoldRequestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/putItOnHoldApi.json',
  changeHoldReasonRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/changeHoldReasonApi.json',
  selectProductApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/selectProductApi.json',
  selectProductApi_LondonDandORequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/selectProductApi_London_DandO.json',
  selectProductUSPEApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/selectProductUSPE_Api.json',
  putItOnHoldApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/putItOnHoldApi.json',
  changeHoldReasonApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/changeHoldReasonApi.json',
  workItemsAssign: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/workItemsAssignApi.json',
  workItemsUnAssign: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/workItemsUnAssignApi.json',
  createCust_filePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/createCustomer.json',
  verifyCust_filePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/verifyCustomer.json',
  employeeProfile: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/employeeProfile.json',
  emailIngestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/emailIngestApi.json',
  renewals_filepath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/renewalsProspect.json',
  createEnquiry_USML_filePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createEnquiry_USML.json',
  createEnquiry_USPE_filePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createEnquiry_USPE.json',
  createEnquiry_London_DandO_filePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createEnquiry_LondonDandO_CyExUSDandO.json',
  tempEmailIngestFilePath: 'apps/uwwb-portal-e2e/shared/api/mocks/Request/tempEmailIngestApi.json',
  createManually_London_DandO_RenewalApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_LondonDandO_Renewal.json',
  createManually_USML_AdvancedBoardroom_RenewalApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USML_AdvancedBoardroom_Renewal.json',
  capturePeriodOfInsurance_FilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/capturePeriodOfInsurance.json',
  createManually_USML_ArmourBoardroom_RenewalApiRequestFilePath:
    'apps/uwwb-portal-e2e/shared/api/mocks/Request/createManuallyApi_USML_ArmourBoardroom_Renewal.json',
};
