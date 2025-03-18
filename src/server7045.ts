
const express = require('express')
import {handler7045} from "./handler7045";
const app = express()
app.get('/7045', handler7045)
app.listen(3000, () => {})
        