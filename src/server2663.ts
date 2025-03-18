
const express = require('express')
import {handler2663} from "./handler2663";
const app = express()
app.get('/2663', handler2663)
app.listen(3000, () => {})
        