import React from 'react'
import './ProjectContainer.css'
import Pogination from '../Pogination/Pogination'
import Project from '../Project/Project'

import * as projectData from '../../data/projectsConst'

//What-do-you-dream-about?

function ProjectContainer() {

  const[currentPage, setCurrentPage] = React.useState(0)
  const[toRender, setToRender] = React.useState([projectData.projects[0], projectData.projects[1]])
  let quantityPerPage = 2 //кол на 1 странице
  let newArray = Math.trunc(projectData.projects.length / quantityPerPage)

  let totalPages = []
  for (let i = 1; i < newArray; i++) {
    totalPages.push(i);
  }

  function selectPage(pageNumber){
    setCurrentPage(pageNumber -1)
  }  

  function getVisibleItems(){
    let start = currentPage * quantityPerPage
    let end = (currentPage + 1) * quantityPerPage
    let current_arr = projectData.projects.slice(start, end)
    setToRender(current_arr)
  }

  React.useEffect(() => {
    getVisibleItems();
  }, [currentPage]);

  return (
    <section className='project-container'>
        <h2 className='project-container__title'>Projects</h2>
        <ul className='projects__project-container'>
          {toRender.map((project) => (
            <Project 
              project={project}
              key={project.id}
            />
          ))}
        </ul>
        <ul className='pogination__num-container'>
          {totalPages.map((number) => (
            <Pogination 
              number={number}
              key={number}
              selectPage={selectPage}
              currentPage={currentPage}
            />
          ))}
        </ul>

    </section>
)
}

export default ProjectContainer;
/*
        <ul className='projects__container'>
          {newArray.map((number) => (
            <Pogination 
              number={number}
              key={number}
            />
          ))}
        </ul>

        quantityPerPage={quantityPerPage}
          totalPages={totalPages}
          carrentPage={carrentPage}
class Pagination():
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 0
        self.totalPages = int(len(self.items) / self.pageSize)

    def getVisibleItems(self):  
        current_page_l = []
        #задать начало и задать конец
        start = self.currentPage * self.pageSize
        end = min((self.currentPage + 1) * self.pageSize, len(self.items))
        current_page_l = self.items[start:end]
        print(current_page_l)
    
    def nextPage(self):
        if self.currentPage == self.totalPages:
           print('You are on the last page')
           return self
        else:
           self.currentPage += 1
           return self
    
    def prevPage(self):
        if self.currentPage == 0:
            print('You are on the first page')
            return self
        else: 
            self.currentPage -= 1
            return self

    def firstPage(self):
        self.currentPage = 0
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        if pageNum > self.totalPages:
           self.lastPage()
        elif pageNum < 2:
           self.firstPage() 
        else:   
           self.currentPage = pageNum
        return self

    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)   

*/