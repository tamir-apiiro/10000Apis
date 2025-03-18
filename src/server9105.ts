
const express = require('express')
import {handler9105} from "./handler9105";
const app = express()
app.get('/9105', handler9105)
app.listen(3000, () => {})
        