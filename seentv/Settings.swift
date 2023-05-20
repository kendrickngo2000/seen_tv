// Settings View
// Created by Kendrick Ngo on 05/19/2023
// Settings.swift
//


import SwiftUI
// kendrick's purple
let customColor = Color(red: 186/255, green: 147/255, blue: 216/255)

// custom toggle button
struct CustomToggleStyle: ToggleStyle {
    var color: Color

    func makeBody(configuration: Self.Configuration) -> some View {
        Toggle(isOn: configuration.$isOn) {
            configuration.label
                .frame(maxWidth: .infinity, alignment: .leading)
        }
        .toggleStyle(SwitchToggleStyle(tint: color))
    }
}


struct SettingsView: View {
    
    @State private var newPassword = ""
    @State private var confirmPassword = ""
    
    // notifications variables
    @State private var allowNotifications = true
    @State private var allowEmailNotifications = false

    
    
    var body: some View {
        NavigationView {
            VStack {
                Text("Settings")
                    .font(.largeTitle)
                    .fontWeight(.semibold)
                    .padding()
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(customColor)
                    .foregroundColor(.white)
                
                ZStack {
                    customColor
                        .edgesIgnoringSafeArea(.all)
                    
                    List {
                        // account section
                        Section(header: Text("Account")) {
                            // edit profile sub view
                            NavigationLink(destination: EditProfileView()) {
                                Text("Edit Profile")
                            }
                            // change password sub view
                            NavigationLink(destination: EditPasswordView()) {
                                Text("Change Password")
                            }
                        }
                        
                        // notifications section
                        Section(header: Text("Notifications")) {
                            // allow notifs toggle
                            Toggle("Allow Notifications", isOn: $allowNotifications)
                                .toggleStyle(CustomToggleStyle(color: customColor))
                            // allow email notifs toggle
                            Toggle("Email Notifications", isOn: $allowEmailNotifications)
                                .toggleStyle(CustomToggleStyle(color: customColor))

                        }
                        // privacy section
                        Section(header: Text("Privacy")) {
                            Text("Terms of Service")
                            Text("Privacy Policy")
                        }
                        // support section
                        Section(header: Text("Support")) {
                            Text("Contact Us")
                            Text("FAQ")
                        }
                    }
                    .listStyle(InsetGroupedListStyle())
                }
            }
//            .navigationBarTitle("Settings")
        }
    }
    
    func updateNotificationSettings() {
        // Use the updated values of allowNotifications and allowEmailNotifications
        if allowNotifications {
            // Enable notifications
        } else {
            // Disable notifications
        }
        
        if allowEmailNotifications {
            // Enable email notifications
        } else {
            // Disable email notifications
        }
    }
}
