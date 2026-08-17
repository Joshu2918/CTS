import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { ChatApiService } from './chat-api.service';

describe('ChatApiService', () => {

  let service: ChatApiService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ChatApiService);
    httpTesting = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

  it('should load messages from API', () => {

    const mockMessages = [
      {
        id: 1,
        roomId: 1,
        sender: 'Ravi',
        text: 'Hello!',
        time: '10:00 AM'
      }
    ];

    service.getMessages().subscribe(messages => {

      expect(messages.length).toBe(1);
      expect(messages[0].sender).toBe('Ravi');
      expect(messages[0].text).toBe('Hello!');

    });

    const request =
      httpTesting.expectOne('assets/messages.json');

    expect(request.request.method).toBe('GET');

    request.flush(mockMessages);

  });

});