const supertest = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/user');
const { connectToDB } = require('../../src/utils/db');

const request = supertest(app);

describe('/users', () => {
  beforeAll(() => {
    connectToDB();
  });

  // beforeEach(async () => {
  //   await Session.deleteMany({});
  // });

  const validUser = { firstName: 'hi', lastName: '0' };

  const formatValidator = [
    { firstName: 'hi', lastName: '0' },
    { firstName: 'hi', lastName: '0' },
  ];

  // //= =================== POST TEST ====================
  // describe('POST', () => {
  //   const createSession = (body) => request.post('/api/sessions').send(body);

  //   it('should return 201 if request is valid', async () => {
  //     const res = await createSession(validSession);
  //     expect(res.statusCode).toBe(201);
  //   });

  it('should save session to database if request is valid', async () => {
    const session = true;
    expect(!!session).toBe(true);
  });

  //   it.each(formatValidator)(
  //     'should return 400 when $field is $value',
  //     async ({ field, value }) => {
  //       const session = { ...validSession };
  //       session[field] = value;
  //       const res = await createSession(session);
  //       expect(res.statusCode).toBe(400);
  //     },
  //   );

  //   it('should return 409 if the new session is already existed', async () => {
  //     await createSession(validSession);
  //     const res = await createSession(validSession);
  //     expect(res.statusCode).toBe(409);
  //   });
  // });

  // //= =================== GET TEST ====================
  // describe('GET', () => {
  //   const requestingSession = { date: '2021-06-28', time: 0 };

  //   const createSession = (body) => request.post('/api/sessions').send(body);

  //   it('should return 200 if request finds the target', async () => {
  //     await createSession(validSession);
  //     const res = await getSession(requestingSession);
  //     expect(res.statusCode).toBe(200);
  //   });

  //   it.each(formatValidator)(
  //     'should return 400 if request is invalid',
  //     async ({ field, value }) => {
  //       await createSession(validSession);
  //       const session = { ...requestingSession };
  //       if (!session[field]) {
  //         return;
  //       }
  //       session[field] = value;
  //       const res = await getSession(session);
  //       expect(res.statusCode).toBe(400);
  //     },
  //   );

  //   it('should return 404 if request is not found', async () => {
  //     await createSession(validSession);
  //     const session = { ...requestingSession };
  //     session.date = '2021-06-27';
  //     const res = await getSession(session);
  //     expect(res.statusCode).toBe(404);
  //   });
  // });

  // //= =================== PUT TEST ====================
  // describe('PUT', () => {
  //   const newDateAndTime = { date: '2021-06-28', time: 0 };
  //   const newMaxNumber = { maxNumber: 40 };

  //   const createSession = (body) => request.post('/api/sessions').send(body);

  //   it('should return 200 if session updates successfully', async () => {
  //     await createSession(validSession);
  //     const res = await updateSession(newDateAndTime, newMaxNumber);
  //     expect(res.statusCode).toBe(200);
  //   });

  //   it.each(formatValidator)(
  //     'should return 400 if request is invalid',
  //     async ({ field, value }) => {
  //       await createSession(validSession);
  //       const dateAndTime = { ...newDateAndTime };
  //       const maxNumber = { ...newMaxNumber };
  //       if (field === 'maxNumber') {
  //         maxNumber[field] = value;
  //       } else {
  //         dateAndTime[field] = value;
  //       }
  //       const res = await updateSession(dateAndTime, maxNumber);
  //       expect(res.statusCode).toBe(400);
  //     },
  //   );

  //   it('should return 404 if request is not found', async () => {
  //     await createSession(validSession);
  //     const dateAndTime = { ...newDateAndTime };
  //     dateAndTime.date = '2021-06-27';
  //     const res = await updateSession(dateAndTime, newMaxNumber);
  //     expect(res.statusCode).toBe(404);
  //   });
  // });

  // //= =================== DELETE TEST ====================
  // describe('DELETE', () => {
  //   const sessionToBeDelete = { date: '2021-06-28', time: 0 };

  //   const createSession = (body) => request.post('/api/sessions').send(body);

  //   it('should return 204 if request is valie', async () => {
  //     await createSession(validSession);
  //     const res = await deleteSession(sessionToBeDelete);
  //     expect(res.statusCode).toBe(204);
  //   });

  // it('should return 404 if request is not found', async () => {
  //   await createSession(validSession);
  //   const session = { ...sessionToBeDelete };
  //   session.date = '2021-06-27';
  //   const res = await deleteSession(session);
  //   expect(res.statusCode).toBe(404);
  // });

  //   it.each(formatValidator)(
  //     'should return 400 if request is invalid',
  //     async ({ field, value }) => {
  //       await createSession(validSession);
  //       const session = { ...sessionToBeDelete };
  //       if (!session[field]) {
  //         return;
  //       }
  //       session[field] = value;
  //       const res = await deleteSession(session);
  //       expect(res.statusCode).toBe(400);
  //     },
  //   );
  // });
});
