<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Subject;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class SubjectController extends Controller
{

    /**
     * SubjectController constructor.
     */
    public function __construct()
    {
        $this->middleware('JwtMiddleware');
    }

    /**
     * @return JsonResponse
     */
    public function fetch_all_subject()
    {
        $subjects = Subject::all();
        return response()->json($subjects, Response::HTTP_OK);
    }
}
