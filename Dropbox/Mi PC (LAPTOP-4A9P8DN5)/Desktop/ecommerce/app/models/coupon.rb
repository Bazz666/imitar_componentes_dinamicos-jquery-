class Coupon < ApplicationRecord
  belongs_to :user

    #Método que permite definir mediante el type si puede ser usado por uno o varios usuarios
    def coupon_type?
      if type.eq?('target')
          return(count>0)
      end
    end
  
    #tipo de metodo a aplicar (dcto porcentual o monto) 
    def coupon_total_discount(total)
      if discount.eq?('percent')
        percent_value = amount.to_f /100
        total - (total * percent_value)
      else
        total = total - amount
        (total < 0) ? 0 : total
      end
    end
end
