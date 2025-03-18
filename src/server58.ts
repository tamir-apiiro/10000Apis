
const express = require('express')
import {handler58} from "./handler58";
const app = express()
app.get('/58', handler58)
app.listen(3000, () => {})
        