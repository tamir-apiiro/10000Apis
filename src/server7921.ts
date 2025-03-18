
const express = require('express')
import {handler7921} from "./handler7921";
const app = express()
app.get('/7921', handler7921)
app.listen(3000, () => {})
        