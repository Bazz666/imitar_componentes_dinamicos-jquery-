class Order < ApplicationRecord
  

  belongs_to :user

  has_many :order_items
  has_many :products, through: :order_items
  has_many :payments

  validates :number, uniqueness: true
  has_many :variations

  


  def total_in_cents 
    total * 100
  end

  def set_state_completed 
    update_attribute(state: "completed")
  end

  def add_product(product_id, quantity)
    product = Product.find(product_id)
    if product.variations.first && product.variations.first.stock > 0
      order_items.create(product_id: product.id, quantity: quantity, price: product.variations.first.price)
      compute_total
    end
  end

  def compute_total
    sum = 0
    order_items.each do |item|
      sum += item.price
    end
    update_attribute(:total, sum)
  end
end
