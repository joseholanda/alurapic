import { HttpClient } from '@angular/common/http';

const API = "http://localhost:3000/";

export class PhotoService {
    constructor(private http: HttpClient) {

    }

    listFromUser(username: string) {
        return this.http.get<Object[]>(API + username + '/photos')
    }
}