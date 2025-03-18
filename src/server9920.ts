
const express = require('express')
import {handler9920} from "./handler9920";
const app = express()
app.get('/9920', handler9920)
app.listen(3000, () => {})
        