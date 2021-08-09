class DeleteDetailsFromVariations < ActiveRecord::Migration[5.2]
  def change
    
    remove_column :products, :price , :decimal
    remove_column :products, :sku 
    remove_column :products, :stock
    
  end
end
