
const express = require('express')
import {handler4462} from "./handler4462";
const app = express()
app.get('/4462', handler4462)
app.listen(3000, () => {})
        