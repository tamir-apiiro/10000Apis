
const express = require('express')
import {handler3045} from "./handler3045";
const app = express()
app.get('/3045', handler3045)
app.listen(3000, () => {})
        