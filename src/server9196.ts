
const express = require('express')
import {handler9196} from "./handler9196";
const app = express()
app.get('/9196', handler9196)
app.listen(3000, () => {})
        