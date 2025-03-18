
const express = require('express')
import {handler9626} from "./handler9626";
const app = express()
app.get('/9626', handler9626)
app.listen(3000, () => {})
        