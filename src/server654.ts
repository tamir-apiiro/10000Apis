
const express = require('express')
import {handler654} from "./handler654";
const app = express()
app.get('/654', handler654)
app.listen(3000, () => {})
        