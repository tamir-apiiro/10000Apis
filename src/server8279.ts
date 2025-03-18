
const express = require('express')
import {handler8279} from "./handler8279";
const app = express()
app.get('/8279', handler8279)
app.listen(3000, () => {})
        