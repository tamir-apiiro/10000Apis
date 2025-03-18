
const express = require('express')
import {handler9100} from "./handler9100";
const app = express()
app.get('/9100', handler9100)
app.listen(3000, () => {})
        