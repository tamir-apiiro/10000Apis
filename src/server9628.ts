
const express = require('express')
import {handler9628} from "./handler9628";
const app = express()
app.get('/9628', handler9628)
app.listen(3000, () => {})
        