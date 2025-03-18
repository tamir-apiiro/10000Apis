
const express = require('express')
import {handler114} from "./handler114";
const app = express()
app.get('/114', handler114)
app.listen(3000, () => {})
        