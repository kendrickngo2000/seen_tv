//
//  Favorites.swift
//  seentv
//
//  Created by Steven Tsan on 5/6/23.
//

import SwiftUI

class Favorites: ObservableObject{
    public var faveMovies: Set <Movie> = []
    
    private var saveKey = "Favorites"
    
    func contains (_ containMovie: Movie) -> Bool{
        faveMovies.contains(containMovie)
    }
    
    func add(_ addMovie: Movie){
        objectWillChange.send()
        faveMovies.insert(addMovie)
        save()
    }
    
    func remove(_ removeMovie: Movie){
        objectWillChange.send()
        faveMovies.remove(removeMovie)
        save()
    }
    
    func save(){
        // write out data
    }
    
}
