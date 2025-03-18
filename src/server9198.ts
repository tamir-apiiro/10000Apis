
const express = require('express')
import {handler9198} from "./handler9198";
const app = express()
app.get('/9198', handler9198)
app.listen(3000, () => {})
        