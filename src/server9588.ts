
const express = require('express')
import {handler9588} from "./handler9588";
const app = express()
app.get('/9588', handler9588)
app.listen(3000, () => {})
        