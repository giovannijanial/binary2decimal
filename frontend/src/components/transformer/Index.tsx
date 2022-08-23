import { FormEvent, useCallback, useEffect, useState } from "react"
import { useTransform } from "../../hooks/useTransform"
import { IBinaryNumber } from "../../interfaces/BinaryNumber"
import './style.css'

const Transformer = () => {
  const [binaryNumber, setBinaryNumber] = useState("")
  const [number, setNumber] = useState("")

  const { transformNumber, error, number: transformedNumber } = useTransform();

  useEffect(() => {
    setNumber(transformedNumber)
  }, [transformedNumber])


  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body: IBinaryNumber = {
      binaryNumber,
    }

    await transformNumber(body);
  }, [binaryNumber, number])

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <label className="label">
          Binary Number:
        </label>
        <input
          className="input"
          type="text"
          dir="rtl"
          value={binaryNumber}
          onChange={(e) => setBinaryNumber(e.target.value)}
        />
        <button
          className="button"
          type="submit"
        >
          Transform
        </button>
      </form>
      <div
        className="form"
      >
        <label className="label">
          Result Number:
        </label>
        <input
          className="input"
          type="text"
          dir="rtl"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {error && (<p>{error}</p>)}
      </div>
    </>

  )
}

export default Transformer