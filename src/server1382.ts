
const express = require('express')
import {handler1382} from "./handler1382";
const app = express()
app.get('/1382', handler1382)
app.listen(3000, () => {})
        