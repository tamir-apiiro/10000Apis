
const express = require('express')
import {handler7065} from "./handler7065";
const app = express()
app.get('/7065', handler7065)
app.listen(3000, () => {})
        