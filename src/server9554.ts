
const express = require('express')
import {handler9554} from "./handler9554";
const app = express()
app.get('/9554', handler9554)
app.listen(3000, () => {})
        