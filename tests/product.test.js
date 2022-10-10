const app = require('../app');
const supertest = require('supertest')
const request = supertest(app)

describe('GET /products', () => {
  it('get all available products', async () => {
    const response = await request.get('/products');
  
    expect(response.status).toBe(200);
  })
});

describe('POST /product', () => {
  let token;

  beforeAll(async () => {
    const result = await request.post('/login').send({
      username: "test",
      password: "test"
    });
    
    token = result.body.token;
  });

  it('insert one product', async () => {
    const response = await request.post('/product').auth(token, { type: 'bearer' }).send({
      name: "Product 1",
      description: "Description..."
    });
  
    expect(response.status).toBe(200);
  });

  it('insert one product without authorization', async () => {
    const response = await request.post('/product').send({
      name: "Product 1",
      description: "Description..."
    });
  
    expect(response.status).toBe(401);
  })

  it('insert one product withour name field', async () => {
    const response = await request.post('/product').auth(token, { type: 'bearer' }).send({
      description: "Description..."
    });
  
    expect(response.status).toBe(400);
  })
});

describe('DELETE /product', () => {
  let token;

  beforeAll(async () => {
    const result = await request.post('/login').send({
      username: "test",
      password: "test"
    });
    
    token = result.body.token;
  });

  it('delete one product', async () => {
    const products = await request.get('/products');

    const toDelete = products.body[0]._id;

    const response = await request.delete('/product').auth(token, { type: 'bearer' }).send({
      productId: toDelete
    });
  
    expect(response.status).toBe(200);
  });

  it('delete not existing product', async () => {
    const response = await request.delete('/product').auth(token, { type: 'bearer' }).send({
      productId: "123"
    });
  
    expect(response.status).toBe(404);
    expect(response.body.error).toBeDefined();
  });

});