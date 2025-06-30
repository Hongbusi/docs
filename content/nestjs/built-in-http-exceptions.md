---
title: 内置 HTTP 异常
sidebar:
  order: 4
---

Nest 提供了一组继承自 base 的标准异常 `HttpException`。这些是从 `@nestjs/common` 包中公开的，代表许多最常见的 HTTP 异常。

### `BadRequestException` 400 Bad Request

当请求无效或无法被服务器理解时抛出，通常由客户端发送的请求格式有误。

### `UnauthorizedException` 401 Unauthorized

当请求需要用户认证，但用户未提供有效的认证凭据时抛出。

### `NotFoundException` 404 Not Found

当请求的资源不存在时抛出，表示服务器未能找到所请求的资源。

### `ForbiddenException` 403 Forbidden

当客户端没有访问请求资源的权限时抛出，表示服务器理解请求，但拒绝执行。

### `NotAcceptableException` 406 Not Acceptable

当服务器无法根据请求的内容特性完成请求时抛出，通常由客户端请求的媒体类型不受支持。

### `RequestTimeoutException` 408 Request Timeout

当请求超时时抛出，表示服务器等待了太长时间而没有收到请求。

### `ConflictException` 409 Conflict

当请求的资源与服务器上现有资源发生冲突时抛出，表示请求无法执行。

### `GoneException` 410 Gone

当请求的资源不再可用，且不知道转发地址时抛出。

### `HttpVersionNotSupportedException` 505 HTTP Version Not Supported

当请求使用的HTTP协议版本不受服务器支持时抛出。

### `PayloadTooLargeException` 413 Payload Too Large

当请求的有效载荷过大，超出服务器处理能力时抛出。

### `UnsupportedMediaTypeException` 415 Unsupported Media Type

当请求中的媒体类型不受支持时抛出，通常用于RESTful API中。

### `UnprocessableEntityException` 422 Unprocessable Entity

当请求格式正确，但语义错误，无法处理请求时抛出，通常用于表单验证失败。

### `InternalServerErrorException` 500 Internal Server Error

当服务器遇到无法处理的错误时抛出，通常用于未捕获的异常。

### `NotImplementedException` 501 Not Implemented

当请求的功能尚未实现时抛出，通常用于向客户端指示未来可能支持的功能。

### `mATeapotException` 418 I'm a teapot

这是一个特殊的异常，用于愚人节或有趣的场景，指示服务器是一台茶壶而不是Web服务器。

### `MethodNotAllowedException` 405 Method Not Allowed

当请求的HTTP方法不允许对目标资源执行操作时抛出。

### `BadGatewayException` 502 Bad Gateway

当服务器作为网关或代理，从上游服务器收到无效响应时抛出。

### `ServiceUnavailableException` 503 Service Unavailable

当服务器暂时无法处理请求时抛出，通常用于临时维护或过载情况。

### `GatewayTimeoutException` 504 Gateway Timeout

当服务器作为网关或代理，未及时从上游服务器收到响应时抛出。

### `PreconditionFailedException` 412 Precondition Failed

当请求头中的条件不满足时抛出，用于条件请求。
