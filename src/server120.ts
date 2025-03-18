
const express = require('express')
import {handler120} from "./handler120";
const app = express()
app.get('/120', handler120)
app.listen(3000, () => {})
        