
const express = require('express')
import {handler9404} from "./handler9404";
const app = express()
app.get('/9404', handler9404)
app.listen(3000, () => {})
        