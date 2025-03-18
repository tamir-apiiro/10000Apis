
const express = require('express')
import {handler9211} from "./handler9211";
const app = express()
app.get('/9211', handler9211)
app.listen(3000, () => {})
        