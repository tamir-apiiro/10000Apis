
const express = require('express')
import {handler8624} from "./handler8624";
const app = express()
app.get('/8624', handler8624)
app.listen(3000, () => {})
        