
const express = require('express')
import {handler619} from "./handler619";
const app = express()
app.get('/619', handler619)
app.listen(3000, () => {})
        