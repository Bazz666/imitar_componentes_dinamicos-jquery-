class Product < ApplicationRecord
  has_and_belongs_to_many :categories

  has_many :order_items
  has_many :orders, through: :order_items
  has_many :variations

  validates :categories, presence: true
  validates :name, presence: true
  validates :stock, presence: true
  validates :price, presence: true
  validates :sku, presence: true
end
