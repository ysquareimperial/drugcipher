import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { Card, Col, Form, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { Button, CardBody, CardHeader, Spinner } from "reactstrap";
import { _fetchApi, _updateApi } from "../../utils/helper";
import logo from "../../image/DRUG CIPHER (2).png";

import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";
import { CheckCircle, XCircle } from "react-feather";
export default function KYCApproval() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPendingKYC = useCallback(() => {
    setLoading(true);
    _fetchApi(
      "/v1/get-pending-kyc",
      (reps) => {
        if (reps.success) {
          setResult(reps.result);
          setLoading(false);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  }, []);
  const approve = (item) => {
    _updateApi(
      "/v1/approved-kyc",
      item,
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Approved Successfully" />);
          setLoading(false);
          getPendingKYC();
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };
  const reject = (item) => {
    _updateApi(
      "/v1/reject-kyc",
      item,
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Approved Successfully" />);
          setLoading(false);
          getPendingKYC();
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };
  useEffect(() => {
    getPendingKYC();
  }, [getPendingKYC]);
  return (
    <div className="container">
      <Card className="KYC_card shadow p-3">
        <div>
          <img
            src={logo}
            style={{ width: 70, borderRadius: 10 }}
            alt=""
            className="shadow"
          />{" "}
          <h4
            style={{
              display: "inline",
              color: "rgb(3, 66, 110)",
              marginRight: 30,
            }}
          >
            Drug Cipher
          </h4>
          <h3 className="man_card_title mt-4">KYC Approval</h3>

        </div>
        <CardBody>
          {loading ? (
            <center>
              <Spinner />
            </center>
          ) : null}
          <Table hover responsive className="table" size="">
            <thead className="">
              <tr>
                <th className="">Company Name</th>
                <th className="">Company Phone</th>
                <th className="">Company Email</th>
                <th className="">Company Country</th>
                <th className="">View</th>
              </tr>
            </thead>
            <tbody>
              {result.length
                ? result.map((item, index) => (
                  <tr key={index}>
                    <td>{item.company_name}</td>
                    <td>{item.company_phone}</td>
                    <td>{item.company_email}</td>
                    <td>{item.company_country}</td>
                    <td className="text-center">
                      <button
                        className="man_button"
                        onClick={() => {
                          approve(item);
                        }}
                        style={{ marginRight: 10 }}
                      >
                        Approve{' '}<CheckCircle />
                      </button>
                      <button
                        onClick={() => {
                          reject(item);
                        }}
                        className='man_button'
                      >
                        Reject{' '}<XCircle />
                      </button>
                    </td>
                  </tr>
                ))
                : null}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}