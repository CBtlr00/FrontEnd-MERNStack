export const API_BASE_URL = process.env.API_URL;

//BOOKING
export const GET_ROOMS = "/api/rooms";
export const GET_ROOM = "/api/room/details";
export const GET_HOTELS = "/api/hotels";
export const GET_ROOMS_BY_Hotel_ID= "/api/room/getRoomsByHotel";
export const GET_SINGLE_HOTEL_DETAILS = "/api/hotels/singleHotel";
export const CHECK_ROOM_AVAILABILITY= "/api/room/availability";
export const GET_ALL_CITY_HOTELS = "/api/hotels/allCityHotels";
export const GET_BOOKING_BY_USER = "/api/booking/getBookingByUser";
export const GET_ALL_BOOKING = "/api/booking/allBookings";

// ADD
export const ADD_NEW_HOTEL = "/api/hotels";
export const ADD_NEW_ROOM = "/api/room/createRoom";
export const CREATE_BOOKING = "/api/bookings";

//  USER  
export const SIGN_UP_USER = "/api/auth/register";
export const SIGN_IN_USER = "/api/auth/login";
export const GET_USERS = "/api/users";
export const GET_USER_PROFILE = "/api/users/profile";
export const UPDATE_PROFILE = "/api/users";
export const UPDATE_PASSWORD = "/api/users/updatePassword";

// DELETE
export const DELETE_HOTEL = "/api/hotels";