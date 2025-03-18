
const express = require('express')
import {handler3419} from "./handler3419";
const app = express()
app.get('/3419', handler3419)
app.listen(3000, () => {})
        