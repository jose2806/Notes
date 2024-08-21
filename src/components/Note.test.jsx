import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('clicking the button calls event handler once', async() => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = vi.fn()

  render(<Note note={note} toggleImportance={mockHandler}/>)
  //screen.debug()
  const element = screen.getByText('Component testing is done with react-testing-library', { exact:false })
  //screen.debug(element)
  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  screen.debug(button)
  await user.click(button)
  const element2 = screen.queryByText('do not want this thing to be rendered')
  expect(element2).toBeNull() //no esta renderizado
  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(element).toBeDefined()
})