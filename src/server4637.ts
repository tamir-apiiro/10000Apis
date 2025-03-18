
const express = require('express')
import {handler4637} from "./handler4637";
const app = express()
app.get('/4637', handler4637)
app.listen(3000, () => {})
        