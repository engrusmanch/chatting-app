import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchInput() {
  return (
    <div style={{
        width: 271,
        height: 32,
        background: '#FFFFFF',
        border: '1px solid #CDD5DE',
        borderRadius: 8,
        marginLeft:"34px",
        marginTop:"20px"
      }}>
        <Search>
      <SearchIconWrapper>
      <MagnifyingGlass size={18} style={
        {
            color:'#8FA0AF'
        }
      } />      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
      </div>
    
  );
}
