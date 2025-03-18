
const express = require('express')
import {handler2045} from "./handler2045";
const app = express()
app.get('/2045', handler2045)
app.listen(3000, () => {})
        