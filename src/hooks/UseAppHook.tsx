import { StyleSheet, ToastAndroid } from "react-native";
import { useState } from "react";
import { NavigationPropType, ReportType, SignalType } from "@/types/types";
import { API } from "@/API/endpoint";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { adminScreenNames } from "@/constants/screen-names";

const UseAppHook = () => {
  const navigation = useNavigation<NavigationPropType>();

  const [processing, setProcessing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [adminFreeSignals, setAdminFreeSignals] = useState<SignalType[]>([]);
  const [adminPremiumSignals, setAdminPremiumSignals] = useState<SignalType[]>(
    []
  );
  const [hasMoreFree, setHasMoreFree] = useState<boolean>(false);
  const [hasMorePremium, setHasMorePremium] = useState<boolean>(false);

  const [reports, setReports] = useState<{
    free: ReportType;
    premium: ReportType;
  } | null>(null);

  /**
   * Function to post signals
   * @param data signal to be posted
   *
   */
  const postSignalHandlerAsync = async (data: SignalType) => {
    try {
      setProcessing(true);
      const res = await API.post("/signals", data);
      ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      navigation.goBack();
      getAdminSignalsAsync(data.subscriptionPlan);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Your Request Failed", ToastAndroid.SHORT);
    } finally {
      setProcessing(false);
    }
  };

  /**
   * Function to edit a signal
   * @param data Signal data to be edited
   */
  const editSignalAsync = async (data: SignalType) => {
    try {
      setProcessing(true);
      const res = await API.patch("admin/signals", data);
      ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      getAdminSignalsAsync(data.subscriptionPlan);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Request Failed", ToastAndroid.LONG);
    } finally {
      setProcessing(false);
    }
  };

  /**
   * Function to delete a signal
   * @param signalIds an array of signals to delete
   */
  const deleteSignalsAsync = async (signalIds: string[], plan: string) => {
    try {
      setProcessing(true);
      const res = await API.delete("admin/signals", {
        params: {
          signalIds: signalIds,
        },
      });
      ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      getAdminSignalsAsync(plan);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Request Failed", ToastAndroid.LONG);
    } finally {
      setProcessing(false);
    }
  };

  /**
   *
   * @param plan free | premium
   * @param limit total docs to fetch per request
   * @param page exact page to be fetched
   */
  const getAdminSignalsAsync = async (
    plan?: string,
    limit?: number,
    page?: number
  ) => {
    try {
      setLoading(true);
      const res = await API.get("/admin/signals", {
        params: {
          plan,
          page,
          limit,
        },
      });

      if (plan === "free") {
        // setAdminFreeSignals((prev) => [...prev, ...res.data.signals]);
        setAdminFreeSignals(res.data.signals);
        setHasMoreFree(res.data.hasMore);
      } else {
        setAdminPremiumSignals(res.data.signals);
        // setAdminPremiumSignals((prev) => [...prev, ...res.data.signals]);
        setHasMorePremium(res.data.hasMore);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Function to send push notifications to users
   * @param data notification to be sent
   */
  const sendPushNotificationAsync = async (data: {
    plan: string;
    title: string;
    message: string;
  }) => {
    try {
      setProcessing(true);
      const res = await API.post("/admin/notification", data);
      ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Request Failed", ToastAndroid.LONG);
    } finally {
      setProcessing(false);
    }
  };

  /**
   * Function to update weekly reports
   * @param data weekly report to be updated
   */
  const updateWeeklyReportAsync = async (data: {
    planName: string;
    totalHitTakeProfit: number;
    totalHitStopLoss: number;
  }) => {
    try {
      setProcessing(true);
      const res = await API.post("/admin/report", data);
      ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Request Failed", ToastAndroid.LONG);
    } finally {
      setProcessing(false);
    }
  };

  /**
   * Function to fetch weekly reports
   */
  const getReportsAsync = async () => {
    try {
      setLoading(true);
      const res = await API.get("reports");
      setReports(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginAdminAsync = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://tradeorbit-server.onrender.com/api/user/login",
        data
      );
      ToastAndroid.show("Login Success", ToastAndroid.SHORT);
      navigation.navigate(adminScreenNames.ADMIN);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Request Failed, Retry", ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };

  return {
    processing,
    error,
    setError,
    postSignalHandlerAsync,
    loading,
    getAdminSignalsAsync,
    hasMoreFree,
    hasMorePremium,
    adminFreeSignals,
    adminPremiumSignals,
    sendPushNotificationAsync,
    updateWeeklyReportAsync,
    reports,
    getReportsAsync,
    editSignalAsync,
    deleteSignalsAsync,
    loginAdminAsync,
  };
};

export default UseAppHook;

const styles = StyleSheet.create({});
