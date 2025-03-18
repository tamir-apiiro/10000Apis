
const express = require('express')
import {handler4642} from "./handler4642";
const app = express()
app.get('/4642', handler4642)
app.listen(3000, () => {})
        