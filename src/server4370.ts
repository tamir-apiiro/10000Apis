
const express = require('express')
import {handler4370} from "./handler4370";
const app = express()
app.get('/4370', handler4370)
app.listen(3000, () => {})
        