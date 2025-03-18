
const express = require('express')
import {handler646} from "./handler646";
const app = express()
app.get('/646', handler646)
app.listen(3000, () => {})
        