import React from 'react'
import DatePicker from 'react-mobile-datepicker';

const Calendar = ({ open, setOpen, selectedDate, setDate, setDateIsSet }) => {

  const DATE_STRING_FORMAT = "DD/MM/YYYY hh:mm"

  const dateConfig = 
  {
    'date': {
      format: 'D',
      caption: 'Dia',
      step: 1,
  },
    'month': {
      format: 'M',
      caption: 'Mes',
      step: 1,
  },
    'year': {
      format: 'YYYY',
      caption: 'Ano',
      step: 1,
  },
    'hour': {
      format: 'hh',
      caption: 'Hora',
      step: 1,
  },
    'minute': {
      format: 'mm',
      caption: 'Min',
      step: 1,
  }
}
  return (
      <DatePicker
        theme='default'
        showHeader={false}
        value={selectedDate}
        isOpen={open}
        showCaption={true}
        cancelText="Cancelar"
        confirmText="Confirmar"
        dateConfig={dateConfig}
        headerFormat={DATE_STRING_FORMAT}
        onSelect={(date) => {
          setOpen(false)
          setDate(date)
          setDateIsSet(true)
        }}
        onCancel={() => setOpen(false)} 
      />
  )
}

export default Calendar;