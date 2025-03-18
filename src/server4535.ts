
const express = require('express')
import {handler4535} from "./handler4535";
const app = express()
app.get('/4535', handler4535)
app.listen(3000, () => {})
        