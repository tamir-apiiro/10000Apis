
const express = require('express')
import {handler9119} from "./handler9119";
const app = express()
app.get('/9119', handler9119)
app.listen(3000, () => {})
        