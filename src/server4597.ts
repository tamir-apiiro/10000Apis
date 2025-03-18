
const express = require('express')
import {handler4597} from "./handler4597";
const app = express()
app.get('/4597', handler4597)
app.listen(3000, () => {})
        