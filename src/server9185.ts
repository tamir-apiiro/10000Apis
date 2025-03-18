
const express = require('express')
import {handler9185} from "./handler9185";
const app = express()
app.get('/9185', handler9185)
app.listen(3000, () => {})
        