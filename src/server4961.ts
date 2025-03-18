
const express = require('express')
import {handler4961} from "./handler4961";
const app = express()
app.get('/4961', handler4961)
app.listen(3000, () => {})
        