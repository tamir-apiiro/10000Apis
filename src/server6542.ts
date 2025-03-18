
const express = require('express')
import {handler6542} from "./handler6542";
const app = express()
app.get('/6542', handler6542)
app.listen(3000, () => {})
        