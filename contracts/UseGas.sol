//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract UseGas {

    uint private _d;

    /// @dev Use at least `atLeast` gas 
    /// @param atLeast The minimum gas to use in this constructor.
    function useGas(uint atLeast) external {

        uint left = gasleft();
        
        require(left > atLeast, "no enough gas");

        uint target = left -  atLeast;

        while(gasleft() > target){
            _d++;
        }
    }

}
