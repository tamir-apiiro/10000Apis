
const express = require('express')
import {handler265} from "./handler265";
const app = express()
app.get('/265', handler265)
app.listen(3000, () => {})
        