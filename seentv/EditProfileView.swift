//
//  EditProfileView.swift
//  seentv
//
//  Created by Kendrick Ngo on 5/19/23.
//

import SwiftUI

struct EditProfileView : View {
    @State private var username = ""
    @State private var email = ""
    @State private var bio = ""
    
    var body: some View {
        Form {
            Section(header: Text("Username")) {
                TextField("Enter Username", text: $username)
            }
            
            Section(header: Text("Email")) {
                TextField("Enter email", text: $email)
                    .keyboardType(.emailAddress)
                    .textContentType(.emailAddress)
            }
            
            Section(header: Text("Bio")) {
                TextEditor(text: $bio)
                    .frame(height: 100)
            }
            Section {
                Button(action: saveProfile) {
                    Text("Save Profile")
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 44)
                        .background(customColor)
                        .cornerRadius(8)
                }
            }
        }
        .navigationBarTitle("Edit Profile")
    }
    
    func saveProfile() {
        // perform save op and update user settings
    }
}
