
const express = require('express')
import {handler964} from "./handler964";
const app = express()
app.get('/964', handler964)
app.listen(3000, () => {})
        