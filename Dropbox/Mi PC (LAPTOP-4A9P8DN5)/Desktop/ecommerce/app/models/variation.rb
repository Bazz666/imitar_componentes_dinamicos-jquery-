class Variation < ApplicationRecord

  belongs_to :product , optional: true
  belongs_to  :size , optional: true
  belongs_to  :color , optional: true

  validates :price, presence: true
  validates :stock, presence: true
  validates :sku, presence: true

  
  
end
