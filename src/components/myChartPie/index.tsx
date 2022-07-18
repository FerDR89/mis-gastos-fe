import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  incomes: number;
  expenses: number;
};

export default function MyChartPie({ incomes, expenses }: Props) {
  const data = {
    // labels: [incomes, expenses],
    datasets: [
      {
        data: [incomes, expenses],

        backgroundColor: ["rgb(53, 138, 175)", "rgb(179 33 221 / 53%)"],
        borderColor: ["rgb(53, 138, 175)", "rgb(179 33 221 / 53%)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            family: "Montserrat",
            weight: "normal",
          },
          color: "white",
        },
      },
    },
  };

  return <Pie options={options} data={data} />;
}
