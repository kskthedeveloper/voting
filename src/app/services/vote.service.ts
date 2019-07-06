import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Voteinfo } from '../model/voteinfo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private firestore: AngularFirestore, private toastr: ToastrService) { }
  
  getVotes() {
    return this.firestore.collection('framework')
                  .snapshotChanges();
  }

  updateVote(vote: Voteinfo) {
    this.firestore.doc('framework/' + vote.id).update(vote).then( any => {
      this.toastr.info("Thanks for voting", "Success!");
    });
  }

  resetVotes(votes: Voteinfo[]) {
    for(let vote of votes) {
      vote.count = 0;
      this.updateVote(vote);
    }
  }

}
