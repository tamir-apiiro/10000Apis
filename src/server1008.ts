
const express = require('express')
import {handler1008} from "./handler1008";
const app = express()
app.get('/1008', handler1008)
app.listen(3000, () => {})
        