const { create } = require('../../../../app/application/use_cases/URL/create');
const URLRepository = require('../../../../app/infrastructure/repositories/URLRepository');
const { createURLResponse } = require('../../../../app/ports/http/responses/createURLResponse');

jest.mock('../../../../app/infrastructure/repositories/URLRepository');

describe('create', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should create a new URL and return HTTP status 201 when called with a valid URL and custom alias', async () => {
        // Arrange
        const originalUrl = 'http://example.com';
        const customAlias = 'example';
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            startTime: new Date()
        };
        const expectedStatusCode = 201;

        URLRepository.findOne.mockResolvedValue(null);
        URLRepository.createUrl.mockResolvedValue({
            originalUrl,
            shortUrl: `http://localhost:3333/${customAlias}`,
            urlId: customAlias,
        });

        // Act
        await create(originalUrl, customAlias, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
});