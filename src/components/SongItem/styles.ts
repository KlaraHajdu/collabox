import styled from 'styled-components';
import Delete from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.secondaryLight};
    color: ${({ theme }) => theme.colors.whiteFontColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
    width: 100%;
    padding: 1rem;
    margin: 0.5rem;
`

export const SongTitle = styled.div`
    font-size: 1rem;
    flex: 5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 4px;
`

export const AddedBy = styled.div`
    font-size: 0.7rem;
    flex: 1;
`

export const VoteCount = styled.div`
    font-size: 0.7rem;
    flex: 1;
`

export const VoteButtons = styled.div`
    flex: 1;
`

export const DeleteIcon = styled(Delete)`
    color: ${({ theme }) => theme.colors.whiteFontColor};
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.secondaryDark};
    }
`

export const UpvoteIcon = styled(AddIcon)<{disabled: boolean}>`
    color: ${({ theme, disabled }) => disabled? theme.colors.disabled : theme.colors.whiteFontColor};
    margin-right: 1rem;
    cursor: ${({ disabled }) => disabled === true ? "not-allowed" : "pointer"};

    &:hover {
        color: ${({ theme, disabled }) => disabled? theme.colors.disabled : theme.colors.secondaryDark};
    }
`

export const DownvoteIcon = styled(RemoveIcon)<{disabled: boolean}>`
    color: ${({ theme, disabled }) => disabled? theme.colors.disabled : theme.colors.whiteFontColor};
    margin-right: 1rem;
    cursor: ${({ disabled }) => disabled === true ? "not-allowed" : "pointer"};

    &:hover {
        color: ${({ theme, disabled }) => disabled? theme.colors.disabled : theme.colors.secondaryDark};
    }
`