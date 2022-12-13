export interface IUserCompanyInfo {
    id: number;
    companyName: string;
    companyType: CompanyType;
    address: string;
    city: string;
    postalCode: string;
    nip: string;
    position: UserCompanyPosition;
}

export enum CompanyType {
    Individual = 1,
    Cooperative,
    CivilianCompany,
    OvertCompany,
    PartnerCompany,
    LimitedPartnershipCompany,
    LimitedJSPartnershipCompany,
    StockCompany,
    LimitedLiabilityCompany
}

export enum UserCompanyPosition {
    President = 1,
    Partner,
    Accountant
}