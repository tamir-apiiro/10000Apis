
const express = require('express')
import {handler1445} from "./handler1445";
const app = express()
app.get('/1445', handler1445)
app.listen(3000, () => {})
        