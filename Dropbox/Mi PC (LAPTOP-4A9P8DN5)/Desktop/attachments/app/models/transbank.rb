class Transbank < ApplicationRecord
  belongs_to :transbankable, polymorphic: true
end
