
const express = require('express')
import {handler9141} from "./handler9141";
const app = express()
app.get('/9141', handler9141)
app.listen(3000, () => {})
        