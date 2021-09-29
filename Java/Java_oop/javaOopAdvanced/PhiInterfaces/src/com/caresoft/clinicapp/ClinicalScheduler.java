package com.caresoft.clinicapp;
import java.util.HashSet;
import java.util.ArrayList;

public class ClinicalScheduler implements PHIAdminCompliant, PHICompliantUser {
	
    private ArrayList<AdminUser> adminUsers; 
    private HashSet<Physician> doctors;
    private ArrayList<Appointment> appointments;
    private ArrayList<String> ePHIBreaches; // this class's version of security incidents
    // TO DO: Constructor
    
    public void newIncident(Date incidentDate, Integer userID, String notes) {
        String report = String.format(
            "Datetime: %s \n,  Reported By Clinical Scheduler, User ID: %s\n %s \n", 
            incidentDate, userID, notes
        );
        ePHIBreaches.add(report);
    }
    
    public boolean bookAppointmentFor(Patient patient, Physician doctor, Date apptDate) {
        boolean success = false;
        // You see other code here 
    	// (no need to implement anything here for this assignment)
        return success;
    }
    
    public ArrayList<Appointment> openAppointmentsByPCP(Physician doctor, Date startRange, Date endRange){
        ArrayList<Appointment> openAppointments = new ArrayList<appointment>();
        // .. you see existing code to get appointment list.
    	// (Leave as is for the assignment, no need to implement anything here.)
        return openAppointments;
    }
    // TO-DO: add Setters and Getters
    
    

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		return false;
	}

	public ArrayList<AdminUser> getAdminUsers() {
		return adminUsers;
	}

	public void setAdminUsers(ArrayList<AdminUser> adminUsers) {
		this.adminUsers = adminUsers;
	}

	public HashSet<Physician> getDoctors() {
		return doctors;
	}

	public void setDoctors(HashSet<Physician> doctors) {
		this.doctors = doctors;
	}

	public ArrayList<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(ArrayList<Appointment> appointments) {
		this.appointments = appointments;
	}

	public ArrayList<String> getePHIBreaches() {
		return ePHIBreaches;
	}

	public void setePHIBreaches(ArrayList<String> ePHIBreaches) {
		this.ePHIBreaches = ePHIBreaches;
	}

	@Override
	public boolean isAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return null;
	}

}
