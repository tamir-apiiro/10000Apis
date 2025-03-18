
const express = require('express')
import {handler9276} from "./handler9276";
const app = express()
app.get('/9276', handler9276)
app.listen(3000, () => {})
        