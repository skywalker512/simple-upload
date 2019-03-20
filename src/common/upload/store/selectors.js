export const filedataSelector = (state, index) => state.getIn(['upload', 'file', index, 'filedata'])
export const totalStepSelector = (state, index) => state.getIn(['upload', 'file', index, 'totalStep'])
export const keySelector = (state, index) => state.getIn(['upload', 'file', index, 'key'])
export const fileSelector = (state, index) => state.getIn(['upload', 'file', index])