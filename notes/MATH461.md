```python
print('hello world')
```

    hello world

# MATH461 Linear Algebra

### Midterm 1 Material

**echelon**: diagonal pattern

row echelon matrix form:

1. all leading entries start with zero
2. the leading entry in a lower row is to the right of the leading entry in the row above it
3. rows consisting of all zeros are on the bottom of the matrix
   example:
    $$
    \begin{bmatrix}
    1 & 2 & 3 & 4\\
    0 & 1 & 2 & 3\\
    0 & 0 & 1 & 2\\
    \end{bmatrix}
    $$

reduced row echelon matrix form:

1. all of the three above (for row echelon form) AND
2. a leading entry in a column must be the only entry in that column (no numbers above or below leading entry)

$$
\begin{bmatrix}
1 & 0 & 0 & 2\\
0 & 1 & 0 & 2\\
0 & 0 & 1 & 2\\
\end{bmatrix}
$$

system of linear combinations
$$1x_1 + 2x_2 + 3x_3 = 4$$
$$5x_1 + 6x_2 + 7x_3 = 8$$
$$9x_1 + 10x_2 + 11x_3 = 12$$

can be written as...

1. an augmented matrix

    $$
    \begin{bmatrix}
    1 & 2 & 3 & 4\\
    5 & 6 & 7 & 8\\
    9 & 10 & 11 & 12
    \end{bmatrix}
    $$

2. a linear combination
   $$\begin{bmatrix}1\\5\\9\end{bmatrix}x_1 + \begin{bmatrix}2\\6\\10\end{bmatrix}x_2 + \begin{bmatrix}3\\7\\1\end{bmatrix}x_2 = \begin{bmatrix}4\\8\\12\end{bmatrix}$$

3. a matrix equation
   $$Ax=b$$
   $$\begin{bmatrix}A\end{bmatrix}\vec{x}=\vec{b}$$
    $$
    \begin{bmatrix}
    1 & 2 & 3\\
    5 & 6 & 7\\
    9 & 10 & 11
    \end{bmatrix} x = \begin{bmatrix}4\\8\\12\end{bmatrix}
    $$
    where $A$ is a coefficient matrix

-   A row/column is linearly independent with respect to other rows/columns if it contains a pivot when matrix is in echelon form

-   If $A$ is a standard matrix for $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$,
    -   T maps $\mathbb{R}^n$ <ins>onto</ins> $\mathbb{R}^m$ means that for every output vector in $\mathbb{R}^m$ there exists an input vector in $\mathbb{R}^n$ that creates it
    -   T maps $\mathbb{R}^n$ <ins>onto</ins> $\mathbb{R}^m$ iff the columns of $A$ span $\mathbb{R}^m$
    -   T being one-to-one means that every input vector in $\mathbb{R}^n$ creates one and only one output vector in $\mathbb{R}^m$
    -   T is one-to-one iff columns of $A$ are linearly independent

### Algorithm to solve matrix inverse

-   given a coefficient matrix $A$
-

det is zero if columns linearly independent

<img src='assets/theorem1.png' width='300px'/>

<img src='assets/algorithm.png' width='300px'/>
