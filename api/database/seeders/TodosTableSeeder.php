<?php

namespace Database\Seeders;

use Flynsarmy\CsvSeeder\CsvSeeder;

class TodosTableSeeder extends CsvSeeder
{
    public function __construct() 
    {
        $this->table = 'todos'; 
        $this->filename = base_path().'/database/seeders/csv/todos.csv';
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        parent::run();
    }
}
