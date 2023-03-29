const { show } = require('../../../../app/application/use_cases/URL/show');
const { findByCustomAlias, updateAccessCount } = require('../../../../app/infrastructure/repositories/URLRepository');
const { UrlNotFoundResponse } = require('../../../../app/ports/http/responses/UrlNotFoundResponse');

jest.mock('../../../../app/infrastructure/repositories/URLRepository');

describe('show function', () => {
    test('should return the original URL if the URL is found', async () => {
        // Arrange
        const urlId = 'some-url-id';
        const url = { id: urlId, originalUrl: 'https://example.com' };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        findByCustomAlias.mockResolvedValue(url);

        // Act
        await show(urlId, res);

        // Assert
        expect(findByCustomAlias).toHaveBeenCalledWith(urlId);
        expect(updateAccessCount).toHaveBeenCalledWith(url);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ originalUrl: url.originalUrl });
    });

    test('should return a 404 response if the URL is not found', async () => {
        // Arrange
        const urlId = 'non-existing-url-id';
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        findByCustomAlias.mockResolvedValue(null);

        // Act
        await show(urlId, res);

        // Assert
        expect(findByCustomAlias).toHaveBeenCalledWith(urlId);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith(UrlNotFoundResponse);
    });

    test('should return a 500 response if there is a server error', async () => {
        // Arrange
        const urlId = 'some-url-id';
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const error = new Error('Server error');
        findByCustomAlias.mockRejectedValue(error);

        // Act
        await show(urlId, res);

        // Assert
        expect(findByCustomAlias).toHaveBeenCalledWith(urlId);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith('Server Error');
    });
});