
const express = require('express')
import {handler9447} from "./handler9447";
const app = express()
app.get('/9447', handler9447)
app.listen(3000, () => {})
        