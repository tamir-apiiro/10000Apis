
const express = require('express')
import {handler9260} from "./handler9260";
const app = express()
app.get('/9260', handler9260)
app.listen(3000, () => {})
        