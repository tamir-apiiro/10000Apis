
const express = require('express')
import {handler1527} from "./handler1527";
const app = express()
app.get('/1527', handler1527)
app.listen(3000, () => {})
        