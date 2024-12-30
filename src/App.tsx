import { h } from "preact"
import { useState } from "preact/hooks"
import "./app.css"


// # Sleep Calendar
// > Copy sleep data over to calendar for observation.

// ## Design

// - [ ] Button to authenticate Garmin API
// - [ ] Button to display sleep data sample
// - [ ] Button to authenticate Google Calendar
// - [ ] Button to sync sleep data to calendar

export function App() {
    const [showSleepData, setShowSleepData] = useState(false);

    return <div class="container">
        <header>
            <h1>Sleep Calendar</h1>
        </header>
        <main>
            <section class="connect-buttons">
                <button>Connect Garmin</button>
                <button>Connect Google Calendar</button>
            </section>
            <section class="action-buttons">
                <button onClick={() => setShowSleepData(!showSleepData)}>View Sleep Data</button>
                <button>Sync Data</button>
            </section>
            <SleepDataView visible={showSleepData} />
        </main>
    </div>
}
const mockSleepData = [
    { date: '2024-01-01', duration: '7h 30m', quality: 'Good' },
    { date: '2024-01-02', duration: '6h 45m', quality: 'Fair' },
    { date: '2024-01-03', duration: '8h 15m', quality: 'Excellent' },
    { date: '2024-01-04', duration: '7h 00m', quality: 'Good' },
    { date: '2024-01-05', duration: '6h 30m', quality: 'Poor' },
    { date: '2024-01-06', duration: '7h 45m', quality: 'Good' },
    { date: '2024-01-07', duration: '8h 00m', quality: 'Good' },
];

function SleepDataView({ visible }: { visible: boolean }) {
    if (!visible) return null;
    return (
        <div class="sleep-data">
            <h2>Sleep Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Quality</th>
                    </tr>
                </thead>
                <tbody>
                    {mockSleepData.map(day => (
                        <tr key={day.date}>
                            <td>{day.date}</td>
                            <td>{day.duration}</td>
                            <td>{day.quality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
// test("App", {
//     "renders the Sleep Calendar UI"() {
//         const app = App();
//         expect(app.props.children.type, equals, "div");
//         expect(app.props.children.props.class, equals, "container");
//         expect(app.props.children.props.children[0].props.children.props.children, equals, "Sleep Calendar");
//     },
// })
