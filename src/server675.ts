
const express = require('express')
import {handler675} from "./handler675";
const app = express()
app.get('/675', handler675)
app.listen(3000, () => {})
        