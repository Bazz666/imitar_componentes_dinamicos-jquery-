# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
parte I
1. Primero creamos los modelos y sus relaciones de la siguiente manera
    rails g model image url name imageable:references{polymorphic}
	rails g model digital product:references
	rails g model physical product:references
	rails g migration AddColumnToProduct category:references{polymorphic}
	rails g model order desc:float subtotal:float total:float 
	rails g model payment order:references payable:references{polymorphic}
	rails g model stripe 
	rails g model paypal
	rails g model transbank transbankable:references{polymorphic}
	rails g model webpay
	rails g model credit
	rails g model oneclick

2. Luego modificamos los modelos 
    digital =   has_many :products, as: :category
                has_one :images, as: :imageable

    physical=   has_many :products, as: :category
                has_many :images, as: :imageable

    product=    has_many_attached :images 
                has_many :physicals
                has_many :digitals
                belongs_to :category, polymorphic: true

    Payment=    belongs_to :order
                belongs_to :payable, polymorphic: true

    stripe,paypal = has_many :payments, as: :payable

    Transbanc=  belongs_to :transbankable, polymorphic: true
                has_many :payments, as: :payable

    webpay, oneclic, credit = has_many :transbanks, as: :transbankable

---------------------------------------------------------------------------

PARTE II

1. Primero se debe crear la app con rails " rails new animals_project  --database=postgresql"

2. Se define como la clase Padre a Animal y como clases hijas a Cat, Dog, duck, etc.

3. creamos los modelos de la siguiente manera:
    * rails g Animal animaleable:references{polymorphic}
    * rails g model Dog 
    * rails g model Cat    
    * rails g model duck

    - En modelos Dog, Cat y duck debemos agregar las relaciones  has_many :animals, as: :animaleable.

    -verificar en modelo Animal la relación belongs_to :animaleable, polymorphic: true

4. ejecutar "rails db:migrate"

5. Probar las relaciones en rails console " rails c "

    * Dog.create
    * Animal.create(animaleable_id: 1, animaleable_type: "Dog")
    * Verificamos si relación está creada con Dog.last.animals
