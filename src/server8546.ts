
const express = require('express')
import {handler8546} from "./handler8546";
const app = express()
app.get('/8546', handler8546)
app.listen(3000, () => {})
        