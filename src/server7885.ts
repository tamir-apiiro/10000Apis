
const express = require('express')
import {handler7885} from "./handler7885";
const app = express()
app.get('/7885', handler7885)
app.listen(3000, () => {})
        