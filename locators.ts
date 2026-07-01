import { expect, Locator, Page } from '@playwright/test';
import { POManager } from './POManager';
import { pageUtils } from '../utils/pageUtils';

export class CustomerPanelPage {
  readonly page: Page;

  //add locators
  readonly toggleShowBlockedButton: Locator;
  readonly createSubmission: Locator;
  readonly profileLogo: Locator;
  readonly selectActiveProfileDropdown: Locator;
  readonly usClearanceProfile: Locator;
  readonly ukClearanceProfile: Locator;
  readonly profileText: Locator;
  readonly policyNumberTxtBox: Locator;
  readonly policySearchBtn: Locator;
  readonly policyRow: Locator;
  readonly policySaveBtn: Locator;
  readonly insuredDropDown: Locator;
  readonly insuredChangeBtn: Locator;
  readonly accountNameTxtBox: Locator;
  readonly insuredTxtBox: Locator;
  readonly insuredTxtBoxafterClick: Locator;
  readonly selectExistingInsure: Locator;
  readonly toggleShowBlockedButtonStatus: Locator;
  readonly createNewInsured: Locator;
  readonly address1: Locator;
  readonly cityNameTxtBox: Locator;
  readonly countryTxtBox: Locator;
  readonly countryTxtBoxBeforeClick: Locator;
  readonly usState: Locator;
  readonly stateTxtBox: Locator;
  readonly texasSate: Locator;
  readonly pincodeTxtBox: Locator;
  readonly insuredSaveBtn: Locator;
  readonly selectPrdouctTxtBox: Locator;
  readonly productNameNACP: any;
  readonly productNameExecuguard: Locator;
  readonly productNameABCP: Locator;
  readonly productNamePGC: Locator;
  readonly productNamePDC: Locator;
  readonly productNamePSP: Locator;
  readonly productNamePW: Locator;
  readonly productNameArmour: Locator;
  readonly productNameCYEX: Locator;
  readonly selectCOBCodeTxtBox: Locator;
  readonly selectCOBCode: Locator;
  readonly productSaveBtn: Locator;
  readonly assignTeamSelectTeamTxtBox: Locator;
  readonly propertyTeamname: Locator;
  readonly managementLiabilityTeamname: Locator;
  readonly propertyGeneralCoverTeamname: Locator;
  readonly selectUnderwritterTxtBoxUSML: Locator;
  readonly selectUnderwritterTxtBoxUSMLAfterClick: Locator;
  readonly cyexTeamname: Locator;
  readonly selectUnderwritterTxtBox: Locator;
  readonly selectUnderwritterTxtBoxAfterClick: Locator;
  readonly undewritterName: Locator;
  readonly underwritterPlatformTxtBox: Locator;
  readonly underwritterPlatformOption: Locator;
  readonly marketSegmentTxtBox: Locator;
  readonly marketSegmentOption: Locator;
  readonly riskDetailsSaveBtn: Locator;
  readonly findBrokerAgencyTxtBox: Locator;
  readonly findBrokerAgencyTxtBoxAfterClick: Locator;
  readonly arcBrokerName: Locator;
  readonly abdBrokerName: Locator;
  readonly brokerContact: Locator;
  readonly searchBrokerInput: Locator;
  readonly brokerContactName: Locator;
  readonly brokerContactUSML: Locator;
  readonly brokerSaveBtn: Locator;
  readonly clearanceSearchBtn: Locator;
  readonly clearanceCloseBtn: Locator;
  readonly clearanceRenewalBtn: Locator;
  readonly clearanceBtn: Locator;
  readonly submissionStatus: Locator;
  readonly tableHeaders: Locator;
  readonly tableGridDetail: Locator;
  readonly table: Locator;
  readonly listView: Locator;
  readonly workFlowView: Locator;
  readonly statusFilter: Locator;
  readonly transactionTypeFilter: Locator;
  readonly dateFilter: Locator;
  readonly statusFilterValue: Locator;
  readonly spiningLoader: Locator;
  readonly customerHeaderSort: Locator;
  readonly brokerHeaderSort: Locator;
  readonly transactiontypeHeaderSort: Locator;
  readonly statusHeaderSort: Locator;
  readonly toolTip: Locator;
  readonly dateHeaderSort: Locator;
  readonly searchSuggestion: Locator;
  readonly statusClearFilter: Locator;
  readonly transactionClearFilter: Locator;
  readonly calenderClearFilter: Locator;
  readonly pageSearch: Locator;
  readonly arrowButton: Locator;
  readonly dynamicForm: Locator;
  readonly editTableView: Locator;
  readonly assigneeCheckBox: Locator;
  readonly paginatorNextPageButton: Locator;
  readonly paginatorFirstPageButton: Locator;
  readonly customerNamePanel: Locator;
  readonly clearedTab: Locator;
  readonly overviewTab: Locator;
  readonly historyTab: Locator;
  readonly risksTab: Locator;
  readonly esgTab: Locator;
  readonly financialTab: Locator;
  readonly sanctionsTab: Locator;
  readonly customerHistory: Locator;
  readonly hierarchyTab: Locator;
  readonly otherCompaniesTab: Locator;
  readonly otherTab: Locator;
  readonly keyText: Locator;
  readonly links: Locator;
  readonly customerMainPage: Locator;
  readonly customerTab: Locator;
  readonly panelTab: Locator;
  readonly mainPageTab: Locator;
  readonly selectBrokerContact:Locator;
  readonly customerPanelName: Locator;
  readonly customerPanelunexpectedError: Locator;
  readonly customerpanelPositive: Locator;
  readonly customerPanelMix: Locator;
  readonly NVDAtitle: Locator;
  readonly overviewEmployees: Locator;
  readonly employeesNumber: Locator;
  readonly overviewLocation: Locator;
  readonly locationAddress: Locator;
  readonly annualRevenue: Locator;
  readonly revenueAmount: Locator;
  readonly verification: Locator;
  readonly mainDandBLogo: Locator;
  readonly addressIcon: Locator;
  readonly MaincollapseExpander: Locator;
  readonly MaincollapseExpanderPlus: Locator;
  readonly addressExpander: Locator;
  readonly detailAddressExp: Locator;
  readonly sectorExpander: Locator;
  readonly detailSectorExp: Locator;
  readonly dunsExpander: Locator;
  readonly detailDunsExp: Locator;
  readonly unAvailable: Locator;
  readonly otherTabContainer: Locator;
  readonly altNames: Locator;
  readonly prevNames: Locator;
  readonly namesAlt: Locator;
  readonly namesPrev: Locator;
  readonly empLocReveri: Locator;
  readonly valuesEmpLocRev: Locator;
  readonly addressflag: Locator;
  readonly dandbLogo: Locator;
  readonly employeeIcon: Locator;
  readonly annualIcon: Locator;
  readonly greenTickVer: Locator;
  readonly verificationType: Locator;
  readonly collapseExpander: Locator;
  readonly collapseExpanderPlus: Locator;
  readonly websiteExpander: Locator;
  readonly webSiteLink: Locator;
  readonly googleMaps: Locator;
  readonly hrefgoogle: Locator;
  readonly atrbtsASDCAP: Locator;
  readonly valuesASDAP: Locator;
  readonly overviewFigma: Locator;
  readonly mainCustmerPage: Locator;
  readonly unexpError: Locator;
  readonly backToSubPage: Locator;
  readonly navToMainCustPage: Locator;
  readonly financialTabNameNeg: Locator;
  readonly ticker: Locator;
  readonly websiteNA: Locator;
  readonly mapsNA: Locator;
  readonly unverified: Locator;
  readonly hierarchyMainHeader: Locator;
  readonly mainPage: Locator;
  readonly UnexpectedError: Locator;
  readonly OverallEligibility: Locator;
  readonly industryValue: Locator;
  readonly revenueValue: Locator;
  readonly GHGEmissionsValue: Locator;
  readonly snPScore: Locator;
  readonly snPEligibility: Locator;
  readonly sustainaliticsScore: Locator;
  readonly sustainaliticsEligibility: Locator;
  readonly repRiskScore: Locator;
  readonly repRiskEligibility: Locator;
  readonly tabPage: Locator;
  readonly activeTab: Locator;
  readonly naics: Locator;
  readonly sics: Locator;
  readonly pageUtils: pageUtils;
  readonly hierarchyContentHeader: Locator;
  readonly hierarchyContentNoneListed: Locator;
  readonly hierarchyTabContentents: Locator;
  readonly sanctionsClick: Locator;
  readonly entityNameValue: Locator;
  readonly searchCountryValue: Locator;
  readonly searchCountryFlag: Locator;
  readonly sanctionResultvalue: Locator;
  readonly sanctionsExpandersminus: Locator;
  readonly sanctionsExpandersplus: Locator;
  readonly lexisNameSrchVal: Locator;
  readonly lexisAddressValue: Locator;
  readonly valuesRsnCmts: Locator;
  readonly valSrcOfnce: Locator;
  readonly rightValnmeadrs: Locator;
  readonly sanctionResultvalueNMF: Locator;
  readonly sectionHeader: Locator;
  readonly riskContainer: Locator;
  readonly riskCollapseExpander: Locator;
  readonly riskWidgetAttributes: Locator;
  readonly riskWidgetValue: Locator;
  readonly riskIdClick: Locator;
  readonly sectionHeader2: Locator;
  readonly riskWidgetAttributes2: Locator;
  readonly riskWidgetValue2: Locator;
  readonly sectionHeader3: Locator;
  readonly figmaNewRiskWidget: Locator;
  readonly figmaMainNewRiskWidget: Locator;
  readonly customerSidePanel: Locator;
  readonly navToSubmissionScreen: Locator;
  readonly customerMainPageSS: Locator;
  readonly submsScrnFromMain: Locator;
  readonly verificationTypeManual: Locator;
  readonly noLinks: Locator;
  readonly DAndOOther: Locator;
  readonly customerOverview: Locator;
  readonly manualVerReq: Locator;
  readonly recievedMatches: Locator;
  readonly confidenceScores: Locator;
  readonly allMatches: Locator;
  readonly firstSubmitAsMatch: Locator;
  readonly matchSelectedManualMsg: Locator;
  readonly customerPanel: Locator;
  readonly noAppropriateMatch: Locator;
  readonly identityTypeDrpDown: Locator;
  readonly nameTxtField: Locator;
  readonly countryDrpDown: Locator;
  readonly saveBtn: Locator;
  readonly areYouSurePopUp: Locator;
  readonly clickYes: Locator;
  readonly expertJudgementTxt: Locator;
  readonly clickNo: Locator;
  readonly submissionPage: Locator;
  readonly mainToPrevBtn: Locator;
  readonly kanbanWF: Locator;
  readonly esgTabHeading: Locator;
  readonly financialTabHeading: Locator;
  readonly sanctionsTabHeading: Locator;
  readonly heirarchyTabHeading: Locator;
  readonly policyHeader: Locator;
  readonly mainEsgTabHeading: Locator;
  readonly mainFinancialTabHeading: Locator;
  readonly mainSanctionsTabHeading: Locator;
  readonly mainHeirarchyTabHeading: Locator;
  readonly screening: Locator;

  constructor(page: Page) {
    this.submissionPage = page.locator('bz-inbox');
    this.mainEsgTabHeading = page.locator('p-tabpanel:nth-child(2) h4').nth(0);
    this.createSubmission = page.locator('//span[text()="Create Submission"]');
    this.ukClearanceProfile = page.locator('//div[text()="UK Clearance"]');
    this.usClearanceProfile = page.locator('//div[text()="US Clearance"]');
    this.selectActiveProfileDropdown = page.locator(
      'span[aria-label="Select Active Profile activate"]'
    );
    this.profileLogo = page.locator('div[class="initials-render ng-scope"]');
    this.profileText = page.locator('h2[class="current-user-header"]~div span');
    this.createNewInsured = page.locator('div[class="inline ng-scope"]').first();
    this.insuredTxtBox = page.locator(
      '//label[text()="Find or add new"]/following-sibling::div/div/div/span'
    );
    this.address1 = page.locator('//label[text()="Address Line 1"]/following-sibling::input');
    this.cityNameTxtBox = page.locator('input[name="city"]');
    this.countryTxtBox = page
      .locator('//label[text()="Country"]/following-sibling::div/div/following-sibling::input')
      .first();
    this.usState = page.locator('//div[text()="United States"]');
    this.stateTxtBox = page.locator(
      '//label[text()="State or Region"]/following-sibling::div/div/span'
    );
    this.texasSate = page.locator('//div[text()="Texas"]');
    this.insuredSaveBtn = page.locator(
      'button[class="ladda-button insight-button btn btn-contextual m-l-xs"]'
    );
    this.selectPrdouctTxtBox = page.locator('span[aria-label="Select product activate"]');
    this.selectCOBCodeTxtBox = page.locator('//label[text()="Select Cob Codes"]/parent::div/div');
    this.productNameCYEX = page.locator('//div[text()="CyEx - US D and O"]');
    this.selectCOBCode = page.locator('//div[text()="DJ"]');
    this.productSaveBtn = page.locator('[button-click="vm.saveProduct()"]');
    this.insuredTxtBoxafterClick = page
      .locator(
        '//label[text()="Find or add new"]/following-sibling::div/div/div/following-sibling::input'
      )
      .first();
    this.selectExistingInsure = page.locator("//span[text()='Orthofix Medical Inc.']").nth(2);
    this.countryTxtBoxBeforeClick = page.locator(
      '//label[text()="Country"]/following-sibling::div/div/span'
    );
    this.assignTeamSelectTeamTxtBox = page.locator(
      '//label[text()="Select Team"]/parent::div/div/div/div/span'
    );
    this.propertyTeamname = page.locator("//b[text()='Property']");
    this.cyexTeamname = page.locator('//b[text()="CyEx - US D and O"]');
    this.selectUnderwritterTxtBox = page
      .locator('[ng-model="vm.input.assignmentUnderwriter"] div span')
      .first();
    this.selectUnderwritterTxtBoxAfterClick = page
      .locator('//label[text()="Select Underwriter"]/../div/div/div/following::input[1]')
      .first();
    this.undewritterName = page.locator('a[class="ui-select-choices-row-inner"]').first();
    this.underwritterPlatformTxtBox = page
      .locator('div[name="UnderwriterPlatform"] div span')
      .first();
    this.underwritterPlatformOption = page.locator('//div[text()="SYND - Open Market"]');
    this.riskDetailsSaveBtn = page.locator(
      '[button-click="vm.saveRiskDetails(riskDetailsForm.$valid)"]'
    );
    this.findBrokerAgencyTxtBox = page
      .locator('//label[text()="Find Broker Agency"]/../div/div/div/following::input[1]')
      .first();
    this.abdBrokerName = page.locator('[class="ui-select-choices-row-inner"]');
    // this.brokerContact = page.locator('[ng-model="vm.query.input.ukBroker"]').first();
    this.brokerContact= page.locator('//span[@aria-label="Search Brokers activate"]').nth(0);
    this.searchBrokerInput = page.locator('//input[@aria-label="Search Brokers"]').nth(0);
    this.selectBrokerContact = page.locator('[class="ui-select-choices-row-inner"]');
    this.brokerSaveBtn = page
      .locator('[class="pull-right m-t-sm m-b-sm ng-isolate-scope"] button ')
      .first();
    this.clearanceSearchBtn = page.locator('[button-click="vm.searchClearances()"] button ');
    this.clearanceCloseBtn = page.locator('button[ng-click="vm.cancel()"]');
    this.clearanceBtn = page.locator('//span[text()=" Clear As New Business "]').first();
    this.clearanceRenewalBtn = page.locator('//span[text()=" Clear As Renewal "]').first();
    this.findBrokerAgencyTxtBox = page
      .locator('//label[text()="Find Broker Agency"]/../div/div/div/span')
      .first();
    this.findBrokerAgencyTxtBoxAfterClick = page
      .locator('//label[text()="Find Broker Agency"]/../div/div/div/following::input[1]')
      .first();
    this.brokerContactName = page.locator('a[class="ui-select-choices-row-inner"] div');
    this.productNameABCP = page.locator(
      '//div[text()="Advanced Boardroom and Company Protection"]'
    );
    this.productNamePGC = page.locator("//div[text()='Property General Cover']");
    this.productNameNACP = page.locator("//div[text()='Large Commercial Property']");
    this.productNamePDC = page.locator("//div[text()='Property Difference In Conditions']");
    this.productNamePSP = page.locator("//div[text()='Property Selected Perils']");
    this.productNamePW = page.locator("//div[text()='Property Wind']");
    this.productNameArmour = page.locator('//div[text()="Armour Boardroom Protection"]');
    this.marketSegmentTxtBox = page.locator('//label[text()="Market Segment"]/../div/div/div/span');
    this.marketSegmentOption = page.locator('//div[text()="Middle Market"]');
    this.managementLiabilityTeamname = page.locator('//b[text()="Management Liability"]');
    this.propertyGeneralCoverTeamname = page.locator('//b[text()="Property"]');
    this.selectUnderwritterTxtBoxUSML = page.locator(
      '//label[text()="Select Underwriter"]/../div/div/div/span'
    );
    this.selectUnderwritterTxtBoxUSMLAfterClick = page
      .locator('//label[text()="Select Underwriter"]/../div/div/div/following-sibling::input')
      .nth(0);
    this.pincodeTxtBox = page.locator('//label[text()="Zip/Post Code"]/following::input[1]');
    this.brokerContactUSML = page.locator(
      '//label[text()="Find  Broker Contact"]/../div/div/div/span'
    );
    this.submissionStatus = page.locator('h3[class="ng-binding"]');
    this.productNameExecuguard = page.locator('//div[text()="Beazley Execuguard"]');
    this.policyNumberTxtBox = page.locator(
      '//label[text()="Reference/Policy Number"]/../div/input'
    );
    this.policySearchBtn = page.locator('[button-click="vm.searchPolicies()"] button');
    this.policyRow = page.locator('tr[class="odd"] td').first();
    this.policySaveBtn = page.locator('[button-click="vm.selectPolicy()"] button');
    this.insuredDropDown = page.locator('[class="fa showhide-option fa-chevron-down"]').first();
    this.insuredChangeBtn = page.locator("//a[text()='Change']").first();
    this.accountNameTxtBox = page.locator('input[data-ng-model="vm.searchTerm"]');
    this.arcBrokerName = page.locator('a[class="ui-select-choices-row-inner"]');
    this.mainFinancialTabHeading = page.locator('p-tabpanel:nth-child(3) h4').nth(0);
    this.mainSanctionsTabHeading = page.locator('p-tabpanel:nth-child(4) h4').nth(0);
    this.mainHeirarchyTabHeading = page.locator('p-tabpanel:nth-child(5) h4');
    this.policyHeader = page.locator('a').filter({ hasText: 'Policy Summary' });
    this.esgTabHeading = page.locator('p-tabpanel:nth-child(3) h4').nth(0);
    this.financialTabHeading = page.locator('p-tabpanel:nth-child(4) h4').nth(0);
    this.sanctionsTabHeading = page.locator('p-tabpanel:nth-child(5) h4').nth(0);
    this.heirarchyTabHeading = page.locator('p-tabpanel:nth-child(6) h4');
    this.kanbanWF = page.locator('bz-kanban-board');
    this.mainToPrevBtn = page.locator("bz-button[ng-reflect-icon='bzi bz-arrow-left']");
    this.clickNo = page.locator("bz-button[label='No']");
    this.expertJudgementTxt = page.locator(
      "div[class='bz-side-panel-content'] div span[class='bz-body-md bz-neutrals-text-weak']"
    );
    this.clickYes = page.locator("bz-button[label='Yes']");
    this.areYouSurePopUp = page.locator("div[role='dialog'] p");
    this.saveBtn = page.locator("bz-button[ng-reflect-label='Save']");
    this.countryDrpDown = page.locator("bz-input-dropdown[ng-reflect-name='country']");
    this.nameTxtField = page.locator("bz-input[formcontrolname='name'] input");
    this.identityTypeDrpDown = page.locator("bz-input-dropdown[ng-reflect-name='identityType']");
    this.noAppropriateMatch = page.locator("bz-button[ng-reflect-label='No appropriate match']");
    this.customerOverview = page.locator("bz-collapse-panel h4[class='bz-m-0']").nth(0);
    this.customerPanel = page.locator('bz-overview-side-panel');
    this.matchSelectedManualMsg = page.locator("span[class='bz-body-md bz-neutrals-text-weak']");
    this.firstSubmitAsMatch = page.locator("bz-button[label='Submit as match']").nth(0);
    this.allMatches = page.locator(
      "div[class='bz-flex bz-flex-column bz-gap-3 bz-border-bottom-1 bz-neutrals-border-default bz-px-8 bz-py-4']"
    );

    this.confidenceScores = page.locator(
      "div[class='bz-flex bz-justify-content-between bz-flex-column bz-gap-1 bz-py-2 bz-pb-2 bz-align-items-center'] span b"
    );
    this.recievedMatches = page.locator(
      "div[class='bz-flex bz-gap-1 bz-pb-3 bz-flex-row bz-border-bottom-cv bz-justify-content-between bz-align-items-center ng-star-inserted']"
    );
    this.manualVerReq = page.locator(
      "span[class='bz-body-md bz-neutrals-text-weak ng-star-inserted']"
    );
    this.DAndOOther = page.locator("bz-tab-view[class='bz-tabs-wraper']");
    this.noLinks = page.locator("div[class='bz-banner bz-banner-danger'] div[class='content']");
    this.submsScrnFromMain = page.locator("bz-button[icon='bzi bz-mail-05']");
    this.customerMainPageSS = page.locator('bz-customer-main-page[class]');
    this.navToSubmissionScreen = page.locator(
      "button[class='p-ripple p-element bz-button-md bz-button-ghost-neutral p-button p-component p-button-icon-only']"
    );
    this.customerSidePanel = page.locator("bz-inbox[class='ng-star-inserted']");
    this.verificationTypeManual = page.locator(
      "div[class='bz-flex bz-flex-column'] bz-badge[ng-reflect-label ='Manually Verified'] span"
    );
    this.figmaMainNewRiskWidget = page.locator(
      "bz-collapse-panel[class='ng-tns-c186-25 bz-collapse-panel ng-star-inserted']"
    );
    this.figmaNewRiskWidget = page.locator(
      "bz-collapse-panel[class='ng-tns-c186-22 bz-collapse-panel ng-star-inserted']"
    );
    this.riskIdClick = page.locator("a[class='bz-body-sm bz-clickable ng-star-inserted']");
    this.riskWidgetValue = page.locator(
      "bz-customer-overview-page div bz-collapse-panel:nth-of-type(2) [class*='bz-body-sm']"
    );
    this.riskWidgetValue2 = page.locator(
      "bz-customer-overview-page div bz-collapse-panel [class*='bz-body-sm']"
    );
    this.riskWidgetAttributes = page.locator(
      'bz-customer-overview-page div bz-collapse-panel:nth-of-type(2) label'
    );
    this.riskWidgetAttributes2 = page.locator(
      'bz-customer-overview-page div bz-collapse-panel label'
    );
    this.riskCollapseExpander = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-minus']"
    );
    this.riskContainer = page.locator("div [class= 'bz-flex bz-gap-4 bz-mb-3']");
    this.sectionHeader = page.locator(
      'bz-customer-overview-page div bz-collapse-panel:nth-of-type(2) h4'
    );
    this.sectionHeader2 = page.locator(
      "bz-customer-overview-page div bz-collapse-panel  h4[class='bz-m-0']"
    );
    this.sectionHeader3 = page.locator('bz-customer-overview-page div bz-collapse-panel h4');
    this.page = page;
    this.sanctionsClick = page.locator("bz-tab-header[text='Sanctions']");
    this.entityNameValue = page.locator(
      "div[class='detail bz-flex bz-flex-column'] span[class='bz-body-sm bz-font-medium bz-mt-1']"
    );
    this.searchCountryValue = page.locator(
      "div[class='bz-flex bz-align-items-center bz-mt-1'] span[class='bz-body-sm bz-font-medium']"
    );
    this.searchCountryFlag = page.locator(
      "div[class='bz-flex bz-align-items-center bz-mt-1'] bz-avatar[class='bz-mr-1 bz-avatar-wraper ng-star-inserted']"
    );
    this.sanctionResultvalue = page.locator(
      "div[class='bz-flex bz-flex-row bz-flex-auto bz-mt-2 bz-mb-4 bz-gap-8'] bz-badge[ng-reflect-label='Match Found that requires inve']"
    );
    this.sanctionResultvalueNMF = page.locator("bz-badge[ng-reflect-label='No Match Found']");
    this.lexisNameSrchVal = page.locator("div[class='bz-flex bz-flex-column detail-w-50'] span");
    this.lexisAddressValue = page.locator(
      "div[class='bz-flex bz-flex-column detail-w-50'] span[class='bz-body-sm bz-font-medium bz-mt-1 bz-pr-2']"
    );
    this.sanctionsExpandersminus = page.locator("span[ng-reflect-ng-class='bzi bz-minus']");
    this.sanctionsExpandersplus = page.locator("span[ng-reflect-ng-class='bzi bz-plus']");
    this.valSrcOfnce = page.locator(
      "div[class='bz-flex flex-wrap ng-star-inserted'] div[class='bz-flex bz-flex-column detail-w-50'] span[class='bz-body-sm bz-font-medium bz-mt-1']"
    );
    this.valuesRsnCmts = page.locator(
      "div[class='bz-flex bz-flex-column detail-w-100 bz-mt-4'] span[class='bz-body-sm bz-font-medium pre-wrap bz-mt-1']"
    );
    this.rightValnmeadrs = page.locator(
      "div[class='bz-flex bz-align-items-center detail-w-50'] span[class='bz-body-sm bz-font-medium bz-mt-1']"
    );
    this.customerNamePanel = page.locator("bz-tab-header[text='Overview'] span");
    this.unAvailable = page.locator(
      "div[class='bz-flex bz-flex-column bz-align-items-center'] p[class='description bz-font-content ng-star-inserted']"
    );
    this.panelTab = page.locator("div[class='p-tabview-nav-content'] ul[class='p-tabview-nav']");
    this.clearedTab = page.locator("//a[text()=' Cleared ']");
    this.overviewTab = page.locator("bz-tab-header[text='Overview'] span");

    this.risksTab = page.locator("bz-tab-header[text='Risks'] span");

    this.esgTab = page.locator("bz-tab-header[text='ESG'] span");

    this.financialTab = page.locator("bz-tab-header[text='Financial'] span");

    this.sanctionsTab = page.locator("bz-tab-header[text='Sanctions'] span");

    this.hierarchyTab = page.locator("bz-tab-header[text='Hierarchy'] span");

    this.otherCompaniesTab = page.locator("bz-tab-header[text='Other Companies'] span");
    this.otherTab = page.locator("bz-tab-header[text='Other'] span");
    this.keyText = page.locator("h4[class='bz-m-0 mb'] div[class='mb']");

    this.links = page.locator("div[class='section-header ng-star-inserted'] a");

    this.customerMainPage = page.locator(
      "div[class='bz-flex bz-align-items-center bz-gap-1 bz-clickable'] h3"
    );
    this.customerTab = page.locator("ul[class='p-tabview-nav']");
    this.toggleShowBlockedButton = page.locator("bz-toggle[label='Show blocked'] div span");
    this.hierarchyMainHeader = page.locator(
      " div[class='bz-flex bz-flex-column bz-row-gap-4'] h4[class='bz-m-0 bz-mr-2']"
    );
    this.hierarchyContentHeader = page.locator(
      "div [class='bz-flex bz-align-items-center'] label[class='bz-body-label bz-neutrals-text-weak bz-font-medium'] "
    );
    this.hierarchyContentNoneListed = page.locator(
      "div[class='bz-flex bz-flex-column'] span[class='bz-body-sm bz-font-medium bz-mt-1']"
    );
    this.screening = page.locator("bz-tab-header[text='Screening'] span");
    this.hierarchyTabContentents = page.locator("div[class='p-tabview p-component']");
    this.toggleShowBlockedButtonStatus = page.locator("bz-toggle[label='Show blocked'] div input");
    this.tableHeaders = page.locator(
      "table th[style*='display: flex'][ng-reflect-field] div[class='text-header-cell ng-star-inserted'] span"
    );
    this.tableGridDetail = page.locator('table tbody tr');
    this.table = page.locator('table');
    this.listView = page.getByText('Inbox view');
    this.workFlowView = page.getByText('Workflow view');
    this.statusFilter = page.locator("bz-input-dropdown[placeholder='Status']");
    this.transactionTypeFilter = page.locator("bz-input-dropdown[placeholder='Transaction type']");
    this.dateFilter = page.locator("bz-date-picker[placeholder='Date']");
    this.statusFilterValue = page.locator(
      "bz-input-dropdown[placeholder='Status'] span[class='bz-item-title bz-font-content']"
    );
    this.spiningLoader = page.locator('bz-loader[ng-reflect-loading="true"]');
    this.customerHeaderSort = page.locator("th[ng-reflect-field='customer'] bz-sort-icon");
    this.brokerHeaderSort = page.locator("th[ng-reflect-field='broker'] bz-sort-icon");
    this.transactiontypeHeaderSort = page.locator(
      "th[ng-reflect-field='transaction'] bz-sort-icon"
    );
    this.dateHeaderSort = page.locator("th[ng-reflect-field='date'] bz-sort-icon");
    this.statusHeaderSort = page.locator("th[ng-reflect-field='status'] bz-sort-icon");
    this.toolTip = page.locator('.p-tooltip-text');
    this.searchSuggestion = page.locator('.p-multiselect-items-wrapper p-multiselectitem');
    this.statusClearFilter = page.locator(
      "bz-input-dropdown[placeholder='Status'] i.p-multiselect-clear-icon"
    );
    this.transactionClearFilter = page.locator(
      "bz-input-dropdown[placeholder='Transaction type'] i.p-multiselect-clear-icon"
    );
    this.calenderClearFilter = page.locator('i.p-calendar-clear-icon');
    this.pageSearch = page.locator("input[placeholder='Search']");
    this.arrowButton = page.locator('.bzi.bz-arrow-up-right');
    this.dynamicForm = page.locator('bz-page-container[ng-reflect-is-aside-shown="true"]');
    this.editTableView = page.locator('table th[style*="display: flex"] button i');
    this.assigneeCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="assignee"] span');
    this.paginatorNextPageButton = page.locator('button.p-paginator-next');
    this.paginatorFirstPageButton = page.locator('button.p-paginator-first');
    this.customerPanelName = page.locator('.bz-side-panel-header h3');
    this.customerpanelPositive = page.locator('div[class="bz-flex flex-wrap first-section"] span');
    this.customerPanelMix = page.locator('div[class="bz-flex flex-wrap first-section"] span');
    this.NVDAtitle = page.locator('bz-body-sm bz-font-medium ng-star-inserted');
    this.financialTabNameNeg = page.locator('div[class="bz-flex flex-wrap first-section"] label');
    this.customerPanelunexpectedError = page
      .locator('p.description.bz-font-content.ng-star-inserted')
      .nth(2);

    //
    this.empLocReveri = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.valuesEmpLocRev = page.locator(
      "div[class='bz-flex bz-flex-column'] span[class='bz-body-sm bz-font-medium']"
    );
    this.atrbtsASDCAP = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.valuesASDAP = page.locator("div[class ='bz-body-sm']");
    this.overviewFigma = page.locator("div[class='p-tabview p-component']");
    this.mainCustmerPage = page.locator("bz-customer-overview-page[class='ng-star-inserted']");

    //

    this.overviewEmployees = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.employeesNumber = page.locator("span[class='bz-body-sm bz-font-medium']");
    this.employeeIcon = page.locator("i[class ='bzi bz-users-01 bz-mr-1 ng-star-inserted']");
    this.overviewLocation = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.locationAddress = page.locator("span[class = 'bz-body-sm bz-font-medium']");
    this.addressflag = page.locator(
      "div[class='bz-avatar-xxs p-avatar p-component p-avatar-image p-avatar-circle p-avatar-xl'] img[class='ng-star-inserted']"
    );
    this.addressIcon = page.locator(
      "p-avatar[shape='circle'] div[class='bz-avatar-xxs p-avatar p-component p-avatar-image p-avatar-circle p-avatar-xl'] img[class='ng-star-inserted']"
    );
    this.annualRevenue = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.annualIcon = page.locator("[class = 'bzi bz-users-01 bz-mr-1']");
    this.revenueAmount = page.locator("span[class='bz-body-sm bz-font-medium']");
    this.verification = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.verificationType = page.locator(
      "div[class='bz-flex bz-flex-column'] bz-badge[ng-reflect-label ='Auto Verified'] span"
    );
    this.greenTickVer = page.locator(
      "span[class='bz-badge bz-body-caption bz-badge-sm bz-emphasis-md bz-green'] i[class='bz-icon bz-icon-mr bzi bz-check ng-star-inserted']"
    );
    this.dandbLogo = page.locator(
      "div[class='bz-flex bz-justify-content-between'] img[class='ng-star-inserted']"
    );
    this.mainDandBLogo = page.locator(
      "div[class='bz-flex bz-justify-content-between'] img[class='ng-star-inserted']"
    );
    this.collapseExpander = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-minus']"
    );
    this.MaincollapseExpander = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-minus']"
    );
    this.collapseExpanderPlus = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-plus']"
    );
    this.MaincollapseExpanderPlus = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-plus']"
    );
    this.addressExpander = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.detailAddressExp = page.locator("div[class ='bz-body-sm']");
    this.sectorExpander = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.detailSectorExp = page.locator("div[class ='bz-body-sm']");
    this.dunsExpander = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.detailDunsExp = page.locator("div[class ='bz-body-sm']");
    this.websiteExpander = page.locator("div[class ='bz-body-label bz-neutrals-text-weak']");
    this.webSiteLink = page.locator("a[class='bz-body-sm bz-clickable ng-star-inserted']");
    this.googleMaps = page.locator("bz-map[class='bz-map ng-star-inserted']");
    this.namesAlt = page.locator("div[class ='bz-body-sm']");
    this.namesPrev = page.locator("div[class ='bz-body-sm']");
    this.altNames = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.prevNames = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.unexpError = page.locator("p[class ='description bz-font-content ng-star-inserted']");
    this.backToSubPage = page.locator(
      "span[class='bzi bz-align-right-01 p-button-icon ng-star-inserted']"
    );
    this.navToMainCustPage = page.locator(
      "div[class='bz-flex bz-align-items-center bz-gap-1 bz-clickable']"
    );
    this.hrefgoogle = page.locator("a[target='_blank'][dir='ltr']");

    this.empLocReveri = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.atrbtsASDCAP = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.valuesASDAP = page.locator("div[class ='bz-body-sm']");
    this.overviewFigma = page.locator("div[class='p-tabview p-component']");
    this.mainCustmerPage = page.locator("bz-customer-overview-page[class='ng-star-inserted']");

    //

    this.overviewEmployees = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.employeesNumber = page.locator("span[class='bz-body-sm bz-font-medium']");
    this.employeeIcon = page.locator("i[class ='bzi bz-users-01 bz-mr-1 ng-star-inserted']");
    this.overviewLocation = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.locationAddress = page.locator("span[class = 'bz-body-sm bz-font-medium']");
    this.addressflag = page.locator(
      "div[class='bz-avatar-xxs p-avatar p-component p-avatar-image p-avatar-circle p-avatar-xl'] img[class='ng-star-inserted']"
    );
    this.addressIcon = page.locator(
      "p-avatar[shape='circle'] div[class='bz-avatar-xxs p-avatar p-component p-avatar-image p-avatar-circle p-avatar-xl'] img[class='ng-star-inserted']"
    );
    this.annualRevenue = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.annualIcon = page.locator("[class = 'bzi bz-users-01 bz-mr-1']");
    this.revenueAmount = page.locator("span[class='bz-body-sm bz-font-medium']");
    this.verification = page.locator(
      "bz-customer-overview-page[class='ng-star-inserted'] label[class='bz-body-label']"
    );
    this.verificationType = page.locator(
      "div[class='bz-flex bz-flex-column'] bz-badge[ng-reflect-label ='Auto Verified'] span"
    );
    this.greenTickVer = page.locator(
      "span[class='bz-badge bz-body-caption bz-badge-sm bz-emphasis-md bz-green'] i[class='bz-icon bz-icon-mr bzi bz-check ng-star-inserted']"
    );
    this.dandbLogo = page.locator(
      "div[class='bz-flex bz-justify-content-between'] img[class='ng-star-inserted']"
    );
    this.mainDandBLogo = page.locator(
      "div[class='bz-flex bz-justify-content-between'] img[class='ng-star-inserted']"
    );
    this.collapseExpander = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-minus']"
    );
    this.MaincollapseExpander = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-minus']"
    );
    this.collapseExpanderPlus = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-plus']"
    );
    this.MaincollapseExpanderPlus = page.locator(
      "div[ng-reflect-ng-class ='[object Object]'] i[ng-reflect-ng-class ='bzi bz-plus']"
    );
    this.addressExpander = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.detailAddressExp = page.locator("div[class ='bz-body-sm']");
    this.sectorExpander = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.detailSectorExp = page.locator("div[class ='bz-body-sm']");
    this.dunsExpander = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.detailDunsExp = page.locator("div[class ='bz-body-sm']");
    this.websiteExpander = page.locator("div[class ='bz-body-label bz-neutrals-text-weak']");
    this.webSiteLink = page.locator("a[class='bz-body-sm bz-clickable ng-star-inserted']");
    this.googleMaps = page.locator("bz-map[class='bz-map ng-star-inserted']");
    this.namesAlt = page.locator("div[class ='bz-body-sm']");
    this.namesPrev = page.locator("div[class ='bz-body-sm']");
    this.altNames = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.prevNames = page.locator("label[class ='bz-body-label bz-neutrals-text-weak']");
    this.unexpError = page.locator("p[class ='description bz-font-content ng-star-inserted']");
    this.backToSubPage = page.locator(
      "span[class='bzi bz-align-right-01 p-button-icon ng-star-inserted']"
    );
    this.navToMainCustPage = page.locator(
      "div[class='bz-flex bz-align-items-center bz-gap-1 bz-clickable']"
    );
    this.hrefgoogle = page.locator("a[target='_blank'][dir='ltr']");
    this.websiteNA = page.locator("span[class='bz-body-sm ng-star-inserted']");
    this.mapsNA = page.locator("div[class='empty-map ng-star-inserted']");
    this.unverified = page.locator("span[class='bz-display-4 bz-primary-text-default']");

    this.pageUtils = new pageUtils(page);
    this.ticker = page.locator(
      "div[class='bz-flex bz-font-content bz-p-4 bz-border-bottom-1 bz-neutrals-border-default ng-star-inserted'] span"
    );
    this.mainPage = page.locator('h3 ');
    this.UnexpectedError = page.locator('p.description.bz-font-content.ng-star-inserted').nth(0);
    this.OverallEligibility = page.locator(
      '.bz-flex.bz-align-items-center.bz-mb-4 bz-badge span span'
    );
    this.naics = page.locator('.bz-flex-row div.ellipsis-overflow').nth(0);
    this.sics = page.locator('.bz-flex-row div.ellipsis-overflow').nth(1);
    this.revenueValue = page.locator('div:has(.bz-body-label.bz-neutrals-text-weak)+span').nth(0);
    this.GHGEmissionsValue = page
      .locator('div:has(.bz-body-label.bz-neutrals-text-weak)+span')
      .nth(1);
    this.snPScore = page
      .locator('.bz-gap-3.bz-flex.bz-flex-row.bz-align-items-center label')
      .nth(0);
    this.snPEligibility = page.locator('.bz-gap-3.bz-flex.bz-flex-row bz-badge span span').nth(0);
    this.sustainaliticsScore = page
      .locator('.bz-gap-3.bz-flex.bz-flex-row.bz-align-items-center label')
      .nth(1);
    this.sustainaliticsEligibility = page
      .locator('.bz-gap-3.bz-flex.bz-flex-row bz-badge span span')
      .nth(1);
    this.repRiskScore = page
      .locator('.bz-gap-3.bz-flex.bz-flex-row.bz-align-items-center label')
      .nth(2);
    this.repRiskEligibility = page
      .locator('.bz-gap-3.bz-flex.bz-flex-row bz-badge span span')
      .nth(2);
    this.tabPage = page.locator('.p-tabview-panels');
    this.activeTab = page.locator('li.p-highlight span');
  }
  getUnderwriterName(underwriterName: String) {
    return `//span[text()='${underwriterName}']`;
  }
}
