
const express = require('express')
import {handler630} from "./handler630";
const app = express()
app.get('/630', handler630)
app.listen(3000, () => {})
        