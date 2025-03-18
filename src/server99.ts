
const express = require('express')
import {handler99} from "./handler99";
const app = express()
app.get('/99', handler99)
app.listen(3000, () => {})
        