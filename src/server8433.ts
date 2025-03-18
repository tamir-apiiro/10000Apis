
const express = require('express')
import {handler8433} from "./handler8433";
const app = express()
app.get('/8433', handler8433)
app.listen(3000, () => {})
        