
const express = require('express')
import {handler2706} from "./handler2706";
const app = express()
app.get('/2706', handler2706)
app.listen(3000, () => {})
        