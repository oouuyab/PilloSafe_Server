import request from 'supertest';
import { expect } from 'chai';
import { app, server } from 'src/server';

describe('서버 통신', () => {
  const req = request(app);
  it('status code 200', async () => {
    const res = await req.post(server.graphqlPath).send({ query: 'query {\n  hi\n}' });
    expect(res.status).to.eql(200);
  });
  it('say Hello', async () => {
    const res = await req.post(server.graphqlPath).send({ query: 'query {\n  hi\n}' });
    const sayHello = 'Hello GraphQL~!';
    expect(JSON.parse(res.text).data.hi).to.eql(sayHello);
  });
});

describe('병용금기', () => {
  const req = request(app);
  //* 입력 관련 테스트 케이스 추가하기
  it('contarindicate test', async () => {
    const res = await req.post(server.graphqlPath).send({
      query:
        'query{\n  contraindicate(ITEM_NAME: "스포라녹스캡슐(이트라코나졸)", MIXTURE_ITEM_NAME:"로바로드정(로바스타틴)"){\n    ITEM_NAME,\n    ENTP_NAME,\n    MIXTURE_ITEM_NAME,\n    MIXTURE_ENTP_NAME,\n    PROHBT_CONTENT\n  }\n}'
    });
    const contraindicate = {
      ITEM_NAME: '스포라녹스캡슐(이트라코나졸)',
      ENTP_NAME: '(주)한국얀센',
      MIXTURE_ITEM_NAME: '로바로드정(로바스타틴)',
      MIXTURE_ENTP_NAME: '(주)종근당',
      PROHBT_CONTENT: '횡문근융해증'
    };
    expect(JSON.parse(res.text).data.contraindicate).to.eql(contraindicate);
  });
});
