import React from 'react'
import bg from '../img/about_bg.jpeg'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <div className='w-5/6 mx-auto py-8 md:grid grid-cols-[1fr,2fr]'>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='font-bebas font-bold mb-8 uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
        >
            О НАс
        </motion.h2>

        <div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='flex flex-col gap-7 text-gray mb-8 text-sm md:text-xl'>
            <p>
              Мы IT-команда по разработке сайтов. Все наши участники - это сертифицированные специалисти своего дела. Веб-студия —  занимается разработкой и продвижением сайта. Наша компания выполняют полный спектр услуг по созданию сайтов, это основное направление работы.
            </p>
            <p>
              Разрабатываемые виды сайтов: интернет-магазин, лендинги, корпоративные сайты. Благодаря дизайну решаем разные задачи клиента: помогаем продвижению бизнеса, реклама товаров и т.д
            </p>
            <p className='text-white'>
              Наша задача - сделать качественный сайт, который принесет клиенту миллионы
            </p>
          </motion.div>

          <div className='text-center mb-8 flex flex-col gap-7 sm:flex-row'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
            >
              <strong className='text-red text-3xl'>20+</strong>
              <p className='text-lg md:text-xl'>Довольных клиентов</p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
            >
              <strong className='text-red text-3xl'>7</strong>
              <p className='text-lg md:text-xl'>Дней в неделю работаем </p>
            </motion.div>
          </div>
          
        </div>

        <div className=' col-[1/-1]'>
            <img src={bg} alt="bg" className='w-full object-contain'/>
        </div>
      </div>
    </section>
  )
}

export default About