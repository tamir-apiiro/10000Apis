
const express = require('express')
import {handler8539} from "./handler8539";
const app = express()
app.get('/8539', handler8539)
app.listen(3000, () => {})
        