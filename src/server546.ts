
const express = require('express')
import {handler546} from "./handler546";
const app = express()
app.get('/546', handler546)
app.listen(3000, () => {})
        