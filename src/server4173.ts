
const express = require('express')
import {handler4173} from "./handler4173";
const app = express()
app.get('/4173', handler4173)
app.listen(3000, () => {})
        