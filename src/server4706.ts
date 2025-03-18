
const express = require('express')
import {handler4706} from "./handler4706";
const app = express()
app.get('/4706', handler4706)
app.listen(3000, () => {})
        