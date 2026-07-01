import { expect, Page, test } from '@playwright/test';
import { POManager } from './POManager';
import path from 'path';

export class Insight {
  public page: Page;
  public pageUtils: any;
  public CustomerPanelPage: any;
  public Submission: any;

  stepStatus: boolean = true;

  // Response objects
  resCustomerIdentity: any;
  resCustomerEsg: any;
  resCustomerFinancials: any;
  resCustomerFinancialsCapiq: any;
  resCustomerSanctions: any;
  resCustomerHierarchy: any;

  insightStrValue: any;
  statusMsg: any;
  submissionBzID: any;
  splittedUrl: any;
  submissionID: any;

  constructor(page: Page, pageUtils: any, submissionData: any) {
    this.page = page;
    this.pageUtils = pageUtils;

    // Initialize POManager
    const poManager = new POManager(page);

    // Get CustomerPanelPage from POM
    this.CustomerPanelPage = poManager.getCustomerPanelPage();

    // // Store submission data
    this.Submission = submissionData;
  }

  /*Profile check and profile swapping*/
  async profileCheckAndProfileSwapping(submission: any) {
    try {
      if (this.stepStatus) {
        const profileTxt = await this.pageUtils.getTextContent(this.CustomerPanelPage.profileText);
        const profileTxtStringValue = profileTxt.toString();

        console.log('Profile text is ', profileTxtStringValue);

        if (profileTxt[0] !== submission) {
          await this.pageUtils.clickOn(this.CustomerPanelPage.profileLogo);
          await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(this.CustomerPanelPage.selectActiveProfileDropdown);
          if (submission == 'UK Clearance') {
            await this.pageUtils.clickOn(this.CustomerPanelPage.ukClearanceProfile);
          } else {
            await this.pageUtils.clickOn(this.CustomerPanelPage.usClearanceProfile);
          }
          await this.page.waitForTimeout(5000);
          await this.page.reload();
        }
      } else {
        console.log(`skipping the step **__**`);
      }
    } catch (err) {
      console.error('Error in profileCheckAndProfileSwapping:', err);
      this.stepStatus = false;
      throw err;
    }
  }

  /*Create New Insure*/
  async createNewInsure(name: any, address1: any, city: any, pincode?: any) {
    await test.step('Create New Insure', async () => {
      try {
        if (this.stepStatus) {
          await this.pageUtils.clickOn(this.CustomerPanelPage.createSubmission);
          await this.page.waitForTimeout(5000);

          await this.pageUtils.clickOn(this.CustomerPanelPage.insuredTxtBox);
          await this.pageUtils.fillText(this.CustomerPanelPage.insuredTxtBoxafterClick, name);

          await this.pageUtils.clickOn(this.CustomerPanelPage.createNewInsured);
          await this.page.waitForTimeout(2000);
          await this.pageUtils.clickOn(this.CustomerPanelPage.createNewInsured);

          await this.pageUtils.fillText(this.CustomerPanelPage.address1, address1);
          await this.pageUtils.fillText(this.CustomerPanelPage.cityNameTxtBox, city);
          await this.pageUtils.clickOn(this.CustomerPanelPage.countryTxtBoxBeforeClick);
          await this.pageUtils.clickOn(this.CustomerPanelPage.countryTxtBox);
          await this.pageUtils.clickOn(this.CustomerPanelPage.usState);
          await this.pageUtils.clickOn(this.CustomerPanelPage.stateTxtBox);
          await this.pageUtils.clickOn(this.CustomerPanelPage.texasSate);
          if (pincode) {
            await this.pageUtils.clickOn(this.CustomerPanelPage.pincodeTxtBox);
            await this.pageUtils.fillText(this.CustomerPanelPage.pincodeTxtBox, pincode);
          }

          await this.pageUtils.clickOn(this.CustomerPanelPage.insuredSaveBtn);
        } else {
          console.log(`skipping the step 'Create New Insure'`);
        }
      } catch (error) {
        this.stepStatus = false;
        test.fail();
        console.error('Step failed: Create New Insure', error);
      }
    });
  }

  async ExistingInsure(name: any) {
    try {
      if (this.stepStatus) {
        await this.pageUtils.clickOn(this.CustomerPanelPage.createSubmission);
        await this.page.waitForTimeout(5000);
        await this.pageUtils.clickOn(this.CustomerPanelPage.insuredTxtBox);
        await this.pageUtils.fillText(this.CustomerPanelPage.insuredTxtBoxafterClick, name);
        await this.pageUtils.clickOn(this.CustomerPanelPage.selectExistingInsure);
        await this.page.waitForTimeout(10000);
      } else {
        console.log(`skipping the step 'Create New Insure'`);
      }
    } catch (error) {
      this.stepStatus = false;
      test.fail();
      console.error(`Step failed: **__** `, error);
    }
  }

  /*Select Product*/
  async selectProduct(
    product: any,
    bookerName: any,
    propertyUnderwriter: any,
    brokerContact?: any
  ) {
    await test.step('Select Product', async () => {
      try {
        if (this.stepStatus) {
          if (product == 'CYEX') {
            await this.pageUtils.clickOn(this.CustomerPanelPage.selectPrdouctTxtBox);
            await this.pageUtils.clickOn(this.CustomerPanelPage.productNameCYEX);

            await this.pageUtils.clickOn(this.CustomerPanelPage.selectCOBCodeTxtBox);
            await this.pageUtils.clickOn(this.CustomerPanelPage.selectCOBCode);

            await this.pageUtils.clickOn(this.CustomerPanelPage.productSaveBtn);

            // Assign Team
            await this.pageUtils.clickOn(this.CustomerPanelPage.assignTeamSelectTeamTxtBox);
            await this.pageUtils.clickOn(this.CustomerPanelPage.cyexTeamname);

            await this.pageUtils.clickOn(this.CustomerPanelPage.selectUnderwritterTxtBox);
            await this.pageUtils.clickOn(this.CustomerPanelPage.undewritterName);

            await this.page.waitForTimeout(3000);

            await this.pageUtils.clickOn(this.CustomerPanelPage.underwritterPlatformTxtBox);
            await this.pageUtils.clickOn(this.CustomerPanelPage.underwritterPlatformOption);

            await this.pageUtils.clickOn(this.CustomerPanelPage.riskDetailsSaveBtn);

            // Broker
            await this.pageUtils.clickOn(this.CustomerPanelPage.findBrokerAgencyTxtBox);
            await this.pageUtils.fillText(
              this.CustomerPanelPage.findBrokerAgencyTxtBoxAfterClick,
              bookerName
            );

            await this.page.waitForTimeout(5000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.abdBrokerName.nth(1));
            await this.page.waitForTimeout(2000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.brokerContact);
            // await this.pageUtils.clickOn(this.CustomerPanelPage.searchBrokerInput.first());
             await this.pageUtils.fillText(this.CustomerPanelPage.searchBrokerInput, brokerContact);
              await this.page.waitForTimeout(2000); 
            //   await this.pageUtils.clickOn(this.CustomerPanelPage.selectBrokerContact);
            // await this.page.waitForTimeout(2000);


            // await this.pageUtils.clickOn(this.CustomerPanelPage.brokerSaveBtn);
          } else if (
            product == 'ABCP' ||
            product == 'Execuguard' ||
            product == 'Armour' ||
            product == 'NACP' ||
            product == 'PGC' ||
            product == 'PDC' ||
            product == 'PSP' ||
            product == 'PW'
          ) {
            await this.pageUtils.clickOn(this.CustomerPanelPage.findBrokerAgencyTxtBox);
            await this.page.waitForTimeout(2000);
            await this.pageUtils.fillText(
              this.CustomerPanelPage.findBrokerAgencyTxtBoxAfterClick,
              bookerName
            );
            await this.page.waitForTimeout(1000);
            // await this.pageUtils.clickOn(this.CustomerPanelPage.abdBrokerName.first());
            await this.pageUtils.clickOn(this.CustomerPanelPage.abdBrokerName.nth(1));
            await this.page.waitForTimeout(2000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.brokerContactUSML.first());
            await this.page.waitForTimeout(1000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.brokerContactName.first());
            await this.page.waitForTimeout(2000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.selectPrdouctTxtBox);
            if (product == 'ABCP') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNameABCP);
            } else if (product == 'Execuguard') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNameExecuguard);
            } else if (product == 'Armour') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNameArmour);
            } else if (product == 'NACP') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNameNACP);
            } else if (product == 'PGC') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNamePGC);
            } else if (product == 'PDC') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNamePDC);
            } else if (product == 'PSP') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNamePSP);
            } else if (product == 'PW') {
              await this.pageUtils.clickOn(this.CustomerPanelPage.productNamePW);
            }

            /*RiskDetails*/
            await this.page.waitForTimeout(8000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.marketSegmentTxtBox);
            await this.pageUtils.clickOn(this.CustomerPanelPage.marketSegmentOption);
            await this.page.waitForTimeout(5000);
            await this.pageUtils.clickOn(this.CustomerPanelPage.riskDetailsSaveBtn);
            if (
              product == 'NACP' ||
              product == 'PGC' ||
              product == 'PDC' ||
              product == 'PSP' ||
              product == 'PW'
            ) {
              await this.pageUtils.clickOn(this.CustomerPanelPage.selectUnderwritterTxtBoxUSML);
              await this.page.waitForTimeout(1000);
              await this.pageUtils.fillText(
                this.CustomerPanelPage.selectUnderwritterTxtBoxUSMLAfterClick,
                propertyUnderwriter
              );
              await this.page.waitForTimeout(1000);
              await this.pageUtils.clickOn(
                this.page.locator(this.CustomerPanelPage.getUnderwriterName(propertyUnderwriter))
              );
              await this.page.waitForTimeout(2000);
              await this.pageUtils.clickOn(this.CustomerPanelPage.assignTeamSelectTeamTxtBox);
              await this.page.waitForTimeout(1000);
              await this.pageUtils.clickOn(this.CustomerPanelPage.propertyTeamname);
            } else {
              /*Assign Team*/
              await this.pageUtils.clickOn(this.CustomerPanelPage.assignTeamSelectTeamTxtBox);
              await this.page.waitForTimeout(2000);
              await this.pageUtils.clickOn(this.CustomerPanelPage.managementLiabilityTeamname);
              await this.page.waitForTimeout(2000);
              await this.pageUtils.clickOn(this.CustomerPanelPage.selectUnderwritterTxtBoxUSML);
              await this.page.waitForTimeout(2000);
              await this.pageUtils.clickOn(this.CustomerPanelPage.undewritterName);
            }
          }
          // Clearance
          await this.pageUtils.clickOn(this.CustomerPanelPage.clearanceSearchBtn);
          await this.page.waitForTimeout(5000);
          await this.pageUtils.clickOn(this.CustomerPanelPage.clearanceCloseBtn);
          await this.page.waitForTimeout(10000);
          await this.pageUtils.clickOn(this.CustomerPanelPage.clearanceBtn);
          await this.page.waitForTimeout(8000);
          let insightStatusMsg = await this.pageUtils.getTextContent(
            this.CustomerPanelPage.submissionStatus.first()
          );

          this.insightStrValue = insightStatusMsg.toString();
          console.log('Submission status : ', this.insightStrValue);

          let splittedInsightStrValue = this.insightStrValue.split('(', 2);
          console.log('Submission status splitted : ', splittedInsightStrValue);

          this.statusMsg = splittedInsightStrValue[1].toString();
          this.submissionBzID = splittedInsightStrValue[0].toString().trim();
          // console.log('SubmissionBZID : ', Insight.submissionBzID);

          let urlLink = await this.page.url();
          console.log('URL Link : ', urlLink);

          this.splittedUrl = urlLink.split('_', 2);
          this.submissionID = this.splittedUrl[1].toString();
          console.log('submission ID from URL : ', this.submissionID);
          // return this.submissionBzID;
        } else {
          console.log(`skipping the step 'Select Product'`);
        }
      } catch (error) {
        this.stepStatus = false;
        test.fail();
        console.error('Step failed: Select Product', error);
      }
    });
  }
}
