
const express = require('express')
import {handler7713} from "./handler7713";
const app = express()
app.get('/7713', handler7713)
app.listen(3000, () => {})
        