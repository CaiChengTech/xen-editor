import { EditorState, AllSelection } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { Command } from '../commands'

type Predicate = (state: EditorState, view?: EditorView) => boolean

export const filter = (
  predicates: Predicate[] | Predicate,
  cmd: Command,
): Command => {
  return function(state, dispatch, view): boolean {
    if (!Array.isArray(predicates)) {
      predicates = [predicates]
    }

    if (predicates.some(pred => !pred(state, view))) {
      return false
    }

    return cmd(state, dispatch, view) || false
  }
}

export const clearState: Command = (state, dispatch) => {
  if (dispatch) {
    dispatch(
      state.tr.setSelection(new AllSelection(state.doc)).deleteSelection(),
    )
  }
}
