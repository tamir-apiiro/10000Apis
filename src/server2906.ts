
const express = require('express')
import {handler2906} from "./handler2906";
const app = express()
app.get('/2906', handler2906)
app.listen(3000, () => {})
        