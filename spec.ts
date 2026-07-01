import { test, expect, APIRequestContext, request } from '@playwright/test';
import { POManager } from '../../../shared/pages/POManager';
import { apiEndpoint, urls } from '../../../shared/sit-e2e/api/urls/urls';
import { Submission7 as Submission } from '../../../shared/sit-e2e/test-data/submission.json';
import { Quote1 as quote } from '../../../shared/sit-e2e/test-data/quote.json';
import { CustomerToken } from '../../../shared/sit-e2e/test-data/token.json';
import { UwwbToken } from '../../../shared/sit-e2e/test-data/token.json';
import { UtilManager } from '../../../shared/sit-e2e/utils/UtilManager';
import { Console } from 'console';
import { workBench } from '../../../shared/pages/workBench.page';

test.describe('UW-2408 UK_CYEX_Bind', () => {
  test.afterEach(async ({ page }) => {
    console.log(`Finished UK_CYEX_Bind with status ${test.info().status}`);
    page.close();
  });
  test('@UK @CYEX @Flow @UWWB @UW-2408', async ({ page }) => {
    /*Defining Page Objects*/
    const poManager = new POManager(page);
    const pageUtils = poManager.getPageUtils();
    const listFlowUtils = poManager.getListFlowUtils();
    const msAuthenticationPage = poManager.getMSAuthenticationPage();
    const submissionPage = poManager.getSubmissionPage();
    const CustomerPanelPage = poManager.getCustomerPanelPage();
    const riskPage = poManager.getRiskPage();
    const raterPage = poManager.getRaterPage();
    const quotesPage = poManager.getQuotesPage();
    const HxRaterPage = poManager.gethxPage();

    /*Other Objects*/
    var stepStatus = true;

    /*Defining Other Objects*/
    let riskFlowIdvalue: any;
    let bzyId: any;
    var submissionID: any;
    var customerId: any;
    var riskID: any;
    var submissionBzID: any;

    const apiRequestContext: APIRequestContext = await request.newContext();
    const utilManager = new UtilManager(apiRequestContext);
    const apiUrlMaanager = new apiEndpoint();
    const apiUtils = utilManager.getApiUtils();
    const WorkBench = new workBench(page, pageUtils);

    /*Submission creation via clearance Simulator*/
    await test.step('Submission creation via clearance Simulator', async () => {
      await WorkBench.init();
      await WorkBench.simulatorSubmission(
        Submission.customerId,
        Submission.productIDCYEX,
        Submission.brokerIDTestMarsh
      );
      submissionID = WorkBench.submissionID;
      riskID = WorkBench.riskID;
    });
    /*Launch UWWB application */
    await test.step('Launch UWWB application', async () => {
      try {
        if (stepStatus) {
          await pageUtils.goto(`${urls.customAuthenticationAccount5}`);
          await CustomerPanelPage.clearedTab.click();
        } else {
          console.log(`skipping the step **__**`);
        }
      } catch (error) {
        stepStatus = false;
        test.fail();
        console.error(`Step failed: **__** `, error);
      }
    });

    /*Default Screen is visible*/
    await test.step('Check Visibility of Customer Details', async () => {
      await WorkBench.customerDetails();
    });

    /*cleared tab */
    await test.step('Cleared tab', async () => {
      await WorkBench.clearedTabSimulator(riskID);
      riskFlowIdvalue = WorkBench.riskFlowIdvalue;
      customerId = WorkBench.customerId;
      submissionBzID = WorkBench.submissionBzID;
    });

    /*Assign to Self*/
    await test.step('Assign to Self', async () => {
      await WorkBench.assignToSelf(submissionBzID);
    });

    /*Navigate to Assigned Tab*/
    await test.step('Navigate to Assigned Tab', async () => {
      await WorkBench.assignedTab(riskFlowIdvalue);
      bzyId = WorkBench.bzyId;
    });

    /*Assign Risk to TechUW*/
    await test.step('Assign Risk to TechUW', async () => {
      await WorkBench.assignToTechnicalUnderWriter(bzyId, Submission.customerName, 'CYEX');
    });

    /*Get Identity API from Customer Domain */
    await test.step('Get Identity API from Customer Domain', async () => {
      await WorkBench.init();
      await WorkBench.getIdentityApi(customerId, CustomerToken);
    });

    /*Click on Customer Name*/
    await test.step('Click on Customer Name', async () => {
      try {
        if (stepStatus) {
          await pageUtils.goto(`${urls.customAuthenticationAccount1Usml}`);
          await page.waitForTimeout(4000);
          await pageUtils.clickOn(submissionPage.assignedTab);
          await pageUtils.clickOn(
            await listFlowUtils.getCustomerNameLink(bzyId, Submission.customerName)
          );
        } else {
          console.log(`skipping the step Click on Customer Name`);
        }
      } catch (error) {
        stepStatus = false;
        test.fail();
        console.error(`Step failed: Click on Customer Name`, error);
      }
    });

    /*Validate Overview Tab*/
    await test.step('Validate Overview Tab', async () => {
      await WorkBench.overviewTab(customerId, Submission.customerName, Submission.verificationText);
    });

    /*Get ESG API from Customer Domain */
    await test.step('Get ESG API from Customer Domain', async () => {
      await WorkBench.esgAPI(customerId, CustomerToken);
    });

    /*Validate ESG Tab*/
    await test.step('Validate ESG Tab', async () => {
      await WorkBench.esgTab(customerId);
    });

    /*Get Financial API from Customer Domain */
    await test.step('Get Financial API from Customer Domain', async () => {
      await WorkBench.financialApi(customerId, CustomerToken);
    });

    /*Get Financial Capiq API from Customer Domain */
    await test.step('Get Financial Capiq API from Customer Domain', async () => {
      await WorkBench.financialCapiqApi(customerId, CustomerToken);
    });

    /*Validate Financial Tab*/
    await test.step('Validate Financial Tab', async () => {
      await WorkBench.financialTab(customerId);
    });

    /*Get Sanctions Lexis Nexis API from Customer Domain */
    await test.step('Get Sanctions Lexis Nexis API from Customer Domain', async () => {
      await WorkBench.sanctionApi(customerId, CustomerToken);
    });

    /*Validate Sanctions Tab*/
    await test.step('Validate Sanctions Tab', async () => {
      await WorkBench.sanctionTab(customerId);
    });

    // /*Get Hierarchy API from Customer Domain */
    // await test.step('Get Hierarchy API from Customer Domain', async () => {
    //     await WorkBench.hierarchyApi(customerId,CustomerToken);
    // });

    // /*Validate Hierarchy Tab*/
    // await test.step('Validate Hierarchy Tab', async () => {
    //          await WorkBench.hierarchyTab(customerId);

    // });

    /*Go to HX rater Page and Import ther version*/
    await test.step('Go to HX rater Page and Import ther version', async () => {
      try {
        if (stepStatus) {
          await pageUtils.clickOn(raterPage.backBtnToPolicyDetailsPage);
          await page.waitForTimeout(10000);
          await pageUtils.clickOn(raterPage.carrierDropdown);
          await pageUtils.clickOn(
            page.locator(riskPage.getCarrierOption(Submission.carrieroption))
          );
          const [hxPage] = await Promise.all([
            page.waitForEvent('popup', { timeout: 100000 }).catch((e) => {
              console.error('Timeout exceeded while waiting for the new page:', e.message);
              return null;
            }),
            await pageUtils.clickOn(raterPage.openRaterBtn),
          ]);

          if (hxPage) {
            console.log('New tab/window detected:', page.url()); // Wait for the new tab/window to load completely
            console.log('Waiting for the new tab/window to load');
            await page.waitForLoadState('load');
            await HxRaterPage.azureAdLogin(hxPage);
            await page.waitForTimeout(20000);
            await HxRaterPage.hxRating(hxPage);
            await HxRaterPage.hxPricing(
              hxPage,
              Submission.limit,
              Submission.excess,
              Submission.deductible,
              Submission.MARetention,
              Submission.grossQuotedpremiumUW2408,
              Submission.brokerageFee
            );
          } else {
            console.error('Failed to detect new tab/window');
          }
        } else {
          console.log(`skipping the step **__**`);
        }
      } catch (error) {
        stepStatus = false;
        test.fail();
        console.error(`Step failed: **__** `, error);
      }
    });

    /*Navigate to WB then finalize the quote*/
    await test.step('Navigate to WB then finalize the quote', async () => {
      await WorkBench.finalizeQuoteWithinAuthority(quote.postQuoteMessage);
    });

    /*Bind Quote*/
    await test.step('Bind Quote', async () => {
      await WorkBench.bindQuote(quote.quoteRaterLabelText);
    });

    /*Sanction Status check*/
    await test.step('Sanction Status check', async () => {
      await WorkBench.sanctionStatusCheck(quote.quoteRaterLabelText, quote.beforeBindingTxt);
    });

    /*Post Bind Controls Panel - Policy Reference*/
    await test.step('Post Bind Controls Panel - Policy Reference', async () => {
      await WorkBench.postBindControl('Yes', quote.postQuoteMessage, quote.policyRefCode);
    });

    /*Complete Post Bind Check*/
    await test.step('Completed post bind in controls tab', async () => {
      await WorkBench.completePostBind('No', quote.beforeBindingTxt, quote.afterBindingTxt);
    });
  });
});
