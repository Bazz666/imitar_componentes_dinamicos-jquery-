class Digital < ApplicationRecord
  has_many :products, as: :category
  has_one :images, as: :imageable
end
