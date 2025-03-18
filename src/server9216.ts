
const express = require('express')
import {handler9216} from "./handler9216";
const app = express()
app.get('/9216', handler9216)
app.listen(3000, () => {})
        