import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 0.0;
    cropWidth: number = 75.0;
    @Output()  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void
    {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        //console.log(`Star rating is: ${this.rating} was tapped!!`);
        this.ratingClicked.emit(`Star rating is: ${this.rating} was tapped!!`)
    }
}