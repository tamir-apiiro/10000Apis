
const express = require('express')
import {handler425} from "./handler425";
const app = express()
app.get('/425', handler425)
app.listen(3000, () => {})
        