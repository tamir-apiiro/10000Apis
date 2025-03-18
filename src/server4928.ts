
const express = require('express')
import {handler4928} from "./handler4928";
const app = express()
app.get('/4928', handler4928)
app.listen(3000, () => {})
        