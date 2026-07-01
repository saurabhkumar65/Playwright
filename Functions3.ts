import { expect, Locator, Page } from '@playwright/test';
import { POManager } from './POManager';
import path from 'path';

export class HxPage {
  readonly page: Page;
  readonly locators: Object;
  readonly azureADBtn: any;
  readonly emailIdField: any;
  readonly submitBtn: any;
  readonly startPolicy: any;
  readonly pricingTab: any;
  readonly modifer: any;
  readonly fieldActionLocator: any;
  readonly textBoxLocaotor: any;
  readonly insertBtn: any;
  readonly insertMutipleBtn: any;
  readonly insertOptionTxtBox: any;
  readonly policyInfo: any;
  readonly namedWindStrom: any;
  readonly deductibleTab: any;
  readonly scs: any;
  readonly flood: any;
  readonly quake: any;
  readonly fireDropdown: any;
  readonly perlisDropdown: any;
  readonly wildFireDropdown: any;
  readonly wildFireBtn: any;
  readonly scheduleTab: any;
  readonly searchExposure: any;
  readonly searchResult: any;
  readonly pullInSelectedBtn: any;
  readonly runSimulation: any;
  readonly ratesummaryTab: any;
  readonly runRaterBtn: any;
  readonly underwriterDropdown: any;
  readonly underwriterName: any;
  readonly insuredSearch: any;
  readonly textBoxFeild: any;
  readonly perils: any;
  readonly textBoxFeildEdit: any;
  readonly permiumTab: any;
  readonly writtenLine: any;
  readonly signedLine: any;
  readonly signedLineField: any;
  readonly bound: any;
  readonly quotedline: any;
  readonly limit: any;
  readonly excess: any;
  readonly achievedPremium: any;
  readonly deductible: any;
  readonly maRetention: any;
  readonly grossQuotedpermium: any;
  readonly brokerage: any;
  readonly reference: any;
  readonly policyReference: any;
  readonly Surplus: any;
  readonly isAdmittedOrSurplus: any;
  readonly selectisAdmittedOrSurplus: any;
  readonly primaryOrExcess: any;
  readonly selectPrimaryOrExcess: any;
  readonly exposureDetails: any;
  readonly EPLCoverage: any;
  readonly fiduciaryCoverage: any;
  readonly PCLCoverage: any;
  readonly state: any;
  readonly stateTxtBox: any;
  readonly selectState: any;
  readonly zipCode: any;
  readonly zipCodeTxtBox: any;
  readonly selectZIPCode: any;
  readonly NAICSIndustrySearch: any;
  readonly NAICSIndustrytxtbox: any;
  readonly CompanyOwnership: any;
  readonly CompanyOwnershiptxtbox: any;
  readonly selectCompanyOwnership: any;
  readonly endorsement: any;
  readonly rationable: any;
  readonly retroactiveDate: any;
  readonly priorKnowledgeDate: any;
  readonly combinedSingleAggregateLimit: any;
  readonly usmlEplInputs: any;
  readonly riskCharacteristicsDiscription: any;

  readonly overRide: any;
  readonly percentSelfInsured: any;
  readonly priorClaimActivity: any;
  readonly EmployeeCount: any;
  readonly employeeTypes: any;
  readonly usmlFudiciaryInputs: any;
  readonly BasePremium: any;
  readonly textarea: any;
  readonly split: any;
  readonly priorClaimActivityTxtBox: any;
  readonly benchMarkUWModifier: any;
  readonly quoteGrid: any;
  readonly splitRetention: any;
  readonly ratingSummary: any;
  readonly stateSplit: any;
  readonly otherSplit: any;
  readonly factorSelection: any;
  readonly admittedRationable: any;
  readonly benchMarkFactor: any;
  readonly quoteGridField: any;
  readonly ConfirmAttestation: Locator;
  readonly selectExcess: any;
  captureNAICSText: string = '';
  captureSICText: string = '';
  captureTPIText: string = '';

  constructor(page) {
    this.page = page;
    this.azureADBtn = '[aria-label="AzureAD"]';
    this.emailIdField = 'input[type="email"]';
    this.submitBtn = 'input[type="submit"]';
    this.startPolicy = '[aria-label="Click to run."] button';
    this.pricingTab = "//span[text()='Pricing']";
    this.modifer = '[type="button"]';
    this.fieldActionLocator = '[data-testid="output-value-container"]';
    this.textBoxLocaotor = '[data-testid="input-value-container"] textarea';
    this.insertBtn = '//div[text()="Insert"]';
    this.insertMutipleBtn =
      'li[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1lvuysd"]';
    this.insertOptionTxtBox = 'input[type="text"]';
    this.policyInfo = "//button[text()='Policy Information']";
    this.deductibleTab = "//span[text()='Deductible']";
    this.namedWindStrom =
      "//p[text()='Named Windstorm']/../following-sibling::div/div/div/div/button";
    this.scs = "//p[text()='SCS']/../following-sibling::div/div/div/div/button";
    this.flood = "//p[text()='Flood']/../following-sibling::div/div/div/div/button";
    this.quake = "//p[text()='Quake']/../following-sibling::div/div/div/div/button";
    this.wildFireBtn = "//p[text()='Wildfire']/../following-sibling::div/div/div/div/button";
    this.fireDropdown = "//button[text()='Fire']";
    this.perlisDropdown = "//button[text()='Perils']";
    this.wildFireDropdown = "//button[text()='Wildfire']";
    this.scheduleTab = "//span[text()='Schedule']";
    this.searchExposure = "//button[text()='Search Exposure Management Database']";
    this.searchResult =
      "//div[text()='ES 1345928']/../../../../../following-sibling::div[6]/div/div/div/button";
    this.pullInSelectedBtn = "//button[text()='Pull in Selected']";
    this.runSimulation = "//button[text()='Run Simulation']";
    this.ratesummaryTab = "//span[text()='Rating Summary']";
    this.runRaterBtn = "//button[text()='Run Rater']";
    this.underwriterDropdown = '[data-testid="input-value-container"] button';
    this.signedLineField = "[data-testid='input-value']";
    this.bound = "//li[text()='Bound']";
    this.underwriterName = 'li[aria-label="ALH"]';
    this.insuredSearch = "//button[text()='Insured Search']";
    this.perils = "//button[text()='Perils']";
    this.textBoxFeild = '[data-testid="output-textarea"]';
    this.textBoxFeildEdit = '[data-testid="input-textarea"]';
    this.permiumTab = "//button[text()='Premium']";
    this.writtenLine = "//p[text()='Written Line %']/../following-sibling::div/div/div";
    this.quotedline = "//p[text()='Quoted Line %']/../following-sibling::div/div/div";
    this.signedLine = "//p[text()='Signed Line %']/../following-sibling::div/div/div";

    this.limit = "//p[text()='Limit']/../following-sibling::div/div/div";
    this.excess = "//p[text()='Excess']/../following-sibling::div/div/div";
    this.achievedPremium =
      "//p[text()='Achieved Premium 100% GG Slip Ccy']/../following-sibling::div/div/div";
    this.deductible = "//p[text()='Deductible']/../following-sibling::div/div/div";
    this.maRetention = "//p[text()='M&A Retention']/../following-sibling::div/div/div";
    this.grossQuotedpermium =
      "//p[text()='Gross Quoted Premium']/../following-sibling::div/div/div";
    this.brokerage = "//p[text()='Brokerage']/../following-sibling::div/div/div";
     this.reference = "//p[text()='Reference']/../following-sibling::div/div/div";
    this.ConfirmAttestation = page.locator("//span[text()='Confirm attestations']");

    this.policyReference = "//input[@aria-label='Policy Reference']";
    this.isAdmittedOrSurplus = "//button[@aria-label ='Is Admitted Or Surplus']";
    this.selectisAdmittedOrSurplus = "//li[@aria-label='Admitted']";
    this.Surplus = "//li[@aria-label='Surplus']";
    this.primaryOrExcess = "//button[@aria-label ='Primary or Excess']";
    this.selectPrimaryOrExcess = "//li[@aria-label='Primary']";
    this.selectExcess = "//li[@aria-label='Excess']";
    this.exposureDetails = "//div[@aria-label='Exposure Details']";
    this.EPLCoverage = "//div[@aria-label='${bzyId}']/following-sibling::div/div/button";
    this.EPLCoverage = "//div[@aria-label='Label for EPL']/following-sibling::div/div/button";
    this.fiduciaryCoverage =
      "//div[@aria-label='Label for Fiduciary']/following-sibling::div/div/button";
    this.PCLCoverage = "//div[@aria-label='Label for PCL']/following-sibling::div/div/button";
    this.state = "//button[@aria-label='State']";
    this.stateTxtBox = "//input[@aria-label='State']";
    this.selectState = page.locator('//div[@aria-labelledby="downshift-2-label"]').first();

    this.zipCode = "//button[@aria-label='ZIP Code']";
    this.zipCodeTxtBox = "//input[@aria-label='ZIP Code']";
    this.selectZIPCode = page.locator('//div[@aria-labelledby="downshift-3-label"]').first();
    this.NAICSIndustrySearch = "//button[@aria-label='NAICS Industry Search']";
    this.NAICSIndustrytxtbox = "//input[@aria-label='NAICS Industry Search']";
    this.CompanyOwnership =
      "//p[text()='Company Ownership']/following::div[@data-testid='input-value-container'][1]";
    this.CompanyOwnershiptxtbox =
      "//p[text()='Company Ownership']/following::div[@data-testid='input-value-container'][5]";
    this.retroactiveDate =
      "//p[text()='Company Ownership']/following::div[@data-testid='input-value-container'][2]";
    this.priorKnowledgeDate =
      "//p[text()='Company Ownership']/following::div[@data-testid='input-value-container'][3]";
    this.combinedSingleAggregateLimit =
      "//div[@aria-label='Label for Combined Single Aggregate Limit']/following-sibling::div/div/button";
    this.usmlEplInputs = "//span[text()='USML EPL Inputs']";
    this.usmlFudiciaryInputs = "//span[text()='USML Fiduciary Inputs']";
    this.ratingSummary = "//span[text()='Rating Summary']";
    this.EmployeeCount = "//span[text()='Employee Count']";
    this.riskCharacteristicsDiscription = "//div[text()='No unusual Characteristics']";
    this.overRide =
      "//span[text()='This calculated field can be overridden']/following-sibling::li";
    this.endorsement = 'svg[class="sc-pGaPU gcOqds sc-fXoxOd bIInHR"]';
    this.percentSelfInsured =
      "//p[text()='Percent Self Insured']/following::div[@data-testid='input-value-container'][1]";
    this.rationable = 'div[class="sc-fWSCoS LbkKL"]';
    this.priorClaimActivity =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[5]/div/div/div/div/div[1]/div/div[{index}]/div[2]/div";

    this.priorClaimActivityTxtBox =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[5]/div/div/div/div/div[1]/div/div[{index}]/div[3]/div/div";

    this.benchMarkUWModifier =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[6]/div/div/div/div/div[1]/div/div[{index}]/div[2]/div/div";

    this.quoteGrid =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[7]/div/div/div/div/div/div[1]/div/div[{index}]/div/div";

    this.splitRetention = "[aria-label='False Icon']";

    this.stateSplit =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[10]/div/div/div[2]/div/div/div[1]/div/div[8]/div[{index}]/div/div";
    this.otherSplit =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[10]/div/div/div[3]/div/div/div[1]/div/div[8]/div[{index}]/div/div";

    this.factorSelection =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[7]/div[1]/div/div/div/div/div[1]/div/div[{index}]/div[3]/div/div/textarea";

    this.employeeTypes =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div/div/div/div[1]/div/div/div/div/div/div[140]/div[{index}]/div/div";

    this.BasePremium = "//div[@data-testid='output-value-container']";
    this.textarea = "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']";
    this.split =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div/div/div/div[2]/div[1]/div/div/div/div/div[{index}]/div[2]/div/div/textarea";
    this.admittedRationable =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[7]/div[1]/div/div/div/div/div[1]/div/div[{index}]/div[2]/div/div";
    this.benchMarkFactor =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[7]/div[3]/div/div/div/div/div[1]/div/div[{index}]/div[2]/div/div";
    this.quoteGridField =
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[8]/div/div/div[1]/div/div/div[1]/div/div[8]/div[2]/div/div";
  }

  async azureLogin() {
    return this.azureADBtn;
  }
  async emailID() {
    return this.emailIdField;
  }
  async submitButton() {
    return this.submitBtn;
  }
  async startPolicyBtn() {
    return this.startPolicy;
  }
  async pricingTabFun() {
    return this.pricingTab;
  }
  async modiferFun() {
    return this.modifer;
  }
  async fieldAction() {
    return this.fieldActionLocator;
  }
  async textBoxFun() {
    return this.textBoxLocaotor;
  }
  async insertFun() {
    return this.insertBtn;
  }
  async insertMultipleBtnFun() {
    return this.insertMutipleBtn;
  }
  async insertOptionTxtBoxFun() {
    return this.insertOptionTxtBox;
  }
  async policyInformationTab() {
    return this.policyInfo;
  }
  async scheduleTabFun() {
    return this.scheduleTab;
  }
  async searchExposureFun() {
    return this.searchExposure;
  }
  async searchResultFun() {
    return this.searchResult;
  }
  async runSimulationFun() {
    return this.runSimulation;
  }
  async namedWindstromFun() {
    return this.namedWindStrom;
  }
  async deductibleTabFun() {
    return this.deductibleTab;
  }
  async scsFun() {
    return this.scs;
  }
  async floodFun() {
    return this.flood;
  }
  async quakeFun() {
    return this.quake;
  }
  async firedropdownFun() {
    return this.fireDropdown;
  }
  async perlisDropdownFun() {
    return this.perlisDropdown;
  }
  async wildFireDropdownFun() {
    return this.wildFireDropdown;
  }
  async pullInSelectedBtnFun() {
    return this.pullInSelectedBtn;
  }
  async ratesummaryTabFun() {
    return this.ratesummaryTab;
  }
  async runRaterFun() {
    return this.runRaterBtn;
  }
  async wildFireBtnFun() {
    return this.wildFireBtn;
  }
  async underwriterFun() {
    return this.underwriterDropdown;
  }
  async underwriterNameFun() {
    return this.underwriterName;
  }
  async insuredSearchFun() {
    return this.insuredSearch;
  }
  async perilsFun() {
    return this.perils;
  }
  async textBoxFeildFun() {
    return this.textBoxFeild;
  }
  async textBoxFeildFunEdit() {
    return this.textBoxFeildEdit;
  }
  async premiumTabFun() {
    return this.permiumTab;
  }
  async writtenLinefun() {
    return this.writtenLine;
  }
  async signedLineFun() {
    return this.signedLine;
  }
  async signedLineFieldFun() {
    return this.signedLineField;
  }
  async boundFun() {
    return this.bound;
  }

  async quotedlineFun() {
    return this.quotedline;
  }
  async limitfun() {
    return this.limit;
  }
  async excessfun() {
    return this.excess;
  }
  async achievedPremiumFun() {
    return this.achievedPremium;
  }
  async deductiblefun() {
    return this.deductible;
  }
  async maRetentionfun() {
    return this.maRetention;
  }
  async grossQuotedpermiumfun() {
    return this.grossQuotedpermium;
  }
  async brokeragefun() {
    return this.brokerage;
  }
   async referenceFun() {
    return this.reference;
  }

  async policyReferenceField() {
    return this.policyReference;
  }
  async SurplusDropdown() {
    return this.Surplus;
  }
  async isAdmittedOrSurplusField() {
    return this.isAdmittedOrSurplus;
  }
  async isAdmittedOrSurplusDropdown() {
    return this.selectisAdmittedOrSurplus;
  }
  async primaryOrExcessField() {
    return this.primaryOrExcess;
  }
  async primaryOrExcessFieldDropdown() {
    return this.selectPrimaryOrExcess;
  }
  async exposureDetailsField() {
    return this.exposureDetails;
  }
  async EPLCoverageCheckbox() {
    return this.EPLCoverage;
  }
  async fiduciaryCoverageCheckbox() {
    return this.fiduciaryCoverage;
  }
  async PCLCoverageCheckbox() {
    return this.PCLCoverage;
  }
  async buttonState() {
    return this.state;
  }
  async searchState() {
    return this.stateTxtBox;
  }
  async selectStateDropdown() {
    return this.selectState;
  }
  async buttonZipCode() {
    return this.zipCode;
  }
  async searchZipCode() {
    return this.zipCodeTxtBox;
  }
  async selectZIPCodeDropdown() {
    return this.selectZIPCode;
  }
  async NAICSIndustrySearchButton() {
    return this.NAICSIndustrySearch;
  }
  async NAICSIndustrySearchField() {
    return this.NAICSIndustrytxtbox;
  }
  async companyOwnershipButton() {
    return this.CompanyOwnership;
  }
  async companyOwnershipsrcbox() {
    return this.CompanyOwnershiptxtbox;
  }
  async selectCompanyOwnershipOption() {
    return this.selectCompanyOwnership;
  }
  async endorsementLocator() {
    return this.endorsement;
  }

  async rationableLocator() {
    return this.rationable;
  }
  async retroactiveDateLocator() {
    return this.retroactiveDate;
  }
  async priorKnowledgeDateLocator() {
    return this.priorKnowledgeDate;
  }
  async combinedSingleAggregateLimiteLocator() {
    return this.combinedSingleAggregateLimit;
  }
  async usmlEplInputsField() {
    return this.usmlEplInputs;
  }
  async riskCharacteristicsDiscriptionLocator() {
    return this.riskCharacteristicsDiscription;
  }
  async overRideLocator() {
    return this.overRide;
  }
  async percentSelfInsuredLocator() {
    return this.percentSelfInsured;
  }

  async priorClaimActivityLocator(index: number) {
    return this.priorClaimActivity.replace('{index}', index.toString());
  }
  async employeeCountButton() {
    return this.EmployeeCount;
  }
  async priorClaimActivityTxtField(index: number) {
    return this.priorClaimActivityTxtBox.replace('{index}', index.toString());
  }

  async employeeTypesLocator(index: number) {
    return this.employeeTypes.replace('{index}', index.toString());
  }
  async usmlFudiciaryInputsLocator() {
    return this.usmlFudiciaryInputs;
  }
  async BasePremiumLocator() {
    return this.BasePremium;
  }
  async textareaLocator() {
    return this.textarea;
  }
  async splitTxtField(index: number) {
    return this.split.replace('{index}', index.toString());
  }
  async benchMarkUWModifierTxtField(index: number) {
    return this.benchMarkUWModifier.replace('{index}', index.toString());
  }
  async quoteGridTxtField(index: number) {
    return this.quoteGrid.replace('{index}', index.toString());
  }

  async splitRetentionButton() {
    return this.splitRetention;
  }
  async ratingSummaryButton() {
    return this.ratingSummary;
  }
  async stateSplitdrpDown(index: number) {
    return this.stateSplit.replace('{index}', index.toString());
  }
  async otherSplitdrpDown(index: number) {
    return this.otherSplit.replace('{index}', index.toString());
  }
  async factorSelectionTxtBox(index: number) {
    return this.factorSelection.replace('{index}', index.toString());
  }
  async admittedRationableTxtBox(index: number) {
    return this.admittedRationable.replace('{index}', index.toString());
  }
  async benchMarkFactorTxtBox(index: number) {
    return this.benchMarkFactor.replace('{index}', index.toString());
  }

  async quoteGridFiduciaryTxtBox(index: number) {
    return this.quoteGridField.replace('{index}', index.toString());
  }

  async selectExcessButton() {
    return this.selectExcess;
  }

  async azureAdClearanceSimulatorLogin(hxPage: Page) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage
      .locator(await hxpageObject.azureLogin())
      .nth(1)
      .click();
  }
  async azureAdLogin(hxPage: Page) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage
      .locator(await hxpageObject.azureLogin())
      .nth(1)
      .click();
    const email = `${process.env.WB_USER_EMAIL_HX}`;
    try {
      await hxPage.locator(await hxpageObject.emailID()).fill(email);
      await hxPage.locator(await hxpageObject.submitButton()).click();
    } catch (error) {
      console.log('Authentication done earlier');
    }
  }
  async hxRating(hxPage: Page, option?: any) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(10000);
    await hxPage.locator(await hxpageObject.startPolicyBtn()).click();
     if(option =="sic"){
      await hxPage.waitForTimeout(15000);
      await hxPage.mouse.wheel(0, 1000);
            await hxPage.waitForTimeout(2000);
      await hxPage.mouse.wheel(0, 500);
      this.captureSICText = await hxPage
  .locator('//div[@aria-label="SIC Code"]')
  .innerText();
console.log("Captured SIC Code:", this.captureSICText);
    }
    await hxPage.locator(await hxpageObject.pricingTabFun()).click();

   
    // await hxPage
    //   .locator(await hxpageObject.modiferFun())
    //   .nth(9)
    //   .click();
  }
  async hxRatingNACPPolicyInfoTab(
    hxPage: Page,
    limit: any,
    excess: any,
    acheivedPremium: any,
    brokerage: any,
    writtenPercentage: any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(20000);
    await hxPage.locator(await hxpageObject.insuredSearchFun()).click();
    await hxPage
      .locator(await hxpageObject.underwriterFun())
      .nth(0)
      .click();
    await hxPage.locator(await hxpageObject.underwriterNameFun()).click();
    await hxPage.locator(await hxpageObject.policyInformationTab()).click();
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.limitfun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.excessfun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), excess);
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.achievedPremiumFun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), acheivedPremium);
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.brokeragefun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), brokerage);
    await hxPage.waitForTimeout(2000);
    // await hxPage.locator(await hxpageObject.writtenLinefun()).dblclick();
    await hxPage.locator(await hxpageObject.quotedlineFun()).dblclick();

    await hxPage.fill(await hxpageObject.textBoxFun(), writtenPercentage);
    await hxPage.waitForTimeout(2000);
    await hxPage.mouse.wheel(0, 500);
            await hxPage.waitForTimeout(2000);
    await hxPage
      .locator(await hxpageObject.textBoxFeildFun())
      .nth(7)
      .dblclick();
              await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.boundFun()).click();
                await hxPage.waitForTimeout(2000);
              await hxPage.locator(await hxpageObject.signedLineFun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), writtenPercentage);
    await hxPage.locator(await hxpageObject.referenceFun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), "D42326240101");
            await hxPage.waitForTimeout(2000);

  }

  async hxRatingSignedTab(hxPage: Page, writtenPercentage: any) {
    const hxpageObject = new HxPage(hxPage);
    
        await hxPage.waitForTimeout(10000);
 await hxPage.mouse.wheel(0, 500);
            await hxPage.waitForTimeout(2000);
    await hxPage
      .locator(await hxpageObject.textBoxFeildFun())
      .nth(7)
      .dblclick();
              await hxPage.waitForTimeout(2000);
    // await hxPage.fill(await hxpageObject.signedLineFieldFun(), "Bound");
    await hxPage.locator(await hxpageObject.boundFun()).click();
                await hxPage.waitForTimeout(2000);
              await hxPage.locator(await hxpageObject.signedLineFun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), writtenPercentage);
    }

  async hxRatingNACPPolicyDeductibleTab(
    hxPage: Page,
    fireDeductible,
    deductibleAsPercentage,
    baseMaxDeductible,
    baseMiniDeductible,
    ActualEBPremiumOverride,
    ActualTRIAPremiumOverride
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator(await hxpageObject.deductibleTabFun()).click();
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.namedWindstromFun()).click();
    await hxPage.locator(await hxpageObject.scsFun()).click();
    await hxPage.locator(await hxpageObject.floodFun()).click();
    await hxPage.locator(await hxpageObject.quakeFun()).click();
    await hxPage.locator(await hxpageObject.wildFireBtnFun()).click();
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.perilsFun()).click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(1)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), fireDeductible);
    await hxPage
      .locator(await hxpageObject.firedropdownFun())
      .nth(0)
      .click();
    await hxPage.waitForTimeout(5000);
    await hxPage.mouse.wheel(0, 500);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(1)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), deductibleAsPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(1)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), baseMaxDeductible);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(2)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), baseMiniDeductible);
    await hxPage
      .locator(await hxpageObject.firedropdownFun())
      .nth(1)
      .click();
    await hxPage.waitForTimeout(5000);
    await hxPage.mouse.wheel(0, 1000);
    // await hxPage
    //   .locator(await hxpageObject.textBoxFeildFun())
    //   .nth(8)
    //   .dblclick();
    // await hxPage.fill(await hxpageObject.textBoxFeildFunEdit(), ActualEBPremiumOverride);
    // await hxPage.locator(await hxpageObject.premiumTabFun()).click();
    // await hxPage
    //   .locator(await hxpageObject.textBoxFeildFun())
    //   .nth(8)
    //   .dblclick();
    // await hxPage.fill(await hxpageObject.textBoxFeildFunEdit(), ActualTRIAPremiumOverride);
  }
  async hxRatingNACPScheduleTab(hxPage: Page) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator(await hxpageObject.scheduleTabFun()).click();
    await hxPage.locator(await hxpageObject.searchExposureFun()).click();
    await hxPage.waitForTimeout(10000);
    await hxPage.locator(await hxpageObject.searchResultFun()).click();
    await hxPage.locator(await hxpageObject.pullInSelectedBtnFun()).click();
    await hxPage.waitForTimeout(7000);
    await hxPage
      .locator(await hxpageObject.runSimulationFun())
      .nth(1)
      .click();
    await hxPage.waitForTimeout(20000);
  }
  async hxRatingNACPRateSummaryTab(
    hxPage: Page,
    riskPercentage,
    experiencePercentage,
    valuationPercentage,
    otherPercetage,TPI?:any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator(await hxpageObject.ratesummaryTabFun()).click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(0)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), riskPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(0)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), riskPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(1)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), riskPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(2)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), riskPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(3)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), experiencePercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(4)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), experiencePercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(5)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), experiencePercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(6)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), experiencePercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(7)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), valuationPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(8)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), valuationPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(9)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), valuationPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(10)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), valuationPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(11)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), otherPercetage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(12)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), otherPercetage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(13)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), otherPercetage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(14)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), otherPercetage);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.runRaterFun()).click();
    await hxPage.waitForTimeout(20000);
    if(TPI=="Yes"){
     this.captureTPIText = await hxPage
  .locator('//p[@aria-label="TPI"]/../../following-sibling::div/div/div/div/div/div/div').nth(2)
  .innerText();
console.log("Captured TPI:", this.captureTPIText);
}

  }
  async hxPricing(
    hxPage: Page,
    limit: any,
    excess: any,
    deductible: any,
    MARetention: any,
    grossQuotedpremium: any,
    brokerageFee: any, TPI?:any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator('//button[text()="Modifiers"]').click();
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.limitfun()).dblclick();
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.limitfun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    await hxPage.locator(await hxpageObject.excessfun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), excess);
    await hxPage.locator(await hxpageObject.deductiblefun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), deductible);
    await hxPage.locator(await hxpageObject.maRetentionfun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), MARetention);
    await hxPage.locator(await hxpageObject.grossQuotedpermiumfun()).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), grossQuotedpremium);
    await hxPage.locator(await hxpageObject.brokeragefun()).dblclick();
    await hxPage.waitForTimeout(5000);
    await hxPage.fill(await hxpageObject.textBoxFun(), brokerageFee);
if(TPI=="Yes"){
     this.captureTPIText = await hxPage
  .locator('//p[@aria-label="TPI"]/../following-sibling::div/div/div/div/div')
  .innerText();
console.log("Captured TPI:", this.captureTPIText);
}

    // await hxPage.locator(await hxpageObject.modiferFun()).nth(7).click();
    await hxPage.close();
  }
  async hxPricingMultipleOption(
    hxPage: Page,
    limit: any,
    excess: any,
    deductible: any,
    MARetention: any,
    grossQuotedpremium: any,
    brokerageFee: any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator('//button[text()="Modifiers"]').click();
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.limitfun()).dblclick();
    await hxPage.locator(await hxpageObject.limitfun()).click({ button: 'right' });
    await hxPage.locator(await hxpageObject.insertFun()).click();
    await hxPage
      .locator(await hxpageObject.insertMultipleBtnFun())
      .nth(3)
      .click();
    await hxPage.locator(await hxpageObject.insertOptionTxtBoxFun()).fill('5');
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.insertOptionTxtBoxFun()).press('Enter');
    for (let i = 0; i <= 5; i++) {
      await hxPage
        .locator(await hxpageObject.limitfun())
        .nth(i)
        .dblclick();
      await hxPage.waitForTimeout(2000);
      await hxPage
        .locator(await hxpageObject.limitfun())
        .nth(i)
        .dblclick();
      await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    }
    for (let i = 0; i <= 5; i++) {
      await hxPage
        .locator(await hxpageObject.excessfun())
        .nth(i)
        .dblclick();
      await hxPage.fill(await hxpageObject.textBoxFun(), excess);
    }
    for (let i = 0; i <= 5; i++) {
      await hxPage
        .locator(await hxpageObject.deductiblefun())
        .nth(i)
        .dblclick();
      await hxPage.fill(await hxpageObject.textBoxFun(), deductible);
    }
    for (let i = 0; i <= 5; i++) {
      await hxPage
        .locator(await hxpageObject.maRetentionfun())
        .nth(i)
        .dblclick();
      await hxPage.fill(await hxpageObject.textBoxFun(), MARetention);
    }
    for (let i = 0; i <= 5; i++) {
      await hxPage
        .locator(await hxpageObject.grossQuotedpermiumfun())
        .nth(i)
        .dblclick();
      await hxPage.fill(await hxpageObject.textBoxFun(), grossQuotedpremium);
      await hxPage.waitForTimeout(3000);
    }
    for (let i = 0; i <= 5; i++) {
      await hxPage
        .locator(await hxpageObject.brokeragefun())
        .nth(i)
        .dblclick();
      await hxPage.fill(await hxpageObject.textBoxFun(), brokerageFee);
      await hxPage.waitForTimeout(3000);
    }
    await hxPage
      .locator(await hxpageObject.modiferFun())
      .nth(7)
      .click();
    await hxPage.close();
  }

  async hxRiskInfo(hxPage: Page, admittedSurplus: any, referenceField: any, index: any) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(10000);
    await hxPage.fill(await hxpageObject.policyReferenceField(), referenceField);
    await hxPage.locator(await hxpageObject.isAdmittedOrSurplusField()).click();
    if (admittedSurplus == 'Admitted') {
      await hxPage.locator(await hxpageObject.isAdmittedOrSurplusDropdown()).click();
      if (index == 'Primary') {
        await hxPage.locator(await hxpageObject.primaryOrExcessField()).click();
        await hxPage.locator(await hxpageObject.primaryOrExcessFieldDropdown()).click();
      } else {
        await hxPage.locator(await hxpageObject.primaryOrExcessField()).click();
        await hxPage.locator(await hxpageObject.selectExcessButton()).click();
      }
    } else {
      await hxPage.locator(await hxpageObject.SurplusDropdown()).click();
      if (index == 'Primary') {
        await hxPage.locator(await hxpageObject.primaryOrExcessField()).click();
        await hxPage.locator(await hxpageObject.primaryOrExcessFieldDropdown()).click();
      } else {
        await hxPage.locator(await hxpageObject.primaryOrExcessField()).click();
        await hxPage.locator(await hxpageObject.selectExcessButton()).click();
      }
    }
  }

  async hxExposureDetails(
    hxPage: Page,
    covergaeElection: any,
    usState: any,
    pincode: any,
    industryField: any
  ) {
    await hxPage.waitForTimeout(5000);
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator(await hxpageObject.exposureDetailsField()).click();
    await hxPage.waitForTimeout(2000);
    if (covergaeElection == 'EPL') {
      await hxPage.locator(await hxpageObject.EPLCoverageCheckbox()).click();
    } else if (covergaeElection == 'Fidicuary') {
      await hxPage.locator(await hxpageObject.fiduciaryCoverageCheckbox()).click();
    } else if (covergaeElection == 'PCL') {
      await hxPage.locator(await hxpageObject.PCLCoverageCheckbox()).click();
    } else if (covergaeElection == 'FID_EPL') {
      await hxPage.locator(await hxpageObject.EPLCoverageCheckbox()).click();
      await hxPage.locator(await hxpageObject.fiduciaryCoverageCheckbox()).click();
    } else if (covergaeElection == 'EPL_PCL') {
      await hxPage.locator(await hxpageObject.EPLCoverageCheckbox()).click();
      await hxPage.locator(await hxpageObject.PCLCoverageCheckbox()).click();
    } else if (covergaeElection == 'EPL_PCL_FID') {
      await hxPage.locator(await hxpageObject.EPLCoverageCheckbox()).click();
      await hxPage.locator(await hxpageObject.fiduciaryCoverageCheckbox()).click();
      await hxPage.locator(await hxpageObject.PCLCoverageCheckbox()).click();
    } else {
      console.log('No coverage selection selected');
    }
    await hxPage.locator(await hxpageObject.buttonState()).click();
    await hxPage.fill(await hxpageObject.searchState(), usState);
    await hxPage.locator('//li[@aria-label="Texas"]').click();
    await hxPage.locator(await hxpageObject.buttonZipCode()).click();
    await hxPage.fill(await hxpageObject.searchZipCode(), pincode);
    await hxPage.locator('//li[@aria-label="73301"]').click();
    await hxPage.locator(await hxpageObject.NAICSIndustrySearchButton()).click();
    await hxPage.fill(await hxpageObject.NAICSIndustrySearchField(), industryField);
    await hxPage.waitForTimeout(3000);
    await hxPage.locator('//li[contains(@aria-label, "Rice Farming")]').click();
    this.captureNAICSText = await hxPage
  .locator('//button[@aria-label="NAICS Industry Search"]//div[text()]')
  .innerText();
console.log("Captured NAICS:", this.captureNAICSText);
    await hxPage.locator(await hxpageObject.companyOwnershipButton()).click();
    await hxPage
      .locator('//li[contains(@aria-label, "Non private equity or venture capital owned")]')
      .click();
    await hxPage.waitForTimeout(3000);
    await hxPage.locator(await hxpageObject.retroactiveDateLocator()).click();
    await hxPage.locator('//li[contains(@aria-label, "Other - 1 year")]').click();
    await hxPage.waitForTimeout(3000);
    await hxPage.locator(await hxpageObject.priorKnowledgeDateLocator()).click();
    await hxPage.locator('//li[contains(@aria-label, "1st renewal")]').click();
    await hxPage.waitForTimeout(3000);
    await hxPage.locator(await hxpageObject.combinedSingleAggregateLimiteLocator()).click();
  }


  async validateNAICSIndustryField(option?: any) { 
  const naicsText = await this.page
    .locator('//div[text()="NAICS/SIC code"]/following::div[text()]').nth(0)
    .innerText();
    if(option == "sic"){
console.log("Actual SIC Code:", naicsText);
console.log("Stored SIC Code:", this.captureSICText);
  if (naicsText.includes(this.captureSICText)) {
    console.log('SIC Code validation passed.');
  } else {
    console.error('SIC Code validation failed.');
  }
    }
 else{
  console.log("Actual:", naicsText);
  console.log("Stored:", this.captureNAICSText);
  if (naicsText === this.captureNAICSText) {
    console.log('NAICS Industry Search validation passed.');
  } else {
    console.error('NAICS Industry Search validation failed.');
  }}
}

async validateTPIField() {
  const tpiText = await this.page
    .locator('//div[text()="Technical price index (TPI)"]/following-sibling::div')
    .innerText();
  console.log("Actual TPI:", tpiText);
  console.log("Stored TPI:", this.captureTPIText);
  if (tpiText.includes(this.captureTPIText)) {
    console.log('TPI validation passed.');
  } else {
    console.error('TPI validation failed.');
  }}


  async UsmlEPLInputs(
    hxPage: Page,
    limit: any,
    defenceLimit: any,
    additionalLossLimit: any,
    retention: any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.usmlEplInputsField()).click();
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.riskCharacteristicsDiscriptionLocator()).dblclick();
    await hxPage.locator(await hxpageObject.overRideLocator()).click();
    await hxPage
      .locator(
        '//li[contains(@aria-label, "In business for less than 2 years or Any operations where there are unusual business characteristics which increase the exposure")]'
      )
      .click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(29)
      .dblclick();
    await hxPage.locator('//li[contains(@aria-label, "Included")]').click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(33)
      .dblclick();
    await hxPage.locator('//li[contains(@aria-label, "Included")]').click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(37)
      .dblclick();
    await hxPage.locator('//li[contains(@aria-label, "0% coinsurance; $150k sublimit")]').click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(40)
      .dblclick();
    await hxPage
      .locator(
        '//li[contains(@aria-label, "$500k limit per Client Company and $3m Aggregate Limit of Liability")]'
      )
      .click();
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(43)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '10');
    await hxPage.waitForTimeout(5000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.priorClaimActivityLocator(8)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), 'comment');
    await hxPage.locator(await hxpageObject.priorClaimActivityLocator(11)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), 'comment');
    await hxPage.locator(await hxpageObject.priorClaimActivityLocator(14)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), 'comment');
    await hxPage.locator(await hxpageObject.priorClaimActivityLocator(17)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), 'comment');
    await hxPage.locator(await hxpageObject.priorClaimActivityTxtField(8)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '20');
    await hxPage.locator(await hxpageObject.priorClaimActivityTxtField(11)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '10');
    await hxPage.locator(await hxpageObject.priorClaimActivityTxtField(14)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '16');
    await hxPage.locator(await hxpageObject.priorClaimActivityTxtField(17)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '20');
    await hxPage.locator(await hxpageObject.benchMarkUWModifierTxtField(8)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '200');
    await hxPage.locator(await hxpageObject.benchMarkUWModifierTxtField(11)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '100');
    await hxPage.locator(await hxpageObject.benchMarkUWModifierTxtField(14)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '9');
    await hxPage.locator(await hxpageObject.benchMarkUWModifierTxtField(17)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '20');
    await hxPage.locator(await hxpageObject.benchMarkUWModifierTxtField(20)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '10');
    await hxPage.locator(await hxpageObject.benchMarkUWModifierTxtField(23)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '15');
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage.locator(await hxpageObject.quoteGridTxtField(8)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    await hxPage.locator(await hxpageObject.quoteGridTxtField(11)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), defenceLimit);
    await hxPage.locator(await hxpageObject.quoteGridTxtField(14)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), additionalLossLimit);
    await hxPage.locator(await hxpageObject.quoteGridTxtField(17)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), retention);
    await hxPage.waitForTimeout(2000);

    await hxPage.locator(await hxpageObject.splitRetentionButton()).click();
    await hxPage.waitForTimeout(10000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(2000);
    await hxPage.locator(await hxpageObject.otherSplitdrpDown(2)).dblclick();
    await hxPage.locator('//li[contains(@aria-label, "Multi Plaintiff")]').click();
    await hxPage.locator(await hxpageObject.otherSplitdrpDown(4)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '8000');
    await hxPage.locator(await hxpageObject.otherSplitdrpDown(5)).dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '10');
  }

  async EmployeeCountInfo(hxPage: Page) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.employeeCountButton()).click();
    await hxPage.waitForTimeout(3000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(2000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.locator(await hxpageObject.employeeTypesLocator(2)).dblclick();
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.fill(
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div/div/div/div[1]/div/div/div/div/div/div[140]/div[2]/div/div/textarea",
      '2000'
    );
    await hxPage.locator(await hxpageObject.employeeTypesLocator(3)).dblclick();
    await hxPage.fill(
      "//*[@id='root']/div/div/div/div[2]/div[4]/div/div/div/div/div[1]/div/div/div/div/div/div[140]/div[3]/div/div/textarea",
      '200'
    );
    await hxPage.waitForTimeout(3000);
    await hxPage.mouse.wheel(0, -1000);
    await hxPage.waitForTimeout(2000);
    await hxPage.mouse.wheel(0, -1000);
    await hxPage.locator(await hxpageObject.splitTxtField(8)).dblclick();
    await hxPage.fill(await hxpageObject.splitTxtField(8), '2000');
    await hxPage.locator(await hxpageObject.splitTxtField(11)).dblclick();
    await hxPage.fill(await hxpageObject.splitTxtField(11), '3000');
    await hxPage.locator(await hxpageObject.splitTxtField(14)).dblclick();
    await hxPage.fill(await hxpageObject.splitTxtField(14), '10000');
    await hxPage.locator(await hxpageObject.splitTxtField(17)).dblclick();
    await hxPage.fill(await hxpageObject.splitTxtField(17), '1000');
    await hxPage.locator(await hxpageObject.textareaLocator()).dblclick();
    await hxPage.fill(await hxpageObject.textareaLocator(), 'comment');
  }

  async usmlFudiciaryInput(
    hxPage: Page,
    assetContribution: any,
    totalMembers: any,
    additionalFudiciary: any,
    aggregateLimit: any,
    additionalDefenceLimit: any,
    retention: any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.usmlFudiciaryInputsLocator()).click();
    await hxPage.waitForTimeout(2000);
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(3)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), assetContribution);
    await hxPage
      .locator(
        "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[2]/div/div/div/div/div[1]/div/div[11]/div[2]/div/div"
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), totalMembers);
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(4)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), additionalFudiciary);
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(6)
      .dblclick();
    await hxPage
      .locator(
        '//li[contains(@aria-label, "Total employees accurately represent the exposure under the policy")]'
      )
      .click();
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(8)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '10');
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(4)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '8');
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(7)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '0');
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(13)
      .dblclick();
    await hxPage.locator('//li[contains(@aria-label, "Benefit Decrease")]').click();
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(15)
      .dblclick();
    await hxPage
      .locator(
        '//li[contains(@aria-label, "Sponsor is involved in any litigation that could materially impact earnings or financial position")]'
      )
      .click();
    await hxPage
      .locator(await hxpageObject.BasePremiumLocator())
      .nth(16)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '1500');
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(
        "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[8]/div/div/div[1]/div/div/div[1]/div/div[8]/div[2]/div/div"
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), aggregateLimit);
    await hxPage
      .locator(
        "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[8]/div/div/div[1]/div/div/div[1]/div/div[11]/div[2]/div/div"
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), additionalDefenceLimit);
    await hxPage
      .locator(
        "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[8]/div/div/div[1]/div/div/div[1]/div/div[14]/div[2]/div"
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), retention);
  }

  async pclInfo(hxPage: Page, assetSize: any, revenue: any, limit: any, retention: any) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator('//span[text()= "USML PCL Inputs"]').click();
    await hxPage.waitForTimeout(2000);
    await hxPage.locator("//input[@aria-label='Asset Size']").dblclick();
    await hxPage.fill("//input[@aria-label='Asset Size']", assetSize);
    await hxPage.locator("//input[@aria-label='Revenue']").dblclick();
    await hxPage.fill("//input[@aria-label='Revenue']", revenue);
    await hxPage.waitForTimeout(3000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(
        '//*[@id="root"]/div/div/div/div[2]/div[4]/div/div[5]/div/div/div/div/div/div[1]/div/div[8]/div/div'
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(
        '//*[@id="root"]/div/div/div/div[2]/div[4]/div/div[5]/div/div/div/div/div/div[1]/div/div[11]/div/div'
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), retention);
    await hxPage.waitForTimeout(3000);
  }

  async pclInfoSurplus(hxPage: Page, assetSize: any, revenue: any, limit: any, retention: any) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.locator('//span[text()= "USML PCL Inputs"]').click();
    await hxPage.waitForTimeout(2000);
    await hxPage.locator("//input[@aria-label='Asset Size']").dblclick();
    await hxPage.fill("//input[@aria-label='Asset Size']", assetSize);
    await hxPage.locator("//input[@aria-label='Revenue']").dblclick();
    await hxPage.waitForTimeout(2000);
    await hxPage.fill("//input[@aria-label='Revenue']", revenue);
    await hxPage.locator('//button[text()="Modifiers"]').click();

    await hxPage.waitForTimeout(3000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage.mouse.wheel(0, 1000);
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(
        '//*[@id="root"]/div/div/div/div[2]/div[4]/div/div[7]/div/div/div/div/div/div[1]/div/div[8]/div/div/div'
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(
        '//*[@id="root"]/div/div/div/div[2]/div[4]/div/div[7]/div/div/div/div/div/div[1]/div/div[11]/div/div'
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), retention);
    await hxPage.waitForTimeout(3000);
  }

  async ratingSummaryInfo(hxPage: Page, TPI?: any) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(5000);
    await hxPage.locator(await hxpageObject.ratingSummaryButton()).click();
    await hxPage.waitForTimeout(3000);
    await hxPage.locator("//*[@id='root']/div/div/div/div[2]/div[4]/div/div[1]/button").click();
    await hxPage.locator('//button[text()="Rater Status"]').click();
    await hxPage
      .locator(
        " //*[@id='root']/div/div/div/div[2]/div[4]/div/div[3]/div/div/div/div/div[1]/div/div[14]/div/div/div"
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), '15');
    await hxPage.waitForTimeout(5000);
    if(TPI=="Yes"){
     this.captureTPIText = await hxPage
  .locator('//p[@aria-label="TPI"]/../../following-sibling::div/div/div/div/div/div/div')
  .innerText();
console.log("Captured TPI:", this.captureTPIText);
}
  }

  async excessPremiumTab(
    hxPage: Page,
    limit: any,
    excess: any,
    acheivedPremium: any,
    brokerage: any,
    writtenPercentage: any
  ) {
    const hxpageObject = new HxPage(hxPage);
    await hxPage.waitForTimeout(3000);
    await hxPage.locator('//span[text()= "Excess Premium"]').click();
    await hxPage.waitForTimeout(3000);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(4)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), limit);
    await hxPage
      .locator(
        "//*[@id='root']/div/div/div/div[2]/div[4]/div/div[2]/div[1]/div/div/div/div/div[1]/div/div[11]/div[2]/div/div"
      )
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), excess);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(5)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), acheivedPremium);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(6)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), brokerage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(7)
      .dblclick();
    await hxPage.fill(await hxpageObject.textBoxFun(), writtenPercentage);
    await hxPage
      .locator(await hxpageObject.fieldAction())
      .nth(8)
      .dblclick();
    await hxPage.locator('//li[@aria-label="1"]').click();
  }
}

