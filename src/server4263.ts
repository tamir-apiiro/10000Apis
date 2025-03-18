
const express = require('express')
import {handler4263} from "./handler4263";
const app = express()
app.get('/4263', handler4263)
app.listen(3000, () => {})
        