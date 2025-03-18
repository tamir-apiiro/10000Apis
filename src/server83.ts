
const express = require('express')
import {handler83} from "./handler83";
const app = express()
app.get('/83', handler83)
app.listen(3000, () => {})
        