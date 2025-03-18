
const express = require('express')
import {handler9011} from "./handler9011";
const app = express()
app.get('/9011', handler9011)
app.listen(3000, () => {})
        