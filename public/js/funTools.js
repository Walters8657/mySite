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
        speedLimit = 1;
        $("#speedLimitNumber").val(speedLimit);
    }
    
    $("#speedLimitSlider").val(speedLimit);
    calculateSavings();
}

function drivingSpeedNumberInput() {
    drivingSpeed = $("#drivingSpeedNumber").val();

    if(drivingSpeed < 1)
    {
        drivingSpeed = 1;
        $("#drivingSpeedNumber").val(drivingSpeed);
    }

    $("#drivingSpeedSlider").val(drivingSpeed);
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