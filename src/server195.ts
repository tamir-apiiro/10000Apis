
const express = require('express')
import {handler195} from "./handler195";
const app = express()
app.get('/195', handler195)
app.listen(3000, () => {})
        