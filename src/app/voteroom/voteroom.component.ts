import { Component, OnInit, Inject } from '@angular/core';
import { VoteService } from '../services/vote.service';
import { Voteinfo } from '../model/voteinfo';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'voteroom',
  templateUrl: './voteroom.component.html',
  styleUrls: ['./voteroom.component.css']
})
export class VoteroomComponent implements OnInit {

  votes: Voteinfo[];

  constructor(private voteService: VoteService, 
              @Inject(LOCAL_STORAGE) private storage: WebStorageService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.voteService.getVotes().subscribe(res => {
      this.votes = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Voteinfo
      });
    });
  }

  upVote(vote: Voteinfo) {
    if (this.storage.get("voted")) {
      this.toastr.error("You have been voted", "Sorry!");
    } else {
      this.storage.set("voted", "true");
      vote.count++;
      this.voteService.updateVote(vote);
    }
  }

  resetVote() {
    this.voteService.resetVotes(this.votes);
  }

  sortedVotes(): Voteinfo[] {
    return this.votes.sort((a: Voteinfo, b: Voteinfo) => b.count - a.count);
  }

}
