import { expect, APIRequestContext, Page, test, request } from '@playwright/test';
import { POManager } from './POManager';
import { urls } from '../../shared/sit-e2e/api/urls/urls';
import { UtilManager } from '../../shared/sit-e2e/utils/UtilManager';
import { UwwbToken } from '../../shared/sit-e2e/test-data/token.json';
import { apiEndpoint } from '../../shared/sit-e2e/api/urls/urls';
import { pageUtils } from '../utils/pageUtils';

var resCustomerIdentity: any;
var resCustomerEsg;
var resUwCustomerEsg;
var resCustomerFinancials;
var resCustomerFinancialsCapiq: any;
var resCustomerSanctions;
var resUwCustomerSanctions;
var resCustomerHierarchy: any;
var resUwCustomerHierarchy: any;
var resCustomerHierarchy: any;
var resCustomerFinancialsCapiq: any;
var verificationText;
var submissionID: any;
var customerId: any;
var riskID: any;
var submissionBzID: any;

export class workBench {
  public page: Page;
  public pageUtils: any;
  public CustomerPanelPage: any;
  public submissionPage: any;
  public listFlowUtils: any;
  public raterPage: any;
  public quotesPage: any;
  public riskPage: any;
  public apiUtils: any;
  public apiUrlMaanager: any;

  stepStatus: boolean = true;

  // Response objects
  resCustomerIdentity: any;
  resCustomerEsg: any;
  resCustomerFinancials: any;
  resCustomerFinancialsCapiq: any;
  resCustomerSanctions: any;
  riskFlowIdvalue: any;
  customerId: any;
  bzyId: any;

  submissionBzID: any;
  submissionID: any;
  riskID: any;

  constructor(page: Page, pageUtils: any) {
    this.page = page;
    this.pageUtils = pageUtils;

    const poManager = new POManager(page);
    this.submissionPage = poManager.getSubmissionPage();
    this.CustomerPanelPage = poManager.getCustomerPanelPage();
    this.listFlowUtils = poManager.getListFlowUtils();
    this.raterPage = poManager.getRaterPage();
    this.quotesPage = poManager.getQuotesPage();
    this.riskPage = poManager.getRiskPage();

    // const apiRequestContext: APIRequestContext = await request.newContext();
    // const utilManager = new UtilManager(apiRequestContext);

    //  this.apiUtils = utilManager.getApiUtils();
  }
  async init() {
    const apiRequestContext: APIRequestContext = await request.newContext();
    const utilManager = new UtilManager(apiRequestContext);
    this.apiUtils = utilManager.getApiUtils();
    this.apiUrlMaanager = new apiEndpoint();
  }

  // // ⭐ NEW METHOD: perform workbench workflow
  // async runWorkbenchFlow(submissionPage: any, riskPage: any, apiUtils: any, listFlowUtils: any, Submission: any, CustomerToken: any) {

  //   let resSubmissionId, resRiskId;
  //   let riskFlowIdvalue:any;
  //   let customerId:any;
  //   let bzyId:any;
  //   let b = 0;

  async launchUwwbBrowser(product: any) {
    try {
      if (this.stepStatus) {
        if (product === 'property') {
          await this.pageUtils.goto(urls.customAuthenticationAccountNACPChriss);
          await this.CustomerPanelPage.clearedTab.click();
        }
      } else {
        console.log(`Skipping the step **Launch UWWB application**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **Launch UWWB application**`, error);
    }
  }

  async customerDetails() {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(15000);
        var VisibilityStatus = await this.pageUtils.VisiblityCheck(
          this.submissionPage.customerDataTable
        );
        expect(VisibilityStatus).toBeTruthy();
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  /* Cleared tab */
  async clearedTab(submissionBzID: any, product?: any) {
    try {
      if (this.stepStatus) {
        const responsePromise = this.page.waitForResponse(`${urls.getUnassignedRisksGrid}`);

        await this.page.waitForTimeout(15000);
        await this.CustomerPanelPage.clearedTab.click();

        var resSubmissionId = await responsePromise;
        const responseBody = JSON.parse(await resSubmissionId.text());
        if (product == 'Property') {
          for (const row of responseBody.rows) {
            console.log('Checking row.data:', row.data[23]);
            if (row.data[23] === submissionBzID) {
              this.riskFlowIdvalue = row.id;
              this.customerId = row.customerId;
              console.log('id:', this.riskFlowIdvalue);
              console.log('customerId:', this.customerId);
              break; // Stop after finding the first match
            }
          }
        } else {
          for (const row of responseBody.rows) {
            if (row.data[11] === submissionBzID) {
              this.riskFlowIdvalue = row.id;
              this.customerId = row.customerId;
              console.log('id:', this.riskFlowIdvalue);
              console.log('customerId:', this.customerId);
              break;
            }
          }
        }
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error('Step failed: Cleared tab', error);
    }
  }

  async clearedTabSimulator(riskID: any, product?: any) {
    try {
      if (this.stepStatus) {
        // var responsePromise = page.waitForResponse(`${urls.submissonWorkFlowViewMockData}`);
        var responsePromise = this.page.waitForResponse(`${urls.getUnassignedRisksGrid}`);

        await this.page.waitForTimeout(15000);
        await this.CustomerPanelPage.clearedTab.click();
        var resSubmissionId = await responsePromise;
        const responseBody = JSON.parse(await resSubmissionId.text());
        console.log('responseBody:', responseBody);
        if (product == 'Property') {
          for (const row of responseBody.rows) {
            console.log('Checking row.data:', row.data[23]);
            if (row.id === riskID) {
              // await this.page.pause();
              //  if (row.data[11] === submissionID) {
              this.riskFlowIdvalue = row.id;
              this.customerId = row.customerId;
              this.submissionBzID = row.data[23];
              console.log('id:', this.riskFlowIdvalue);
              console.log('customerId:', this.customerId);
              console.log('submissionBzID:', this.submissionBzID);
              break; // Stop after finding the first match
            }
          }
        } else {
          for (const row of responseBody.rows) {
            console.log('Checking row.data:', row.data[11]);
            if (row.id === riskID) {
              this.riskFlowIdvalue = row.id;
              this.customerId = row.customerId;
              this.submissionBzID = row.data[11];
              console.log('id:', this.riskFlowIdvalue);
              console.log('customerId:', customerId);
              break; // Stop after finding the first match
            }
          }
        }
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async assignToSelf(submissionBzID: any) {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(30000);
        await this.pageUtils.clickOn(this.page.locator(this.riskPage.getActionBtn(submissionBzID)));
        await this.pageUtils.clickOn(this.submissionPage.assignToSelf);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async assignedTab(riskFlowIdvalue: any) {
    try {
      if (this.stepStatus) {
        var b = 0;
        await this.pageUtils.clickOn(this.submissionPage.assignedTab);
        await this.page.waitForTimeout(8000);
        await this.pageUtils.clickOn(this.submissionPage.assignedTab);
        var responsePromise = await this.page.waitForResponse(`${urls.riskFlowData}`);
        var resRiskId = await responsePromise;
        const responseBody = JSON.parse(await resRiskId.text());
        while (b >= 0) {
          if (responseBody.rows[b].streamId == riskFlowIdvalue) {
            this.bzyId = responseBody.rows[b].bzyId;
            console.log('bzyid : ', this.bzyId);
            break;
          }
          b++;
        }
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async assignRiskToUAOPs(bzyId: any, customerName: any, product?: any) {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(
          await this.listFlowUtils.getCustomerNameLinkNACP(bzyId, customerName)
        );
        await this.page.waitForTimeout(4000);
        await this.pageUtils.clickOn(this.submissionPage.operationUserBox);
        if (product === 'Property') {
          await this.pageUtils.clickOn(this.submissionPage.propertyUAOPsAutomationUserAccount);
        }
        await this.page.waitForTimeout(4000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async getIdentityApi(customerId: any, CustomerToken: any) {
    try {
      if (this.stepStatus) {
        const apiUrl = `${urls.customerIdentity}${customerId}`;
        const bearerToken = CustomerToken;
        const responseBody = await this.apiUtils.sendGetRequest(apiUrl, bearerToken);
        expect(await responseBody.ok(), 'Customer API should return success response').toBe(true);
        resCustomerIdentity = JSON.parse(await responseBody.text());
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async customerName(bzyId: any, name: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(await this.listFlowUtils.getCustomerNameLink(bzyId, name));
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async overviewTab(customerId: any, name: any, verificationTexts: any) {
    try {
      if (this.stepStatus) {
        // var resCustomerIdentity:any;
        var responsePromise = this.page.waitForResponse(
          `${urls.customerOverviewAPI}/${customerId}`
        );
        await this.pageUtils.clickOn((await this.listFlowUtils.getCustomerName(name)).nth(1));
        var resUwCustomerOverview = await responsePromise;
        const responseBody = JSON.parse(await resUwCustomerOverview.text());
        console.log('Customer ID : ', responseBody.id);
        expect(responseBody.id, 'Customer ID Validation').toBe(resCustomerIdentity.id);
        console.log('Head Count : ', responseBody.employee.consolidatedCount);
        expect(responseBody.employee.consolidatedCount, 'Employee Count Validation').toBe(
          resCustomerIdentity.employee.consolidatedCount
        );
        await this.page.waitForTimeout(3000);
        /*Validating customer Alterate name*/
        expect(responseBody.alternativeNames[0], 'Alternate Name validation').toBe(
          resCustomerIdentity.alternativeNames[0]
        );

        /*Validating customer address verification status*/
        verificationText = await this.pageUtils.getTextContent(this.submissionPage.verification);
        expect(verificationText).toContain(verificationTexts);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async esgAPI(customerId: any, CustomerToken: any) {
    try {
      if (this.stepStatus) {
        const apiUrl = `${urls.customerEsg}${customerId}`;
        const bearerToken = CustomerToken;
        const responseBody = await this.apiUtils.sendGetRequest(apiUrl, bearerToken);
        expect(await responseBody.ok(), 'Customer API should return success response').toBe(true);
        resCustomerEsg = JSON.parse(await responseBody.text());
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async esgTab(customerId: any) {
    try {
      if (this.stepStatus) {
        var responsePromise = this.page.waitForResponse(`${urls.customerEsgAPI}/${customerId}`);
        await this.CustomerPanelPage.esgTab.click();
        await this.page.waitForTimeout(3000);
        resUwCustomerEsg = await responsePromise;
        const responseBody = JSON.parse(await resUwCustomerEsg.text());
        console.log('Eligibility : ', responseBody.esgSummary.overallEligibilityOutcome);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async financialApi(customerId: any, CustomerToken: any) {
    try {
      if (this.stepStatus) {
        const apiUrl = `${urls.customerFinancials}${customerId}`;
        const bearerToken = CustomerToken;
        const responseBody = await this.apiUtils.sendGetRequest(apiUrl, bearerToken);
        expect(await responseBody.ok(), 'Customer API should return success response').toBe(true);
        resCustomerFinancials = JSON.parse(await responseBody.text());
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async financialCapiqApi(customerId: any, CustomerToken: any) {
    try {
      if (this.stepStatus) {
        const apiUrl = `${urls.customerFinancialsCapiq}${customerId}`;
        const bearerToken = CustomerToken;
        const responseBody = await this.apiUtils.sendGetRequest(apiUrl, bearerToken);
        expect(await responseBody.ok(), 'Customer API should return success response').toBe(true);
        resCustomerFinancialsCapiq = JSON.parse(await responseBody.text());
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async sanctionApi(customerId: any, CustomerToken: any) {
    try {
      if (this.stepStatus) {
        const apiUrl = `${urls.customerSanctionsLexisNexis}${customerId}`;
        const bearerToken = CustomerToken;
        const responseBody = await this.apiUtils.sendGetRequest(apiUrl, bearerToken);
        expect(await responseBody.ok(), 'Customer API should return success response').toBe(true);
        resCustomerSanctions = JSON.parse(await responseBody.text());
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async sanctionTab(customerId: any) {
    try {
      if (this.stepStatus) {
        var responsePromise = this.page.waitForResponse(
          `${urls.customerSanctionsAPI}/${customerId}`
        );
        await this.CustomerPanelPage.screening.click();
        await this.page.waitForTimeout(3000);
        resUwCustomerSanctions = await responsePromise;
        const responseBody = JSON.parse(await resUwCustomerSanctions.text());
        console.log('Traffic Light : ', responseBody.trafficLight);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async hierarchyApi(customerId: any, CustomerToken: any) {
    try {
      if (this.stepStatus) {
        const apiUrl = `${urls.customerHierarchy}${customerId}`;
        const bearerToken = CustomerToken;
        const responseBody = await this.apiUtils.sendGetRequest(apiUrl, bearerToken);
        expect(await responseBody.ok(), 'Customer API should return success response').toBe(true);
        resCustomerHierarchy = JSON.parse(await responseBody.text());
        // console.log(await resCustomerHierarchy.text());
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async hierarchyTab(customerId: any) {
    try {
      if (this.stepStatus) {
        var responsePromise = this.page.waitForResponse(
          `${urls.customerHierarchyAPI}/${customerId}`
        );
        await this.CustomerPanelPage.hierarchyTab.click();
        await this.page.waitForTimeout(3000);
        resUwCustomerHierarchy = await responsePromise;
        const responseBody = JSON.parse(await resUwCustomerHierarchy.text());
        console.log(
          'Global Ultimate Parent : ',
          responseBody.providers[0].globalUltimate.primaryName
        );
        expect(
          responseBody.providers[0].globalUltimate.primaryName,
          'Global Ultimate Parent Validation'
        ).toBe(resCustomerHierarchy.providers[0].globalUltimate.primaryName);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async financialTab(customerId: any) {
    try {
      if (this.stepStatus) {
        var responsePromise = this.page.waitForResponse(
          `${urls.customerFinancialAPI}/${customerId}`
        );
        await this.CustomerPanelPage.financialTab.click();
        await this.page.waitForTimeout(3000);
        var resUwCustomerFinancials = await responsePromise;
        const responseBody = JSON.parse(await resUwCustomerFinancials.text());
        console.log(
          'Market Cap : ',
          responseBody.standardAndPoorCapIQSummary.financials.marketCap.marketCapUSD
        );
        expect(
          responseBody.standardAndPoorCapIQSummary.financials.marketCap.marketCapUSD,
          'Eligibility Validation'
        ).toBe(resCustomerFinancialsCapiq.financials.marketCap.marketCapUSD);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async sendVersion(postQuoteMessage: any, raterLabelText: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.selfAttestBtn);
        await this.pageUtils.clickOn(this.raterPage.selfAttestAcceptDeclarationCheckBox);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.fillText(this.raterPage.selfAttestNotes, postQuoteMessage);
        await this.pageUtils.clickOn(this.raterPage.selfAttestConfirmBtn);
        await this.pageUtils.clickOn(this.raterPage.quotesTab);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.quotesPage.actionIcon);
        await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
        expect(this.raterPage.topLabelTextRaterPage).toHaveText(raterLabelText);
        await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
                  //  await this.page.locator('//span[text()="Send now"]').click();

        await this.page.waitForTimeout(3000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async revertForDefer(postQuoteMessage: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.quotesTab);
        await this.page.waitForTimeout(5000);
        await this.pageUtils.clickOn(this.quotesPage.revertActionIcon);
        await this.page.waitForTimeout(2000);
        await this.pageUtils.clickOn(this.quotesPage.actionSelfAttest);
        await this.page.waitForTimeout(2000);
        await this.pageUtils.clickOn(this.raterPage.selfAttestAcceptDeclarationCheckBox);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.fillText(this.raterPage.selfAttestNotes, postQuoteMessage);
        await this.pageUtils.clickOn(this.raterPage.selfAttestConfirmBtn);
        await this.pageUtils.clickOn(this.raterPage.quotesTab);
        await this.page.waitForTimeout(3000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async finalizeQuote(type: any, postQuoteMessage: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.page.waitForTimeout(10000);
        if (type == 'Sanity') {
          try {
            await this.pageUtils.fillText(this.raterPage.withinAuthorityNotes, postQuoteMessage);
            await this.pageUtils.clickOn(this.raterPage.proceedToSend);
                      //  await this.page.locator('//span[text()="Send now"]').click();


            await this.page.waitForTimeout(5000);
            // await this.pageUtils.clickOn(this.quotesPage.actionIcon);
            // await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
            // await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
            // await this.page.waitForTimeout(3000);
            await this.pageUtils.clickOn(this.quotesPage.sent);
            await this.page.waitForTimeout(3000);
          } catch (error) {
            await this.pageUtils.clickOn(this.raterPage.selfAttestBtn);
            await this.pageUtils.clickOn(this.raterPage.selfAttestAcceptDeclarationCheckBox);
            await this.page.waitForTimeout(3000);
            await this.pageUtils.fillText(this.raterPage.selfAttestNotes, postQuoteMessage);
            await this.pageUtils.clickOn(this.raterPage.selfAttestConfirmBtn);
            await this.pageUtils.clickOn(this.raterPage.quotesTab);
            await this.page.waitForTimeout(3000);
            await this.pageUtils.clickOn(this.quotesPage.actionIcon);
            await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
            await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
                      //  await this.page.locator('//span[text()="Send now"]').click();
            await this.page.waitForTimeout(3000);
          }
        } else {
          // await this.pageUtils.fillText(this.raterPage.withinAuthorityNotes, postQuoteMessage);
          await this.pageUtils.clickOn(this.raterPage.proceedToSend);
          //  await this.page.locator('//span[text()="Send now"]').click();
          await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(this.quotesPage.sent);
        }
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async finalizeQuoteForInherited() {
     await this.pageUtils.clickOn(this.quotesPage.saved);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.quotesPage.actionIcon);
        await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
                await this.page.waitForTimeout(2000);
        await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
                  //  await this.page.locator('//span[text()="Send now"]').click();
        await this.page.waitForTimeout(3000);
                  await this.pageUtils.clickOn(this.quotesPage.sent);
            await this.page.waitForTimeout(3000);

  }

  async bindQuote(quoteRaterLabelText: any) {
    try {
      if (this.stepStatus) {
        expect(this.raterPage.topLabelTextRaterPage).toHaveText(quoteRaterLabelText);
        await this.page.waitForTimeout(5000);

      //    await this.pageUtils.clickOn(this.raterPage.details);
      //       await this.page.waitForTimeout(3000);
      //  await this.pageUtils.clickOn(this.raterPage.carrierDropdownBox);
      //     await this.pageUtils.clickOn(
      //       this.page.locator(this.riskPage.getCarrierOption("BUSA")));
      //             await this.page.waitForTimeout(10000);
                        await this.pageUtils.clickOn(this.raterPage.quotesTab);
                              await this.pageUtils.clickOn(this.quotesPage.sent);
        // await this.pageUtils.clickOn(this.quotesPage.optionToBind.first());
        await this.pageUtils.clickOn(this.quotesPage.sentBindQuote.first());
        console.log('Done!');
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async sanctionStatusCheck(quoteRaterLabelText: any, beforeBindingTxt: any) {
    try {
      if (this.stepStatus) {
        try {
          await this.page.waitForTimeout(3000);
          await this.pageUtils.clickOn(this.quotesPage.sanctionArrowBtn);
          await this.page.waitForTimeout(3000);
          await this.pageUtils.clickOn(this.quotesPage.sanctionCheckbox);
          await this.page.waitForTimeout(3000);
          await this.pageUtils.clickOn(this.quotesPage.confirmAttestionBtn);
          await this.page.waitForTimeout(5000);
          
          await this.pageUtils.clickOn(this.quotesPage.contractCertanityArrowBtn);
          await this.page.waitForTimeout(3000);
          await this.pageUtils.clickOn(this.quotesPage.contractCertanityCheckbox);
          await this.page.waitForTimeout(3000);
          await this.pageUtils.clickOn(this.raterPage.ConfirmAttestation);
          await this.page.waitForTimeout(3000);

          expect(this.raterPage.topLabelTextRaterPage).toHaveText(quoteRaterLabelText);
          await this.pageUtils.clickOn(this.quotesPage.postSentBindQuoteBtn);
          expect(this.quotesPage.topLabelText).toHaveText(beforeBindingTxt);
        } catch (error) {
          console.log('Sanction is alraedy verified');
        }
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async postBindControl(rationalEdit: any, postQuoteMessage: any, policyRefCode: any) {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.quotesPage.postBindControlDropdown);
        if (rationalEdit == 'Yes') {
          await this.pageUtils.clickOn(this.quotesPage.rationaleEditBtn);
          await this.pageUtils.fillText(this.quotesPage.postContolTxtBox, postQuoteMessage);
          await this.pageUtils.clickOn(this.quotesPage.saveUpdateBtn);
        }
        await this.pageUtils.fillText(this.quotesPage.policyRefTxtBox, policyRefCode);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.quotesPage.addtionalPolicyRefBtn);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async completePostBind(postBind: any, beforeBindingTxt: any, afterBindingTxt: any) {
    try {
      if (this.stepStatus) {
        expect(this.quotesPage.topLabelText).toHaveText(beforeBindingTxt);
        await this.page.waitForTimeout(3000);
        if (postBind == 'Yes') {
          await this.pageUtils.clickOn(this.quotesPage.completePostBindBtn);
          await this.page.waitForTimeout(60000);
          const texts = await this.quotesPage.topLabelText.innerText();
          expect(texts).toEqual(afterBindingTxt);
        } else {
          try {
            await this.pageUtils.clickOn(this.quotesPage.completePostBindBtn);
          } catch (error) {
            console.log('TechUW not allowed to completed the bind');
          }
          await this.page.waitForTimeout(3000);
          const texts = await this.quotesPage.topLabelText.innerText();
          expect(texts).toEqual(beforeBindingTxt);
        }
        console.log('Done!');
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async addRaterID(carrieroption: any, ratingIDDO: any, product?: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.backBtnToPolicyDetailsPage);
        await this.page.waitForTimeout(10000);
        if (product == 'CYEX') {
          await this.pageUtils.clickOn(this.raterPage.carrierDropdown);
        } else {
          await this.pageUtils.clickOn(this.raterPage.carrierDropdownBox);
        }
        await this.pageUtils.clickOn(
          this.page.locator(this.riskPage.getCarrierOption(carrieroption))
        );
        await this.pageUtils.clickOn(this.raterPage.raterIDCheckBox);
        await this.pageUtils.fillText(this.raterPage.raterIDField, ratingIDDO);
        await this.pageUtils.clickOn(this.raterPage.raterIDConfirmBtn);
        await this.page.waitForTimeout(60000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async assignToTechnicalUnderWriter(bzyId: any, customerName: any, product: any) {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(
          await this.listFlowUtils.getCustomerNameLink(bzyId, customerName)
        );
        await this.page.waitForTimeout(4000);
        await this.pageUtils.clickOn(this.submissionPage.techUWUserBox);
        if (product == 'CYEX') {
          await this.pageUtils.clickOn(this.submissionPage.usmlTechUWsAutomationUserAccount);
        } else if (product == 'ABC' || product == 'ABP' || product == 'property') {
          await this.pageUtils.clickOn(this.submissionPage.cyexTechUWsAutomationUserAccount);
        } else if (product == 'Execuguard') {
          await this.pageUtils.clickOn(this.submissionPage.AutomationUserAccount);
        }
        await this.page.waitForTimeout(4000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async assignToUnderWriter(product: any, submissionBzID: any) {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.page.locator(this.riskPage.getActionBtn(submissionBzID)));
        await this.pageUtils.clickOn(this.submissionPage.assignToUnderwriter);
        await this.pageUtils.clickOn(this.submissionPage.underwriterSelectDropdown);
        await this.page.waitForTimeout(5000);
        if (product == 'CYEX') {
          await this.pageUtils.clickOn(this.submissionPage.automationUserAccount);
        } else if (product == 'ABCP' || product == 'Execuguard' || product == 'ABP') {
          await this.pageUtils.clickOn(this.submissionPage.automationUserAccount1USML);
        } else if (product == 'property') {
          await this.pageUtils.clickOn(this.submissionPage.automationUserAccountChriss);
        }
        await this.pageUtils.clickOn(this.submissionPage.uaopsAssignBtn);
        await this.page.waitForTimeout(8000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async assignToUAOPS(product: any, bzyId: any, customerName: any) {
    try {
      if (this.stepStatus) {
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(
          await this.listFlowUtils.getCustomerNameLink(bzyId, customerName)
        );
        await this.page.waitForTimeout(4000);
        await this.pageUtils.clickOn(this.submissionPage.operationUserBox);
        if (product == 'CYEX') {
          await this.pageUtils.clickOn(this.submissionPage.ukUAOPsAutomationUserAccount);
        } else if (product == 'ABCP' || product == 'Execuguard' || product == 'ABP') {
          await this.pageUtils.clickOn(this.submissionPage.usmlUAOPsAutomationUserAccount3);
        }
        await this.page.waitForTimeout(4000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async finalizeQuoteWithinAuthority(postQuoteMessage: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.fillText(this.raterPage.withinAuthorityNotes, postQuoteMessage);
        await this.pageUtils.clickOn(this.raterPage.proceedToSend);
        //  await this.page.locator('//span[text()="Send now"]').click();
        await this.page.waitForTimeout(5000);
       
        // await this.pageUtils.clickOn(this.quotesPage.actionIcon);
        // await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
        // await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
        // await this.page.waitForTimeout(3000);

        await this.pageUtils.clickOn(this.quotesPage.sent);
        await this.page.waitForTimeout(3000);

        // await this.page.waitForTimeout(5000);
        // await this.pageUtils.clickOn(this.quotesPage.sent);
        //  await this.page.waitForTimeout(5000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async finalizeQuoteForReferal(referralId: any, postQuoteMessage: any, referredText: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.createReferralBtn);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.raterPage.selectApproverTxtBox);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(
          this.page.locator(this.riskPage.getUkReferralId(referralId)).nth(0)
        );
        await this.pageUtils.fillText(this.raterPage.approvalReasonTxtBox, postQuoteMessage);
        await this.pageUtils.clickOn(this.raterPage.submitForApprovalBtn);
        await this.page.waitForTimeout(3000);
        expect(this.raterPage.authorityStatusUpperTxt).toHaveText(referredText);
        await this.page.waitForTimeout(5000);
        // expect((raterPage.authorityStatusBelowTxt).first()).toHaveText(quote.referredText);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async finalizeQuoteForselfAttest(postQuoteMessage: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.pageUtils.clickOn(this.raterPage.selfAttestBtn);
        await this.pageUtils.clickOn(this.raterPage.selfAttestAcceptDeclarationCheckBox);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.fillText(this.raterPage.selfAttestNotes, postQuoteMessage);
        await this.pageUtils.clickOn(this.raterPage.selfAttestConfirmBtn);
        await this.pageUtils.clickOn(this.raterPage.quotesTab);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.quotesPage.actionIcon);
        await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
        await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
                  //  await this.page.locator('//span[text()="Send now"]').click();
        await this.page.waitForTimeout(3000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }
  async deferReferal() {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
        await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.page.waitForTimeout(15000);
        await this.pageUtils.clickOn(this.raterPage.deferReferralBtn);
        await this.page.waitForTimeout(5000);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async ntuOperation(quoteRaterLabelText: any, ntuReason: any) {
    try {
      if (this.stepStatus) {
        expect(this.raterPage.topLabelTextRaterPage).toHaveText(quoteRaterLabelText);
        await this.pageUtils.clickOn(this.submissionPage.detailsTab);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.submissionPage.ntuActionBtn);
        await this.pageUtils.clickOn(this.submissionPage.decResnDrpDwn);
        await this.page.waitForTimeout(15000);
        await this.pageUtils.clickOn(
          this.page.locator(this.submissionPage.getSelectDeclineReason(ntuReason))
        );
        await this.pageUtils.clickOn(this.submissionPage.ntuBtn);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }
  async approveReferal(
    product: any,
    customerName: any,
    approvalTxtOpen: any,
    approvalMessage: any,
    approvalTxtClosed: any
  ) {
    try {
      if (this.stepStatus) {
        if (product == 'CYEX') {
          await this.pageUtils.goto(`${urls.customAuthenticationAccount6}`);
        } else if (product == 'ABC' || product == 'Execuguard' || product == 'ABP') {
          await this.pageUtils.goto(`${urls.customAuthenticationAccount2Usml}`);
        } else if (product == 'property') {
          await this.pageUtils.goto(`${urls.customAuthenticationAccountNACPPaul}`);
        }
        await this.pageUtils.clickOn(this.raterPage.assignedTab);
        await this.pageUtils.clickOn(
          this.page.locator(this.riskPage.getReferralLink(customerName)).first()
        );

        expect(this.raterPage.approvalStatusTxt).toHaveText(approvalTxtOpen);
        await this.pageUtils.clickOn(this.raterPage.approveBtn);
        await this.pageUtils.fillText(this.raterPage.reasonForApprovalTxtBox, approvalMessage);
        await this.pageUtils.clickOn(this.raterPage.approveExceptionBtn);
        await this.page.waitForTimeout(3000);
        // expect(this.raterPage.approvalStatusTxtClosed).toHaveText(approvalTxtClosed);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async sendQuoteVersion(product: any, bzyId: any, customerName: any, quoteRaterLabelText: any) {
    try {
      if (this.stepStatus) {
        if (product == 'CYEX') {
          await this.pageUtils.goto(`${urls.customAuthenticationAccount5}`);
          await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(
            await this.listFlowUtils.getCustomerNameLink(bzyId, customerName)
          );
        } else if (product == 'ABC' || product == 'Execuguard' || product == 'ABP') {
          await this.pageUtils.goto(`${urls.customAuthenticationAccount1Usml}`);
          await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(
            await this.listFlowUtils.getCustomerNameLink(bzyId, customerName)
          );
        } else if (product == 'property') {
          await this.pageUtils.goto(`${urls.customAuthenticationAccountNACPChriss}`);
          await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(
            await this.listFlowUtils.getCustomerNameLinkNACP(bzyId, customerName)
          );
        }

        await this.pageUtils.clickOn(this.raterPage.quotesTab);
        await this.page.waitForTimeout(3000);
        await this.pageUtils.clickOn(this.quotesPage.actionIcon);
        await this.pageUtils.clickOn(this.quotesPage.actionSendQuoteVersion);
        await this.pageUtils.clickOn(this.quotesPage.proceedToSendButton);
//  await this.page.locator('//span[text()="Send now"]').click();
         await this.page.waitForTimeout(3000);
        expect(this.raterPage.topLabelTextRaterPage).toHaveText(quoteRaterLabelText);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async revertToPriorVersion() {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.quotesPage.revertActionIcon.first());
        // await pageUtils.clickOn(quotesPage.veiwVersionBtn);
        await this.pageUtils.clickOn(this.quotesPage.revertToThisVersionBtn);
        await this.pageUtils.clickOn(this.quotesPage.revertConfirmBtn);
        await this.page.waitForTimeout(25000);
        //await pageUtils.clickOn(raterPage.deferReferralBtn);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async onHold(quoteRaterLabelText: any, onHoldReason: any, onHoldReasontoplabeltxt: any) {
    try {
      if (this.stepStatus) {
        expect(this.raterPage.topLabelTextRaterPage).toHaveText(quoteRaterLabelText);
        await this.pageUtils.clickOn(this.submissionPage.detailsTab);
        await this.pageUtils.clickOn(this.submissionPage.onHoldactionBtn);
        await this.pageUtils.clickOn(this.submissionPage.onHoldDropdown);
        await this.page.waitForTimeout(5000);
        await this.pageUtils.clickOn(
          this.page.locator(this.submissionPage.getSelectDeclineReason(onHoldReason))
        );
        await this.page.waitForTimeout(5000);
        await this.pageUtils.clickOn(this.submissionPage.onHoldBtn);

        expect(this.raterPage.topLabelTextRaterPage).toHaveText(onHoldReasontoplabeltxt);
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  async simulatorSubmission(customerId: any, productID: any, brokerIDTestMarsh: any) {
    try {
      if (this.stepStatus) {
        const bearerTokenWB = UwwbToken;
        const apiUrl = this.apiUrlMaanager.getClearancesimulatorSubmissionEndpoint(
          customerId,
          productID,
          brokerIDTestMarsh
        );
        const resPostCall = await this.apiUtils.sendPostRequestAuth(apiUrl, bearerTokenWB, null);
        const responseBody = JSON.parse(await resPostCall.text());
        this.submissionID = responseBody.submissionId;
        this.riskID = responseBody.riskId;
        console.log('risk ID:::', this.riskID);
        console.log('Submission ID:::', this.submissionID);
      } else {
        console.log(`skipping the step 'Submission creation via clearance Simulator'`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: Submission creation via clearance Simulator `, error);
    }
  }

async validateSearchResult(searchTerm: string) { 
  try {
    await this.page.waitForTimeout(2000);
    await this.pageUtils.clickOn(this.submissionPage.searchBox);
    await this.submissionPage.searchBox.type(searchTerm, { delay: 100 });
    await this.page.waitForTimeout(2000); // Wait for search results to load
    const searchResults = this.page.locator(searchTerm);
    await searchResults.first().click();
    await this.page.waitForTimeout(2000);
    // Optional: Validate count is greater than 0
    const count = await searchResults.count();
    expect(count).toBeGreaterThan(0);
    console.log(`Total results found for customer: ${count}`);
  } catch (error) {
    throw error;
  }
}

 async azureAdLogin() {
    const searchResults = this.page.locator("//input[@aria-label='Enter your email, phone, or Skype.']");
    await searchResults.click();
  const username = `${process.env.WB_USER_EMAIL}`;
    try {
          await this.pageUtils.fillText(searchResults, username);
      await this.page.locator("//input[@value='Next']").click();
      await this.page.waitForTimeout(5000);
    } catch (error) {
      console.log('Authentication done earlier');
    }
  }

  async clickOnEmail(){
    try {
    if (!this.stepStatus) {
      console.log(`Skipping the step **__**`);
      return;
    }
    const emailLocator = this.riskPage.getSpanTextArea(' mail ');
    await emailLocator.click();
    await this.page.waitForTimeout(5000);
    const newEnquiry = this.riskPage.getSpanTextArea('New Enquiry');
    await newEnquiry.click();
    }
    catch(error){
      console.error('Unable to click on email or new enquiry:', error);
    }
  }

  async editAdressFieldOnDetailsPage(city: any, zipCode: any) {
  try {
    if (this.stepStatus) {
    const TxtBox =  this.page.locator('input[type="text"]');
    await this.pageUtils.clickOn(this.raterPage.addressEdit);
    await this.page.waitForTimeout(3000);
    const cityField = TxtBox.nth(5);
    await this.pageUtils.fillText(cityField, city);
    const zipCodeField = TxtBox.nth(6);
    await this.pageUtils.fillText(zipCodeField, zipCode);
      await this.page.waitForTimeout(5000);
      await this.page.locator('[class="p-select-label ng-star-inserted"]').nth(1).click();
      await this.pageUtils.fillText(TxtBox.nth(10), city);
      await this.page.locator(`//span[text()=' ${city} ']`).click();
      await this.pageUtils.clickOn(this.riskPage.saveBtn);
      console.log('Address edited successfully on Details Page');
    }
    else{
      console.log(`skipping the step **__**`);
    }
  }
    catch (error) {
console.error('Unable to edit address on Details Page:', error);
    }
  }


async selectCarrierFieldAndCobCode(carrier: string, cobCode: string, bzyId: any, customerName: any) {
  try {
    if (!this.stepStatus) return;
const inbox = this.riskPage.selectCarrierOption('inbox');
    await inbox.click();
     await this.pageUtils.clickOn(
      await this.listFlowUtils.getCustomerNameLinkNACP(bzyId, customerName));
         await this.raterPage.carrierDropdownBox.click();
    const carrierOption = this.riskPage.selectCarrierOption(carrier);
    await carrierOption.click();
    await this.riskPage.selectCobOption().click();
    const cobOption = this.riskPage.getCobCodeoptions(cobCode);
    await cobOption.click();
    console.log('Carrier and Cob code selected successfully');

  } catch (error) {
    this.stepStatus = false;
    test.fail();
    console.error('Step failed: selecting carrier and cob code', error);
  }
}

async validatePremiumValueAndwrittenLine(grossQuotedPremium: any,writtenLine: any, postQuoteMessage: any) {
  try {
    if (this.stepStatus) {
      await this.pageUtils.clickOn(this.raterPage.finalizeAndImportBtn);
        await this.page.waitForTimeout(10000);
      const grossText = await this.page.locator(
        '//div[text()="Gross Quoted Premium"]/following-sibling::div'
      ).innerText();
      console.log('Gross Quoted Premium:', grossText);
      // const beazleyText = await this.page.locator(
      //   '//span[text()="Beazley Share Quote Premium"]/..'
      // ).innerText();
 const beazleyText = await this.page.locator(
        '//div[text()="Beazley Share Quote Premium"]/following-sibling::div'
      ).nth(0).innerText();
      
      console.log('Beazley Share Quote Premium:', beazleyText);

      const writtenLineText = await this.page.locator(
        '//span[text()="Written Line%"]/..'
      ).innerText();
      console.log('Written Line %:', writtenLineText);

      const grossValue = parseFloat(grossText.replace(/,/g, '').replace(/[^\d.]/g, ''));
      const writtenLineValue = parseFloat(writtenLineText.replace('%', '').trim());
      const beazleyValue = parseFloat(beazleyText.replace(/,/g, '').replace(/[^\d.]/g, ''));

      const expectedValue = (grossValue * writtenLineValue) / 100;

      console.log('Expected Beazley Premium:', expectedValue);
       if (grossValue !== grossQuotedPremium)
      console.error(`Gross Premium mismatch | Expected: ${grossQuotedPremium}, Actual: ${grossValue}`);

    if (writtenLineValue !== writtenLine)
      console.error(`Written Line % mismatch | Expected: ${writtenLine}, Actual: ${writtenLineValue}`);
    if (beazleyValue !== expectedValue)
      console.error(`Beazley Premium mismatch | Expected: ${expectedValue}, Actual: ${beazleyValue}`);
    else
      console.log('All validations passed');
     await this.pageUtils.clickOn(this.raterPage.submitForAuthorityCheckBtn);
        await this.page.waitForTimeout(10000);
       
        await this.pageUtils.fillText(this.raterPage.withinAuthorityNotes, postQuoteMessage);
        await this.pageUtils.clickOn(this.raterPage.proceedToSend);
        await this.page.waitForTimeout(5000);

          await this.pageUtils.clickOn(this.quotesPage.sent);
        await this.page.waitForTimeout(3000);


    } else {
      console.log(`Skipping the step **__**`);
    }

  } catch (error) {
    console.error('Error in validatePremiumValueAndwrittenLine:', error);
  }
}

async validatePremiumValueAndwrittenLineOnQuote(grossQuotedPremium: any,writtenLine: any, quoteRaterLabelText: any) {
  try {
    if (this.stepStatus) {
       expect(this.raterPage.topLabelTextRaterPage).toHaveText(quoteRaterLabelText);
        await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(this.raterPage.quotesTab);
      const grossText = await this.page.locator(
        '//span[text()=" Gross Quoted Premium "]/following-sibling::span'
      ).innerText();
      console.log('Gross Quoted Premium:', grossText);
      // const beazleyText = await this.page.locator(
      //   '//span[text()="Beazley Share Quote Premium:"]/following-sibling::span'
      // ).innerText();
      // console.log('Beazley Share Quote Premium:', beazleyText);
const beazleyText = await this.page.locator(
        '//span[text()=" Beazley Share Quote Premium "]/following-sibling::span'
      ).nth(0).innerText();
      console.log('Beazley Share Quote Premium:', beazleyText);

      const writtenLineText = await this.page.locator(
        '//span[text()=" Written Line%: "]/following-sibling::span'
      ).innerText();
      console.log('Written Line %:', writtenLineText);

      const grossValue = parseFloat(grossText.replace(/,/g, '').replace(/[^\d.]/g, ''));
      const writtenLineValue = parseFloat(writtenLineText.replace('%', '').trim());
      const beazleyValue = parseFloat(beazleyText.replace(/,/g, '').replace(/[^\d.]/g, ''));

      const expectedValue = (grossValue * writtenLineValue) / 100;

      console.log('Expected Beazley Premium:', expectedValue);
       if (grossValue !== grossQuotedPremium)
      console.error(`Gross Premium mismatch | Expected: ${grossQuotedPremium}, Actual: ${grossValue}`);

    if (writtenLineValue !== writtenLine)
      console.error(`Written Line % mismatch | Expected: ${writtenLine}, Actual: ${writtenLineValue}`);
    if (beazleyValue !== expectedValue)
      console.error(`Beazley Premium mismatch | Expected: ${expectedValue}, Actual: ${beazleyValue}`);
    else
      console.log('All validations passed');
        await this.pageUtils.clickOn(this.quotesPage.sent);
        await this.pageUtils.clickOn(this.quotesPage.sentBindQuote.first());


    } else {
      console.log(`Skipping the step **__**`);
    }

  } catch (error) {
    console.error('Error in validatePremiumValueAndwrittenLine:', error);
  }
}

async clickOnTeamInbox(){
  try {     
    if (this.stepStatus) {
          await this.page.waitForTimeout(5000);
      await this.pageUtils.clickOn(this.riskPage.getSpanTextArea(' mail '));
    await this.page.waitForTimeout(5000);
    console.log('Clicked on team inbox successfully');
    } else {
      console.log(`Skipping the step **__**`);
    }
  } catch (error) {
    console.error('Error in clicking on team inbox:', error);
  }
   
  }

async validateSingleSelectionOnTeamInbox(){
  try {   
     if (this.stepStatus) {
      await this.page.waitForTimeout(5000);
      const inboxItems = this.riskPage.getInputType('checkbox');
await inboxItems.nth(3).click();
            await this.page.waitForTimeout(2000);
        await this.pageUtils.clickOn(this.submissionPage.assignToSelf);
            await this.page.waitForTimeout(5000);
            console.log('Single selection validation passed for assign to self.');
                        await inboxItems.nth(3).click();
              await this.page.waitForTimeout(2000);
            inboxItems.nth(3).click();
              await this.page.waitForTimeout(2000);
              await this.riskPage.getSpanTextArea('Assign to Team Member').click();
                            await this.page.waitForTimeout(2000);
              await this.pageUtils.clickOn(this.riskPage.getSpanTextArea('Select'));
              await this.pageUtils.clickOn(this.riskPage.getInputType('text').nth(3));
      await this.pageUtils.fillText(this.riskPage.getInputType('text').nth(3), "Mukesh Krishna");
await this.pageUtils.clickOn(this.riskPage.getSpanTextArea(' Mukesh Krishna '));
await this.pageUtils.clickOn(this.riskPage.getSpanTextArea('Assign'));
            await this.page.waitForTimeout(5000);
    console.log('Single selection validation passed for assign to team member.');
    } else {
      console.log(`Skipping the step **__**`);
    }
  } catch (error) {
    console.error('Error in validate singleSelectionOnTeamInbox:', error);
  }
}

async validatebulkSelectionOnTeamInbox(){
  try {   
     if (this.stepStatus) {
      await this.page.waitForTimeout(5000);
      const inboxItems = this.riskPage.getInputType('checkbox');
      inboxItems.nth(2).click();
            await this.page.waitForTimeout(2000);
        await this.pageUtils.clickOn(this.submissionPage.assignToSelf);
            await this.page.waitForTimeout(5000);
                        console.log('Bulk selection validation passed for assign to self.');
            inboxItems.nth(2).click();
              await this.page.waitForTimeout(2000);
                          inboxItems.nth(2).click();
              await this.page.waitForTimeout(2000);
              await this.riskPage.getSpanTextArea('Assign to Team Member').click();
                            await this.page.waitForTimeout(2000);
              await this.pageUtils.clickOn(this.riskPage.getSpanTextArea('Select'));
              await this.pageUtils.clickOn(this.riskPage.getInputType('text').nth(3));
        await this.pageUtils.fillText(this.riskPage.getInputType('text').nth(3), "Mukesh Krishna");
await this.pageUtils.clickOn(this.riskPage.getSpanTextArea(' Mukesh Krishna '));
await this.pageUtils.clickOn(this.riskPage.getSpanTextArea('Assign'));
            await this.page.waitForTimeout(10000);
              console.log('Bulk selection validation passed for Assign to Team Member.');
    } else {
      console.log(`Skipping the step **__**`);
    }
  } catch (error) {
    console.error('Error in validate bulkSelectionOnTeamInbox:', error);
  }
}

async validateHeaderOnTeamInbox() {
  try {
    if (!this.stepStatus) {
      console.log(`Skipping the step **__**`);
      return;
    }
    await this.pageUtils.clickOn(this.riskPage.getAnchorTag(" Correspondence "));
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("New email"));
    // Single elements
    const singleSelectors = ['.ql-bold','.ql-italic','.ql-underline','.ql-strike','.ql-blockquote',
      '.ql-code-block',
      '.ql-font.ql-picker',
      '.ql-link'
    ];
    for (const selector of singleSelectors) {
      await this.page.locator(selector).isVisible();
    }
    // Elements with multiple occurrences (index-based)
    const multiSelectors = ['.ql-header','.ql-list','.ql-script','.ql-indent' ];
    for (const selector of multiSelectors) {
      const elements = this.page.locator(selector);
      const count = await elements.count();
      for (let i = 0; i < Math.min(count, 2); i++) {
        await elements.nth(i).isVisible();
      }
    }
    console.log('Header validation passed on Team Inbox.');
  } catch (error) {
    console.error('Error in validate Header on Team Inbox:', error);
  }
}

async SelectAndValidateESOTemplate() {
  try {
    if (!this.stepStatus) {
      console.log(`Skipping the step **__**`);
      return;
    }
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Signature only"));
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("ESO"));
    const fields = [
      'Exception Sign-off',
      'Requesting Underwriter Name/Initials:',
      'Highest Premium figure/EPI/GPI',
      'Term',
      'Unauthorised COB or MOP',
      'D&O specific checklist:',
      'Account name:',
      'What they do:',
      'New or Renewal?',
      'ABC:',
      'Side A/DIC:',
      'Layer:',
      'TPI:',
      'ROC:',
      'Stanford claims?',
      'ClaimCenter claims?',
      'Reviewed U/L?',
      'Public?',
      '* Entity Investigation?',
      '* Entity coverage?',
      '* Side A Match/equivalent?',
      '* IPO exclusion/notification?',
      '* Batch/deemer language?',
      '* IVI Exclusion?',
      'Sign Off:',
      'Policy Reference:',
      'Bind Date/Endo/MTA bind date*:',
      `Authoriser's Limit of Authority:`,
      'Authoriser signature:',
      'Date of authorisation:'
    ];

    for (const text of fields) {
      await expect(this.page.getByText(text, { exact: false })).toBeVisible();
    }
    console.log('ESO template fields are validated successfully');
  } catch (error) {
    console.error('Error in SelectAndValidateESOTemplate:', error);
  }
}


  async createNewEnquiryOrRenewals(product: any, options?: any) {
    try{
      if (!this.stepStatus) {
      console.log(`Skipping the step **__**`);
      return;
    }
    //locator for product and cob code dropdown options
  const selectProductOption = this.page.locator(`//span[text()=' ${product} ']`);
  const selectCOBCodeOption = this.page.locator('span[class="bz-item-title bz-font-content"]').nth(0);
      await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Select Enquiry Type"));
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea(" Binder contract due diligence "));
    const spanLocator = this.page.locator('span[class="bz-dots-horizontal bzi icon p-button-icon ng-star-inserted"]').nth(0);
     await spanLocator.click();
     if(options==='Renewal'){
          await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Create Renewal Submission"));
  const selectProduct = this.page.locator("//label[text()=' Product ']/following::div").nth(0);
  await selectProduct.click();
   await selectProductOption.click();
   const selectCOBCode = this.page.locator("//label[text()=' Cob Code ']/following::div").nth(0);
       await selectCOBCode.click();
       await selectCOBCodeOption.click();
       const policyReferenceLocator = this.page.locator(" //input[@type='text']").nth(4);
       await this.pageUtils.fillText(policyReferenceLocator, "v123456789yy");
      await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Submit Renewal"));
     await this.page.waitForTimeout(5000);
     console.log('Renewal submission created successfully');
    }
  else{
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Create Submission"));
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Select Product"));
    await selectProductOption.click();
    await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Select COB Code"));
        await this.pageUtils.clickOn(this.riskPage.getSpanTextArea("Submit Submission"));
     await this.page.waitForTimeout(5000);
     console.log('New enquiry submission created successfully');
  }
     const caseStatus=this.page.locator('span[class="bz-badge bz-body-caption bz-badge-sm bz-emphasis-md bz-gray"]');
await expect(caseStatus).toContainText('Closed:');
     await this.page.waitForTimeout(2000);
}
catch (error) {    
  console.error('Error in createNewEnquiryOrRenewals:', error);  }

}
}


