/**
* Класс CProportional
* Предназначен работы расчета пропорций
*
* @author Vladimir Shapovalov
* @email gyogas@gmail.com
* @date 06.10.2017 22:52
*/

function CProportional(target) {
    this.$com = $(target);
    
    this.init = function() {
        this.$com.find("input").on('input', this.onInput.bind(this));
        this.$com.find("input").on('keydown', this.onKeyDown.bind(this));
    };
    
    this.onKeyDown = function(e) {
        if(e.keyCode === 13) {
            this.onCalculate($(e.currentTarget));
        }
    };
    
    this.onInput = function(e) {
        var $el = $(e.target);
    };
    
    this.onCalculate = function($el) {
        var v11 = Number(this.$com.find(".js-11").val()),
            v12 = Number(this.$com.find(".js-12").val()), 
            v21 = Number(this.$com.find(".js-21").val()), 
            v22 = Number(this.$com.find(".js-22").val()); 
    
        
        if($el.hasClass('js-21')) {            
            v22 = v21*v12/v11;
            this.$com.find(".js-22").val(v22);            
        }
        
        if($el.hasClass('js-22')) {           
            v21 = v22*v11/v12;
            this.$com.find(".js-21").val(v21);            
        }
        
        if($el.hasClass('js-11')) {            
            v12 = v11*v22/v21;
            this.$com.find(".js-12").val(v22);            
        }
        
        if($el.hasClass('js-12')) {           
            v11 = v21*v12/v22;
            this.$com.find(".js-11").val(v11);            
        }
        
    };
    
    this.init();
}

$(function(){
   new CProportional(".js-pr"); 
});