var board =
`%e%%%%%%%%%
%   % %   %
% % % % %%%
% %       %
% %%%% %% %
% %     % %
%%%%%%%%%x%`;

var mazeMatrix = board.split("\n").map(row => row.split(""));


// 미로에서 문자의 위치를 찾는 함수
function findChar(char, mazeMatrix) {
for (var i = 0; i < mazeMatrix.length; i++) {
    for (var j = 0; j < mazeMatrix[0].length; j++) {
        if (mazeMatrix[i][j] === char) {
            return [i, j];
        }
    }
}
}

// 미로 매트릭스를 HTML 엘리먼트에 출력하는 함수
function printMatrix(matrix, elementId) {
var mazePrintStr = "";
for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === '%') {
            mazePrintStr += '<div class="wall">%</div>';
        } else {
            mazePrintStr += '<div class="cell">' + matrix[i][j] + '</div>';
        }
    }
    mazePrintStr += "<br>";
}

}


// 문자를 미로에서 이동시키는 함수
function move(char, mazeMatrix, direction) {
var currentPosition = findChar(char, mazeMatrix);
var x = currentPosition[0];
var y = currentPosition[1];

switch (direction) {
    case 'up':
        x--;
        break;
    case 'down':
        x++;
        break;
    case 'left':
        y--;
        break;
    case 'right':
        y++;
        break;
}

if (isValidMove(mazeMatrix, x, y)) {
    mazeMatrix[currentPosition[0]][currentPosition[1]] = '.';

  if (mazeMatrix[x][y] === 'x') {
            alert('탈출 성공');
        } else {
            mazeMatrix[x][y] = char;
            printMatrix(mazeMatrix, 'mazeOutput');
        }
}
}

function isValidMove(mazeMatrix, x, y) {
if (x < 0 || y < 0 || x >= mazeMatrix.length || y >= mazeMatrix[0].length) {
    return false; 
}

if (mazeMatrix[x][y] === '%') {
    return false; 
}

return true; 
}

function handleKeyPress(event) {
switch (event.key) {
    case 'ArrowUp':
        move('e', mazeMatrix, 'up');
        break;
    case 'ArrowDown':
        move('e', mazeMatrix, 'down');
        break;
    case 'ArrowLeft':
        move('e', mazeMatrix, 'left');
        break;
    case 'ArrowRight':
        move('e', mazeMatrix, 'right');
        break;
}
}

document.addEventListener('keydown', handleKeyPress);


printMatrix(mazeMatrix, 'mazeOutput');