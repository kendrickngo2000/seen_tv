//
//  EditPasswordView.swift
//  seentv
//
//  Created by Kendrick Ngo on 5/19/23.
//

import SwiftUI

struct EditPasswordView: View {
    @State private var currentPassword = ""
    @State private var newPassword = ""
    @State private var confirmPassword = ""
    @State private var showPassword = false
    @State private var passwordUpdated = false
    
    var body: some View {
        Form {
            // current password field
            Section(header: Text("Current Password")) {
                SecureField("Enter current password", text: $currentPassword)
            }
            // new password field
            Section(header: Text("New password")) {
                HStack {
                    if showPassword {
                        TextField("Enter new password", text: $newPassword)
                    } else {
                        SecureField("Enter new password", text: $newPassword)
                    }
                    
                    Button(action: {
                        showPassword.toggle()
                    }) {
                        Image(systemName: showPassword ? "eye.fill" : "eye.slash.fill")
                            .foregroundColor(customColor)
                    }
                }
            }
            Section(header: Text("Confirm Password")) {
                SecureField("Confirm new password",text: $confirmPassword)
            }
            
            Section {
                Button(action: updatePassword) {
                    Text("Save Password")
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 44)
                        .background(customColor)
                        .cornerRadius(8)
                }
                .alert(isPresented: $passwordUpdated) {
                    Alert(
                        title: Text("Success"),
                        message: Text("Your password has been changed"),
                        dismissButton: .default(Text("OK"))
                    )
                }
            }
        }
        .navigationBarTitle("Change Password")
    }
    

    func updatePassword() {
        // Check if the new password and confirm password match
        if newPassword == confirmPassword {
            // Perform password update logic here
            // For example, you can use an API call to update the password
            // You can replace the code below with your own implementation
            
            // Simulating a network request with a delay
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
                // Password updated successfully
                // Show a success message to the user
                passwordUpdated = true
                
                // Reset the fields
                currentPassword = ""
                newPassword = ""
                confirmPassword = ""
            }
        } else {
            // Display an error indicating that the new password and confirm password do not match
            // You can show an alert or update an error message property to display the error
        }
    }
}
