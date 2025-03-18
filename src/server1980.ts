
const express = require('express')
import {handler1980} from "./handler1980";
const app = express()
app.get('/1980', handler1980)
app.listen(3000, () => {})
        