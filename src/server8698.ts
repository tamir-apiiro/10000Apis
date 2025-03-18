
const express = require('express')
import {handler8698} from "./handler8698";
const app = express()
app.get('/8698', handler8698)
app.listen(3000, () => {})
        