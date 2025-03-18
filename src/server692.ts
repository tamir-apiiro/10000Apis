
const express = require('express')
import {handler692} from "./handler692";
const app = express()
app.get('/692', handler692)
app.listen(3000, () => {})
        