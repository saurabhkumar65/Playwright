//import { expect, Locator, Page } from '@playwright/test';
import { Locator, Page } from '@playwright/test';

export class RiskPage {
  readonly page: Page;

  //add locators
  readonly riskButton: Locator;
  readonly toggleShowOnHoldButton: Locator;
  readonly toggleShowOnHoldButtonStatus: Locator;
  readonly tableGridDetail: Locator;
  readonly tableHeaders: Locator;
  readonly table: Locator;
  readonly listView: Locator;
  readonly clickAway: Locator;
  readonly workFlowView: Locator;
  readonly pageSearch: Locator;
  readonly removeFilter: Locator;
  readonly addFilter: Locator;
  readonly addFilterList: Locator;
  readonly idFilter: Locator;
  readonly statusFilter: Locator;
  readonly transactionTypeFilter: Locator;
  readonly dateFilter: Locator;
  readonly statusClearFilter: Locator;
  readonly transactionClearFilter: Locator;
  readonly calenderClearFilter: Locator;
  readonly customerFilter: Locator;
  readonly brokerFilter: Locator;
  readonly assigneeFilter: Locator;
  readonly cobFilter: Locator;
  readonly lastUpdatedFilter: Locator;
  readonly arrowButton: Locator;
  readonly dynamicForm: Locator;
  readonly actionPane: Locator;
  readonly actionList: Locator;
  readonly actionButton: Locator;
  readonly tableHeaderCheckbox: Locator;
  readonly assigneeCheckBox: Locator;
  readonly cobCheckBox: Locator;
  readonly lastUpdatedCheckBox: Locator;
  readonly idCheckBox: Locator;
  readonly customerCheckBox: Locator;
  readonly brokerCheckBox: Locator;
  readonly transactionTypeCheckBox: Locator;
  readonly statusCheckBox: Locator;
  readonly dateCheckBox: Locator;
  readonly priorityCheckBox: Locator;
  readonly brokerContactCheckBox: Locator;
  readonly gridTransactionType: Locator;
  readonly gridStatus: Locator;
  readonly gridDate: Locator;
  readonly gridLastUpdated: Locator;
  readonly customerHeaderSort: Locator;
  readonly brokerHeaderSort: Locator;
  readonly transactiontypeHeaderSort: Locator;
  readonly dateHeaderSort: Locator;
  readonly statusHeaderSort: Locator;
  readonly kanbanGridDetail: Locator;
  readonly kanbanBoard: Locator;
  readonly kanbanCard: Locator;
  readonly teamDrpDwn: Locator;
  readonly declineDrpDwn: Locator;
  readonly putOnHoldDrpDwn: Locator;
  readonly putOnHoldDrpDwnOptions: Locator;
  readonly assignToTeam: Locator;
  readonly assignToSelf: Locator;
  readonly putOnHold: Locator;
  readonly accept: Locator;
  readonly decline: Locator;
  readonly declineAction: Locator;
  readonly putOnHoldBtn: Locator;
  readonly toggleOnhold: Locator;
  readonly updateHoldReason: Locator;
  readonly updateHoldReasonButton: Locator;
  readonly bulkSelBannerCount: Locator;
  readonly bulkAssignToTeam: Locator;
  readonly bulkDecline: Locator;
  readonly bulkPutOnHold: Locator;
  readonly bulkResume: Locator;
  readonly bulkUpdateOnHold: Locator;
  readonly selectedRisks: Locator;
  readonly riskResume: Locator;
  readonly editTableView: Locator;
  readonly editTableViewPopup: Locator;
  readonly editTableViewCheckedHeaders: Locator;
  readonly defaultView: Locator;
  readonly groupTableBy: Locator;
  readonly noneSliderButton: Locator;
  readonly enterViewName: Locator;
  readonly saveCurrentViewButton: Locator;
  readonly enterViewNameDisabled: Locator;
  readonly activeCustomView: Locator;
  readonly deleteViewIcon: Locator;
  readonly tickViewIcon: Locator;
  readonly customViewsList: Locator;
  readonly customViewError: Locator;
  readonly customView4: Locator;
  readonly risks: Locator;
  readonly riskMainPage: Locator;
  readonly submsnScoreOptions: Locator;
  readonly submsnScoreDrpdown: Locator;
  readonly claimsDrpdownOptions: Locator;
  readonly claimsDrpdown: Locator;
  readonly binderDrpdownOptions: Locator;
  readonly binderDrpDown: Locator;
  readonly scoringRationale: Locator;
  readonly renewalCheckBox: Locator;
  readonly saveBtn: Locator;
  readonly formSubmittedPopup: Locator;
  readonly backBtn: Locator;
  readonly submsnCollapsePanelMinus: Locator;
  readonly submsnCollapsePanelPlus: Locator;
  readonly sbmsnScoreErrMsg: Locator;
  readonly claimsErrMsg: Locator;
  readonly binderErrMsg: Locator;
  readonly overviewTab: Locator;
  readonly manualAssesmentPage: Locator;
  readonly renewalCheckBoxUnSelected: Locator;
  readonly renewalCheckBoxSelected: Locator;
  readonly unSelectAll: Locator;
  readonly closeandMarkasPPL: Locator;
  readonly closeandMarkasJunk: Locator;
  readonly closeandMarkasDuplicate: Locator;
  readonly paginatorSecondPageButton: Locator;
  readonly bulkActionBanner: Locator;
  readonly paginatorFirstPageButton: Locator;
  readonly checkedBoxes: Locator;
  readonly uncheckedBoxes: Locator;
  readonly ratingWFColumn: Locator;
  readonly priorityMinusIcon: Locator;
  readonly priorityWFText: Locator;
  readonly highPriority: Locator;
  readonly mediumPriority: Locator;
  readonly lowPriority: Locator;
  readonly notSetPriority: Locator;
  readonly priorityValues: Locator;
  readonly priorityWFHeader: Locator;
  readonly priorityHeaderLV: Locator;

  constructor(page: Page) {
    this.renewalCheckBoxUnSelected = page.locator("bz-input-checkbox input[aria-checked='false']");
    this.renewalCheckBoxSelected = page.locator("bz-input-checkbox input[aria-checked='true']");
    this.manualAssesmentPage = page.locator("div[class='manual-assessment-page']");
    this.overviewTab = page.locator('a').filter({ hasText: 'Overview' });

    this.binderErrMsg = page.locator("bz-input-dropdown[ng-reflect-label='Binder'] p span");
    this.claimsErrMsg = page.locator("bz-input-dropdown[ng-reflect-label='Claims'] p span");
    this.sbmsnScoreErrMsg = page.locator(
      " bz-input-dropdown[ng-reflect-label='Submission Score'] p span"
    );
    this.submsnCollapsePanelMinus = page.locator(
      "div[class='manual-assessment-page'] i[ng-reflect-ng-class='bzi bz-minus']"
    );
    this.submsnCollapsePanelPlus = page.locator(
      "div[class='manual-assessment-page'] i[ng-reflect-ng-class='bzi bz-plus']"
    );
    this.backBtn = page.locator("bz-button[icon='bzi bz-arrow-left']");
    this.formSubmittedPopup = page.locator('p-toastitem');
    this.saveBtn = page.locator("bz-button[label='Save']");
    this.renewalCheckBox = page.locator('bz-input-checkbox');
    this.scoringRationale = page.locator('bz-textarea textarea');
    this.binderDrpDown = page.locator("bz-input-dropdown[ng-reflect-label='Binder'] p-dropdown");
    this.binderDrpdownOptions = page.locator(
      "bz-input-dropdown[ng-reflect-label='Binder'] p-dropdownitem span"
    );
    this.claimsDrpdown = page.locator("bz-input-dropdown[ng-reflect-label='Claims'] p-dropdown");
    this.claimsDrpdownOptions = page.locator(
      "bz-input-dropdown[ng-reflect-label='Claims'] p-dropdownitem span"
    );
    this.submsnScoreDrpdown = page.locator(
      "bz-input-dropdown[ng-reflect-label='Submission Score'] p-dropdown"
    );
    this.submsnScoreOptions = page.locator(
      "bz-input-dropdown[ng-reflect-label='Submission Score'] p-dropdownitem span"
    );
    this.page = page;
    this.riskButton = page.getByText('Risks');
    this.tableHeaders = page.locator(
      "table th[style*='display: flex'][ng-reflect-field] div[class='text-header-cell ng-star-inserted'] span"
    );
    this.toggleShowOnHoldButton = page.locator(
      "bz-toggle[ng-reflect-label='Show On Hold'] div span"
    );
    this.toggleShowOnHoldButtonStatus = page.locator(
      "bz-toggle[ng-reflect-label='Show On Hold'] div input"
    );
    this.tableGridDetail = page.locator('table tbody tr');
    this.table = page.locator('table');
    this.listView = page.locator('div[aria-labelledby="List view"]');
    this.clickAway = page.locator('.bz-app-header-nav-left img');
    this.workFlowView = page.locator('div[aria-labelledby="Workflow view"]');
    this.pageSearch = page.locator("input[placeholder='Search']");
    this.arrowButton = page.locator('.bzi.bz-arrow-up-right');
    this.assigneeCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="assignee"] span');
    this.cobCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="cob"] span');
    this.lastUpdatedCheckBox = page.locator(
      'bz-input-checkbox[ng-reflect-name="lastUpdated"] span'
    );
    this.idCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="bzyId"] label');
    this.priorityCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="priority"] label');
    this.customerCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="customer"]');
    this.brokerCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="broker"]');
    this.brokerContactCheckBox = page.locator(
      'bz-input-checkbox[ng-reflect-name="brokerContract"] label'
    );
    this.transactionTypeCheckBox = page.locator(
      'bz-input-checkbox[ng-reflect-name="transaction"] label'
    );
    this.dateCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="date"]');
    this.statusCheckBox = page.locator('bz-input-checkbox[ng-reflect-name="status"]');
    this.gridStatus = page.locator('th[ng-reflect-field="status"]');
    this.gridDate = page.locator('th[ng-reflect-field="date"]');
    this.gridLastUpdated = page.locator('th[ng-reflect-field="lastUpdated"]');
    this.gridTransactionType = page.locator('th[ng-reflect-field="transaction"]');
    this.dynamicForm = page.locator('bz-page-container[ng-reflect-is-aside-shown="true"]');
    this.actionPane = page.locator('.p-overlaypanel-content');
    this.actionList = page.locator('.p-overlaypanel-content bz-button span');
    this.actionButton = page.locator('.bzi.bz-dots-vertical');
    this.tableHeaderCheckbox = page.locator('p-tableheadercheckbox');
    this.customerHeaderSort = page.locator("th[ng-reflect-field='customer'] bz-sort-icon");
    this.brokerHeaderSort = page.locator("th[ng-reflect-field='broker'] bz-sort-icon");
    this.transactiontypeHeaderSort = page.locator(
      "th[ng-reflect-field='transaction'] bz-sort-icon"
    );
    this.dateHeaderSort = page.locator("th[ng-reflect-field='date'] bz-sort-icon");
    this.statusHeaderSort = page.locator("th[ng-reflect-field='status'] bz-sort-icon");
    this.statusClearFilter = page.locator(
      "bz-input-dropdown[ng-reflect-placeholder='Status'] i.p-multiselect-clear-icon"
    );
    this.transactionClearFilter = page.locator(
      "bz-input-dropdown[ng-reflect-placeholder='Transaction Type'] i.p-multiselect-clear-icon"
    );
    this.calenderClearFilter = page.locator('i.p-calendar-clear-icon');
    this.statusFilter = page.locator("bz-input-dropdown[ng-reflect-placeholder='Status']");
    this.transactionTypeFilter = page.locator(
      "bz-input-dropdown[ng-reflect-placeholder='Transaction Type']"
    );
    this.removeFilter = page.locator('span.hideFilter');
    this.addFilter = page.locator("p-multiselect[ng-reflect-placeholder='Add Filter']");
    this.addFilterList = page.locator('div.p-multiselect-items-wrapper ul[role="listbox"]');
    this.idFilter = page.locator("bz-input-dropdown[ng-reflect-placeholder='ID']");
    this.dateFilter = page.locator("bz-date-picker[ng-reflect-placeholder='Date']");
    this.customerFilter = page.locator("bz-input-dropdown[ng-reflect-placeholder='Customer']");
    this.brokerFilter = page.locator("bz-input-dropdown[ng-reflect-placeholder='Broker']");
    this.assigneeFilter = page.locator('bz-input-dropdown[ng-reflect-placeholder="Assignee"]');
    this.cobFilter = page.locator("bz-input-dropdown[ng-reflect-placeholder='COB']");
    this.lastUpdatedFilter = page.locator('bz-date-picker[ng-reflect-placeholder="Last Updated"]');
    this.kanbanGridDetail = page.locator('bz-kanban-card');
    this.kanbanBoard = page.locator('bz-kanban-board');
    this.kanbanCard = page.locator('bz-kanban-card .bz-card');
    this.teamDrpDwn = page.locator(
      'bz-input-dropdown[ng-reflect-placeholder="Select Team Member"]'
    );
    this.declineDrpDwn = page.locator(
      'bz-input-dropdown[ng-reflect-placeholder="Select Decline Reason"]'
    );
    this.putOnHoldDrpDwn = page.locator(
      'bz-input-dropdown[ng-reflect-placeholder="Select Hold Reason"]'
    );
    this.putOnHoldDrpDwnOptions = page.locator(
      'bz-input-dropdown[ng-reflect-placeholder="Select Hold Reason"] .p-dropdown-items span'
    );
    this.assignToTeam = page.locator('bz-button[ng-reflect-label="Assign to Team Member"] button');
    this.assignToSelf = page.locator('bz-button[ng-reflect-label="Assign to Self"] button');
    this.putOnHold = page.locator('bz-button[ng-reflect-label="Put On Hold"] button');
    this.declineAction = page.locator('bz-button[ng-reflect-label="Decline"] button');
    this.accept = page.locator('p-button[ng-reflect-label="Assign"]');
    this.decline = page.locator('div[role="dialog"] p-button[ng-reflect-label="Decline"]');
    this.putOnHoldBtn = page.locator('.p-dialog p-button[ng-reflect-label="Put on Hold"]');
    this.toggleOnhold = page.locator("bz-toggle[ng-reflect-label='Show On Hold'] div span");
    this.updateHoldReason = page.locator('p-button[ng-reflect-label="Update Hold Reason"]');
    this.updateHoldReasonButton = page.locator('p-button[ng-reflect-label="Update Hold Reason"]');
    this.riskResume = page.locator('bz-button[ng-reflect-label="Resume"] button');
    this.editTableView = page.locator('table th[style*="display: flex"] button i');
    this.editTableViewPopup = page.locator('.p-overlaypanel-content');
    this.editTableViewCheckedHeaders = page.locator(
      'li bz-input-checkbox:has(div.p-checkbox-checked)~span'
    );
    this.saveCurrentViewButton = page.locator('div.bz-save-btn');
    this.defaultView = page.getByText('Default view');
    this.groupTableBy = page.getByText('Group table by');
    this.noneSliderButton = page.locator('bz-action bz-clickable-cursor');
    this.enterViewName = page.locator('input[placeholder="Enter view name"]');
    this.enterViewNameDisabled = page.locator('.bz-disabled-cursor');
    this.customViewError = page.locator('.bz-input-wraper.ng-untouched.ng-dirty p span');
    this.activeCustomView = page.locator('div.bz-views-list div.bz-views-item.selected span');
    this.deleteViewIcon = page.locator('div.bz-views-list div.bz-views-item~i');
    this.tickViewIcon = page.locator('div.bz-views-item.selected i.bz-check');
    this.customViewsList = page.locator('div.bz-views-list div.bz-views-item span');
    this.customView4 = page.getByText('Daenery Targaryen 72531DT');
    this.risks = page.getByText('Risks');
    this.riskMainPage = page.locator('main[class="bz-page-main"]');
    this.bulkSelBannerCount = page.locator('h3.dynamictext');
    this.bulkAssignToTeam = page.locator('p-button[ng-reflect-label="Assign to Team Member"]');
    this.bulkDecline = page.locator('p-button[ng-reflect-label="Decline"]');
    this.bulkPutOnHold = page.locator('p-button[ng-reflect-label="Put On Hold"]');
    this.bulkResume = page.locator('p-button[ng-reflect-label="Resume"]');
    this.bulkUpdateOnHold = page.locator('p-button[ng-reflect-label="Update Hold Reason"]');
    this.selectedRisks = page.locator(
      'table tbody tr td div[role="checkbox"][aria-checked="true"]'
    );
    this.unSelectAll = page.locator('p-button[ng-reflect-label="Unselect All"]');
    this.closeandMarkasPPL = page.locator('p-button[ng-reflect-label="Close & Mark as PPL"]');
    this.closeandMarkasJunk = page.locator('p-button[ng-reflect-label="Close & Mark as Junk"]');
    this.closeandMarkasDuplicate = page.locator(
      'p-button[ng-reflect-label="Close & Mark as Duplicate"]'
    );
    this.paginatorSecondPageButton = page.locator(
      'span.p-paginator-pages button.p-paginator-page:nth-child(2)'
    );
    this.bulkActionBanner = page.locator('div.option-box-bulk');
    this.paginatorFirstPageButton = page.locator('button.p-paginator-first');
    this.tableHeaderCheckbox = page.locator('p-tableheadercheckbox span');
    this.checkedBoxes = page.locator('table tbody tr div[role="checkbox"][aria-checked="true"]');
    this.uncheckedBoxes = page.locator('table tbody tr div[role="checkbox"][aria-checked="false"]');
    this.ratingWFColumn = page.locator('bz-kanban-column[ng-reflect-title="Rating"]');
    this.priorityMinusIcon = page.locator('i.bz-minus');
    this.priorityWFText = page.locator('span.bz-badge > i.bz-minus + span');
    this.highPriority = page.locator('div.p-dropdown-panel bz-badge[ng-reflect-label="High"]');
    this.mediumPriority = page.locator('div.p-dropdown-panel bz-badge[ng-reflect-label="Medium"]');
    this.lowPriority = page.locator('div.p-dropdown-panel bz-badge[ng-reflect-label="Low"]');
    this.notSetPriority = page.locator('div.p-dropdown-panel bz-badge[ng-reflect-label="Not Set"]');
    this.priorityValues = page.locator('span div.bz-dropdown-menu');
    this.priorityWFHeader = page.locator('span.bz-body-sm.bz-label:has-text("Priority")');
    this.priorityHeaderLV = page.locator('th div > span:has-text("Priority")');
  }

  getRiskLink(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../../preceding-sibling::td`;
  }
  getRiskLinkNACP(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../../preceding-sibling::td[19]/div`;
  }
  getRiskLinkUAops(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../../preceding-sibling::td[6]/div`;
  }
  getRiskLinkNACPUserAccount(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../../following-sibling::td[3]/div/p`;
  }
  getRiskLinkNACPUaposUserAccount(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../../following-sibling::td[2]/div/p`;
  }
  getOptions() {
    return `select[class="examples-select-element"]`;
  }
  getReferralLink(custName: String) {
    return `//p[text()=' ${custName} ']`;
  }
  getUkReferralId(referralId: String) {
    return `//span[text()=' ${referralId} ']`;
  }
  getRiskLinkForNTU(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../..//td[16]/following::td[1]/div/button/i`;
  }
  getActionBtn(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../../following-sibling::td/div/div/button/i[@class="bzi bz-dots-vertical"]`;
  }
  getActionBtnUsml(riskBzyId: String) {
    return `//p[text()=' ${riskBzyId} ']/../..//td[12]/div/button/i`;
  }

  getCobCodeoptions(cobCode: String) {
    return this.page.locator(`//li[@aria-label='${cobCode}']`);
  }
  selectCobOption() {
    return this.page.locator(`//div[text()="COB Code"]/following-sibling::div`);
  }
  
  selectCarrierOption(carrierOption: String) {
     return this.page.locator(`//span[text()=' ${carrierOption} ']`);
  }

  getCarrierOption(carrierOption: String) {
    return `//span[text()=' ${carrierOption} ']`;
  }
  getSpanTextArea(textAreaLabel: String) {
    return this.page.locator(`//span[text()='${textAreaLabel}']`);
  }
  getInputType(inputFieldLabel: String) {
    return this.page.locator(`//input[@type="${inputFieldLabel}"]`);
  }
   getAnchorTag(text: String) {
    return this.page.locator(`//a[text()='${text}']`);
  }
   getSpanContainsArea(searchTerm: String) {
    return this.page.locator(`//span[contains(text(),"${searchTerm}")]`);
  }

}
