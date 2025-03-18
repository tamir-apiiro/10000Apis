
const express = require('express')
import {handler9542} from "./handler9542";
const app = express()
app.get('/9542', handler9542)
app.listen(3000, () => {})
        