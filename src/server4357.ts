
const express = require('express')
import {handler4357} from "./handler4357";
const app = express()
app.get('/4357', handler4357)
app.listen(3000, () => {})
        