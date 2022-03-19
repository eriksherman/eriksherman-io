```python
import sympy as sp
import numpy as np
import matplotlib.pyplot as plt
```

# plotting in sympy

```python
# plotting single function
x = sp.symbols('x', real=True)
sp.plot(x**2, (x,-10,10), title="x^2", show=True)
```

![png](/sympy_files/sympy_2_0.png)

    <sympy.plotting.plot.Plot at 0x7f7b58ad4130>

```python
# plotting multiple functions
p = sp.plot(x**2, (x,-10,10), legend=True, line_color="r", show=False)
p.extend(sp.plot(3*x**2,(x,-10,10), legend=True, line_color="b", show=False))
p.extend(sp.plot(1/3*x**2,(x,-10,10), legend=True, line_color="g", show=False))
p.show()
```

![png](/sympy_files/sympy_3_0.png)

## symbolic calculations in Python

### special display names for variables

```python
alpha, beta = sp.symbols('alpha beta')
rhat = sp.symbols('rhat')
```

```python
rhat
```

$\displaystyle \hat{r}$

```python
beta
```

$\displaystyle \beta$

```python
i, j, k = sp.symbols('i j k', integer=True, positive=True)
i.assumptions0
```

    {'integer': True,
     'infinite': False,
     'hermitian': True,
     'complex': True,
     'real': True,
     'extended_real': True,
     'irrational': False,
     'algebraic': True,
     'commutative': True,
     'transcendental': False,
     'rational': True,
     'imaginary': False,
     'noninteger': False,
     'finite': True,
     'positive': True,
     'extended_nonpositive': False,
     'extended_positive': True,
     'extended_nonzero': True,
     'extended_nonnegative': True,
     'nonzero': True,
     'nonnegative': True,
     'zero': False,
     'extended_negative': False,
     'negative': False,
     'nonpositive': False}

```python
# symbolic (undefined) functions
f = sp.Function('f')
h = sp.Function('h')
g = 3 * f(x) + 4 * h(3)
g

```

$\displaystyle 3 f{\left(x \right)} + 4 h{\left(3 \right)}$

### simplification

```python
y = alpha * x**3+3*x**3
y
```

$\displaystyle \alpha x^{3} + 3 x^{3}$

```python
sp.simplify(y)
```

$\displaystyle x^{3} \left(\alpha + 3\right)$

### evaluating symbolic expressions

```python
a = sp.sqrt(2)
a
```

$\displaystyle \sqrt{2}$

```python
sp.N(a)
```

$\displaystyle 1.4142135623731$

### plotting with sympy, numpy, & matplotlib

```python
# functions as expressions
f = sp.sin(x)
f
```

$\displaystyle \sin{\left(x \right)}$

```python
# evaluating a function (as an expression with subs)
res = f.subs(x,1)
sp.N(res)
```

$\displaystyle 0.841470984807897$

```python
# converting a sympy expression to a numpy function
fx = sp.lambdify(x,f,modules=['numpy'])
fx
```

    <function _lambdifygenerated(x)>

```python
# evaluating numpy function
fx(3.14)
```

$\displaystyle 0.00159265291648683$

```python
# evaluating numpy function with special values (from sympy)
res = float(sp.N(sp.pi))
fx(res)
```

$\displaystyle 1.22464679914735 \cdot 10^{-16}$

```python
# evenly spaced numbers over a specified interval
xVals = np.linspace(-10,10,100)
xVals.__len__()
```

$\displaystyle 100$

```python
plt.plot(xVals, fx(xVals))
plt.xlabel('x')
plt.ylabel('f(x)')
plt.title('f(x) = sin(x)')
```

    Text(0.5, 1.0, 'f(x) = sin(x)')

![png](/sympy_files/sympy_24_1.png)

## some great resources on using sympy

-   [Ahmad Bazi- SymPy (Symbolic Expressions on Python) in one video](https://www.youtube.com/watch?v=kx2GzBeGPco)
-   [Mr. P Solver- 1st Year Calculus, But in PYTHON](https://www.youtube.com/watch?v=-SdIZHPuW9o&t=381s)

`ipython nbconvert --to md <notebook>.ipynb`
