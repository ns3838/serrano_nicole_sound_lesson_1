while (true) {
    if (input.soundLevel() > 150) {
        light.setAll(color.rgb(0, 200, 255))
    } else {
        light.clear()
    }
    
}
