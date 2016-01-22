import groovy.json.JsonSlurper

def citiesText = new File('../cities.json').text
def slurper = new JsonSlurper()

def times = []

for (x in 0..20) {
    def begin = new Date().getTime()
    def citiesParsed = slurper.parseText(citiesText)
    def end = new Date().getTime()

    def duration = end - begin

    println("Number of Cities: ${citiesParsed.size()}")
    println("$duration RunTime")
    times.push(duration)
}

println("\nOverall Avarage: ${times.sum() / times.size()}")
