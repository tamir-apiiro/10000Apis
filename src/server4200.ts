
const express = require('express')
import {handler4200} from "./handler4200";
const app = express()
app.get('/4200', handler4200)
app.listen(3000, () => {})
        