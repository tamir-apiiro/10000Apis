
const express = require('express')
import {handler9111} from "./handler9111";
const app = express()
app.get('/9111', handler9111)
app.listen(3000, () => {})
        