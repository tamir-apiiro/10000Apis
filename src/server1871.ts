
const express = require('express')
import {handler1871} from "./handler1871";
const app = express()
app.get('/1871', handler1871)
app.listen(3000, () => {})
        