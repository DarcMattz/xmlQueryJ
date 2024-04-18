$(function () {
  const kata = $("body");

  $.get("customer.xml", function (data) {
    $(data)
      .find("customer")
      .each(function () {
        const customer = $(this);
        const id = customer.attr("cno");
        const name = customer.find("name").text();
        const address = customer.find("address").text();
        const orderNo = customer.find("order").attr("id");
        const orderDate = customer.find("order").attr("date");
        let orders = "";

        customer.find("order").each(function () {
          const order = $(this);
          const itemNo = order.text();
          orders += itemNo;
        });

        const html = `
            <div>
                <p>Customer No: ${id}</p>
                <p>Name: ${name}</p>
                <p>Address: ${address}</p>
                <p>Order no: ${orderNo} Order date: ${orderDate}</p>
                <p>Order details: ${orders}
            </div>
            <hr>
        `;

        kata.append(html);
      });
  });
});
