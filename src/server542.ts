
const express = require('express')
import {handler542} from "./handler542";
const app = express()
app.get('/542', handler542)
app.listen(3000, () => {})
        