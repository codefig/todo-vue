<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Todo;

class TodoControllers{

    
    public function addTask(Request $request){
    
        $Validator  = Validator::make($request->all(),[
            'title' => 'required',
            'description' => 'required'
        ]);

        if($Validator->fails()){
           $message = $Validator->errors();
           return response()->json($message, 200);
        }
        else{

            $todo = new Todo();
            $todo->title = $request->title;
            $todo->description = $request->description;
            $todo->save();
            return response()->json(["success" =>true, "message"=>"Task added successfully"], 200);
        }
        

    }

    public function updateTask(Request $request){
        $task = Todo::find($request->taskid);
        $task->title = $request->title;
        $task->description = $request->description;
        $task->save();
        return response()->json(['success'=>true, 'message' => "Task Updated successfully !"], 200);
    }

    public function fetchTask(Request $request, $taskid){
        $task = Todo::find($taskid);
        return response()->json($task, 200);
    }

    public function deleteTask(Request $request, $taskid){
        return response()->json(['message' => "This is the edit message task"], 200);
    }

    public function getAllTasks(Request $request){
       $tasks = Todo::all();
       return response()->json($tasks, 200);
    }
}