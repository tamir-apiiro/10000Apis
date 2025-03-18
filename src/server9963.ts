
const express = require('express')
import {handler9963} from "./handler9963";
const app = express()
app.get('/9963', handler9963)
app.listen(3000, () => {})
        