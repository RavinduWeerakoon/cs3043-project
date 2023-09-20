DELIMITER //
CREATE FUNCTION create_cus(
	email varchar(100),
	contact_number varchar(50),
  password varchar(300),
	
	customer_name varchar(50),
  customer_type varchar(30)
  )
  RETURNS BOOL
  DETERMINISTIC
  BEGIN
  IF customer_type = 'wholesaler' OR  customer_type = 'retailer' OR customer_type = 'end customer' THEN 
		INSERT INTO `user`(`email`,`password`,`type`, `phone`, `name`) VALUES ( email, password ,"customer", `contact_number`, `name`);
        SELECT LAST_INSERT_ID() AS last_inserted_id;
		INSERT INTO `customer`(`user_ID`,`customer_type`) VALUES (last_inserted_id, customer_type);
		RETURN TRUE;
  END IF;
  RETURN FALSE;
  END
//



