 console.log("Hello")
 window.addEventListener('DOMContentLoaded', function () {
    console.log('loaded')
    const left_btn = document.getElementById('leftbutton')
    const right_btn = document.getElementById('rightbutton')
    console.log(left_btn, right_btn)


    let arr = [{ temperature: "77f", wind: "3.00mph", direction: "208" }, { temperature: "45f", wind: "0.00mph", direction: "0" }, { temperature: "56f", wind: "9.22mph", direction: "130" }, { temperature: "79f", wind: "1.99mph", direction: "90" }];
    let arr2 = [
        { city: "Westlake,Texas", place: "Vaquero" },
        { city: "Whitefish,Montana", place: "Iron Horse" },
        { city: "Silicon Valley,California", place: "Corde Valle" },
        { city: "Scottsdale,Arizona", place: "Estancia" }
    ];

    let arr3 = [{ location: "32.965190N/-97.194715W" }, { location: "48.449344N/-114.347434W" }, { location: "37.067811N/-121.362827W" }, { location: "33.7381-111.865240W" }];




    // line1
    let temperature = document.getElementById('temperature')
    temperature.innerHTML = arr[0].temperature

    let wind = document.getElementById('wind')
    wind.innerHTML = arr[0].wind

    let direction = document.getElementById('direction')
    direction.innerHTML = arr[0].direction

    // line2
    let city = document.getElementById('info')
    city.innerHTML = arr2[0].city

    let place = document.getElementById('desc')
    place.innerHTML = arr2[0].place

    //line3

    let location = document.getElementById('location')
    location.innerHTML = arr3[0].location


    let count = 0

    left_btn.addEventListener('click', function () {
       console.log("Left Botton")
        if (count > 0) {
            count--
            temperature.innerHTML = arr[count].temperature
            wind.innerHTML = arr[count].wind
            direction.innerHTML = arr[count].direction

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location


        }
        else {
            count = arr.length - 1
            temperature.innerHTML = arr[count].temperature
            wind.innerHTML = arr[count].wind
            direction.innerHTML = arr[count].direction

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location


        }


    })
    right_btn.addEventListener('click', function () {
      
        if (count < arr.length - 1) {
            count++
            temperature.innerHTML = arr[count].temperature
            wind.innerHTML = arr[count].wind
            direction.innerHTML = arr[count].direction

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location

        }
        else {
            count = 0
            temperature.innerHTML = arr[count].temperature
            wind.innerHTML = arr[count].wind
            direction.innerHTML = arr[count].direction

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location

        }

    })


})