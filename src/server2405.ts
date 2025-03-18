
const express = require('express')
import {handler2405} from "./handler2405";
const app = express()
app.get('/2405', handler2405)
app.listen(3000, () => {})
        