
const express = require('express')
import {handler43} from "./handler43";
const app = express()
app.get('/43', handler43)
app.listen(3000, () => {})
        