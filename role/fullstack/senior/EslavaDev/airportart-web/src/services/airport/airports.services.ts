
import { ApiProvider } from '../../providers/apiProvider/apiProvider';
import { camelizeKeys } from '../../utils';
export class AirportsService {
   private api;
  constructor() {
    this.api = ApiProvider.getInstance();
  }


  async getAirports(uid:number){
    const result = await this.api.get(`/items/airport/${uid}?fields=*,location_id.*,airport_operator_id.*`);
    if (!result?.data) {
      throw Error('USER NOT FOUND!');
    }
    return result.data.data;
  }

  async getAllAirports(page: number = 1, limit:number =10){
    const result = await this.api.get(`/items/airport?fields=*,location_id.*,airport_operator_id.*&limit=${limit}&page=${page}`);
    if (!result?.data) {
      throw Error('USER NOT FOUND!');
    }
    const response = result.data.data.map((item: any)=> {
      const data = camelizeKeys(item)
      data.priorityOrder = Number(data.priorityOrder)
      return data
    }).sort((a: any,b: any) => a.priorityOrder - b.priorityOrder)
    return response;
  }

  async countAirports(){
    const {data} = await this.api.get(
      `/items/airport?aggregate[count]=*`,
    );
    console.log(data.data[0])
    return data.data[0];
  }
}
