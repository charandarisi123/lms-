/* eslint-disable react-hooks/rules-of-hooks */
import config from "@/app/config";
import { useSelector } from "react-redux";

export default function userAuth() {
  const { user } = useSelector((state: any) => state.auth);

  if (user) {
    return true;
  } else {
    return false;
  }
}
