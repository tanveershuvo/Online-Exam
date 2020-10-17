<?php

namespace App\Exceptions;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        //
    }


    /**
     * @param Throwable $exception
     * @throws Throwable
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }


    /**
     * @param Request $request
     * @param Throwable $exception
     * @return Application|ResponseFactory|JsonResponse|Response|\Symfony\Component\HttpFoundation\Response
     * @throws Throwable
     */
    public function render($request, Throwable $exception)
    {
        if($exception instanceof TokenBlacklistedException){
            return response(['message'=>'token is blacklisted, request new token.'],
                Response::HTTP_BAD_REQUEST);
        }elseif($exception instanceof TokenInvalidException){
            return response(['message'=>'token is invalid.'],
                Response::HTTP_BAD_REQUEST);
        }elseif($exception instanceof TokenExpiredException){
            return response(['message'=>'token is expired, request a new one.'],
                Response::HTTP_BAD_REQUEST);
        }elseif($exception instanceof JWTException){
            return response(['message'=>'token is not provided.'],
                Response::HTTP_BAD_REQUEST);
        }
        return parent::render($request, $exception);
    }
}
