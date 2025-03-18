
const express = require('express')
import {handler9751} from "./handler9751";
const app = express()
app.get('/9751', handler9751)
app.listen(3000, () => {})
        