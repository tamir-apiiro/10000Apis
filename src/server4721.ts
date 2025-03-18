
const express = require('express')
import {handler4721} from "./handler4721";
const app = express()
app.get('/4721', handler4721)
app.listen(3000, () => {})
        