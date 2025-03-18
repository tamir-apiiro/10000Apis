
const express = require('express')
import {handler9038} from "./handler9038";
const app = express()
app.get('/9038', handler9038)
app.listen(3000, () => {})
        