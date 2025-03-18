
const express = require('express')
import {handler9559} from "./handler9559";
const app = express()
app.get('/9559', handler9559)
app.listen(3000, () => {})
        