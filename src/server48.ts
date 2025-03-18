
const express = require('express')
import {handler48} from "./handler48";
const app = express()
app.get('/48', handler48)
app.listen(3000, () => {})
        