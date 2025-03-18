
const express = require('express')
import {handler829} from "./handler829";
const app = express()
app.get('/829', handler829)
app.listen(3000, () => {})
        