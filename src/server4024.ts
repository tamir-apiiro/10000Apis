
const express = require('express')
import {handler4024} from "./handler4024";
const app = express()
app.get('/4024', handler4024)
app.listen(3000, () => {})
        