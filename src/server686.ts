
const express = require('express')
import {handler686} from "./handler686";
const app = express()
app.get('/686', handler686)
app.listen(3000, () => {})
        