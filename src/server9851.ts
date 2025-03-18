
const express = require('express')
import {handler9851} from "./handler9851";
const app = express()
app.get('/9851', handler9851)
app.listen(3000, () => {})
        