
const express = require('express')
import {handler9740} from "./handler9740";
const app = express()
app.get('/9740', handler9740)
app.listen(3000, () => {})
        