
const express = require('express')
import {handler841} from "./handler841";
const app = express()
app.get('/841', handler841)
app.listen(3000, () => {})
        