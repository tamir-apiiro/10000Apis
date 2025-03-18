
const express = require('express')
import {handler670} from "./handler670";
const app = express()
app.get('/670', handler670)
app.listen(3000, () => {})
        