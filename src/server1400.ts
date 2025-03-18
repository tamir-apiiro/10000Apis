
const express = require('express')
import {handler1400} from "./handler1400";
const app = express()
app.get('/1400', handler1400)
app.listen(3000, () => {})
        