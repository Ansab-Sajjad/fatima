import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy";
import delete_facility from "./Delete Facility.cy";
import Delete_Roles from "./Delete_Roles.cy";
import edit_facility from "./Edit Facility.cy";
import Edit_Roles from "./Edit Role.cy";
import Add_Icon_Exchange_Facilities from "./Facilities.cy";
import Icon_Users from "./icon-users.cy";
import Icon_Admin_Login from "./Admin_Login.cy";
import Provider_SignIN from "./Provider_SignIn.cy";
import Provider_Signup from "./Provider_signup.cy";
import Create_Icon_Roles from "./Roles.cy";
import Facility_Search from "./Facilities_Search.cy";
import Icon_Users_Search from "./Icon_User_Search.cy";
import Icon_Role_Search from "./Role_Search.cy";
import Add_Provider from "./Add_Provider.cy";
import Provider_Search from "./Provider_Search.cy";
import Delete_Provider from "./Delete_Provider.cy";
import View_Provider from "./View_Provider.cy";
import Assign_Facility from "./Assign_Facility.cy";
import Add_Pay_Rates from "./Add_Pay_Rates.cy";
import Pay_Rate_Search from "./Pay_Rate_Search.cy";
import Add_Malpractice from "./Add_Malpractice.cy";
import Malpractice_Search from "./Malpractice_search.cy";
import Pay_Rate_View from "./Pay_Rate_View.cy";
import Edit_Pay_Rate from "./Edit_Pay_rate.cy";
import Delete_Pay_Rate from "./Delete_Pay_Rate.cy";
import Update_Malpractice from "./Update_Malpractice.cy";
import Provider_Expense from "./Provider_Expense.cy";
import Provider_Login from "./Provider_Login.cy";
import View_Provider_Expense from "./View_Provider_Expense.cy";
import Edit_Provider_Expense from "./Edit_Provider_Expense.cy";
import Provider_Expense_Search from "./Provider_Expense_Search.cy";
import Provider_condition from "./Provider_Expense_Conditions.cy";
import {
  Hours_Completion_Bonus,
  Performance_Bonus,
  Refferal_Bonus,
  Incentive,
  Others_Bonus
} from "./Bonus_and_Incentive.cy";
import {
  Admin_Expense,
  View_Admin_Expense,
  Edit_Admin_Expense,
  admin_Expense_Condition
} from "./Admin_Expense.cy";
import Icon_user_per_Login from "./Icon_user_per_login.cy";
import {
  IC_Bonus_Condition,
  IC_Hours_Completion_Bonus,
  IC_Incentive,
  IC_Notification,
  IC_Others_Bonus,
  IC_Performance_Bonus,
  IC_Refferal_Bonus
} from "./IC_Permissions.cy";
import Bulk_Facility_Assignment from "./Bulk_Facility_Assignment.cy";
import Bulk_add_provider from "./Bulk_add_provider.cy";
import Bulk_Area_of_expertise from "./Bulk_Area_of_expertise.cy";
import Icon_user_Login from "./IC_Login.cy";
import Update_Icon_user from "./Update_Icon_user.cy";
import Timesheet_Reminder from "./timesheet_reminder.cy";
import Timesheet from "./Timesheet.cy";
import Pay_Periods from "./Pay_Periods.cy";
import Timesheet_Search from "./Timesheet_Search.cy";
import { Payment } from "./Payment.cy";
import { Payment_Recalculate } from "./Payment_Recalculate.cy";
import { Payment_Search } from "./Payment_Search.cy";

describe("let's Automate Icon Exchange.", function() {
  Icon_Exchange_URL();          //=============> Done
  Icon_Admin_Login()        //=============> Done
  // Icon_user_Login();       //=============> Done
  // Provider_Login()        //=============> Done


  // Add_Provider()         //=============> Done
  // Provider_Search()     //=============> Done
  // View_Provider()      //=============> Done
  // Delete_Provider()   //=============> Done
  // Assign_Facility()  //=============> Done

  // Add_Icon_Exchange_Facilities()   //=============> Done
  // edit_facility()                 //=============> Done
  // delete_facility()              //=============> Done
  // Facility_Search()             //=============> Done

  // Update_Icon_user()       //=============> Done
  // Icon_Users()            //=============> Done
  // Icon_Users_Search()    //=============> Done

  // Create_Icon_Roles()      //=============> Done
  // Icon_Role_Search()      //=============> Done
  // Edit_Roles()           //=============> Done
  // Delete_Roles()        //=============> Done

  // Provider_Signup()     //=============> Done
  // Provider_SignIN()    //=============> Done

  // Add_Pay_Rates()           //=============> Done
  // Pay_Rate_Search()        //=============> Done
  // Pay_Rate_View()         //=============> Done
  // Edit_Pay_Rate()        //=============> Done
  // Delete_Pay_Rate()     //=============> Done

  // Add_Malpractice()         //=============> Done
  // Malpractice_Search()     //=============> Done
  // Update_Malpractice();   //=============> Done

  // Provider_Expense()               //=============> Done
  // View_Provider_Expense()         //=============> Done
  // Edit_Provider_Expense()        //=============> Done
  // Provider_Expense_Search()     //=============> Done
  // Provider_condition()         //=============> Done

  // Admin_Expense()                    //=============> Done
  // View_Admin_Expense()              //=============> Done
  // Edit_Admin_Expense()             //=============> Done
  // admin_Expense_Condition()       //=============> Done

  // Hours_Completion_Bonus()    //=============> Done
  // Performance_Bonus()        //=============> Done
  // Refferal_Bonus()          //=============> Done
  // Incentive()              //=============> Done
  // Others_Bonus()          //=============> Done

  // Timesheet_Reminder()          //=============> Done
  // Timesheet()                  //=============> Done
  // Timesheet_Search()          //=============> Done
  // Pay_Periods()              //=============> Done
  // Payment()                 //=============> Done
  // Payment_Recalculate()    //=============> Done
  // Payment_Search()        //=============> Done


});
