
const express = require('express')
import {handler9432} from "./handler9432";
const app = express()
app.get('/9432', handler9432)
app.listen(3000, () => {})
        