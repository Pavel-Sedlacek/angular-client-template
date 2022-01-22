import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SnippetFile} from "../res/fts/snippet-file.interface";
import {FlashMessagesService} from "./flash-messages.service";
import {Observable} from "rxjs";
import {FileUploadResponse} from "../res/fts/file-upload-response.interface";

@Injectable({
  providedIn: 'root'
})
export class FileTransferService {

  constructor(private readonly httpClient: HttpClient) {
  }

  upload_file(endpoint: string, file: SnippetFile, payload: any): Observable<FileUploadResponse> {
    let formData = new FormData()
    for (const i in payload) formData.append(i, payload[i])
    formData.append(file.dataName, file.file)
    return this.httpClient.post(endpoint, formData) as Observable<FileUploadResponse>
  }

  upload_multi(endpoint: string, files: SnippetFile[], payload: any): Observable<FileUploadResponse> {
    let formData = new FormData()
    for (const p of payload) formData.append(p, payload[p])
    for (const f of files) formData.append(f.dataName, f.file)
    return this.httpClient.post(endpoint, formData) as Observable<FileUploadResponse>
  }

  // TODO download

}
