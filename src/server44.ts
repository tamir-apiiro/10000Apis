
const express = require('express')
import {handler44} from "./handler44";
const app = express()
app.get('/44', handler44)
app.listen(3000, () => {})
        