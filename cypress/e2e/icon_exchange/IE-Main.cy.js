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
import {Assign_Facility, 
  Update_Assign_Facility,
  View_Assign_Facility,
} from "./Assign_Facility.cy";
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
  Others_Bonus,
} from "./Bonus_and_Incentive.cy";
import {
  Admin_Expense,
  View_Admin_Expense,
  Edit_Admin_Expense,
  admin_Expense_Condition,
} from "./Admin_Expense.cy";
import Icon_user_per_Login from "./Icon_user_per_login.cy";
import {
  IC_Bonus_Condition,
  IC_Hours_Completion_Bonus,
  IC_Incentive,
  IC_Notification,
  IC_Others_Bonus,
  IC_Performance_Bonus,
  IC_Refferal_Bonus,
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
import { Provider_profile } from "./Provider_profile.cy";
import { Update_Provider_Provider_profile } from "./Update_Provider_Provider_profile.cy";
import {
  Archived_Credentialing_Payor,
  Credentialing_Payor,
  Credentialing_Payor_Update,
  View_Credentialing_Payor,
} from "./Credentialing_Payor.cy";
import { Credenitialing_Payor_Search } from "./Credentialing_Payor_Search.cy";
import { Delete_documentType, Document_Type_Update, Document_Types } from "./Document_Types.cy";
import { Document_Type_Search } from "./Document_Type_Search.cy";
import { Malpractice_Expire, View_malpractice_Expire } from "./Malpractice_Expire_Search.cy";
import { Facility_Documents, Facility_Documents_Subfolder } from "./Facility_Documents.cy";

describe("let's Automate Icon Exchange.", function () {
  Icon_Exchange_URL(); //=============> Done
  Icon_Admin_Login(); //=============> Done

  //================================================  Credenitialing and Payor ================================================//

  Credentialing_Payor();            //=============> Done
  Credentialing_Payor_Update();     //=============> Done
  Credenitialing_Payor_Search();     //=============> Done
  View_Credentialing_Payor();        //=============> Done
  Archived_Credentialing_Payor();     //=============> Done

  //================================================ Document Types ================================================//

 //Document_Types();           //=============> Done
  //Document_Type_Update()       //=============> Done
  //Document_Type_Search();       //=============> Done
  // Delete_documentType()      //=============> Done

    //================================================ Expired Malpractice ================================================//

  //Malpractice_Expire();           //=============> Done
  //View_malpractice_Expire()       //=============> Done


  //================================================ Facility Folders ================================================//

  //Facility_Documents();           //=============> Done
  //Facility_Documents_Subfolder()
  


  //================================================ Icon User and Provider Login ================================================//

  // Icon_user_Login();       //=============> Done
  // Provider_Login();        //=============> Done

  //================================================ Provider  ================================================//

  // Add_Provider() ;         //=============> Done
  // Provider_Search();      //=============> Done
  //View_Provider();     //=============> Done

  //================================================ Facility Assignment  ================================================//

  //Assign_Facility();
  //Update_Assign_Facility();
  //View_Assign_Facility();                //=============> Done
  // Update_Provider_Provider_profile()  //=============> Done

  //================================================ Facility Module ================================================//

  // Add_Icon_Exchange_Facilities()         //=============> Done
  // edit_facility()                       //=============> Done
  // delete_facility()                    //=============> Done
  // Facility_Search()                   //=============> Done

  //================================================ User Management  ================================================//

  //Icon_Users()            //=============> Done
  // Update_Icon_user()       //=============> Done
  // Icon_Users_Search()    //=============> Done

  //================================================ Roles Management  ================================================//

  //Create_Icon_Roles()      //=============> Done
  //Edit_Roles()           //=============> Done
  //Icon_Role_Search()      //=============> Done
  // Delete_Roles()        //=============> Done

  // Provider_Signup()     //=============> Done
  // Provider_SignIN()    //=============> Done

  //================================================ Pay Rates Management  ================================================//

  //Add_Pay_Rates()           //=============> Done
  // Pay_Rate_Search()        //=============> Done
  // Pay_Rate_View()         //=============> Done
  // Edit_Pay_Rate()        //=============> Done
  // Delete_Pay_Rate()     //=============> Done

  //================================================ Malpractice Management  ================================================//

  // Add_Malpractice()         //=============> Done
  //Malpractice_Search()     //=============> Done
  // Update_Malpractice();   //=============> Done

  //================================================ Expense Management  ================================================//

  // Provider_Expense()               //=============> Done
  // View_Provider_Expense()         //=============> Done
  // Edit_Provider_Expense()        //=============> Done
  // Provider_Expense_Search()     //=============> Done
  // Provider_condition()         //=============> Done

  // Admin_Expense()                    //=============> Done
  // View_Admin_Expense()              //=============> Done
  // Edit_Admin_Expense()             //=============> Done
  // admin_Expense_Condition()       //=============> Done

  //================================================ Bonus Management  ================================================//

  //Hours_Completion_Bonus()    //=============> Done
  // Performance_Bonus()        //=============> Done
  // Refferal_Bonus()          //=============> Done
  // Incentive()              //=============> Done
  // Others_Bonus()          //=============> Done

  //================================================ Timesheet Management  ================================================//

  // Timesheet_Reminder()          //=============> Done
  // Timesheet()                  //=============> Done
  // Timesheet_Search()          //=============> Done
  // Pay_Periods()              //=============> Done
  // Payment()                 //=============> Done
  // Payment_Recalculate()    //=============> Done
  // Payment_Search()        //=============> Done

  // IC_Notification()                  //=============> Done
  // IC_Hours_Completion_Bonus()       //=============> Done
  // IC_Performance_Bonus()           //=============> Done
  // IC_Refferal_Bonus()             //=============> Done
  // IC_Incentive()                 //=============> Done
  // IC_Others_Bonus()             //=============> Done
  // IC_Bonus_Condition()         //=============> Done

  // Bulk_Facility_Assignment()       //=============> Done
  // Bulk_add_provider()             //=============> Done
  // Bulk_Area_of_expertise()       //=============> Done

  //           ||///////     ||//////    ||\\    ||  ||///////
  //           ||       //   ||    ||    || \\   ||  ||
  //           ||        //  ||    ||    ||  \\  ||  ||/////
  //           ||       //   ||    ||    ||   \\ ||  ||
  //           ||//////      ||//////    ||    \\||  ||///////
});
