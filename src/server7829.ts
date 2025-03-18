
const express = require('express')
import {handler7829} from "./handler7829";
const app = express()
app.get('/7829', handler7829)
app.listen(3000, () => {})
        