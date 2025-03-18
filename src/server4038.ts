
const express = require('express')
import {handler4038} from "./handler4038";
const app = express()
app.get('/4038', handler4038)
app.listen(3000, () => {})
        