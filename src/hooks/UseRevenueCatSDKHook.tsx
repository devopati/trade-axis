import { AppContext } from "@/context/AppContextHook";
import { useContext, useState } from "react";
import { Alert, ToastAndroid } from "react-native";
import Purchases, { PurchasesPackage } from "react-native-purchases";

const useRevenueCatSDKHook = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const { setActivePlans, setAvailablePlans } = useContext(AppContext);
  /**
   * Get available plans
   * @returns  {Array} An Array of Purchasable plans if available
   */
  const getAvailableSubscriptionPlans = async () => {
    try {
      const plans = await Purchases.getOfferings();
      setAvailablePlans(plans.current?.availablePackages ?? []);
      return plans.current?.availablePackages;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  /**
   *  Subscribe to a plan
   * @param plan Purchasable package
   */
  const purchasePlanAsync = async (plan: PurchasesPackage) => {
    try {
      await Purchases.purchasePackage(plan);
      await getCurrentCustomerActiveSubs();
      ToastAndroid.show("Purchase successful", ToastAndroid.SHORT);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Request Failed", "Failed to purchase plan");
    }
  };

  /**
   * @returns {Array} An Array of active plans
   */
  const getCurrentCustomerActiveSubs = async () => {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      setActivePlans(customerInfo.activeSubscriptions);
      return customerInfo.activeSubscriptions;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
  return {
    getAvailableSubscriptionPlans,
    purchasePlanAsync,
    getCurrentCustomerActiveSubs,
    success,
    setSuccess,
  };
};

export default useRevenueCatSDKHook;
