import {Directive, ElementRef, Input, HostListener} from  '@angular/core'

@Directive({
    selector: '[redBorder]'
})
export class RedBorder {

    @Input() redBorder : string = ""
    @Input() redClass : string = ""

    constructor(private el : ElementRef){}
    ngOnInit(){
        this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`
        this.el.nativeElement.classList.add("red-border") 
    }
    @HostListener("mouseover")   applyBorder(){
        this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`
    }
    @HostListener("mouseout")  removeBorder(){
        this.el.nativeElement.style.border = "none"
    }
}