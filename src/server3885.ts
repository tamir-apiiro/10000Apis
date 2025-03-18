
const express = require('express')
import {handler3885} from "./handler3885";
const app = express()
app.get('/3885', handler3885)
app.listen(3000, () => {})
        