
const express = require('express')
import {handler9219} from "./handler9219";
const app = express()
app.get('/9219', handler9219)
app.listen(3000, () => {})
        