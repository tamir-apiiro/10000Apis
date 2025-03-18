
const express = require('express')
import {handler9553} from "./handler9553";
const app = express()
app.get('/9553', handler9553)
app.listen(3000, () => {})
        