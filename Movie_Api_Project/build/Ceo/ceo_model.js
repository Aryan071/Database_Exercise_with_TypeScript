"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = __importStar(require("../Utilities/database"));
const customerData = () => {
    return db.queryRun(
    // 'select customer.name, count(booking.customer_id),customer.name,customer.email_id,customer.mobile_no from customer  inner join booking on booking.customer_id = customer.id group by customer_id,customer.name,customer.email_id,customer.mobile_no  order by count(customer_id) desc limit 10;'
    "select customer_id, count(customer_id),customer.name,customer.email_id,customer.mobile_no from booking inner join customer on booking.customer_id = customer.id group by customer_id,customer.name,customer.email_id,customer.mobile_no  order by count(customer_id) desc limit 10;", []);
};
const bookingData = () => {
    return db.queryRun('select city.name , count(booking.id) as "No. of bookings"  from cinema ci inner join city on city.id = ci.city_id inner join cinema_hall ch on ci.id = ch.cinema_id inner join shows sh on sh.cinema_hall_id = ch.id  inner join show_section shsec on shsec.cinema_hall_section_id = sh.id inner join show_seating_plan shsp on shsp.show_section_id = shsec.id inner join booking on booking.id = shsp.booking_id group by city.name order by city.name,count(booking.id) desc', []);
};
const uniqueCustomer = () => {
    return db.queryRun("select distinct(cust.name),cust.mobile_no,cust.email_id from customer cust inner join booking on cust.id = booking.customer_id;", []);
};
const selectedCustomer = (movieId, cinemaId) => {
    return db.queryRun("select distinct(cust.name) as customer_name,m.name as movie_name from customer cust inner join booking b on cust.id = b.customer_id inner join show_seating_plan shsp on b.id = shsp.booking_id inner join show_section shsec on shsp.show_section_id = shsec.id inner join shows sh on shsec.show_id = sh.id inner join movie m on sh.movie_id = m.id inner join cinema_hall ch on sh.cinema_hall_id = ch.id inner join cinema ci on ch.cinema_id = ci.id where m.id = $1  and ci.id = $1", [movieId, cinemaId]);
};
exports.default = { customerData, bookingData, uniqueCustomer, selectedCustomer };
