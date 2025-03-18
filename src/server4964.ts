
const express = require('express')
import {handler4964} from "./handler4964";
const app = express()
app.get('/4964', handler4964)
app.listen(3000, () => {})
        