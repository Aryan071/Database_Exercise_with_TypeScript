import { QueryResult } from "pg";
import * as db from "../Utilities/database";

interface customerData{
  customerData:string
}

interface bookingData{
  bookingData:string
}


const customerData = (): Promise<QueryResult<customerData>> => {
  return db.queryRun(
    // 'select customer.name, count(booking.customer_id),customer.name,customer.email_id,customer.mobile_no from customer  inner join booking on booking.customer_id = customer.id group by customer_id,customer.name,customer.email_id,customer.mobile_no  order by count(customer_id) desc limit 10;'
    "select customer_id, count(customer_id),customer.name,customer.email_id,customer.mobile_no from booking inner join customer on booking.customer_id = customer.id group by customer_id,customer.name,customer.email_id,customer.mobile_no  order by count(customer_id) desc limit 10;",[]
  );
};

const bookingData = (): Promise<QueryResult<bookingData>> => {
  return db.queryRun(
    'select city.name , count(booking.id) as "No. of bookings"  from cinema ci inner join city on city.id = ci.city_id inner join cinema_hall ch on ci.id = ch.cinema_id inner join shows sh on sh.cinema_hall_id = ch.id  inner join show_section shsec on shsec.cinema_hall_section_id = sh.id inner join show_seating_plan shsp on shsp.show_section_id = shsec.id inner join booking on booking.id = shsp.booking_id group by city.name order by city.name,count(booking.id) desc',[]
  );
};

const uniqueCustomer = (): Promise<QueryResult<customerData>> => {
  return db.queryRun(
    "select distinct(cust.name),cust.mobile_no,cust.email_id from customer cust inner join booking on cust.id = booking.customer_id;",[]
  );
};

const selectedCustomer = (movieId: number, cinemaId: number): Promise<QueryResult<customerData>> => {
  return db.queryRun(
    "select distinct(cust.name) as customer_name,m.name as movie_name from customer cust inner join booking b on cust.id = b.customer_id inner join show_seating_plan shsp on b.id = shsp.booking_id inner join show_section shsec on shsp.show_section_id = shsec.id inner join shows sh on shsec.show_id = sh.id inner join movie m on sh.movie_id = m.id inner join cinema_hall ch on sh.cinema_hall_id = ch.id inner join cinema ci on ch.cinema_id = ci.id where m.id = $1  and ci.id = $1",
    [movieId, cinemaId]
  );
};

export default { customerData, bookingData, uniqueCustomer, selectedCustomer };