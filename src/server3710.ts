
const express = require('express')
import {handler3710} from "./handler3710";
const app = express()
app.get('/3710', handler3710)
app.listen(3000, () => {})
        