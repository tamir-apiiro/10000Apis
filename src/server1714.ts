
const express = require('express')
import {handler1714} from "./handler1714";
const app = express()
app.get('/1714', handler1714)
app.listen(3000, () => {})
        