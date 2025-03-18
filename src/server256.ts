
const express = require('express')
import {handler256} from "./handler256";
const app = express()
app.get('/256', handler256)
app.listen(3000, () => {})
        