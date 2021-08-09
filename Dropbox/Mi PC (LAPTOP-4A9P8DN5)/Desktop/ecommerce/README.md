# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version 2.5.3

    1.  lo primero que realice fue actualizar la version de ruby
        del archivo de apoyo, en este caso como no se producia un error de codigo importante
        y para poder implementar funciones como bootstrap , heroku, o distintas mejoras en el futuro.
        se procedio a actualizar la version de ruby eliminando el gemfile.lock y actualizar el Gemfile y luego se corrigieron  los posibles errores en la funcionalidad y navegacion de la pagina.

    2.  Se agrego Bootstrap por codigo en el layout y se coloco un nav para hacer mas facil la navegacion de la pagina, identificar al usuario y ver los detalles del carrito

    3. Para implementar la lista de productos en la vista se debe iterar cada uno de los productos 
        <% @products.each do |product| %>
     mostrar las categorías disponibles 
        <%= product.categories.first.name %>
     mostrar los productos disponibles y sus variaciones
        
        <%= variation.color.name  %> 
        <%= variation.size.name  %>

    3. Se agregaron los modelos sizes , variations y colors relacionados como se muestra en el diagrama adjunto

    4. Se agrego el modelo Coupon como se solicito

    5. para la funcionalidad del front los encargados deberan agregar variations en el formulario de product para poder agregar las tablas , tallas y colores al ingresar una prenda

    6. se mantiene el modelo order_item

    7. a ultimo minuto se solicito el uso de cupones, por lo que se creo un modelo Coupon relacionado al modelo Users

        	"rails g scaffold Coupon type:string code:string amount:integer discount:string count:integer user:references"

            en modelo coupon se deja codigo propuesto
    8. primero se debe crear un producto desde pruducts/new , luego las variantes en variants/new donde se debera seleccionar el producto a agregarle una variante con stock, talla y color


*