
const express = require('express')
import {handler9291} from "./handler9291";
const app = express()
app.get('/9291', handler9291)
app.listen(3000, () => {})
        