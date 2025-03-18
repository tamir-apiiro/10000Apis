
const express = require('express')
import {handler1515} from "./handler1515";
const app = express()
app.get('/1515', handler1515)
app.listen(3000, () => {})
        