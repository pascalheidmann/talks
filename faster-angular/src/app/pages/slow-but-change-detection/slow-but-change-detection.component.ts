import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
    selector: 'app-slow-but-change-detection',
    standalone: true,
    imports: [],
    templateUrl: './slow-but-change-detection.component.html',
    styleUrl: './slow-but-change-detection.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlowButChangeDetectionComponent {
    public data: number[] = [];
    public currentTime: string = '';

    constructor(
        private cdr: ChangeDetectorRef
    ) {
        this.data = Array.from({length: 25}, (v, k) => k);

        setInterval(() => {
            this.currentTime = new Date().toString();
            this.cdr.detectChanges();
        });
    }

    public getFibonacci(num: number): number {
        console.log(`Calculating fibonacci for ${num}`);
        return this.fibonacci(num);
    }

    public fibonacci(num: number): number {
        if (num <= 1) {
            return 1;
        }

        return this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
