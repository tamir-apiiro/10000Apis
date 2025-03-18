
const express = require('express')
import {handler9020} from "./handler9020";
const app = express()
app.get('/9020', handler9020)
app.listen(3000, () => {})
        