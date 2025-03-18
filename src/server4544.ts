
const express = require('express')
import {handler4544} from "./handler4544";
const app = express()
app.get('/4544', handler4544)
app.listen(3000, () => {})
        