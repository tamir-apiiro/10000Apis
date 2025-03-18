
const express = require('express')
import {handler2885} from "./handler2885";
const app = express()
app.get('/2885', handler2885)
app.listen(3000, () => {})
        