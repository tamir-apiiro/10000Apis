
const express = require('express')
import {handler9452} from "./handler9452";
const app = express()
app.get('/9452', handler9452)
app.listen(3000, () => {})
        