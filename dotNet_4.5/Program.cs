using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;
using System.Diagnostics;

namespace jsonperf
{
    class Program
    {
        static void Main(string[] args)
        {
            var json = File.ReadAllText("../../../cities.json");
            var times = new List<double>();

            for (int i = 0; i < 20; i++)
            {
                var stopWatch = new Stopwatch();
                stopWatch.Start();
                var cities = JsonConvert.DeserializeObject<IEnumerable<City>>(json);
                stopWatch.Stop();

                TimeSpan ts = stopWatch.Elapsed;

                Console.WriteLine("Number of cities: " + cities.Count());
                Console.WriteLine(ts.TotalMilliseconds.ToString(), "RunTime");

                times.Add(ts.TotalMilliseconds);
            }

            Console.WriteLine("average: " + times.Average());
            Console.ReadKey();
        }
    }

    class City
    {
        public string city { get; set; }
        public List<double> loc { get; set; }
        public int pop { get; set; }
        public string state { get; set; }
        public string id { get; set; }
    }
}
