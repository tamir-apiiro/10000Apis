
const express = require('express')
import {handler273} from "./handler273";
const app = express()
app.get('/273', handler273)
app.listen(3000, () => {})
        