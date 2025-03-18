
const express = require('express')
import {handler9091} from "./handler9091";
const app = express()
app.get('/9091', handler9091)
app.listen(3000, () => {})
        