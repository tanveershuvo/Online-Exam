<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuestionController extends Controller
{

    /**
     * QuestionController constructor.
     */
    public function __construct()
    {
        $this->middleware('JwtMiddleware');
    }

    /**
     * @return JsonResponse
     */
    public function fetch_all_questions()
    {
        $questions = Question::where('sub_id',null)->get();
        return response()->json($questions, Response::HTTP_OK);
    }


    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function add_ques_to_sub(Request $request)
    {
        Question::whereIn('id',$request->data['queId'])->update(['sub_id'=>$request->data['subId']]);
        return response()->json(Response::HTTP_OK);

    }
}
