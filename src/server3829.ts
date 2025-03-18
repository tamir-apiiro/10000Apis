
const express = require('express')
import {handler3829} from "./handler3829";
const app = express()
app.get('/3829', handler3829)
app.listen(3000, () => {})
        