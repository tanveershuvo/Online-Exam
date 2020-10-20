<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

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

    public function add_question_options(Request $request)
    {
        DB::beginTransaction();
        try {
            $question = Question::create([
              'title'=>$request->data['question'],
            ]);
            foreach($request->data['options'] as $key=>$value){
                 $isCorrect = 0;
                if($key===$request->data['correct_ans_id']){
                    $isCorrect = 1;
                }
                Option::create([
                    'q_id'=>$question->id,
                    'option_title'=>$value,
                    'is_right'=>$isCorrect,
                ]);
            }
            DB::commit();
            return response()->json(Response::HTTP_OK);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
}
