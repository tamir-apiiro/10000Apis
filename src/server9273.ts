
const express = require('express')
import {handler9273} from "./handler9273";
const app = express()
app.get('/9273', handler9273)
app.listen(3000, () => {})
        