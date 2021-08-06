class Variation < ApplicationRecord
  belongs_to :product
  belongs_to :size
  belongs_to :color
end
