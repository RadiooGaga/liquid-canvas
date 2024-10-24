import React, {useState} from 'react'
import { useApi } from '../../utils/useApi'
import { Loading } from '../../components/Loading/Loading'
import { Error } from '../../components/Error/Error'
import { CocktailDetails } from '../../components/CocktailDetails/CocktailDetails'
import { RandomSelector } from '../../components/RandomSelector/RandomSelector'


export const Random = () => {

  const [showDesign, setShowDesign] = useState(true)
  const [randomTrigger, setRandomTrigger] = useState(0);
  const { drink, loading, error } = useApi(null, 'Random', randomTrigger)

  const handleFetchClick = () => {
    setShowDesign(false)
    setRandomTrigger(prev => prev + 1)
  }

  return (
  <>
    <RandomSelector onClick={handleFetchClick} showDesign={showDesign} />
    {!showDesign && (
        <div className='divCocktail'>
            {loading ? (
                <Loading text="CARGANDO CÓCTELES..." />
            ) : error ? (
                <Error text='ERROR' />
            ) : (
                drink && <CocktailDetails drinks={drink} />
            )}
        </div>
    )}
   </>
  );
};