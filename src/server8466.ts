
const express = require('express')
import {handler8466} from "./handler8466";
const app = express()
app.get('/8466', handler8466)
app.listen(3000, () => {})
        