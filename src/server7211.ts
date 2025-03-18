
const express = require('express')
import {handler7211} from "./handler7211";
const app = express()
app.get('/7211', handler7211)
app.listen(3000, () => {})
        