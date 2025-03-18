
const express = require('express')
import {handler9525} from "./handler9525";
const app = express()
app.get('/9525', handler9525)
app.listen(3000, () => {})
        