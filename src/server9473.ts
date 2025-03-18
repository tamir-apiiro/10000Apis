
const express = require('express')
import {handler9473} from "./handler9473";
const app = express()
app.get('/9473', handler9473)
app.listen(3000, () => {})
        