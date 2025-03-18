
const express = require('express')
import {handler8619} from "./handler8619";
const app = express()
app.get('/8619', handler8619)
app.listen(3000, () => {})
        