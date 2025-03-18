
const express = require('express')
import {handler9012} from "./handler9012";
const app = express()
app.get('/9012', handler9012)
app.listen(3000, () => {})
        