<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BoardListController extends Controller
{
    public function index()
    {

        return Inertia::render('BoardList');
    }
    public function board()
    {

        return Inertia::render('Board');
    }
}
