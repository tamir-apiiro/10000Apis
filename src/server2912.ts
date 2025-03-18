
const express = require('express')
import {handler2912} from "./handler2912";
const app = express()
app.get('/2912', handler2912)
app.listen(3000, () => {})
        