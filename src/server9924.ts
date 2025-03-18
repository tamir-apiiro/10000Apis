
const express = require('express')
import {handler9924} from "./handler9924";
const app = express()
app.get('/9924', handler9924)
app.listen(3000, () => {})
        