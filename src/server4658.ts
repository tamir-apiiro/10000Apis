
const express = require('express')
import {handler4658} from "./handler4658";
const app = express()
app.get('/4658', handler4658)
app.listen(3000, () => {})
        