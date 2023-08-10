class CreateCharities < ActiveRecord::Migration[7.0]
  def change
    create_table :charities do |t|
      t.string :name
      t.integer :license
      t.string :description
      t.string :email
      t.string :image

      t.timestamps
    end
  end
end
