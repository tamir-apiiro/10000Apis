
const express = require('express')
import {handler7778} from "./handler7778";
const app = express()
app.get('/7778', handler7778)
app.listen(3000, () => {})
        