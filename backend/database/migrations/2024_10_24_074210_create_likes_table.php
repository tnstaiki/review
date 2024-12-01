<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('likes', function (Blueprint $table) {
            $table->id(); // プライマリキー
            $table->bigInteger('movie_id'); // 映画ID
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // ユーザーID、外部キー
            $table->unique(['movie_id', 'user_id']); // 同じ映画に対して同じユーザーが複数回「いいね」できないようにユニーク制約
            $table->timestamps(); // created_at, updated_at タイムスタンプ
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('likes');
    }
};
