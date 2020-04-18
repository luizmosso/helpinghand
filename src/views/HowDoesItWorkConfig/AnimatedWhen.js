import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { Question, FromRight } from './style';
import Input from '../../components/Input';
import Calendar from '../../components/Calendar';
import CalendarIcon from '../../content/icons/CalendarIcon';
import { colors } from '../../content/theme';
import { delay } from '../../utilities/usefulFunctions';

const AnimatedWhen = ({finished}) => {

  const inputClass = 'dateInput'
  const confirmButtonClass = '.datepicker .datepicker-navbar-btn:first-child'

  const [openCalendar, setOpenCalendar] = useState(false)
  const [dateInputText, setDateInputText] = useState(new Date())
  const [dateIsSet, setDateIsSet] = useState(false)

  useEffect(() => { 
    const Animation = async () => {
      await SelectDate(500)
      await delay(500)
      finished()
    }
    Animation() 
  }, [])

  const SelectDate = async (interval) => {
    await delay(interval)
    const input = document.querySelector(`.${inputClass}`)
    if(input){
      input.click()
      await delay(1000)
      const confirm = document.querySelector(confirmButtonClass)
      if(confirm){
        confirm.click()
      }
    }
  }

  return (
    <FromRight>
      <Question fromRight color={colors.darkerGreen} >Quando?</Question>
      <Input 
        className={inputClass}
        type="text" 
        placeholder="Data" 
        width="80%" 
        value={dateIsSet ? moment(dateInputText).format("DD/MM/YYYY HH:mm") : undefined} 
        onClick={() => setOpenCalendar(true)}
      >
        <CalendarIcon color={colors.darkGreen} />
      </Input>
      <Calendar 
        open={openCalendar} 
        setOpen={setOpenCalendar} 
        selectedDate={dateInputText} 
        setDate={setDateInputText} 
        setDateIsSet={setDateIsSet} 
      />
    </FromRight>
  )
}

export default AnimatedWhen

