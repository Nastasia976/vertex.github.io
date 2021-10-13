$(document).ready(function () {
    $('.title-conditioner').click(function(event){
        $('.menu-conditioner').toggleClass('active');
        $('.choice-down.conditioner').toggleClass('active');
    });

    $('.title-accessories').click(function(event){
        $('.menu-accessories').toggleClass('active');
        $('.choice-down.accessories').toggleClass('active');
    });

    $('.title-multi-sistems').click(function(event){
        $('.menu-multi-sistems').toggleClass('active');
        $('.choice-down.sistems').toggleClass('active');
    });

    $('.title-heating').click(function(event){
        $('.menu-heating').toggleClass('active');
        $('.choice-down.heating').toggleClass('active');
    });

    $('.title-valve').click(function(event){
        $('.menu-valve').toggleClass('active');
        $('.choice-down.valve').toggleClass('active');
    });

    $('.title-air-ducts').click(function(event){
        $('.menu-air-ducts').toggleClass('active');
        $('.choice-down.ducts').toggleClass('active');
    });

    $('.title-compressor').click(function(event){
        $('.menu-compressor').toggleClass('active');
        $('.choice-down.compressor').toggleClass('active');
    });

    $('.title-microclimate').click(function(event){
        $('.menu-microclimate').toggleClass('active');
        $('.choice-down.microclimate').toggleClass('active');
    });

    $('.title-fancoils').click(function(event){
        $('.menu-fancoils').toggleClass('active');
        $('.choice-down.fancoils').toggleClass('active');
    });

    $('.title-chillers').click(function(event){
        $('.menu-chillers').toggleClass('active');
        $('.choice-down.chillers').toggleClass('active');
    });
});