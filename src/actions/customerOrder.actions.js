import { customerOrderConstants } from "./constants";
import axiosInstance from "../utils/axios";
import React, { useEffect, useState } from "react";

export const getCustomerOrderById = (orderFormId) => {
  console.log('orderFormId', orderFormId)
  return async dispatch => {
    console.log('a1')
    dispatch({ type: customerOrderConstants.GET_CUSTOMER_ORDER_BY_ID_LIST_REQUEST });
    console.log("12345")
    const res = await axiosInstance.get(`/customer-order-form/${orderFormId}`);
    console.log("56789")
    console.log('res.data', res.data);
    if (res.status === 200) {
      const value = res.data;
      dispatch({
        type: customerOrderConstants.GET_CUSTOMER_ORDER_BY_ID_LIST_SUCCESS,
        payload: {
          customerOrder: res.data
        }
      })
    } else {
      if (res.status === 400) {
        dispatch({
          type: customerOrderConstants.GET_CUSTOMER_ORDER_BY_ID_LIST_FAILURE,
          payload: {
            message: res.data.error
          }
        })
      }
    }
  }
};

export const getCustomerOrder = () => {
  return async dispatch => {
    dispatch({ type: customerOrderConstants.GET_CUSTOMER_ORDER_LIST_REQUEST });
    const res = await axiosInstance.get(`/customer-order-form`);
    console.log('res', res)

    if (res.status === 200) {
      const value = res.data;
       console.log('value', value.value)
       console.log('1')
      dispatch({
        type: customerOrderConstants.GET_CUSTOMER_ORDER_LIST_SUCCESS,
        payload: {
          customerOrderList: value.value
        }
      })
    } else {
      if (res.status === 400) {
        dispatch({
          type: customerOrderConstants.GET_CUSTOMER_ORDER_LIST_FAILURE,
          payload: {
            message: res.data.error
          }
        })
      }
    }
  };
};

export const updateCustomerOrder = () => {
  return async dispatch => {
    dispatch({ type: customerOrderConstants.UPDATE_CUSTOMER_ORDER_STAGE_REQUEST });
    const res = await axiosInstance.put(`/customer-order-form`);
  }
};