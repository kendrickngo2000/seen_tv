//
//  FavoritesView.swift
//  seentv
//
//  Created by Steven Tsan on 5/6/23.
//
import Foundation
import SwiftUI

struct FavoritesView: View {
    @EnvironmentObject var favorites : Favorites
    @StateObject var viewModel = MovieDiscoverViewModel()
    var body: some View {
        NavigationStack{
            ScrollView {
                HStack{
                    Text("Favorites")
                        .font(.title)
                        .foregroundColor(.white)
                        .fontWeight(.heavy)
                    Spacer()
                }
                .padding(.horizontal)
                if favorites.faveMovies.isEmpty{
                    Text("No Results").background(Color(red:114/255,green:137/255,blue:218/255))
                }else {
                    LazyVStack(){
                        ForEach(favorites.faveMovies.sorted{$0.id < $1.id}){movie in
                            HStack{
                                AsyncImage(url: movie.backdropURL){
                                    image in image
                                        .resizable()
                                        .scaledToFill()
                                        .frame(width: 80, height: 120)
                                    
                                } placeholder: {
                                    ProgressView()
                                        .frame(width:80, height:120)
                                }
                                .clipped()
                                .cornerRadius(10)
                                VStack(alignment:.leading) {
                                    Text(movie.title)
                                        .foregroundColor(.white)
                                        .font(.headline)
                                    
                                    HStack {
                                        Image(systemName: "hand.thumbsup.fill")
                                        Text(String(format:"%.1f", movie.vote_average))
                                        Spacer()
                                        
                                    }
                                    .foregroundColor(.white)
                                    .fontWeight(.heavy)
                                }
                                Spacer()
                            }
                            .padding(.horizontal)
                            .background(Color(red:114/255,green:137/255,blue:218/255))
                            .cornerRadius(20)
                            .padding(.horizontal)
                            
                        }
                    }
                }
                
            }.background(Color(red: 39/255,green: 39/255, blue: 42/255)
                .ignoresSafeArea())
        }
    }
}

//ForEach(favorites.faveMovies.sorted{$0.id < $1.id})
