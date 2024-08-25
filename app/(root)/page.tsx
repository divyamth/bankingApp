import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () =>{

    const loggedIn = {firstName: 'Divyam', lastName: 'Tembhare', email: 'test@gmail.com'};
    return(
        <section className="home">
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently"                   
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks = {1}
                        totalCurrentBalance = {12500.40}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 1230}, {currentBalance: 2000}]}
            />
        </section>
    )
}

export default Home