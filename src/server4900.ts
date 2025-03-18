
const express = require('express')
import {handler4900} from "./handler4900";
const app = express()
app.get('/4900', handler4900)
app.listen(3000, () => {})
        