import {Component} from '@angular/core';

@Component({
    selector: 'app-complex-and-slow',
    standalone: true,
    imports: [],
    templateUrl: './complex-and-slow.component.html',
    styleUrl: './complex-and-slow.component.css'
})
export class ComplexAndSlowComponent {
    public data: number[] = [];
    public currentTime: string = '';

    constructor() {
        this.data = Array.from({length: 25}, (v, k) => k);

        setInterval(() => {
            this.currentTime = new Date().toString();
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
