
const express = require('express')
import {handler9969} from "./handler9969";
const app = express()
app.get('/9969', handler9969)
app.listen(3000, () => {})
        