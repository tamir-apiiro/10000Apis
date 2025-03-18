
const express = require('express')
import {handler140} from "./handler140";
const app = express()
app.get('/140', handler140)
app.listen(3000, () => {})
        