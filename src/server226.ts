
const express = require('express')
import {handler226} from "./handler226";
const app = express()
app.get('/226', handler226)
app.listen(3000, () => {})
        