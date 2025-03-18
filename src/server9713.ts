
const express = require('express')
import {handler9713} from "./handler9713";
const app = express()
app.get('/9713', handler9713)
app.listen(3000, () => {})
        