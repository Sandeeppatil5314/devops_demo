export interface TravelHistoryRequestModel {
    startDate? : string;
    endDate? : string;
    avlno? : string;
    file_name? : string;
    plate_no? : string;
}

export interface ResponseDataModel {
    success: boolean;
    data: any;
    ResponseTime?: any;
}