
const express = require('express')
import {handler3005} from "./handler3005";
const app = express()
app.get('/3005', handler3005)
app.listen(3000, () => {})
        