
const express = require('express')
import {handler3563} from "./handler3563";
const app = express()
app.get('/3563', handler3563)
app.listen(3000, () => {})
        