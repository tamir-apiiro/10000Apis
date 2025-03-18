
const express = require('express')
import {handler7127} from "./handler7127";
const app = express()
app.get('/7127', handler7127)
app.listen(3000, () => {})
        