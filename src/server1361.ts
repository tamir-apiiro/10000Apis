
const express = require('express')
import {handler1361} from "./handler1361";
const app = express()
app.get('/1361', handler1361)
app.listen(3000, () => {})
        