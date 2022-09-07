/*External dependencies*/
import chalk from "chalk";
import dedent from "dedent";
import translate from "translate";

function printError(err) {
  console.log(chalk.bgRed("ERROR: " + err));
}

function printSuccess(message) {
  console.log(chalk.bgGreen("SUCCESS: " + message));
}

function printHelp() {
  console.log(
    dedent`${chalk.bgCyan("HELP: ")}
    Параметрлери жок - аба ырайы көрсөтүлөт
    -s [CITY] аба ырайын орнотуу
    -h жардам көрсөтүү
    -t [API_KEY] токенди сактоо
    `
  );
}

const printWeather = async (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(" WEATHER ")} ${chalk.greenBright(`${res.name.toUpperCase()}`)} шаарынын аба ырайы
  	${icon}  ${await translate(res.weather[0].description, "ky")}
  	Температура: ${res.main.temp} (${res.main.feels_like} сыяктуу сезилет)
  	Нымдуулук: ${res.main.humidity}%
  	Шамалдын ылдамдыгы: ${res.wind.speed}
  	`
  );
};

export { printError, printSuccess, printHelp, printWeather };
