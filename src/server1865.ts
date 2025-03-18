
const express = require('express')
import {handler1865} from "./handler1865";
const app = express()
app.get('/1865', handler1865)
app.listen(3000, () => {})
        