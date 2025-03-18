
const express = require('express')
import {handler7159} from "./handler7159";
const app = express()
app.get('/7159', handler7159)
app.listen(3000, () => {})
        