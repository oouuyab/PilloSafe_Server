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

// describe('병용금기', () => {
//   const req = request(app);

//   it('Itraconazole 성분에 대한 병용금기', async () => {
//     const res = await req.post(server.graphqlPath).send({ query: 'getMediInfo' }).expect(200);

//     const books = [
//       {
//         title: 'Harry Potter and the Chamber of Secrets',
//         author: 'J.K. Rowling'
//       },
//       {
//         title: 'Jurassic Park',
//         author: 'Michael Crichton'
//       }
//     ];

//     expect(res.body.data.books).to.eql(books);
//   });

// it('query - books - cannot query field', async () => {
//   const errors = await req
//     .post(server.graphqlPath)
//     .send({ query: '{ books { title author content } }' })
//     .expect(400)
//     .then((res) => res.body.errors);

//   expect(errors).to.have.lengthOf(1);
//   expect(errors[0].extensions.code).to.equal('GRAPHQL_VALIDATION_FAILED');
//   expect(errors[0].message).to.equal('Cannot query field "content" on type "Book".');
// });

// it('mutation - createBook', async () => {
//   const book = {
//     title: 'Title',
//     author: 'Author'
//   };

//   const createdBook = await req
//     .post(server.graphqlPath)
//     .send({
//       query: `
//           mutation CreateBook($title: String $author: String) {
//              createBook(title: $title author: $author) {
//                 title author
//              }
//           }
//        `,
//       variables: book
//     })
//     .expect(200)
//     .then((res) => res.body.data.createBook);

//   expect(createdBook).to.eql(book);

//   const books = await req
//     .post(server.graphqlPath)
//     .send({ query: '{ books { title author } }' })
//     .expect(200)
//     .then((res) => res.body.data.books);

//   expect(books).to.deep.include(book);
// });

// it('mutation - createBook - unknown argument', async () => {
//   const errors = await req
//     .post(server.graphqlPath)
//     .send({
//       query: `
//           mutation CreateBook($_id: String) {
//              createBook(_id: $_id) {
//                title author
//              }
//           }
//        `
//     })
//     .expect(400)
//     .then((res) => res.body.errors);

//   expect(errors).to.have.lengthOf(1);
//   expect(errors[0].extensions.code).to.equal('GRAPHQL_VALIDATION_FAILED');
//   expect(errors[0].message).to.equal(
//     'Unknown argument "_id" on field "createBook" of type "Mutation".'
//   );
// });

// it('mutation - createBook - cannot query field', async () => {
//   const errors = await req
//     .post(server.graphqlPath)
//     .send({
//       query: `
//           mutation CreateBook($title: String $author: String) {
//              createBook(title: $title author: $author) {
//                title author content
//              }
//           }
//        `
//     })
//     .expect(400)
//     .then((res) => res.body.errors);

//   expect(errors).to.have.lengthOf(1);
//   expect(errors[0].extensions.code).to.equal('GRAPHQL_VALIDATION_FAILED');
//   expect(errors[0].message).to.equal('Cannot query field "content" on type "Book".');
// });
// });
