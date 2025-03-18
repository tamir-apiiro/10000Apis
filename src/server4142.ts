
const express = require('express')
import {handler4142} from "./handler4142";
const app = express()
app.get('/4142', handler4142)
app.listen(3000, () => {})
        