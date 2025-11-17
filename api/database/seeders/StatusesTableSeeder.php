<?php

namespace Database\Seeders;

use Flynsarmy\CsvSeeder\CsvSeeder;

class StatusesTableSeeder extends CsvSeeder
{
    public function __construct() 
    {
        $this->table = 'statuses'; 
        $this->filename = base_path().'/database/seeders/csv/statuses.csv';
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        parent::run();
    }
}
