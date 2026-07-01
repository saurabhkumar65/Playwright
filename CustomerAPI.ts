import { APIRequestContext } from '@playwright/test';
import { puwHeaders, filePath, urls } from '../urls/urls';
import { apiUtils } from '../../utils/apiUtils';

export class customerAPI extends apiUtils {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    super(request);
    this.request = request;
  }

  async createCustomer(createCustId: string): Promise<any> {
    var response: any = '';
    const payload = this.loadRequestPayloadFromJSON(filePath.createCust_filePath);
    payload.id = createCustId;
    response = await this.sendPostRequest(`${urls.createCustomerApi}`, puwHeaders, payload);
    return response;
  }

  async verifyCustomer(custId: string, verificationType: number) {
    var response: any = '';
    const payload = this.loadRequestPayloadFromJSON(filePath.verifyCust_filePath);
    this.updateVerifiedPayload(payload, custId, verificationType);
    response = await this.sendPostRequest(`${urls.verifyCustomerApi}`, puwHeaders, payload);
    return response;
  }
}
