
const express = require('express')
import {handler9621} from "./handler9621";
const app = express()
app.get('/9621', handler9621)
app.listen(3000, () => {})
        