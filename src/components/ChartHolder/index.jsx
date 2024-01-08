import {ChartContainer, ButtonL, ChartWrapper, CheckboxText, CheckWrapper, ChartDropdownLong, ChartTop, Chart, ChartMenu, ChartTitle, ChartData, ChartDropdown, ChartAppearance, ChartCheckbox} from './ChartHolderElements'
import Heatmap from '../Heatmap'
import {Link as Link} from 'react-router-dom'
import {useState, useEffect} from 'react'



const ChartHolder = () => {
    const [lineChart, setLineChart] = useState(true);
    const [year, setYear] = useState('2020');

    const handleChange = (e) => {
        setYear(e.target.value);
        console.log(e.target.value)
    }
    
  return (
    <ChartContainer>
        <ChartWrapper>
            <Chart> <Heatmap year={year} lineChart={lineChart}/> </Chart>
            <ChartMenu>
                <ChartTop>
                <ChartTitle>Chart Type</ChartTitle>
                {lineChart ? <> 
                <i class="fa-solid fa-chart-line type"></i> 
                <h3 className="typeName">Line</h3>
                </>
                :<>
                <i class="fa-solid fa-chart-area type"></i>
                <h3 className='typeName'>Heat</h3>
                </>
                }
                <ChartDropdown onChange={() => setLineChart(!lineChart)}>
                <option value="Line">Line</option>
                <option value="Heat">Heatmap</option>
                </ChartDropdown>
               </ChartTop>
                <ChartData>
                     <ChartTitle>Data</ChartTitle>
                    <ChartDropdownLong>
                    <option value="Carbon">CARBON_INTENSITY</option>
                    </ChartDropdownLong>
                    <ChartDropdownLong onChange={(e) => handleChange(e)}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="all">ALL</option>
                    </ChartDropdownLong>
                </ChartData>
                <ChartAppearance>
                <ChartTitle>Appearance</ChartTitle>
                <CheckWrapper>
                    <ChartCheckbox type="checkbox"/>
                    <CheckboxText>Fill Area</CheckboxText>
                </CheckWrapper>
                <CheckWrapper>
                    <ChartCheckbox type="checkbox"/>
                    <CheckboxText>Show Points</CheckboxText>
                </CheckWrapper>
                <CheckWrapper>
                    <ChartCheckbox type="checkbox"/>
                    <CheckboxText>Label X-Axis</CheckboxText>
                </CheckWrapper>
                <CheckWrapper>
                    <ChartCheckbox type="checkbox"/>
                    <CheckboxText>Label Y-Axis</CheckboxText>
                </CheckWrapper>
                </ChartAppearance>
                <ButtonL  to="/dashboard">Return to Dashboard</ButtonL>
            </ChartMenu>
        </ChartWrapper>
    </ChartContainer>
  )
}

export default ChartHolder