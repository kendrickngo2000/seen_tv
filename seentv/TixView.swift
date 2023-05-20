//
//  TixView.swift
//  seentv
//
//  Created by Steven Tsan on 5/19/23.
//
import SwiftUI
struct TixView: View{
    @StateObject var viewModel = MovieDiscoverViewModel()
    @EnvironmentObject var favorites : Favorites
    let customColor = Color(red: 186/255, green: 147/255, blue: 216/255)
    let fandangoBaseURL = URL(string: "https://www.fandango.com")!
    var body: some View {
        NavigationView {
            NavigationStack {
                ScrollView {
                    if viewModel.nowPlayingResults.isEmpty{
                        Text("No Results").background(Color(red:114/255,green:137/255,blue:218/255))
                    } else {
                        HStack{
                            Text("In Theaters Now")
                                .font(.title)
                                .foregroundColor(.white)
                                .fontWeight(.heavy)
                            Spacer()
                        }
                        .padding(.horizontal)
                        ScrollView(.horizontal, showsIndicators:false){
                            LazyVStack {
                                ForEach(viewModel.nowPlayingResults) { playingItem in
                                    NavigationLink{
                                        MovieDetailView(movie: playingItem)
                                    } label:{HStack{
                                        TrendingCard(trendingItem: playingItem)
                                        Button(action: {
                                            openFandango(term: playingItem.title)
                                        }) {
                                            Text("Tickets on Fandango")
                                                .foregroundColor(.white)
                                                .padding()
                                                .background(customColor)
                                                .cornerRadius(10)
                                        }
                                        if favorites.contains(playingItem){
                                            Spacer()
                                            Image(systemName: "heart.fill")
                                                .accessibilityLabel("Favorited")
                                                .foregroundColor(.red)
                                        }}
                                    }
                                    
                                }
                            }
                            .padding(.horizontal)
                        } }
                }
            }
        }.onAppear{viewModel.loadNowPlaying()}
    }
    func openFandango(term: String) {
        let query = term.replacingOccurrences(of: " ", with: "+")
        let queryWithMode = query+"&mode=all"
        let encodedQuery = queryWithMode.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? ""
        let searchURL = fandangoBaseURL.appendingPathComponent("/search")
        let movieURL = searchURL.appendingPathComponent("?q=\(encodedQuery)")
        
        if UIApplication.shared.canOpenURL(movieURL) {
            UIApplication.shared.open(movieURL)
        }
    }
}
struct TixView_Previews: PreviewProvider{
    static var previews: some View {
        TixView()
    }
}
