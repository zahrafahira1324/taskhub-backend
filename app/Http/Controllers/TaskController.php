<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Tampilkan semua task milik pengguna saat ini.
     * Termasuk fitur filtering dan sorting.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $tasks = $user->tasks();

        // Filter berdasarkan prioritas
        if ($request->has('prioritas')) {
            $tasks->where('prioritas', $request->prioritas);
        }

        // Filter berdasarkan status selesai
        if ($request->has('selesai')) {
            $tasks->where('selesai', $request->selesai);
        }

        return response()->json($tasks->get());
    }

    /**
     * Tambahkan task baru.
     */
    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'tanggal_deadline' => 'required|date_format:d/m/Y',
            'prioritas' => 'required|in:rendah,sedang,tinggi',
        ]);

        $deadline = Carbon::createFromFormat('d/m/Y', $request->tanggal_deadline);

        $butuhPerhatian = false;
        if (str_contains(strtolower($request->judul), 'urgent') || str_contains(strtolower($request->judul), 'klien') || str_contains(strtolower($request->deskripsi), 'urgent') || str_contains(strtolower($request->deskripsi), 'klien')) {
            $butuhPerhatian = true;
        }

        $task = $request->user()->tasks()->create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'tanggal_deadline' => $deadline,
            'prioritas' => $request->prioritas,
            'butuh_perhatian' => $butuhPerhatian,
        ]);

        return response()->json($task, 201);
    }

    /**
     * Menandai task sebagai selesai.
     */
    public function selesaikan(Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $task->selesai = true;
        $task->save();

        return response()->json(['message' => 'Task berhasil diselesaikan'], 200);
    }

    /**
     * Menghapus task.
     */
    public function destroy(Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        $task->delete();

        return response()->json(['message' => 'Task berhasil dihapus'], 200);
    }

    /**
     * Mengembalikan task yang deadline-nya dalam 1 hari ke depan.
     */
    public function reminder(Request $request)
    {
        $tomorrow = Carbon::now('Asia/Jakarta')->addDay()->toDateString();
        
        $tasks = $request->user()->tasks()
            ->whereDate('tanggal_deadline', $tomorrow)
            ->get();

        return response()->json($tasks);
    }
}