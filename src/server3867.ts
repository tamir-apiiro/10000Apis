
const express = require('express')
import {handler3867} from "./handler3867";
const app = express()
app.get('/3867', handler3867)
app.listen(3000, () => {})
        