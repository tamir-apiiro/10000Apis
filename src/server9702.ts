
const express = require('express')
import {handler9702} from "./handler9702";
const app = express()
app.get('/9702', handler9702)
app.listen(3000, () => {})
        