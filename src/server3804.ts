
const express = require('express')
import {handler3804} from "./handler3804";
const app = express()
app.get('/3804', handler3804)
app.listen(3000, () => {})
        