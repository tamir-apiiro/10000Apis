
const express = require('express')
import {handler9357} from "./handler9357";
const app = express()
app.get('/9357', handler9357)
app.listen(3000, () => {})
        