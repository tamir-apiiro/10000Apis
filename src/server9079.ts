
const express = require('express')
import {handler9079} from "./handler9079";
const app = express()
app.get('/9079', handler9079)
app.listen(3000, () => {})
        