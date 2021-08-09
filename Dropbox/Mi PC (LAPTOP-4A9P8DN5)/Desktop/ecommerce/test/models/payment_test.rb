require 'test_helper'

class PaymentTest < ActiveSupport::TestCase
  test "Payment status as completed" do
    user_one = User.create(email: "example@gmail.com", password: "123456")
    order = Order.create(user:user_one, total: 100)

    pm = PaymentMethod.create(name:"Paypal Express Checkout" , code: "PEC")
    payment = Payment.create(order_id: order.id, payment_method_id: pm.id, status:"processing", total: 100, token: "token_123456")

    payment.complete!

    assert_equal payment.status, "completed"

  end

  test "complete and finish payment" do
    user_one = User.create(email: "exmple@gmail.com", password: "123456")
    order = Order.create(user:user_one, total: 100)

    pm = PaymentMethod.create(name:"Paypal Express Checkout" , code: "PEC")
    payment = Payment.create(order_id: order.id, payment_method_id: pm.id, status:"processing", total: 100, token: "token_123456")

    payment.close! 

    assert_equal payment.status, "completed"
    assert_equal payment.order.status, "completed"
  end
end
