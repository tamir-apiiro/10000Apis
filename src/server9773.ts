
const express = require('express')
import {handler9773} from "./handler9773";
const app = express()
app.get('/9773', handler9773)
app.listen(3000, () => {})
        