
const express = require('express')
import {handler885} from "./handler885";
const app = express()
app.get('/885', handler885)
app.listen(3000, () => {})
        