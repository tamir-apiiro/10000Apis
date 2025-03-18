
const express = require('express')
import {handler8059} from "./handler8059";
const app = express()
app.get('/8059', handler8059)
app.listen(3000, () => {})
        