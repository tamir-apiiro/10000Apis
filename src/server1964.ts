
const express = require('express')
import {handler1964} from "./handler1964";
const app = express()
app.get('/1964', handler1964)
app.listen(3000, () => {})
        