import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { IUserCompanyInfo } from "../user-companies/models/company.model";

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {
    baseUrl = 'http://localhost:5001/api/';

    constructor(private http: HttpClient) { }

    getCompanies(username: string) {
        return this.http.get<Array<IUserCompanyInfo>>(`${this.baseUrl}companies?username=${username}`);
    }
}