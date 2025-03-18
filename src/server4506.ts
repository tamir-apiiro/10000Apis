
const express = require('express')
import {handler4506} from "./handler4506";
const app = express()
app.get('/4506', handler4506)
app.listen(3000, () => {})
        