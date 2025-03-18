
const express = require('express')
import {handler8031} from "./handler8031";
const app = express()
app.get('/8031', handler8031)
app.listen(3000, () => {})
        