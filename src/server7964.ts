
const express = require('express')
import {handler7964} from "./handler7964";
const app = express()
app.get('/7964', handler7964)
app.listen(3000, () => {})
        