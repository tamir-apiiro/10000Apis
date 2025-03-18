
const express = require('express')
import {handler4594} from "./handler4594";
const app = express()
app.get('/4594', handler4594)
app.listen(3000, () => {})
        