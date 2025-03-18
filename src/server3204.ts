
const express = require('express')
import {handler3204} from "./handler3204";
const app = express()
app.get('/3204', handler3204)
app.listen(3000, () => {})
        