
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
               AAA                    NNNNNNNN        NNNNNNNN     TTTTTTTTTTTTTTTTTTTTTTT          OOOOOOOOO          NNNNNNNN        NNNNNNNN
              A:::A                   N:::::::N       N::::::N     T:::::::::::::::::::::T        OO:::::::::OO        N:::::::N       N::::::N
             A:::::A                  N::::::::N      N::::::N     T:::::::::::::::::::::T      OO:::::::::::::OO      N::::::::N      N::::::N
            A:::::::A                 N:::::::::N     N::::::N     T:::::TT:::::::TT:::::T     O:::::::OOO:::::::O     N:::::::::N     N::::::N
           A:::::::::A                N::::::::::N    N::::::N     TTTTTT  T:::::T  TTTTTT     O::::::O   O::::::O     N::::::::::N    N::::::N
          A:::::A:::::A               N:::::::::::N   N::::::N             T:::::T             O:::::O     O:::::O     N:::::::::::N   N::::::N
         A:::::A A:::::A              N:::::::N::::N  N::::::N             T:::::T             O:::::O     O:::::O     N:::::::N::::N  N::::::N
        A:::::A   A:::::A             N::::::N N::::N N::::::N             T:::::T             O:::::O     O:::::O     N::::::N N::::N N::::::N
       A:::::A     A:::::A            N::::::N  N::::N:::::::N             T:::::T             O:::::O     O:::::O     N::::::N  N::::N:::::::N
      A:::::AAAAAAAAA:::::A           N::::::N   N:::::::::::N             T:::::T             O:::::O     O:::::O     N::::::N   N:::::::::::N
     A:::::::::::::::::::::A          N::::::N    N::::::::::N             T:::::T             O:::::O     O:::::O     N::::::N    N::::::::::N
    A:::::AAAAAAAAAAAAA:::::A         N::::::N     N:::::::::N             T:::::T             O::::::O   O::::::O     N::::::N     N:::::::::N
   A:::::A             A:::::A        N::::::N      N::::::::N           TT:::::::TT           O:::::::OOO:::::::O     N::::::N      N::::::::N
  A:::::A               A:::::A       N::::::N       N:::::::N           T:::::::::T            OO:::::::::::::OO      N::::::N       N:::::::N
 A:::::A                 A:::::A      N::::::N        N::::::N           T:::::::::T              OO:::::::::OO        N::::::N        N::::::N
AAAAAAA                   AAAAAAA     NNNNNNNN         NNNNNNN           TTTTTTTTTTT                OOOOOOOOO          NNNNNNNN         NNNNNNN  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
