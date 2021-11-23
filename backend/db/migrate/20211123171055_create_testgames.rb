class CreateTestgames < ActiveRecord::Migration[6.1]
  def change
    create_table :testgames do |t|
      t.string :row_one, array: true, default: []
      t.string :row_two, array: true, default: []
      t.string :row_three, array: true, default: []
      t.string :row_four, array: true, default: []
      t.timestamps
    end
  end
end
