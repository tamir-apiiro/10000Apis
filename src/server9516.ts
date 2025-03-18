
const express = require('express')
import {handler9516} from "./handler9516";
const app = express()
app.get('/9516', handler9516)
app.listen(3000, () => {})
        