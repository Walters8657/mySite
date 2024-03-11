// #region Time Saved Speeding
speedLimit = 60;
drivingSpeed = 70;

miles = 30;

speedLimitTime = 0;
drivingTime = 0;

$("#speedLimitSlider").val(speedLimit);
$("#drivingSpeedSlider").val(drivingSpeed);
$("#speedLimitNumber").val(speedLimit);
$("#drivingSpeedNumber").val(drivingSpeed);

$("#milesNumber").val(miles);

calculateSavings();

function speedLimitSliderInput() {
    speedLimit = $("#speedLimitSlider").val();
    
    $("#speedLimitNumber").val(speedLimit);
    calculateSavings();
}

function drivingSpeedSliderInput() {
    drivingSpeed = $("#drivingSpeedSlider").val();
    
    $("#drivingSpeedNumber").val(drivingSpeed);
    calculateSavings();
}

function speedLimitNumberInput() {
    speedLimit = $("#speedLimitNumber").val();

    if(speedLimit < 1)
    {
        speedLimit = null;
        $("#speedLimitNumber").val(speedLimit);
    } else if (speedLimit > 310.8) {
        speedLimit = 310.8;
        $("#speedLimitNumber").val(speedLimit);
    }
    
    $("#speedLimitSlider").val(speedLimit);

    if (speedLimit != null)
        calculateSavings();
}

function drivingSpeedNumberInput() {
    drivingSpeed = $("#drivingSpeedNumber").val();

    if(drivingSpeed < 1)
    {
        drivingSpeed = null;
        $("#drivingSpeedNumber").val(drivingSpeed);
    } else if (drivingSpeed > 310.8) {
        drivingSpeed = 310.8;
        $("#drivingSpeedNumber").val(drivingSpeed);
    }

    $("#drivingSpeedSlider").val(drivingSpeed);

    if (drivingSpeed != null)
        calculateSavings();
}

function milesNumberInput() {
    miles = $("#milesNumber").val() ?? 0;

    if(miles < 0) 
    {
        miles = 0;
        $("#milesNumber").val(miles)
    }

    calculateSavings();
}

function calculateSavings() {
    speedLimitTime = 3600 * (miles / speedLimit);
    drivingTime = 3600 * (miles / drivingSpeed);

    let speeding = drivingTime <= speedLimitTime;

    let timeSavedSeconds = speeding ? speedLimitTime - drivingTime : drivingTime-speedLimitTime;

    let timeSavedHours = Math.floor(timeSavedSeconds / 3600);
    timeSavedSeconds -= timeSavedHours * 3600;
    let timeSavedMinutes = Math.floor(timeSavedSeconds / 60);
    timeSavedSeconds -= timeSavedMinutes * 60;
    timeSavedSeconds = Math.floor(timeSavedSeconds);

    let timeSavedString = 
        (!speeding ? "- ": "") + 
        timeSavedHours.toString() + (timeSavedHours != 1 ? " Hours, " : " Hour, ") + 
        timeSavedMinutes.toString() + (timeSavedMinutes != 1 ? " Minutes, " : " Minute, ") + 
        timeSavedSeconds.toString() + (timeSavedSeconds != 1 ? " Seconds" : " Second");

    $("#timeSaved").html(timeSavedString);
}
// #endregion

// #region Temperature Conversions
celsius = 0;
fahrenheit = 32;
kelvin = 273.15;

$("#cTemp").val(celsius);
$("#fTemp").val(fahrenheit);
$("#kTemp").val(kelvin);

function celsiusCalculateTemperatures() {
    if ($("#cTemp").val() != "-" && $("#cTemp").val() != "") {
        celsius = parseFloat($("#cTemp").val());
        fahrenheit = (celsius * (9/5)) + 32;
        kelvin = celsius + 273.15;

        if (celsius < -273.15) celsius = -273.15;
        
        roundTemps();
        setTemps();
    }
    
}

function fahrenheitCalculateTemperatures() {
    if ($("#fTemp").val() != "-" && $("#fTemp").val() != "") {
        fahrenheit = parseFloat($("#fTemp").val());
        celsius = (fahrenheit - 32) * (5/9);
        kelvin = celsius + 273.15;
    
        if (fahrenheit < -459.67) fahrenheit = -459.57;
        
        roundTemps();
        setTemps();
    }
}

function kelvinCalculateTemperatures() {
    if ($("#kTemp").val() != "-" && $("#kTemp").val() != "") {
        kelvin = parseFloat($("#kTemp").val());
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * (9/5)) + 32;
    
        if (kelvin < 0) kelvin = 0;
        
        roundTemps();
        setTemps();
    }
}

function roundTemps() {
    celsius = Math.round(celsius * 100) / 100;
    fahrenheit = Math.round(fahrenheit * 100) / 100;
    kelvin = Math.round(kelvin * 100) / 100;
}

function setTemps() {
    $("#kTemp").val(kelvin);
    $("#fTemp").val(fahrenheit);
    $("#cTemp").val(celsius);
}
// #endregion
