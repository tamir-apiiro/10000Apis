
const express = require('express')
import {handler9195} from "./handler9195";
const app = express()
app.get('/9195', handler9195)
app.listen(3000, () => {})
        