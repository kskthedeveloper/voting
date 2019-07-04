import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Voteinfo } from '../model/voteinfo';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private firestore: AngularFirestore) { }
  
  getVotes() {
    return this.firestore.collection('framework')
                  .snapshotChanges();
  }

  updateVote(vote: Voteinfo) {
    this.firestore.doc('framework/' + vote.id).update(vote);
  }

  resetVotes(votes: Voteinfo[]) {
    for(let vote of votes) {
      vote.count = 0;
      this.updateVote(vote);
    }
  }

}
