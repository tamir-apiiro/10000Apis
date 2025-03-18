
const express = require('express')
import {handler13} from "./handler13";
const app = express()
app.get('/13', handler13)
app.listen(3000, () => {})
        