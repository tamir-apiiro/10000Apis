
const express = require('express')
import {handler2829} from "./handler2829";
const app = express()
app.get('/2829', handler2829)
app.listen(3000, () => {})
        