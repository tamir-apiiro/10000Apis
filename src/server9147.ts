
const express = require('express')
import {handler9147} from "./handler9147";
const app = express()
app.get('/9147', handler9147)
app.listen(3000, () => {})
        