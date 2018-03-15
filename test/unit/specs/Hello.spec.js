import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should have the right data', () => {
    expect(Home.data).to.be.a('function')
    const homeData = Home.data()
    expect(homeData.testStore).to.equal('Test the store:')
  })
})
