
const express = require('express')
import {handler7630} from "./handler7630";
const app = express()
app.get('/7630', handler7630)
app.listen(3000, () => {})
        